import React, { Component } from 'react';
import MessageName from '../MessageName/MessageName';

class MessageNameWrapper extends Component {

    constructor(props) {
        super(props);
        this.messageNameHandler = this.messageNameHandler.bind(this)
    }


    messageNameHandler(e) {
        this.props.onMessageChange(e.target.innerText);
        var element = document.getElementsByClassName("active")[0]
        if (element != null)
            document.getElementsByClassName("active")[0].classList.remove("active")
        e.target.classList.add("active")
        console.log(e)
        console.log(this.props.messageContentLength)
    }

    render() {
        return (
            <div className="messageNameWrapper" >
                <h2>Messages</h2>
                <ul className="list-group">
                    {this.props.messageNames != null ?
                        this.props.messageNames.map(function (messageName, index) {
                            return (<li className="list-group-item" key={index} onClick={this.messageNameHandler}> {messageName} </li>)
                        }, this)
                        : <div>no message</div>}
                </ul>
            </div>
        );
    }
}

export default MessageNameWrapper;