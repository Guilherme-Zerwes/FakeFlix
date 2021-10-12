import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Api from '../api'
import FeaturedMovie from '../components/FeaturedMovie';
import MovieList from '../components/MovieLists'
import { FaArrowLeft } from "react-icons/fa";
import './Detail.css'
import Header from '../components/Header'

function Detail () {

    const [movieList, setMovieList] = useState([])
    const [movieDetails, setMovieDetails] = useState([])
    let movieId = window.location.href.split('/').pop()
    
    useEffect(() => {
        const loadDetail = async () => {
            let list = await Api.getHomeList()
            list = list.filter(i => i.slug === 'toprated')
            setMovieList(list)
            let movieInfo = await Api.getFeaturedInfo(movieId, 'tv')
            setMovieDetails(movieInfo)
        }
        loadDetail()
    }, [])

    return (
        <div className="detail">
            <div className="detail--container">
                <Header />
                <Link to='/'><FaArrowLeft className="detail--arrowLeft"/></Link>
                {movieDetails.length === 0 ?  'Hello!' : (<FeaturedMovie item={movieDetails}/>)}
                <section className="lists">
                    {movieList.length === 0 ? 'Goobye!' : <MovieList title='Escolhas Parecidas' items={movieList[0].items}/>}
                </section>
            </div>
        </div>
    )
}

export default Detail