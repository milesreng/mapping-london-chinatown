import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col w-full justify-between'>
      <Navbar />
      <div className='min-h-[70vh] p-4 font-header my-12'>
        <Outlet />
      </div>
      <div className='w-full flex flex-row justify-between text-sm px-4 py-2 bg-stone-800'>
        <span>
          <b className='pr-2'>AMES 335</b>Chinatowns: A Cultural History
        </span>
        <span>
          Miles Eng, Kaitlyn Yan, Alan, Hanrui
        </span>
      </div>
    </div>
  )
}

export default Layout