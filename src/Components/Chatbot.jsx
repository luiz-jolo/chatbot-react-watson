import './chat/chat.css'
import React, {Component} from "react"
import ChatConversation from "./chat/ChatConversation"
import ChatHeader from "./chat/ChatHeader"
import ChatMessage from "./chat/ChatMessage"

class Chatbot extends Component {
    render(){
        return (
            <div className="chatbot">
                <div className="chat-conteudo">
                <ChatHeader />
                <ChatConversation />
                <ChatMessage />
                </div>
            </div>
        )
    }
}

export default Chatbot