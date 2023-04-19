import styled from 'styled-components';

type Props = {
  imgOne: string;
  imgTwo: string;
  imgThree: string;
  imgFour: string;
  imgFive: string;
  imgSix: string;
  imgSeven: string;
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background-color: #FFF; */
  background-image: url(${props => props.imgOne}), 
                    url(${props => props.imgTwo}), 
                    url(${props => props.imgThree}), 
                    url(${props => props.imgFour}), 
                    url(${props => props.imgFive}), 
                    url(${props => props.imgSix}), 
                    url(${props => props.imgSeven});
  background-position: 100px 100px,
                       -300px 150px,
                       1000px 200px,
                       900px -300px,
                       -300px -400px,
                       200px -200px,
                       500px 100px;
  /* background-repeat: no-repeat; */
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 15rem;
  color: #FFF;
  text-shadow: 0 0 20px rgb(0 0 0 / 25%);
  transition: all ease .3s;

  @media (max-width: 1220px) {
    font-size: 10rem;
  }

  @media (max-width: 800px) {
    font-size: 5rem;
  }

  @media (max-width: 400px) {
    font-size: 3rem;
  }
`;

export const SubTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 10rem;
  text-transform: capitalize;
  color: #FFF;
  text-shadow: 0 0 20px rgb(0 0 0 / 25%);
  transform: translateY(-50px);
  transition: all ease .3s;

  @media (max-width: 1220px) {
    font-size: 8rem;
    transform: translateY(0);
  }

  @media (max-width: 800px) {
    font-size: 4rem;
  }

  @media (max-width: 400px) {
    font-size: 3rem;
  }
`;

export const MaskPermissions = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFF;

  h1 {
    font-size: 3rem;
    font-family: 'Montserrat';
    text-align: center;
  }
  
  h2 {
    font-size: 2.5rem;
    font-family: 'Montserrat';
    max-width: 1440px;
    text-align: center;
    margin-bottom: 20px;
  }

  button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    border: 0;
    padding: 10px 35px;
    border-radius: 3px;
    background-color: #55C655;
    color: #FFF;
    text-transform: uppercase;
    cursor: pointer;
  }
`;