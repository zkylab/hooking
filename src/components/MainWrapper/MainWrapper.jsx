import React, { Component } from 'react';
import MessageContentWrapper from '../MessageContentWrapper/MessageContentWrapper';
import MessageNameWrapper from '../MessageNameWrapper/MessageNameWrapper';

import Nav from '../Nav/Nav';

class MainWrapper extends Component {
    constructor(props) {
        super(props);
        this.state ={
            activeModule:"",
            messageNames: [],
            activeMessage: "",
            messageContents:[]
        }
        this.changeActiveModule = this.changeActiveModule.bind(this);
        this.changeActiveMessage = this.changeActiveMessage.bind(this);

    }

    changeActiveModule(e) {
        this.setState({
            activeModule: e
        })
        console.log("main burası *23")
        console.log(this.state.activeModule)
        this.updateCurrentModule()
    }

    updateCurrentModule(){
        if(this.state.activeModule == "RADNET"){
            this.setState({
                messageNames: ["RADNET.IE221_0", "RADNET.IE222_0", "RADNET.IE223_0"]
            })
        }else if(this.state.activeModule == "ACCS"){
            this.setState({
                messageNames: ["ACCS.IE321_0", "ACCS.IE322_0", "ACCS.IE423_0"]
            })
        }
    }

    changeActiveMessage(e) {
        console.log("active message")
        console.log(e)
        this.setState({
            activeMessage: e
        })
        this.updateMessageContents()
    }

   
    updateMessageContents(){
        if(this.state.activeMessage == "RADNET.IE221_0"){
            this.setState({
                messageContents: ["RADNET.IE221_0.XLORDMASTER", "RADNET.IE222_0.XLORDMASTER", "RADNET.IE223_0.XLORDMASTER"]
            })
        }else if(this.state.activeMessage == "RADNET.IE222_0"){
            this.setState({
                messageContents: ["RADNET.IE251_0.XLORD", "RADNET.IE222_0.XLORD51", "RADNET.IE222_0.XLRD51"]
            })
        }
        
        console.log(this.state.messageContents)
    }

    render() {
        return (
            <div className = "grid-container">
                <Nav onModuleChange ={this.changeActiveModule}/>
                <MessageNameWrapper messageNames ={this.state.messageNames} onMessageChange = {this.changeActiveMessage} ></MessageNameWrapper>
                <MessageContentWrapper messageContents = {this.state.messageContents} ></MessageContentWrapper>
            </div>
        );
    }
}

export default MainWrapper;