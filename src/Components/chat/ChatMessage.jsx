import React, { Component } from "react";
import { InputGroup,  Input, Button } from 'reactstrap'
import {connect} from 'react-redux'

import {enviaMensagem} from './../../store/actions/chat'

class ChatMessage extends Component {
    constructor(props){
        super(props)

        this.inputEnviaTexto = this.inputEnviaTexto.bind(this)
    }
    inputEnviaTexto(e){
        if(e.keyCode === 13 ){
            console.log(e.target.value)
            this.props.enviaTexto(e.target.value)
            e.target.value = ''
        }
    }
    render () {
        return (
            <div className="chat-message">
            <hr />
            <InputGroup>
                <Input onKeyDown={this.inputEnviaTexto} placeholder="Digite sua mensagem" />
                <Button>Enviar</Button>
            </InputGroup>
            </div>
        )
    }
}
//sempre que chamar o enviaTexto e passar uma mensagem para ele
//vai na action e dá um dispach passando a action digitada
const mapDispatchToProps = (dispach) => {
    return {
        enviaTexto: (msg) => dispach(enviaMensagem(msg))
    }
}
//o primeiro parametro do connect é o mapstate e não precisa
//pois este input apenas envia texto e não recebe
export default connect(null, mapDispatchToProps)(ChatMessage)
    