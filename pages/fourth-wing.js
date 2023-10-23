import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useState } from "react";
import fourth from '@/imgs/Fourth.jpg';
import Link from "next/link";

const Fourth = () => {
    const [liked, setLiked] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleLike = () => {
        setLiked(!liked);
    }

    const plus = (e) => {
        e.preventDefault();
        setQuantity(quantity + 1);
    }

    const minus = (e) => {
        e.preventDefault();
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    return (
        <Layout>
            <div className="product">
                <div className="product-container container">
                    <div className="row">
                        <div className="col-md-7 col-lg-5 d-flex justify-content-center">
                            <div className="product-img">
                            <Image src={fourth} />
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-7 product-text ">
                            <div>
                            <div className="d-flex justify-content-start">
                                <h1>Fourth Wing</h1>
                            </div>
                            <div>
                                <small>by Rebecca Yarros</small>
                            </div>
                            <div>
                                <h3>$12.58</h3>
                            </div>
                            </div>
                            <button className="wishlist" onClick={handleLike}>{liked ? <i class="fa-solid fa-heart liked"></i> : <i class="fa-light fa-heart"></i>}</button>
                            <div className='btns'>
                            <div class="quantity">
                                <a href="#" class="quantity__minus" onClick={minus}><span>-</span></a>
                                <input name="quantity" type="text" class="quantity__input" value={quantity} readOnly />
                                <a href="#" class="quantity__plus" onClick={plus}><span>+</span></a>
                            </div>
                            
                            <div className="BuyNow">
                            <Link href='#' >Add To Cart</Link>
                            </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="product-summary container">
                        <h2>Summary</h2>
                        <p className="container">
                        Synopsis. Set in Basgiath War College, the novel follows twenty-year-old Violet Sorrengail in her first year in Rider Quadrant.
                        She must bond with a dragon and train to be a warrior on the front lines of her kingdom's ongoing war.
                        </p>
                </div>
                <div className="product-summary container">
                    <h2>About The Author</h2>
                    <p className="container">
                    Rebecca is a #1 New York Times, USA Today, Sunday Times, and Wall Street Journal bestselling author of over fifteen novels, including FOURTH WING, and is always ready to bring on the emotions. She's also the recipient of the Colorado Romance Writer’s Award of Excellence in New Adult for Eyes Turned Skyward from her Flight and Glory series. She loves military heroes and has been blissfully married to hers for twenty-one years. She’s the mother of six children and lives in Colorado with her family, their stubborn English bulldog, feisty chinchillas, and Maine Coon cat who rules them all.
                    Having fostered then adopted their youngest daughter,
                    Rebecca is passionate about helping children in the foster system through her nonprofit.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Fourth;