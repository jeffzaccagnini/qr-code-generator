const API_URL = 'https://api.qrserver.com/v1/create-qr-code/';

const defaultQRCodeConfig = {
    data: 'Iterative Scopes',
    format: 'svg',
    size: '150',
};

const qrCodeFormats = ['svg', 'png', 'gif', 'jpeg', 'jpg'];

const QR_CODE_CONFIG_LS_ID = 'qrCodeConfig';

const MAX_QR_CODE_SIZE = 1000;

const MIN_QR_CODE_SIZE = 10;

export {
    API_URL,
    MAX_QR_CODE_SIZE,
    MIN_QR_CODE_SIZE,
    QR_CODE_CONFIG_LS_ID,
    defaultQRCodeConfig,
    qrCodeFormats,
};
