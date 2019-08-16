import React from 'react'
import Navbar from '../components/Navbar';
import Head from 'next/head';


export default function work() {
  return (
    <div>
    <Head>
        <title>Ifa Brand</title>
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:100,200,400" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Navbar />
    shop
    <style jsx>{`
        div{
            margin:0;
            padding:10px 50px;
        }
        @media (max-width: 950px) {
          div {
            padding: 10px 0;
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
