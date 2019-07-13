import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cinema from './cinema.png';
import Modal from './Modal';    


 class App extends Component {
     constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <div class="container">
       <ul class="redList">
           <li class="innerZero" style = {{ backgroundImage: 'url(' + cinema + ')'}}><button onClick={this.toggleModal}>
          Open the modal
        </button></li>   <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          `Here's some content for the modal`
        </Modal>
           <li class="innerOne"></li>
           <li class="innerTwo"></li>
           <li class="innerFour"></li>
           </ul>
    
       </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
