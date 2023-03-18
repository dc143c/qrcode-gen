import * as QRCode from 'qrcode'

export const generateQRCode = async (name: string): Promise<string>  => {
    return await QRCode.toDataURL(`https://localhost:3000/${name}`)
}