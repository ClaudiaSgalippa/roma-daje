import { Outlet } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar'

function DefaultLayout() {
  return (
    <>
      <MyNavbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout