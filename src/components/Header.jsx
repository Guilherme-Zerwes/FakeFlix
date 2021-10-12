import React from 'react'
import './Header.css'

const Header = ({blackBackground}) => {
    return (
        <header className={blackBackground ? 'blackBackground' : ''}>
            <a href='/' className='header--logo'>
                <h1>FakeFlix</h1>
                {/* <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt='Netflix'/> */}
            </a>
            <a href="/" className='header--profile'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" />
            </a>
        </header>
    )
}

export default Header