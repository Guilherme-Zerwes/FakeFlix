import React, {useEffect, useState} from 'react'
import Api from '../api.js'
import MovieList from '../components/MovieLists'
import FeaturedMovie from '../components/FeaturedMovie'
import Header from '../components/Header'

function MainScreen() {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackBackground, setBlackBackground] = useState(false)

  useEffect(() => {
    const loadList = async() => {
      let list = await Api.getHomeList()
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosenFeatured = originals[0].items.results[randomChosen]
      let featuredInfo = await Api.getFeaturedInfo(chosenFeatured.id, 'tv')
      setFeaturedData(featuredInfo)
    }
    loadList()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackBackground(true)
      } else {
        setBlackBackground(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">
      {movieList.length === 0 ? <img className="loading" alt="loading" src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"/> : ''}
      
      <Header blackBackground={blackBackground}/>
      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }
      <section className="lists">
        {movieList.map((item,key) => (
          <MovieList title={item.title} items={item.items} key={key}/>
        ))

        }
      </section>
    </div>
  );
}

export default MainScreen;
