import * as QRCode from 'qrcode'

export const generateQRCode = async (name: string): Promise<string>  => {
    const BASE_URL = process.env.APP_BASE_URL || "localhost"
    const APP_PORT = process.env.APP_BASE_PORT || "3000"
    return await QRCode.toDataURL(`https://${BASE_URL}:${APP_PORT}/user/${name}`)
}