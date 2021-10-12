import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.scss'

function Card() {

    const [cardItem, setCardItem] = useState([
        {
            id: 1,
            img: './images/1.png',
            title: 'Kol-Tor',
            region:'Chuy',
        },
        {
            id: 2,
            img: './images/2.png',
            title: 'Kok-Moynok',
            region:'Issyk-Kul'
        },
        {
            id: 3,
            img: './images/3.png',
            title: 'Sary-Chelek',
            region:'Jalal-Abad'
        },
        {
            id: 4,
            img: './images/4.png',
            title: 'Skazka',
            region:'Issyk-Kul'
        }


    ])
    return (
        <div className={style.card}>
            <div className={style.wrap}>
            <h1>Featured destinations</h1>
            <Link to="./card"><button>View all <img src="./images/arrow.png" alt="arrow"/> </button></Link>
            </div>
            <div className={style.cardItems}>
                {
                    cardItem.map(item => (
                            <div className={style.itemLocation}>
                                <img src={item.img} alt="location" />
                                <h3>{item.title}</h3>
                                <p>{item.region}</p>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card
