import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './components/Layout/router.tsx'
import { ChakraProvider } from "@chakra-ui/react";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  </StrictMode>,
)
