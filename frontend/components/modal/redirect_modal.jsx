import Modal from 'react-modal';
import React from 'react';
import AuthFormContainer from '../auth/auth_form_container';

class RedirectModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {modalIsOpen: true, type: props.type};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.props.clearErrors();
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.props.clearErrors();
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
        <div>
          <h3>Please Log In to Use This Feature</h3>
          <button onClick={this.openModal}>{this.props.type}</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={style}
            contentLabel="Sign In/Sign Up"
            >
              <AuthFormContainer type={this.props.type} />
          </Modal>
        </div>
      );
    }
}

export default RedirectModal;
