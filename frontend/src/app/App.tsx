import './styles/index.scss'

import { Outlet } from 'react-router-dom'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'

import { withProviders } from './providers'

export const App = withProviders(() => (
  <div className='container d-flex flex-column appWr'>
    <Header />
    <Outlet />
    <Footer />
  </div>
))
