import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './routes/Home.jsx';
import Error from './routes/Error.jsx';
import Login from './routes/Login.jsx';

import Sobre from './routes/Sobre.jsx';
import Contato from './routes/Contato.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import Produtos from './routes/Produtos.jsx';

const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/', element: <Home />},
      {path: '/Produtos',element:<Produtos/>},
      {path: '/Login', element: <Login />},
      {path: '/Sobre', element: <Sobre/>},
      {path: '/Contato', element: <Contato/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
