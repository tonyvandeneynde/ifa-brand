export default function work() {
    const imagePath = 'static/icons/'
    return (
        <footer>
            <a href='https://www.facebook.com/ifapolaroids/' target="_blank"><img className='linkIcon' src={imagePath + 'facebook.png'} /></a>
            <a href='https://www.instagram.com/ifabrand/' target="_blank"><img className='linkIcon' src={imagePath + 'instagram.png'} /></a>
            <a href='https://www.etsy.com/shop/Ifaroids/' target="_blank"><img className='linkIcon' src={imagePath + 'etsy.png'} /></a>
            <style jsx>{`
                footer {
                    position: fixed;
                    top: 200px;
                    left: 30px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .linkIcon {
                    padding: 20px;
                    height: 40px;
                    margin: 0;
                }
                @media (max-width: 950px) {
                    footer {
                      top: unset;
                      left: unset;
                      bottom: 0;
                      background-color: white;
                      width: 100%;
                      justify-content: center;
                      flex-direction: row;
                    }
                  }
            `}
            </style>
        </footer>
    )
}