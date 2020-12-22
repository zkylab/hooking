import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
class Nav extends Component {

    constructor(props) {
        super(props);
        this.modules = ["RADNET", "ACCS", "MARTI"];
        this.handleModuleChange = this.handleModuleChange.bind(this);
    }

    handleModuleChange(e){
        this.props.onModuleChange(e.target.innerText);
    }

    render() {
        return (
            <div className="nav">
                {console.log(this.modules)}
                <ul>
                    {this.modules.map(a => <Button className ="btn" onClick = {this.handleModuleChange}>{a}</Button>)}
                </ul>
            </div>
        );
    }
}



export default Nav;