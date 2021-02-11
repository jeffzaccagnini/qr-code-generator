import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
} from 'reactstrap';
import { MAX_QR_CODE_SIZE, MIN_QR_CODE_SIZE, qrCodeFormats } from '../../constants';
import { QRCodeConfig } from './index';

interface QRCodeConfigFormProps {
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    qrCodeConfig: QRCodeConfig;
    resetConfig: () => void;
}

const QRCodeConfigForm: React.FC<QRCodeConfigFormProps> = props => {
    const { t } = useTranslation();
    const { qrCodeConfig, handleInputChange, resetConfig } = props;

    return (
        <Card className='mb-3'>
            <CardHeader className='pb-1'>
                <h4>{t('headings.qrcode_form')}</h4>
            </CardHeader>
            <CardBody>
                <FormGroup>
                    <Label className='font-weight-bold' for='format'>
                        {t('labels.format')}:
                    </Label>
                    <Input
                        name='format'
                        onChange={handleInputChange}
                        type='select'
                        value={qrCodeConfig.format}
                    >
                        {qrCodeFormats.map(format => <option key={format}>{format}</option>)}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label className='font-weight-bold' for='size'>
                        {t('labels.size')}:
                    </Label>
                    <InputGroup>
                    <Input
                        max={MAX_QR_CODE_SIZE}
                        min={MIN_QR_CODE_SIZE}
                        name='size'
                        onChange={handleInputChange}
                        type='number'
                        value={qrCodeConfig.size}
                    />
                    <InputGroupAddon addonType='append'>
                        <InputGroupText>x</InputGroupText>
                    </InputGroupAddon>
                    <Input
                        className='border-left-0'
                        max={MAX_QR_CODE_SIZE}
                        min={MIN_QR_CODE_SIZE}
                        name='size'
                        onChange={handleInputChange}
                        type='number'
                        value={qrCodeConfig.size}
                    />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label className='font-weight-bold' for='data'>
                        {t('labels.data')}:
                    </Label>
                    <Input
                        name='data'
                        onChange={handleInputChange}
                        type='textarea'
                        value={qrCodeConfig.data}
                    />
                </FormGroup>
                <Button color='secondary' onClick={resetConfig}>
                    {t('controls.default_qrcode_config')}
                </Button>
            </CardBody>
        </Card>
    );
}

export default QRCodeConfigForm;