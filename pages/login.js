import Image from "next/image";
import React from "react";
import Logo from '@/imgs/logo.svg';

const Login = () => {
    return (
        <>
       <div class="wrapper">
    <div class="container_form">
        <div class="credential_form signin">
            <div class="form_content">
                
                <div class="title">
                    <Image src={Logo} alt="Logo" width={100} height={100} />
                    <span>Login with your details to continue</span>
                </div>
                {/* <?php
                // require_once("includes/signup.inc.php");
                    if(isset($_GET["error"])){
                        if($_GET["error"] == "emptyInput"){
                            echo '<div class="exeption">
                            <span>Fill all fields</span>
                        </div>';
                        }
                        if($_GET["error"] == "wrongLogin"){
                            echo '<div class="exeption">
                            <span>Email or password not correct</span>
                        </div>';
                        }
                        if($_GET["error"] == "invalidEmail"){
                            echo '<div class="exeption">
                            <span>Invalid email</span>
                        </div>';
                        }
                    }
                    // header('location: index.php');
                ?> */}
                <form action="../includes/signin.inc.php" method="POST">
                    {/* <div class="fields column">
                        <div class="field input_field">
                            <label for="">Email</label>
                            <input type="text" name="Fname" placeholder="First Name" value="" autocomplete="true" />
                        </div>
                        <div class="field input_field">
                            <label for="">Last Name</label>
                            <input type="text" name="Lname" placeholder="Last Name" value="" autocomplete="true" />
                        </div>
                    </div> */}
                    <div class="fields">
                        <div class="field input_field">
                            <label for="">Email</label>
                            <input type="text" name="email" placeholder="Email Address" value="" autocomplete="true" />
                        </div>
                    </div>
                    <div class="fields">
                        <div class="field input_field">
                            <label for="">Password</label>
                            <input type="text" name="password" placeholder="Password" value="" />
                        </div>
                    </div>
                    <div class="form_link">
                        <a href="">Forgot password?</a>
                    </div>
                    {/* <div class="field button_field">
                        <input type="submit"  name="submit" value="signup" />
                        <button type="submit" name="submit">Sign up</button>
                    </div> */}
                    <div class="fields column">
                        {/* <div class="field input_field">
                            <button type="reset">Reset</button>
                        </div> */}
                        <div class="field input_field w-100">
                            <button type="submit" name="login" class="Nextbtn">Login</button>
                        </div>
                    </div>
                </form>
                <div class="form_link">
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