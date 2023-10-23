import Layout from "@/components/Layout";
import React from "react";

const Checkout = () => {
    return(
        <Layout>
            <div className="checkout">
                <div className="checkout-container container">
                <h1>Checkout</h1>
                <div style={{height:'75vh'}} className="d-flex flex-column justify-content-center align-items-center">
                        <div style={{margin:"1rem 0"}}>
                        <i className="fa-light fa-cart-shopping fa-xl" style={{fontSize:100}}></i>
                        </div>
                        <div style={{margin:"1rem 0"}}>
                        <h3>Your Cart Is Empty</h3>
                        </div>
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default Checkout