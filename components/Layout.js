import Link from "next/link";
import React, { useEffect } from "react";
import {AiOutlineHome, AiOutlineShoppingCart} from 'react-icons/ai';
import {RiCompassDiscoverLine} from 'react-icons/ri';
import {BsBookmarkCheck} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {BiSearchAlt, BiUser} from 'react-icons/bi';
import Logo from '@/imgs/logo.png'
import Image from "next/image";

const Layout = ({children}) => {
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if(!token)
    //     {
    //         location.replace('/login')
    //     }
    // },
    // [])
    return(
        <>
        <div className="top-nav d-flex justify-content-end">
            <div className="top-nav-container d-flex justify-content-between">
                 <span className="image d-none top-nav-logo">
                    <Image src={Logo} alt="Logo" width={50} height={50} />
                       
                 </span>
                <div className="search-section">
                    <input placeholder="Search for your books" />
                    <button>
                        <BiSearchAlt color="#949494" fontSize={23}/>
                    </button>
                </div>
                <div className="profile-icon d-flex align-items-center justify-content-around" >
                    <div className="checkout-icon">
                        <Link href='/checkout'>
                        <i className="fa-light fa-cart-shopping fa-xl"></i>
                        </Link>
                    </div>
                    <Link href='/login'>
                    <i className="fa-light fa-circle-user fa-2xl" style={{marginRight:'1rem'}}></i>
                    </Link>
                </div>
            </div>
        </div>
        <div className="row" style={{minHeight:'100vh'}}>
            <div className="col-lg-2 col-md-2">
             <nav className="sidebar">
            <header>
                <div className="image-text">
                    <span className="image w-100">
                        <Image src={Logo} alt="Logo" width={50} height={50} />
                       
                    </span>

                    <div className="text logo-text">
                        <span className="name"></span>
                    </div>
                </div>

              
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <li className="nav-link">
                            <Link href="/">
                                <i className="fa-light fa-house icon" />
                                <span className="text nav-text">Home</span>
                            </Link>
                        </li>

                        <li className="nav-link">
                            <a href="#" >
                                <i className="fa-light fa-compass icon" />
                                <span className="text nav-text">Discover</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="#" >
                                <i className="fa-light fa-bookmark icon" />
                                <span className="text nav-text">Wishlist</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#" >
                                <i className="fa-light fa-gear icon" />
                                <span className="text nav-text">Settings</span>
                            </a>
                        </li>

                        
                    </ul>
                </div>

                <div className="bottom-content">
                    <li className="login-btn">
                        <Link href='/login'>
                            <i className="fa-light fa-right-to-bracket icon" />
                            <span className="text nav-text">Login</span>
                        </Link>
                    </li>
                    <li className="signup-btn">
                        <Link href='/signup'>
                            <i className="fa-light fa-user-plus icon" />
                            <span className="text nav-text">Sign Up</span>
                        </Link>
                    </li>
                    
                </div>
            </div>
            
        </nav>
        <div className="mobile-navbar">
                    <ul className="menu-links">
                        <li className="nav-link">
                            <Link href="/">
                                <i className="fa-light fa-house icon" />
                                <span className="text nav-text">Home</span>
                            </Link>
                        </li>

                        <li className="nav-link">
                            <a href="#" >
                                <i className="fa-light fa-compass icon" />
                                <span className="text nav-text">Discover</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="#" >
                                <i className="fa-light fa-bookmark icon" />
                                <span className="text nav-text">Wishlist</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#" >
                                <i className="fa-light fa-gear icon" />
                                <span className="text nav-text">Settings</span>
                            </a>
                        </li>

                        
                    </ul>
            </div>
            </div>
            <div className="col-lg-10 col-md-10 content">
                <div className="container-fluid">
                <main
                style={{marginTop:'6rem'}}
                >
                    {children}
                </main>
                </div>
            </div>
        </div>
      
        </>
    )
}

export default Layout;