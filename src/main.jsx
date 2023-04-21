import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import { router } from './router/RouterApp'
import { GlobalContext } from './context/GlobalContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext>
      <RouterProvider router={router}/>
    </GlobalContext>
  </React.StrictMode>,
)
