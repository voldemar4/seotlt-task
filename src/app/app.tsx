import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";

import {router} from "./router.tsx";
import { StorageProvider } from '../shared/lib/storage'

import './styles/global.css'
import './styles/reset.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <StorageProvider>
          <RouterProvider router={router} />
      </StorageProvider>
  </StrictMode>,
)
