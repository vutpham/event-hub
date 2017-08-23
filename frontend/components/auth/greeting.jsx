import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.loggedInGreeting = this.loggedInGreeting.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.state = {modalOpen: true};
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  loggedInGreeting() {
    return (
    <div id="loggedInGreeting">
      <h2>Welcome, {this.props.currentUser.username}</h2>
      <button onClick={this.props.logout}>Log Out</button>
    </div>
  );}

  sessionLinks() {
    return (
    <div id="sessionLinks">
      <Link to="/signup">Sign Up</Link>
      <br></br>
      <Link to="/login">Log In</Link>
    </div>
  );}

  render(){
    const renderComponent = this.props.currentUser ?
      this.loggedInGreeting() : this.sessionLinks();
      return (
        <div>
          <button onClick={this.openModal}>Open Modal</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
              >
                {renderComponent}
                <button onClick={this.closeModal}>close</button>
            </Modal>
        </div>
      );
  }

}

export default Greeting;
