const generateOTP = (length = 6, withAlpha = false) => {
    let charset = '123456789'

    if (withAlpha) {
        charset += 'ABCDEFGHIJKLMNPQRSTUVWXYZ'
    }

    let otp = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length)
        otp += charset[randomIndex]
    }
    return otp
}

export default generateOTP
