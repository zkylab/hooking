import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
class Navigation extends Component {

    constructor(props) {
        super(props);
        this.modules = ["RADNET", "ACCS", "MARTI"];
        this.handleModuleChange = this.handleModuleChange.bind(this);
    }

    handleModuleChange(e) {
        this.props.onModuleChange(e.target.innerText);
    }

    render() {
        return (
            <div className="nav">
                {console.log(this.modules)}

                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Better Look v1.0</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {this.modules.map(a => <Nav.Link onClick={this.handleModuleChange} href="#home">{a}</Nav.Link>)}
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>



        );
    }
}



export default Navigation;