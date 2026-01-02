import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './components/AppName';
import CurrentTime from './components/CurrentTime';
import Description from './components/Description';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return(
    <center>
      <AppName/>
      <Description/>
      <CurrentTime/>
    </center>
  );
}

export default App
