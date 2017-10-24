import Modal from 'react-modal';
import React from 'react';
import CheckoutContainer from '../checkout/checkout_container';
import AuthFormContainer from '../auth/auth_form_container';

class CheckoutModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {modalOpen: true, type: props.type};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    if(this.props.loggedIn){
      this.setState({modalIsOpen: true});
    }
    else{
      window.globalOpenModal();
    }
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }

    render(){
      const style = {
        overlay : {
          position          : 'fixed',
          top               : 0,
          left              : 0,
          right             : 0,
          bottom            : 0,
          backgroundColor   : 'rgba(76, 76, 76, 0.7)'
        },
        content : {
          top                   : '40%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          border                : '1px solid #D2D6DF'
        }
      };

      return(
        <div className="checkout-modal">
          <button className="buy-tickets"onClick={this.openModal} >Register</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={style}
            contentLabel="Sign In/Sign Up"
            >
              <CheckoutContainer
                price={this.props.price}
                eventId={this.props.eventId}/>
          </Modal>
        </div>
      );
    }
}

export default CheckoutModal;
