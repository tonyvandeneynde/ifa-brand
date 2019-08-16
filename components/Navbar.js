import React, { Component } from 'react'
import NavbarContent from './NavbarContent';
import Head from 'next/head'
import NavbarContent_smallscreen from './NavbarContent_smallscreen';

export default class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      positionFixed: false,
      smallScreen: undefined
    }
    this.yPos = 0
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    const {smallScreen} = this.state
    const width = window.innerWidth
    let newSmallScreen = false
    if (width <= 500){
      newSmallScreen = true
    }
    if ( newSmallScreen !== smallScreen){
      this.setState({smallScreen: newSmallScreen})
    }
  }

  handleScroll = () => {
    const newYPos = window.scrollY;
    if (newYPos > 62 && newYPos < this.yPos){
      this.setState({
        positionFixed: true
      })
    }
    else if (newYPos<=1 || newYPos > this.yPos){
      this.setState({
        positionFixed: false
      })
    }
    this.yPos = newYPos
  }

  getPosition = () => {
    const {positionFixed} = this.state
    return positionFixed ? 'fixed' : ''
  }

  render() {
    const {positionFixed, smallScreen} = this.state
    const {forceRemoveNav} = this.props
    return (
      <React.Fragment>
        <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
        </Head>
        {(smallScreen !== undefined) &&
          <React.Fragment>
            {smallScreen ? 
              <NavbarContent_smallscreen />
              :
              <React.Fragment>
                { (positionFixed && !forceRemoveNav) &&
                  <nav className='fixed'><NavbarContent /></nav>
                }
                { forceRemoveNav ?
                  <nav className='static hide'><NavbarContent /></nav>
                  :
                  <nav className='static'><NavbarContent /></nav>
                }
              </React.Fragment>
            }
          </React.Fragment>
        }



        <style jsx>{`
          .fixed {
            position: fixed;
            top: 0;
            background-color: white;
            box-shadow: 5px 5px 5px;
            -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
            -webkit-animation-duration: 0.5; /* Safari 4.0 - 8.0 */
            animation-name: example;
            animation-duration: 0.5s;
          }
          .static {
            margin-bottom: 60px;
          }
          .hide {
            color: transparent !important;
          }
          /* Safari 4.0 - 8.0 */
          @-webkit-keyframes example {
            from {opacity: 0;}
            to {opacity: 1;}
          }

          /* Standard syntax */
          @keyframes example {
            from {opacity: 0;}
            to {opacity: 1;}
          }
          @media (max-width: 950px) {
            .fixed{
              width:100%;
            }
          }
        `}</style>
            <style jsx global>{`
        body {
            margin:0;
            padding:0;
        }
    `}</style>
      </React.Fragment>
    )
  }
}
