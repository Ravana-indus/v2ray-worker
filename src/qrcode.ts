// @ts-ignore - qrcode module not installed yet, reserved for future use
import QRCode from 'qrcode'

const generateQR = async (conf: string) => {
  return await QRCode.toDataURL(conf)
}
