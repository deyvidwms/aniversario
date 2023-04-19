import { useState, useEffect } from 'react';

import { GlobalStyle } from "./styles/Global";

import { Container, Title, MaskPermissions, SubTitle } from './styles';

import imgOne from './assets/images/blue-bubble.svg';
import imgTwo from './assets/images/green-bubble.svg';
import imgThree from './assets/images/guava-bubble.svg';
import imgFour from './assets/images/pink-bubble.svg';
import imgFive from './assets/images/pool-blue-bubble.svg';
import imgSix from './assets/images/purpure-bubble.svg';
import imgSeven from './assets/images/yellow-bubble.svg';

import BoasVindas from './assets/videos/boas-vindas.mp4';
import Parabens from './assets/videos/parabens.mp4';
import VideoPlayer from 'components/VideoPlayer';

function App() {
  const [showMask, setShowMask] = useState<boolean>(true);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const [showVideo, setShowVideo] = useState<string>(); 
  const [aniversariante, setAniversariante] = useState<string>('');

  useEffect( () => {
    const urlParams = new URLSearchParams(window.location.search);
    setAniversariante(urlParams.get('nome') || 'Jovem');
    console.log(aniversariante)

    const min = 1;
    const max = 100;
    const rand = Math.ceil( min + Math.random() * (max - min) );
    setShowVideo( rand % 2 === 0 ? BoasVindas : Parabens );
  }, []);


  const handleAgree = () => {
    setShowMask(false);
    // verifica se o navegador suporta a API Web Audio
    if (typeof AudioContext !== 'undefined') {
      setIsAutoPlay(true);
    } else {
      console.log('Seu navegador não suporta a API Web Audio');
    }
  }

  return (
    <>
      <GlobalStyle />

      <Container 
        imgOne={imgOne} 
        imgTwo={imgTwo} 
        imgThree={imgThree} 
        imgFour={imgFour} 
        imgFive={imgFive} 
        imgSix={imgSix} 
        imgSeven={imgSeven}
      >
        <Title>Parabéns</Title>
        { aniversariante.length > 0 && <SubTitle>{aniversariante}</SubTitle> }
      </Container>

      { isAutoPlay && <VideoPlayer  video={showVideo || Parabens} /> }

      <MaskPermissions style={{display: showMask ? 'flex' : 'none'}}>
        <h1>Atenção!</h1>
        <h2>Antes de continuar precisamos que você permita acesso aos autofalantes do seu dispositivo.</h2>
        <button onClick={handleAgree}>Permitir</button>
      </MaskPermissions>

    </>
  );
}


export default App;