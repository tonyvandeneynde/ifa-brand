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
      <p>Eroticism.</p>
      <p>Sometimes Bold. Other times subtle.</p>
      <p>The underlining driving force in the work of Ifa Brand whilst exploring her exhibitionism. The viewer-
      voyeur in atmospheric tales with hints of fetishism engraved in polaroid worlds. </p>
      <br/>
      <p>Since late 2017 I have been shooting self portraits working exclusivly with polaroid.
It grew out of my frustrations with modelling where I was not able to represent my true identity. The
desire to create and control my own image started to appeal more to me than just being in front of
the camera acting out someone else’s concept. It no longer gave me satisfaction.
The deep desire to create my own narrative gave me the empowerment to start a new journey.
The imperfections, atmopshere and challenges I find in the Polaroid medium. It is ideal to create my
work which is a combination of old cheesecake glamour and art. One does not exclude the other.
They both originate from deep within.</p>
      <div className='about-publications'>
        <div className='about-subtitle'>Publications:</div>
        <ul>
          <li><a className='about-link' href="https://photodarium.de/" target="_blank">Photodarium Private 2019</a></li>
          <li><a className='about-link' href="http://www.seltmannundsoehne.de/en/buecher/ansehen/346/" target="_blank">Photodarium Private 2020</a></li>
          <li><a className='about-link' href="https://wasemag.com/" target="_blank">We Are Something Else magazine</a></li>
          <li><a className='about-link' href="https://www.lebateau.org/" target="_blank">Le Bateau Magazine – Issue 17</a></li>
        </ul>
      </div>
      <div className='about-exhibitions'>
        <div className='about-subtitle'>Upcoming exhibitions</div>
        <ul>
          <li><a className='about-link' href="https://www.facebook.com/events/395320904392149/" target="_blank">Capturing the Female Mind Through Art – Antwerp, BE.</a></li>
          <li><a className='about-link' href="https://www.iso600.it/" target="_blank">ISO600 – Bologna, IT.</a></li>
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
