import Link from "next/link";
import React from "react";
import {AiOutlineHome, AiOutlineShoppingCart} from 'react-icons/ai';
import {RiCompassDiscoverLine} from 'react-icons/ri';
import {BsBookmarkCheck} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {BiSearchAlt, BiUser} from 'react-icons/bi';
import Logo from '@/imgs/logo.svg'
import Image from "next/image";

const Layout = ({children}) => {
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
                <div className="profile-icon d-flex align-items-center">
                    <div className="checkout-icon">
                        <Link href='#'>
                        <AiOutlineShoppingCart color="#949494"  fontSize={30}/>
                        </Link>
                    </div>
                    <i class="fa-light fa-user fa-2xl"></i>
                    {/* <div className="profile-avatar">
                        <BiUser fontSize={35} />
                    </div> */}
                </div>
            </div>
        </div>
        <div className="row" style={{minHeight:'100vh'}}>
            <div className="col-2">
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
             <nav class="sidebar">
            <header>
                <div class="image-text">
                    <span class="image w-100">
                        <Image src={Logo} alt="Logo" width={50} height={50} />
                       
                    </span>

                    <div class="text logo-text">
                        <span class="name"></span>
                        {/* <span class="profession">Logo</span> */}
                    </div>
                </div>

              
            </header>

            <div class="menu-bar">
                <div class="menu">
                    <ul class="menu-links">
                        <li class="nav-link">
                            <a href="#" >
                                <i className="fa-light fa-house icon" />
                                <span class="text nav-text">Home</span>
                            </a>
                        </li>

                        <li class="nav-link">
                            <a href="#" >
                                <i className="fa-light fa-compass icon" />
                                <span class="text nav-text">Discover</span>
                            </a>
                        </li>

                        <li class="nav-link">
                            <a href="#" >
                                <i className="fa-light fa-bookmark icon" />
                                <span class="text nav-text">Wishlist</span>
                            </a>
                        </li>
                        <li class="nav-link">
                            <a href="#" >
                                <i className="fa-light fa-gear icon" />
                                <span class="text nav-text">Settings</span>
                            </a>
                        </li>

                        
                    </ul>
                </div>

                <div class="bottom-content">
                    {/* <li class="">
                            <a href="../logout.php">
                                <i class="fa-light fa-right-from-bracket icon"></i>
                                <span class="text nav-text">Logout</span>
                            </a>
                    </li> */}
                    <li className="login-btn">
                        <Link href='#'>
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

                    {/* <li class="mode">
                        <div class="sun-moon">
                        <i class="fa-light fa-moon icon moon"></i>
                            <i class="fa-light fa-sun-bright icon sun"></i>
                        </div>
                        <span class="mode-text text">Dark mode</span>

                        <div class="toggle-switch">
                            <span class="switch"></span>
                        </div>
                    </li> */}
                    
                </div>
            </div>
        </nav>
            </div>
            <div className="col">
                <div className="container">
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