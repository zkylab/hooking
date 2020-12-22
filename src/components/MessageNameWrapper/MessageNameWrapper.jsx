import React, { Component } from 'react';
import MessageName from '../MessageName/MessageName';

class MessageNameWrapper extends Component {

    constructor(props) {
        super(props);
        this.messageNameHandler = this.messageNameHandler.bind(this)
    }
    
    messageNameHandler(e){
        this.props.onMessageChange(e.target.innerText);
    }

    render() {
        return (
            <div className = "messageNameWrapper" >
                <h2>Messages</h2>
                {this.props.messageNames != null ?  
                
                this.props.messageNames.map(a => <div onClick ={this.messageNameHandler} > {a} </div>)

                : <div>no message</div>}
            </div>
        );
    }
}

export default MessageNameWrapper;