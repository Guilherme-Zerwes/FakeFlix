import React from 'react'
import './FeaturedMovie.css'

const FeaturedMovie = ({item}) => {

    let genres = []
    let description = item.overview
    
    if (description.length > 200) {
        description = description.substring(0,200) + '...'
    }

    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return(
        <section className="featured" style={
            {
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
            <div className="featured--gradientTop">
                <div className="featured--gradientRight">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--infos">
                        <div className="featured--score">{item.vote_average*10}%</div>
                        <div className="featured--date">{item.first_air_date.substring(0,4)}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <button className="wathcbutton">▶ Assistir</button>
                        <button className="mylistbutton">+ Minha Lista</button>
                    </div>
                    <div className="featured--generos">
                        <strong>Gênero: </strong> {genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie