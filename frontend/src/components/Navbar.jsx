import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { GoSearch } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";
import { BiMenuAltRight } from "react-icons/bi";
import { MdArrowRight } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {

    const [Visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    }

    return (
        <div className='flex items-center justify-between py-5 font-medium '>
            <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

                <NavLink to='/' className='felx felx-col items-center gap-1' >
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collection' className='felx felx-col items-center gap-1' >
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/about' className='felx felx-col items-center gap-1' >
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='felx felx-col items-center gap-1' >
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

            </ul>

            <div className='flex items-center gap-4 sm:gap-6'>

                {/* Search icon */}
                <GoSearch onClick={() => setShowSearch(true)} className="w-6 h-6 cursor-pointer" />
                {/* <GoSearch className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer" /> */}

                {/* Whishlist */}
                <Link to='/whishlist'>
                    <GoHeart className='w-6 h-6 cursor-pointer' />
                </Link>

                {/* Catr */}
                <Link to='/cart' className='relative'>
                    <HiOutlineShoppingBag className="w-6 h-6 cursor-pointer" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>{getCartCount()}</p>
                </Link>

                <div className='group relative'>
                    {/* profile */}
                    {/* <Link onClick={() => token ? null : navigate('/login')} ><SlUser className="w-6 h-6 cursor-pointer" /></Link> */}
                    <SlUser onClick={() => token ? null : navigate('/login')} className="w-6 h-6 cursor-pointer" />
                    {/* dropdown menu */}
                    {
                        token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                <p className='cursor-pointer hover:text-black'>My Profile</p>
                                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                                <p onClick={logout} className='cursor-pointer hover:text-black'>LogOut</p>
                            </div>
                        </div>
                    }
                </div>

                {/* <img src={assets.menu_icon} className='w-5 mx-4 cursor-pointer sm:hidden' alt="" /> */}
                <BiMenuAltRight onClick={() => setVisible(true)} className='w-6 h-6 cursor-pointer sm:hidden' />
            </div>
            {/* side bar menu for small screen */}

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${Visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center p-4'>
                        <MdArrowRight className='cursor-pointer align-middle w-8 h-8 rotate-180' />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
