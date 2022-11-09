import { ChakraProvider, theme } from '@chakra-ui/react';
import './App.css';
import MensProductPage from './Components/Men/MensProductPage';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
       <MensProductPage />
       </ChakraProvider>
    </div>
  );
}

export default App;
