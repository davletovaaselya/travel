import React from 'react'
import style from './Footer.module.scss'

function Footer() {
    return (
        <div className={style.footerMain}>
            <div className={style.countainer}>
                <div className={style.left}>
                    <p>Plan and book your perfect trip with
                        expert advice, travel tips destination
                        information from us</p>
                </div>
                <div className={style.right}>
                    {/* <img src="./images/intagram.png" alt="instagram" />
                    <img src="./images/netfily.png" alt="netfily" />
                    <img src="./images/twitter.png" alt="twitter" />
                    <img src="./images/facebook.png" alt="facebook" /> */}
                </div>
            </div>

        </div>
    )
}

export default Footer
