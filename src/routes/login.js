import { Component } from "react";
import LoginForm from "../mainForm"

class Login extends Component {
    
    render () {

        const handleSumbit = (character) => {
            alert(JSON.stringify(character))
        }

        return (
            <div>
                <LoginForm handleSubmit={handleSumbit}/>
            </div>
        )
    }
}

export default Login