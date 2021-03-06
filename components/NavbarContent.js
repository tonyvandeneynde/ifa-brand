import Link from 'next/link'
import React, { Component } from 'react'
import Head from 'next/head'

export default class NavbarContent extends Component {

  render() {
    return (
        <div className='navbarContent'>
            <Head>
                <link rel="icon" type="image/x-icon" href="/static/favicon/favicon.ico" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
            </Head>
            <nav className='nav'>
                <div className='logo'>Ifa Brand</div>
                <ul className='navItems'>
                    <li><Link href={`/work`}><a>Work</a></Link></li>
                    <li><Link href={`/about`}><a>About</a></Link></li>
                    <li><a href='https://www.etsy.com/shop/Ifaroids/' target="_blank">Shop</a></li>
                </ul>
            </nav>
            <style jsx>{`
              nav {
                display: flex;
                font-family: 'Titillium Web', sans-serif;
                font-weight: 100;
                font-size: 20px;
            }
      
              ul {
                display: flex;
                padding: 0;
              }
      
              li {
                display:flex;
                list-style: none;
                align-items: flex-end;
                margin-right: 30px;
              }
      
              .logo {
                font-size: 30px;
                margin: 0;
                margin-right: 60px;
                font-weight:100 !important;
              }
      
              a {
                color:unset;
                cursor: pointer;
                text-decoration: none;
              }
      
              a:hover {
                opacity: 0.6;
              }
    
              .fixed {
                position: fixed;
                background-color: white;
              }
    
              .menuDropdown{
                  color: black;
                  font-size: 40px;
                  position: fixed;
                  right: 30px;
                  top: 20px;
              }
              @media (max-width: 950px) {
                .nav {
                    display: flex;
                    justify-content: space-between;
                    width: 100%
                }
                .logo {
                    margin-left: 50px;
                }
              }
            `}</style>
        </div>
      )
  }
}
