import React from 'react'
import {Route} from 'react-router-dom'
import './App.css';
import MainScreen from './pages/Main';
import Detail from './pages/Detail';

function App() {
  return (
    <div className='app'>
      <Route exact path='/' component={MainScreen}/>
      <Route path='/detail/:id' component={Detail}/>
    </div>
  )
}

export default App;