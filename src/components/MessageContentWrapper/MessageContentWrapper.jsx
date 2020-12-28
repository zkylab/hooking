import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import JSONPretty from 'react-json-pretty';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');
class MessageContentWrapper extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="messageContentWrapper">
                <h2>Messages Viewer</h2>
                {this.props.messageContents != [] ?

                    this.props.messageContents.map(function (a) {
                        return (
                            <Accordion defaultActiveKey="1">
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle variant="link" eventKey="0">
                                            <div className="messageContentBase">{a}</div>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <JSONPretty id="json-pretty" theme={JSONPrettyMon} data="{my daha:hacked}"></JSONPretty>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )
                    })

                    : <div> no message </div>}
            </div>
        );
    }
}

export default MessageContentWrapper;