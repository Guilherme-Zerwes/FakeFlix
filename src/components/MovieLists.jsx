import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './MovieList.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MovieList = ({title, items}) => {
    const [scrollX, setScrollX] = useState(0)

    const handleRightClick = () => {
        const step = Math.round(window.innerWidth/2)
        if (scrollX - step > window.innerWidth/2 - items.results.length * 150) {
            setScrollX(scrollX-step)
        }
    }

    const handleLeftClick = () => {
        const step = Math.round(window.innerWidth/2)
        if (scrollX + step < 30) {
            setScrollX(scrollX+step)
        }
    }
    return(
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='movieRow--arrowleft' onClick={() => handleLeftClick()}><FaAngleLeft style={{fontSize: 50}}/></div>
            <div className='movieRow--arrowright' onClick={() => handleRightClick()}><FaAngleRight style={{fontSize: 50}}/></div>
            <div className="movieRow--listarea">
                <div className='movieRow--list' style={{
                    width: items.results.length * 150,
                    marginLeft: scrollX
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <Link to={`/detail/${item.id}`} key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </Link>
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList