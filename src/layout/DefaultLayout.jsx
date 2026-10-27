import { Outlet } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'

function DefaultLayout() {
  return (
    <>
      <MyNavbar />
      <main>
        <Outlet />
      </main>
      <MyFooter />
    </>
  )
}

export default DefaultLayout