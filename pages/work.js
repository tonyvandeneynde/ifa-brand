import Navbar from '../components/Navbar';
import React, { Component } from 'react'
import ImageGrid from '../components/ImageGrid';
import ImageModal from '../components/ImageModal';
import Head from 'next/head';
import Footer from '../components/Footer'

export default class work extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedIndex: undefined,
            forceRemoveNav: false,
            images: undefined
        }
    }

    componentDidMount(){
        const numberOfImages = require('../static/images/images.json').images.number;
        const images = []
        for (let index = 1; index <= numberOfImages; index++) {
            images.push(index + '.jpg')
        }
        this.setState({images})
    }

    onClickImage = (index) => {
        this.setState({
            selectedIndex: index,
            forceRemoveNav: true
        })
    }

    closeImageModal = () => this.setState({
        selectedIndex: undefined,
        forceRemoveNav: false
    })

    onClickNextImage = () => {
        const {selectedIndex, images} = this.state
        if (selectedIndex < images.length-1){
            this.setState({selectedIndex: selectedIndex+1})
        }
    }

    onClickPrevImage = () => {
        const {selectedIndex} = this.state
        if (selectedIndex > 0){
            this.setState({selectedIndex: selectedIndex-1})
        }
    }

    render() {
        const {images, selectedIndex, forceRemoveNav} = this.state
        return (
            <div className='work'>
                <Head>
                    <title>Ifa Brand</title>
                    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:100,200,400" rel="stylesheet" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                {selectedIndex!==undefined &&
                    <ImageModal image={images[selectedIndex]} onClickClose={this.closeImageModal} onClickNext={this.onClickNextImage} onClickPrev={this.onClickPrevImage}/>
                }
                <Navbar forceRemoveNav={forceRemoveNav}/>
                {images &&
                    <ImageGrid images={images} onClickImage={this.onClickImage}/>
                }
                <Footer />
                <style jsx>{`
                    div{
                        margin:0;
                        padding:10px 50px;
                    }
                    @media (max-width: 950px) {
                        div {
                          padding: 10px 0;
                        }
                        .work {
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
}

