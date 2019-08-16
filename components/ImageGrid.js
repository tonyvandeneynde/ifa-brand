import React from 'react'

export default function ImageGrid(props) {
    const imagePath = 'static/images/'
    const {images, onClickImage} = props

    return (
        <div>
            <div className={'gridContainer'}>
                {images.map((image, i) =>
                    <div
                        key={i}
                        onClick={()=>onClickImage(i)}
                        className={'gridItem'}>
                        <img src={imagePath + image.title + '_thumb.jpg'} />
                    </div>)
                }
            </div>
            <style jsx>{`
                .gridContainer{
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    max-width: 1249px;
                    margin: 0px auto;
                }

                .gridItem{
                    cursor: pointer;
                    margin: 10px;
                }
                img{
                    min-width: 250px;
                }
                @media (max-width: 950px) {
                    img {
                        min-width: 150px;
                        width: 150px;
                    }
                }
            `}</style>
        </div>
    )
}
