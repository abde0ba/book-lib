import Image from "next/image";
import Link from "next/link";
import React from "react";
import {BsFillArrowRightCircleFill} from 'react-icons/bs';

const Card = (props) => {
    return(
        <Link href='/fourth-wing'>
        <div className='cards'>
            <div className='card-image d-flex justify-content-center'>
              <Image src={props.image} height={200} width={120} alt={props.title} />
            </div>
            <div className='card-text'>
                <h5>{props.title}</h5>
                <small>By {props.author}</small>
                <div className="d-flex justify-content-between">
                <h3>${props.price}</h3>
                {/* <Link href='#'>
                    <BsFillArrowRightCircleFill fontSize={25} color="#406bde"/>
                </Link> */}
                </div>
            </div>
          </div>
          </Link>
    )
}

export default Card;