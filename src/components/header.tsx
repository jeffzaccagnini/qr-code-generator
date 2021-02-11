import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className='app__header'>
      <Navbar color='dark' dark expand='md'>
        <Container>
          <NavbarBrand href="/">
            {t('site_title')}
          </NavbarBrand>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
