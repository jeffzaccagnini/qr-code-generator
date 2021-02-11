import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import createPersistedState from 'use-persisted-state';
import { API_URL, defaultQRCodeConfig, QR_CODE_CONFIG_LS_ID } from './../../constants';
import {
    Alert,
    Button,
    ButtonToolbar,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
} from 'reactstrap';
import QRCodeImage from './qrcode';
import QRCodeConfigForm from './config-form';
import usePrevious from '../../hooks/use-previous';

export interface QRCodeConfig {
    data: string;
    format: string;
    size: string;
}

const useQRConfigState = createPersistedState(QR_CODE_CONFIG_LS_ID);

const QRCode: React.FC = () => {
    const { t } = useTranslation();
    const [qrCodeConfig, setQrCodeConfig] = useQRConfigState<QRCodeConfig>(defaultQRCodeConfig);
    const prevQrCodeConfig = usePrevious(qrCodeConfig);
    const generateQrCodeDisabled = qrCodeConfig === prevQrCodeConfig;

    const requestData = {
        size: `${qrCodeConfig.size}x${qrCodeConfig.size}`,
        data: encodeURIComponent(qrCodeConfig.data),
        format: qrCodeConfig.format,
    };

    const fetchQrData = async () => {
        const requestParams = new URLSearchParams(requestData).toString();
        return fetch(`${API_URL}?${requestParams}`)
            .then(res => res.blob())
            .then(blob => URL.createObjectURL(blob));
    }

    const { isLoading, error, data, refetch } = useQuery('qrCode', fetchQrData);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        setQrCodeConfig({ ...qrCodeConfig, [target.name]: target.value });
    }

    const renderQRCodeLoader = () => <div className='skeleton-loader' style={{ width: `${qrCodeConfig.size}px`, height: `${qrCodeConfig.size}px` }} />;

    if (error) {
        return <Alert color='danger'>{t('statuses.qrcode_error', { error })}</Alert>
    }

    if (data || isLoading) {
        return (<>
            <Row className='mb-3'>
                <Col>
                    <h2>{t('headings.qrcode')}</h2>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col>
                    <ButtonToolbar>
                        <Button
                            color='primary'
                            className='mr-3'
                            onClick={() => refetch()}
                            disabled={generateQrCodeDisabled || isLoading}
                        >
                            {t('controls.generate_qrcode')}
                        </Button>
                    </ButtonToolbar>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <QRCodeConfigForm
                        qrCodeConfig={qrCodeConfig}
                        handleInputChange={handleInputChange}
                        resetConfig={() => setQrCodeConfig(defaultQRCodeConfig)}
                    />
                </Col>
                <Col sm={6}>
                    <Card>
                        <CardHeader className='pb-1'>
                            <h4>{t('headings.your_qrcode')}</h4>
                        </CardHeader>
                        <CardBody className='d-flex flex-column align-items-center'>
                            {isLoading && renderQRCodeLoader()}
                            {data && (<>
                                <QRCodeImage src={data} altText={t('qrcode')} />
                                <Button
                                    className='mt-3'
                                    color='link'
                                    download
                                    href={data}
                                    size='sm'
                                >
                                    {t('controls.download_qrcode')}
                                </Button>
                            </>)}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>);
    }

    return <></>;
}

export default QRCode;