import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import thumb from '@/imgs/thumb.png';
import spare from '@/imgs/trending/spare.jpg';
import covenant from '@/imgs/trending/The-covenant.jpg';
import hello from '@/imgs/trending/hello.jpg';
import fourth from '@/imgs/Fourth.jpg';
import a_Curse from '@/imgs/A-curse.jpg';
import house from '@/imgs/house.jpg';
import { useEffect } from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    const autoplay = () => {
      setTimeout(() =>{
      const nextBtn = document.querySelector(".carousel-control-next");
      if(nextBtn)
      {
        nextBtn.click();
      }
     
      
      }, 6000);
      }
      autoplay();
      // const checkWidth = () => {
      //   const body = document.querySelector('body');
      //   const row = document.querySelector('.popular .row').lastChild;
      //   if(body.offsetWidth > 1228) {
      //     row.classList.remove('justify-content-center')
      //   }
      //   window.addEventListener('resize', () => {
      //     if(body.offsetWidth > 1228){
      //       row.classList.remove('justify-content-center')
      //     } 
      //     else {
      //       row.classList.add('justify-content-center')
      //     }
      //   })
      // }
      // checkWidth();
  }
  , [])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <div className='row'>
        <div className='col-lg-8 d-none d-lg-block'>
        <div className='welcome-section d-flex justify-content-between align-items-center+'>
          <h4>Welcome back, Abdelhakim Baraka</h4>
          <Image src={thumb} width={300} height={150} />
        </div>
        <div className='popular'>
          <h1>Popular</h1>
        <div className='row text-center'>
        <div className='col-md-4 d-flex justify-content-center'>
          <Card 
            image={fourth}
            title='Fourth Wing'
            author='Rebecca Yarros
            '
            price='12.58'
          />
          </div>
          <div className='col-md-4 d-flex justify-content-center'>
          <Card 
            image={a_Curse}
            title='A Curse for True Love'
            author='Stephanie Garber'
            price='12.58'
          />
          </div>
          <div className='col-md-4 d-flex justify-content-center'>
          <Card 
            image={covenant}
            title='The Covenant of Water'
            author='Abraham Verghese'
            price='12.58'
          />  
          </div>
          <div className='col-md-4 d-flex justify-content-center'>
          <Card 
            image={house}
            title='House of Sky and Breath'
            author='Sarah J. Maas'
            price='12.58'
          />  
          </div>
        </div>
        <Link href='#' className='d-flex justify-content-end'>See more</Link>
        </div>
        </div>
        <div className='col-lg-8 d-block d-lg-none'>
        <div className='welcome-section d-flex justify-content-between align-items-center+'>
          <h4>Welcome back, Abdelhakim Baraka</h4>
          <Image src={thumb} width={300} height={150} />
        </div>
        </div>
        <div className='col-lg-4 mb-3 mb-md-0 mb-lg-0 mb-xl-0'>
          
            <div className='slider-section'>
              <h2>Trending</h2>
            <div id="carouselExampleCaptions" className="carousel slide" style={{width:250, height: "72%", margin:"0 auto", position:'initial'}} data-bs-ride="carousel">
              
              <div className="carousel-inner mt-5">
                <div className="carousel-item active">
                  <Image className='d-block' src={spare} width={250} height={400} />
                  <div className="carousel-caption d-none d-md-block" style={{position:"initial"}}>
                  <h5>Spare</h5>
                  <p>By Prince Harry</p>
                </div>
                </div>
                <div className="carousel-item">
                <Image className='d-block' src={hello} width={250} height={400} />
                <div className="carousel-caption d-none d-md-block" style={{position:"initial"}}>
                  <h5>Hello Beautiful</h5>
                  <p>By Ann Napolitano</p>
                </div>
                </div>
                <div className="carousel-item">
                <Image className='d-block' src={covenant} width={250} height={400} />
                <div className="carousel-caption d-none d-md-block" style={{position:"initial"}}>
                  <h5>The Covenant of Water</h5>
                  <p>By Abraham Verghese</p>
                </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
              
            </div>
            <div className='slider-seemore'>
            <Link href='#' >See more</Link>
            </div>
            
            </div>
    
        </div>
        <div className='col-lg-8 d-block d-lg-none'>
      
        <div className='popular'>
          <h1>Popular</h1>
        <div className='row text-center'>
        <div className='col-md-4 d-flex justify-content-center'>
          <Card 
            image={fourth}
            title='Fourth Wing'
            author='Rebecca Yarros
            '
            price='12.58'
          />
          </div>
          <div className='col-md-4 d-flex justify-content-center'>
          <Card 
            image={a_Curse}
            title='A Curse for True Love'
            author='Stephanie Garber'
            price='12.58'
          />
          </div>
          <div className='col-md-4 d-flex justify-content-center'>
          <Card 
            image={covenant}
            title='The Covenant of Water'
            author='Abraham Verghese'
            price='12.58'
          />  
          </div>
          <div className='col-md-4 d-flex justify-content-center'>
          <Card 
            image={house}
            title='House of Sky and Breath'
            author='Sarah J. Maas'
            price='12.58'
          />  
          </div>
        </div>
        <Link href='#' className='d-flex justify-content-end'>See more</Link>
        </div>
        </div>
      </div>
      </Layout>
    </>
  )
}
