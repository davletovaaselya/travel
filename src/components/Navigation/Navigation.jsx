import React from 'react'
import {useState} from 'react'
import style from './Navigation.module.scss'

function Navigation() {
    const [activeItem, setActiveItem] = useState(null)
    const navigationItem = ['Home', 'Destinations', 'About']
    return (
        <div>
                <ul className={style.nav}>
                {
                navigationItem.map((item, index) => (
                    <li 
                        key={`${item}_${index}`}
                        onClick = {() => setActiveItem(index)}
                        className = {activeItem === index ? 'active' : ''}>
                        {item}
                    </li>
                ))
            }
                </ul>
        </div>
    )
}

export default Navigation
