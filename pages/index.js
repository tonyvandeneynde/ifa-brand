import Head from 'next/head';
import Link from 'next/link'

const Index = () => (
    <div className='landingPage'>
        <Head>
            <title>Ifa Brand</title>
            <link href="https://fonts.googleapis.com/css?family=Titillium+Web:100,200,400" rel="stylesheet" />
            <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className='landingPage-container'>
            <Link href={`/work`}>
                <a>
                    <h1 className='landingPage-title'>
                        IFA BRAND
                    </h1>
                    <h3 className='landingPage-subTitle'>
                        Photography
                    </h3>
                </a>
            </Link>
        </div>

        <style jsx>{`
            .landingPage-container{
                height: 100vh;
                display: flex;
                flex-direction:column;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }
            .landingPage-title{
                
            }
            h1{
                font-size: 100px;
                margin: 0px;
                padding: 0px;
            }
            h3{
                font-size:30px;
                margin: 0px;
                padding: 0px;
                margin-top: 40px;
            }
            a{
                text-decoration: none;
                color: black;
                text-align: center;
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
  
  export default Index