import { Outlet } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'
import ChatAssistant from '../components/ChatAssistant'

function DefaultLayout() {
  return (
    <>
      <MyNavbar />
      <main>
        <Outlet />
      </main>
      <MyFooter />
      <ChatAssistant />
    </>
  )
}

export default DefaultLayout