import styled from "styled-components";

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 25vh 1rem;
    justify-items: center;
    align-content: center;
    justify-content: center;
    align-items: center;
    
    font-family: 'Fira Code';
    background-image: linear-gradient(to bottom, rgba(0,0,0), rgba(117, 19, 93, 0.73)), url("/assets/bg1.jpg");
    background-size: cover;


    .form-input {
        width: 60%;

        .errors {
            text-align: center;
            display: flex;
            flex-direction: column;
        }
    }

    label {
        font-size: 1rem;
        text-align: left;
        font-weight: 550;
        font-family: "Ropa Sans", sans-serif;
    }

    input {
        width: 100%;
        height: 2rem;
        border-radius: 5px;
        border: 0 solid #ccc;
        padding: 0.5rem;
        color: #160C28;
        font-size: 1rem;
        font-family: 'Fira Code';
    }

    button {
        font-family: 'Fira Code';
        width: 30%;
        height: 2.5rem;
        color: #fff;
        border-radius: 5px;
        background-color: #160C28;
        border: 0 solid #ccc;
        cursor: pointer;
    }

    .qr-code {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        align-self: center;
        align-items: center;
        justify-content: center;
    }
`