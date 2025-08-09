import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'

const App = () => {

  const [token, setToken] = useState('');
  return (
    <div className='bg-gray-50 min-h-screen'>
      {
        token === '' ?
          <Login /> :
          <>
            <Navbar />
            <hr className='border-gray-300' />
            <div className='flex w-full '>
              <Sidebar />
              <div className='w-[70%] mx-auto ml-[max(5v,25px)] my-8 text-black text-base'>
                <Routes>
                  <Route path='/add' element={<Add />} />
                  <Route path='/list' element={<List />} />
                  <Route path='/orders' element={<Orders />} />
                </Routes>
              </div>
            </div>
          </>
      }

    </div>
  )
}

export default App
