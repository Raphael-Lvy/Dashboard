import styled from 'styled-components';
import BG from './Assets/DashboardBG.png';
import DashBoard from './Components/Dashboard/DashBoard';

function App() {
  return (
    <Background >
      <DashBoard />
    </Background>
  );
}

export default App;

const Background = styled.div`
  
      top:0;
      height:100vh; // fix for mobile browser address bar appearing disappearing
      width:100vw;
      left:0;
      right:0;
      z-index:-2; // needed to keep in the background
      background: url(${BG}) no-repeat center center fixed; 
      -webkit-background-size: contain;
      -moz-background-size: contain;
      -o-background-size: contain;
      background-size: contain;
      display:flex;
      justify-content:center;
      align-items:center;

`