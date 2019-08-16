import Link from 'next/link'
import React, { Component } from 'react'
import Head from 'next/head'

export default class NavbarContent_smallscreen extends Component {
    constructor(props){
        super(props)
        this.state={
            dropdownOpen: false,
        }
    }

    componentDidMount(){
        document.body.onclick = this.closeDropdown
    }

    closeDropdown = (e) => {
      console.log('close dropdown', e.target.id)
      const {dropdownOpen} = this.state
      if (dropdownOpen && e.target.id !== 'dropdownMenu'){
          this.setState({dropdownOpen: false})
      }
    }

    toggelDropdown = () => {
        const {dropdownOpen} = this.state
        console.log('set', !dropdownOpen)

        this.setState({dropdownOpen: !dropdownOpen})
    }

    onLinkClick = () => {
      
      this.setState({dropdownOpen: false})
    }

  render() {
    const {dropdownOpen} = this.state
    console.log('render open?', dropdownOpen)
    return (
        <div className='navbarContent'>
            <Head>
                <link rel="icon" type="image/x-icon" href="/static/favicon/favicon.ico" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
            </Head>
            <div className='navbarMargin'></div>
            <nav className='nav'>
                <div className='logo'><h1>Ifa Brand</h1></div>
                <div className='menuDropdown' onClick={this.toggelDropdown}><i id='dropdownMenu' className="fas fa-bars" /></div>
                { dropdownOpen &&
                    <ul className='navItems'>
                        <li onClick={this.onLinkClick}><Link href={`/work`}><a>Work</a></Link></li>
                        <li onClick={this.onLinkClick}><Link href={`/about`}><a>About</a></Link></li>
                        <li onClick={this.onLinkClick}><Link href={`/shop`}><a>Shop</a></Link></li>
                    </ul>
                }
            </nav>
            <style jsx>{`
              .navbarMargin{
                margin-top: 100px;
              }
              nav {
                display: flex;
                justify-content: space-between;
                width: 100vw;
                padding-top: 20px;
                height: 50px;
                position: fixed;
                top: 0;
                background-color: white;
            }
      
              ul {
                display: flex;
                padding: 0;
              }
      
              li {
                display:flex;
                list-style: none;
                align-items: flex-end;
                font-size: 30px;
                margin: 10px;
              }
      
              h1 {
                font-size: 30px;
                margin: 0;
                margin-right: 60px;
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
                .logo {
                    margin-left: 50px;
                }
                .navItems{
                    position: fixed;
                    top: 50px;
                    right: 0px;
                    display: flex;
                    padding-right: 50px;
                    flex-direction: column;
                    background-color: white;
                    box-shadow: 0px 0px 5px 0px;
                }
            `}</style>
        </div>
      )
  }
}
