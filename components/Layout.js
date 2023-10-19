import Link from "next/link";
import React, { useEffect } from "react";
import {AiOutlineHome, AiOutlineShoppingCart} from 'react-icons/ai';
import {RiCompassDiscoverLine} from 'react-icons/ri';
import {BsBookmarkCheck} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {BiSearchAlt, BiUser} from 'react-icons/bi';
import Logo from '@/imgs/logo.svg'
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
                <div className="search-section">
                    <input placeholder="Search for your books" />
                    <button>
                        <BiSearchAlt color="#949494" fontSize={23}/>
                    </button>
                </div>
                <div className="profile-icon d-flex align-items-center justify-content-around" style={{width:'10%'}}>
                    <div className="checkout-icon">
                        <Link href='#'>
                        {/* <AiOutlineShoppingCart color="#949494"  fontSize={30}/> */}
                        <i className="fa-light fa-cart-shopping fa-xl"></i>
                        </Link>
                    </div>
                    <i className="fa-light fa-circle-user fa-2xl"></i>
                    {/* <div className="profile-avatar">
                        <BiUser fontSize={35} />
                    </div> */}
                </div>
            </div>
        </div>
        <div className="row" style={{minHeight:'100vh'}}>
            <div className="col-lg-2">
            {/* <nav className="sidebar-nav">
                    <div className="d-flex justify-content-between" style={{flexDirection:'column'}}>
                    <div className="logo">
                        <Link  href='/'>
                        <h1>Logo</h1>
                        </Link>
                    </div>
            <ul>
                <li><Link href='#' className="d-flex"><AiOutlineHome fontSize={25}/><p>Home</p></Link></li>
                <li><Link href='#' className="d-flex"><RiCompassDiscoverLine fontSize={25}/><p>Discover</p></Link></li>
                <li><Link href='#' className="d-flex"><BsBookmarkCheck fontSize={25} /><p>Wishlist</p></Link></li>
                <li><Link href='#' className="d-flex"><FiSettings fontSize={25}/><p>Settings</p></Link></li>
            </ul>
               
            </div>
            <div className="d-flex align-items-end login-section" style={{margin:"0 auto"}}>
                <ul>
                <Link href='#' className="login-btn">
                <li>
                    Login
                </li>
                </Link>
                <Link href='#' className="signup-btn">
                <li>
                    Sign up
                </li>
                </Link>
                
                </ul>
            </div>
             </nav> */}
             <nav className="sidebar">
            <header>
                <div className="image-text">
                    <span className="image w-100">
                        <Image src={Logo} alt="Logo" width={50} height={50} />
                       
                    </span>

                    <div className="text logo-text">
                        <span className="name"></span>
                        {/* <span className="profession">Logo</span> */}
                    </div>
                </div>

              
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <li className="nav-link">
                            <a href="#" >
                                <i className="fa-light fa-house icon" />
                                <span className="text nav-text">Home</span>
                            </a>
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
                    {/* <li className="">
                            <a href="../logout.php">
                                <i className="fa-light fa-right-from-bracket icon"></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                    </li> */}
                    <li className="login-btn">
                        <Link href='/login'>
                            <i className="fa-light fa-right-to-bracket icon" />
                            <span className="text nav-text">Login</span>
                        </Link>
                    </li>
                    <li className="signup-btn">
                        <Link href='#'>
                            <i className="fa-light fa-user-plus icon" />
                            <span className="text nav-text">Sign Up</span>
                        </Link>
                    </li>

                    {/* <li className="mode">
                        <div className="sun-moon">
                        <i className="fa-light fa-moon icon moon"></i>
                            <i className="fa-light fa-sun-bright icon sun"></i>
                        </div>
                        <span className="mode-text text">Dark mode</span>

                        <div className="toggle-switch">
                            <span className="switch"></span>
                        </div>
                    </li> */}
                    
                </div>
            </div>
        </nav>
            </div>
            <div className="col-lg-10 content">
                <div className="container-fluid">
                <main style={{marginTop:'6rem'}}>
                    {children}
                </main>
                </div>
            </div>
        </div>
      
        </>
    )
}

export default Layout;