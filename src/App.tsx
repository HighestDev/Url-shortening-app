import React from 'react';
import { ThemeProvider } from 'styled-components';
import LandingPage from './Page/LandingPage';
import colors from './Styles/Colors.styled';



const App=()=>{
  return(
    <ThemeProvider theme={colors}>
     <LandingPage/>
    </ThemeProvider>
  )
}


export default App