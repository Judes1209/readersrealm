import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavDropdown, FormControl, Form, Button} from 'react-bootstrap';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      data: 'Click for todays bible verse'
    } 
    this.updateState=this.updateState.bind(this);
  }

  updateState(){
    this.setState(
      {
        data: 'jesus loves you'

      }
    )
  }
  render(){
    return(
      <div>
        <Content myData={this.state.data}
            updateStates={this.updateState}></Content>
      </div>
    )
  }
}

class Content extends React.Component{
  render(){
    return(
      <div>
        <h4>{this.props.myData}</h4>
        <button onClick={this.props.updateStates}>Click Me!!</button>
      </div>
    )
  }
}

export default App