import Modal from 'react-modal';
import React from 'react';
import AuthFormContainer from '../auth/auth_form_container';

class LoginModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {modalOpen: true, type: props.type};
    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
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
          backgroundColor   : 'rgba(0, 0, 0, 0.75)'
        },
        content : {
          top                   : '50%',
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
          <button onClick={this.openModal}>{this.props.type} Modal</button>
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

export default LoginModal;
