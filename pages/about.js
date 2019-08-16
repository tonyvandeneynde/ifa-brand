import React from 'react'
import Navbar from '../components/Navbar';
import Head from 'next/head';


export default function work() {
  return (
    <div className='about'>
    <Head>
      <title>Ifa Brand</title>
      <link href="https://fonts.googleapis.com/css?family=Titillium+Web:100" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Navbar />
    <div className='about-text'>
      <p>Eroticism.</p>
      <p>Sometimes Bold. Other times subtle.</p>
      <p>The underlining driving force in the work of Ifa Brand whilst exploring her exhibitionism. The viewer-
      voyeur in atmospheric tales with hints of fetishism engraved in polaroid worlds. </p>
      <br />
      <p>My interest in photography is an extension of my modelling career. The desire to create and control
      my own image started to appeal more to me than just being in front of the camera acting out
      someone else’s concept. Since late 2017 I have been shooting solo and arranging everything from
      location to make-up, styling, modelling to the photography itself. Starring in my own film.</p>
      <div className='about-publications'>
        <div>Publications:</div>
        <ul>
          <li><a href="https://photodarium.de/" target="_blank">Photodarium Private 2019</a></li>
          <li><a href="https://photodarium.de/" target="_blank">Photodarium Private 2020</a></li>
          <li><a href="https://wasemag.com/" target="_blank">Wasemag.com</a></li>
        </ul>
      </div>
    </div>

    <style jsx>{`
        .about{
          margin:0;
          padding:10px 50px;
        }
        .about-text{
          max-width:900px;
          margin-left: 10%;
          margin-right: 10%;
        }
        .about-publications{
          margin-top: 100px;
        }
        a{
          text-decoration: none;
          color: black;
        }
        @media (max-width: 950px) {
          .about {
            padding: 10px 0;
          }
        }
      `}</style>
              <style jsx global>{`
            * {
                font-family: 'Titillium Web', sans-serif;
                font-weight: 100;
                font-size: 20px;
                }
        `}</style>
    </div>
  )
}
