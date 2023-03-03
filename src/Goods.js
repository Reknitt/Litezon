import { Component } from "react"
import "./Goods.css"

class Goods extends Component {
    
    render () {
        const {name, cost, src} = this.props.goods
        const alt = "test"

        return (
            <div className="Goods">
                name: {name} <br></br>
                cost: {cost} <br></br>
                <img src={src} className="GoodsImg" alt={alt}/>
            </div>
        )
    }
}

export default Goods