import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom';
import router from './routes/index';
import BasketProvider from './context/BasketContext';
import AuthProvider from './context/AuthContext';
import ModalProvider from './context/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
      <AuthProvider>
        <ModalProvider>
          <BasketProvider>
            <RouterProvider router={router}/>
          </BasketProvider>
        </ModalProvider>
      </AuthProvider>
    </ChakraProvider>

);

