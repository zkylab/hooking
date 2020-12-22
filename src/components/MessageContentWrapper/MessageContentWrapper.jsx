import React, { Component } from 'react';

class MessageContentWrapper extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="messageContentWrapper">
                <h2>Messages Viewer</h2>
                {this.props.messageContents != [] ?

                    this.props.messageContents.map(a => <div> {a} </div>)

                    : <div> no message </div>}
            </div>
        );
    }
}

export default MessageContentWrapper;