import React, {Component} from 'react'
import Table from '../Table'
import RegisterForm from "../mainForm"


class Register extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            characters: []
        }
    }
    
    render () {
        const removeCharacter = (index) => {
            const {characters} = this.state
            this.setState({
                characters: characters.filter((character, i) => {
                    return i !== index
                })
            })
        }

        const handleSubmit = (character) => {
            this.setState({
                characters: [...this.state.characters, character]
            })
        }
        return (
            <div>
                <RegisterForm handleSubmit={handleSubmit}/>
                <Table characterData={this.state.characters} removeCharacter={removeCharacter}/>
            </div>
        )
    }
}

export default Register
