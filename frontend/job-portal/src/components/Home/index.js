import {Component} from 'react'
import Navbar from '../Navbar';
import './index.css'


class Home extends Component {
  render() {
    return (
        <div className='Home'>
            <Navbar/>
            <p>Home</p>
        </div>
    )
  }
}

export default Home