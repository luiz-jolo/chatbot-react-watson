import React, { Component } from "react"
import {Alert, Badge} from "reactstrap"

import {connect} from 'react-redux'

class ChatConversation extends Component{
    renderMensagem(msg, author){
        return (
            <div>
            {
                author == 'user' && <span>
                    <Badge>Você</Badge>
                    <Alert color="primary">
                        {msg}
                    </Alert>
                </span>
            }
            {
                author == 'bot' && <span>
                    <Badge color="warning">Chatbot</Badge>
                    <Alert color="warning">
                        {msg}
                    </Alert>
                </span>
            }
            </div>
        )
    }
    
    render(){
        return (
            <div className="chat-conversation">
            {/* debugando {JSON.stringify(this.props)} */}
            {
                this.props.mensagens.map(key => {
                    return this.renderMensagem(key, 'user')
                })
            }
            
        </div>
        )
    }
}
//sempre quando recebe a mensagem é porque foi um usuário que digitou
const mapStateToProps = (state) => {
    return {
        mensagens: state.chat.mensagens
    }
}
    
export default connect(mapStateToProps, null)(ChatConversation)
    