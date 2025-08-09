import React from 'react'

const Login = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl mb-4 font-bold'>Admin Panel</h1>

                <form action="">
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-black mb-2'>Email Address</p>
                        <input className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='Enter Your Email' />
                    </div>

                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-black mb-2'>Password</p>
                        <input className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter Your Password' />
                    </div>

                    <button type='submit'>Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login
