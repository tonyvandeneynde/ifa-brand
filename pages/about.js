import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Head from 'next/head';


export default function work() {
  return (
    <div className='about'>
    <Head>
      <title>Ifa Brand</title>
      <link href="https://fonts.googleapis.com/css?family=Titillium+Web:100,200,400" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Navbar />
    <div className='about-text'>
      <p>
        <h3>
          IFA BRAND - BOUDOIR published by Circa Press<br/>
          First hardcover photo book - 128pp - 70 colour illustrations
        </h3>
      </p>
      <p>
        <h3 className='no-margin'>PLEDGE NOW on kickstarter!</h3>
        <a className='about-link' href="https://www.kickstarter.com/projects/circa/ifa-brand-boudoir" target="_blank">https://www.kickstarter.com/projects/circa/ifa-brand-boudoir</a>
      </p>
      <p>
      <strong>Ifa Brand</strong> graduated from the Royal Academy of Fine Arts, Antwerp, as a master silversmith & jewellery designer. She began modelling as a hobby, but it soon assumed a bigger role in her life. In 2013, she was featured on the cover of Dutch Playboy magazine. She describes this period in her life:<br />
      &emsp;&emsp;‘I modelled for a few years but never felt satisfied. The dissatisfaction stemmed from not being able to represent my true identity. I fell between styles: alternative but not alternative enough; fetish but not in a typical sense. I also disliked photographers telling me how I should look, pose, behave; telling me no to red lips, no to precious lingerie and all the things I loved.’<br />
      &emsp;&emsp;In 2017, she decided to go her own way. She saw photography as an opportunity to be her own creative director, and to explore her own vision of sensuality, eroticism and fetish. Hers is a quest for personal empowerment through the art of self-portraiture.<br />
      &emsp;&emsp;She bought a Polaroid camera to experiment with and loved it immediately: ‘It gave me a whole new experience – the sound of the camera taking the image, the smell of the chemicals, which are so strong and specific to Polaroid, and the way the images roll out of the camera, unedited and pure. For me, technique is secondary to feeling. I think in colours, shadows and contrast. Polaroid is unstable, always unpredictable. It challenges you each time.’<br />
      </p>
      <div className='about-publications'>
        <div className='about-subtitle'>Publications:</div>
        <ul>
          <li><a className='about-link' href="https://photodarium.de/" target="_blank">Photodarium Private 2019</a></li>
          <li><a className='about-link' href="https://photodarium.de/" target="_blank">Photodarium Private 2020</a></li>
          <li><a className='about-link' href="https://photodarium.de/" target="_blank">Photodarium Private 2021</a></li>
          <li><a className='about-link' href="https://phonographer.nl/" target="_blank">Phonographer Magazine – Issue 03/19</a></li>
          <li><a className='about-link' href="https://www.magcloud.com/browse/magazine/162779" target="_blank">Sinical Magazine – Issue December 2019</a></li>
          <li><a className='about-link' href="http://instantphotographers.com/ifa-brand/" target="_blank">Instant Photographers – Guest photographer - JAN 2020</a></li>
          <li><a className='about-link' href="https://www.lebateau.org/" target="_blank">Le Bateau Magazine – Issue 17</a></li>
          <li><a className='about-link' href="https://polysememagazine.bigcartel.com/" target="_blank">Polysème Magazine – Issue 4 – Séxualités</a></li>
          <li>Imagenation Paris Press - Instant Art Paris 2020 - photobook</li>
          <li>Vlam Magazine NL - Edition 1/2021</li>
        </ul>
      </div>
      <div className='about-exhibitions'>
        <div className='about-subtitle'>Past exhibitions</div>
        <ul>
          <li><a className='about-link' href="https://www.facebook.com/events/395320904392149/" target="_blank">2019: Capturing the Female Mind Through Art – Antwerp, BE.</a></li>
          <li><a className='about-link' href="https://www.iso600.it/" target="_blank">2019: ISO600 – Bologna, IT.</a></li>
          <li><a className='about-link' href="https://www.thedarksidecollective.com/" target="_blank">2020: Darkside Collective – Femme Fatale – Online expo</a></li>
        </ul>
      </div>
    </div>
    <Footer />

    <style jsx>{`
        .about{
          margin:0;
          padding:10px 50px;
          padding-bottom: 100px;
        }
        .about-text{
          max-width:900px;
          margin-left: 10%;
          margin-right: 10%;
          font-weight: 100;
          font-size: 20px;
        }
        .about-publications, .about-exhibitions{
          margin-top: 100px;
        }
        .about-subtitle{
          font-weight:400;
        }
        .about-link{
          text-decoration: none;
          color: black;
        }
        .no-margin{
          margin: 0;
        }
        @media (max-width: 950px) {
          .about {
            padding: 10px 0;
            padding-bottom: 100px;
          }
        }
      `}</style>
              <style jsx global>{`
            * {
                font-family: 'Titillium Web', sans-serif;
                }
        `}</style>
    </div>
  )
}
