import React, { Component } from 'react'
import Head from 'next/head';

export default class ImageModal extends Component {

    componentDidMount() {
        const body = document.querySelector("body");
        body.classList.add('modal-open');
    }

    componentWillUnmount() {
        const body = document.querySelector("body");
        body.classList.remove('modal-open');
    }

    render() {
    const imagePath = 'static/images/'
    const {image, onClickClose, onClickNext, onClickPrev} = this.props

    return (
        <div className={'modal'}>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
            </Head>
            
            <div>
                <div className={'closeBar'} >
                    <i onClick={onClickClose} className="closeButton far fa-times-circle" />
                </div>
                <div className={'carousel'}>
                    <i onClick={onClickPrev} className="arrow prev fas fa-chevron-left"></i>
                    <img src={imagePath + image.title + '.jpg'} />
                    <i onClick={onClickNext} className="arrow next fas fa-chevron-right"></i>
                </div>
            </div>
            <style jsx>{`
                    .modal{
                        margin:0;
                        padding:0;
                        position:fixed;
                        top:0;
                        left:0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(255, 255, 255, 0.8);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 2;
                    }
                    img{
                        /*width: 60vw;
                        max-width: 700px;*/
                        width: auto;
                        max-width: 700px;
                        max-height: 100vh;
                    }
                    .closeBar{
                        background-color: none;
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                    }
                    .closeButton{
                        margin: 10px;
                        cursor: pointer;
                        font-size: 30px;
                        color:black;
                    }
                    .carousel{
                        z-index: 20;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .arrow{
                        color: black;
                        font-size: 50px;
                        margin: 50px;
                        cursor: pointer;
                    }
                    @media (max-width: 800px) {
                        .modal{
                            background-color: white;
                        }
                        img {
                            width: 100vw;
                            font-size: 70px;
                        }
                        .arrow{
                            position: fixed;
                            background-color: rgba(255, 255, 255, 0.6);
                        }
                        .prev{
                            left:0;
                        }
                        .next{
                            right:0;
                        }
                    }
            `}</style>
            <style jsx global>{`
        body.modal-open {
            overflow: hidden;
        }
    `}</style>
        </div>
    )
}
}
