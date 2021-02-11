import React from 'react';

interface QRCodeProps {
    altText: string;
    src?: string;
}

const QRCodeImage: React.FC<QRCodeProps> = props => {
    const { altText, src } = props;

    return <img style={{ maxWidth: '100%' }} src={src} alt={altText} />;
}

export default QRCodeImage;