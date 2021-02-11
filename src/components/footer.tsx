import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer position-sticky-bottom'>
            <Container className='text-center'>
                <small className='text-muted'>{t('footer_text', { currentYear })}</small>
            </Container>
        </footer>
    );
}

export default Footer;
