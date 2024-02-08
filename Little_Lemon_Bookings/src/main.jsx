import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Custom Styles------------------------//
const colors = {
  primary: {
    1: '#495E57',
    2: '#F4CE14'
  },

  secondary: {
    1: '#EE9972',
    2: '#FBDABB'
  },

  highlight: {
    1: '#EDEFEE',
    2: '#333333'
  }
}

const fonts = {
  body: 'Poppins',
  heading: 'Markazi Text'
}

const customStyles = extendTheme({colors, fonts});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={customStyles}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
