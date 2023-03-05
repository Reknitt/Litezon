import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Goods from '../Goods'
import Keyboard from '../goods/Keyboard'

class Home extends Component {
    divStyle = {
        color: 'blue',
    }
    
    render () {
        const keyboard = new Keyboard("dark project", "100$", `https://trashbox.ru/files/1715184_049195/logo5.jpg`)

        return (
            <div>
                <div style={this.divStyle}>
                    Hello, it's home page of litezon store <br></br>
                    <Link to={'/register'}>Sign up</Link> <br></br>
                    <Link to={'/login'}>Sign in</Link>
                </div>
                <div>
                    here's you can buy any keyboards you want
                    <Goods goods={keyboard}/>
                </div>
            </div>
            
        )
    }
}

export default Home