import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layouts/Layout.tsx'
import { Dashboard, HomePage, Login, Register, Reset } from './Components/index.ts'
import Account from './Components/Layouts/Account.tsx'
//the reducers, import provider and store
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'
import Protect from './Utils/Protect.tsx'
import RedirectAuthenticated from './Utils/RedirectAuthenticated.tsx'
//to create a layout in react, import the browser router first
const router = createBrowserRouter([
  {
    element: <RedirectAuthenticated><Layout /></RedirectAuthenticated>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/reset',
        element: <Reset />
      }
    ]
  }, {
    element: <Protect><Account /></Protect>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
