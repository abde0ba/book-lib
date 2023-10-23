import Image from "next/image";
import React from "react";
import Logo from '@/imgs/logo.png';
import Link from "next/link";

const Login = () => {
    return (
        <>
        <div className="return-btn">
        <Link href='/'>
        <i class="fa-light fa-arrow-left-long"></i>
        </Link>
        </div>
       <div className="wrapper login">
    <div className="container_form">
        <div className="credential_form signin">
            <div className="form_content">
                
                <div className="title">
                    <Image src={Logo} alt="Logo" width={100} height={100} />
                    <span>Login with your details to continue</span>
                </div>
                {/* <?php
                // require_once("includes/signup.inc.php");
                    if(isset($_GET["error"])){
                        if($_GET["error"] == "emptyInput"){
                            echo '<div className="exeption">
                            <span>Fill all fields</span>
                        </div>';
                        }
                        if($_GET["error"] == "wrongLogin"){
                            echo '<div className="exeption">
                            <span>Email or password not correct</span>
                        </div>';
                        }
                        if($_GET["error"] == "invalidEmail"){
                            echo '<div className="exeption">
                            <span>Invalid email</span>
                        </div>';
                        }
                    }
                    // header('location: index.php');
                ?> */}
                <form action="../includes/signin.inc.php" method="POST">
                    {/* <div className="fields column">
                        <div className="field input_field">
                            <label for="">Email</label>
                            <input type="text" name="Fname" placeholder="First Name" value="" autocomplete="true" />
                        </div>
                        <div className="field input_field">
                            <label for="">Last Name</label>
                            <input type="text" name="Lname" placeholder="Last Name" value="" autocomplete="true" />
                        </div>
                    </div> */}
                    <div className="fields">
                        <div className="field input_field">
                            <label for="">Email</label>
                            <input type="text" name="email" placeholder="Email Address" autocomplete="true" />
                        </div>
                    </div>
                    <div className="fields">
                        <div className="field input_field">
                            <label for="">Password</label>
                            <input type="text" name="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form_link">
                        <a href="">Forgot password?</a>
                    </div>
                    {/* <div className="field button_field">
                        <input type="submit"  name="submit" value="signup" />
                        <button type="submit" name="submit">Sign up</button>
                    </div> */}
                    <div className="fields column">
                        {/* <div className="field input_field">
                            <button type="reset">Reset</button>
                        </div> */}
                        <div className="field input_field w-100">
                            <button type="submit" name="login" className="Nextbtn">Login</button>
                        </div>
                    </div>
                </form>
                <div className="form_link">
                    <span>You don't have an account </span><a href="/signup">Sign up</a>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Login