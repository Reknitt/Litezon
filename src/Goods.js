import { Component } from "react"
//import styles from "./myStyle.module.css"
import "./Goods.scss"

//imported styles doesn't work
class Goods extends Component {
    

    render () {
        const {name, cost, src} = this.props.goods
        const alt = "test"

        const goodsStyle = {
            height: "30%",
            width: "30%",
            boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.1)",
            background: "white",
            position: "relative",
        }

        const imgStyle = {
            width: "40%",
            objectFit: "contain",
        }

        return (
            <div className="Goods" style={goodsStyle}>
                name: {name} <br></br>
                cost: {cost} <br></br>
                <img src={src} className="GoodsImg" style={imgStyle} alt={alt}/>
            </div>
        )
    }
}

export default Goods