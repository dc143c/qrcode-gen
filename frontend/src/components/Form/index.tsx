import { useEffect, useState } from 'react';
import * as S from './styles';
import { generateQRCode } from '../../utils/helper/index';
import { registerUser } from '@/utils/api';

export const Form = () => {
  const [errors, setErrors] = useState([] as any);
  const [Phasis, setPhasis] = useState<number>(0);
  const [QRData, setQRData] = useState('');
  const [name, setName] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [gitHub, setGitHub] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if(!name || !linkedIn || !gitHub) {
      setError('All fields are required.');
      return;
    }

    registerUser({ name, linkedIn, gitHub }).then(async (res) => {
      const QRCode = await generateQRCode('Vênus');
      setQRData(QRCode);
  
      setPhasis(1);
    })
    .catch((err) => {         
      if(err.response.status === 400) {
        setErrors(err.response.data.message);
        return;                                                       
      }
      if(err.response.status === 403) {
        setError(err.response.data.message);
        return;                                                       
      }
      setError(err.message)
      return;
    });
  }

  const goBack = () => {
    setName('');
    setLinkedIn('');
    setGitHub('');
    setPhasis(0);
  }

  if(Phasis === 0) {
    return (
      <S.FormWrapper>
        <div className='form-input'>
          <label>Name*</label>
          <input name='name' placeholder='ex: Vênus' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='form-input'>
          <label>LinkedIn*</label>
          <input name='linkedIn' placeholder='https://linkedin.com/in/jho-terra' value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
        </div>
        <div className='form-input'>
          <label>GitHub*</label>
          <input name='gitHub' placeholder='https://github.com/dc143c' value={gitHub} onChange={(e) => setGitHub(e.target.value)} />
        </div>

        <div className='form-input'>
          {!!errors && errors.map((errors: any, index: number) => <label className='errors' key={errors}>{index + 1}.{errors}</label>)}
          {!!error && <label className='errors'>{error}</label>}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </S.FormWrapper>
    )
  }
  return (
      <S.FormWrapper>
        <div className='qr-code'>
          <label>Your QRCode is ready to be used.</label>
          <label>Your information can be seen as a full webpage with the link provided below.</label>
          <img src={`${QRData}`} />
          
          <button onClick={goBack}>Back</button>
        </div>
      </S.FormWrapper>
  )
}