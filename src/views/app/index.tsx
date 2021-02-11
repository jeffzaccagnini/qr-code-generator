import React from 'react';
import Header from '../../components/header';
import { Container } from 'reactstrap';
import QRCodeCreator from '../qrcode';
import Footer from '../../components/footer';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <Container className='app__container my-4'>
        <QRCodeCreator />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
