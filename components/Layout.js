import Link from "next/link";
import React from "react";
import {AiOutlineHome, AiOutlineShoppingCart} from 'react-icons/ai';
import {RiCompassDiscoverLine} from 'react-icons/ri';
import {BsBookmarkCheck} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {BiSearchAlt, BiUser} from 'react-icons/bi';

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
                    <div className="profile-avatar">
                        <BiUser fontSize={35} />
                    </div>
                </div>
            </div>
        </div>
        <div className="row" style={{minHeight:'100vh'}}>
            <div className="col-2">
            <nav className="sidebar-nav">
                <div>
                    <div className="logo">
                        <Link  href='/'>
                        <h1>Logo</h1>
                        </Link>
                    </div>
            <ul>
                <li><Link href='#'><AiOutlineHome fontSize={25}/> Home</Link></li>
                <li><Link href='#'><RiCompassDiscoverLine fontSize={25}/> Discover</Link></li>
                <li><Link href='#'><BsBookmarkCheck fontSize={25} /> Wishlist</Link></li>
                <li><Link href='#'><FiSettings fontSize={25}/> Settings</Link></li>
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
             </nav>
            </div>
            <div className="col">
                <div className="container">
                <main style={{marginTop:'7rem'}}>
                    {children}
                </main>
                </div>
            </div>
        </div>
      
        </>
    )
}

export default Layout;