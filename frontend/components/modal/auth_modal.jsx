import Modal from 'react-modal';
import React from 'react';
import AuthFormContainer from '../auth/auth_form_container';
import { withRouter } from 'react-router';
import { browserHistory } from 'react-router-dom';

class AuthModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {modalOpen: true, type: props.type};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }



  openModal() {
    this.props.clearErrors();
    this.setState({modalIsOpen: true});
  }

  componentWillReceiveProps(newProps){
  }


  closeModal() {
    this.props.clearErrors();
    this.setState({modalIsOpen: false});
  }

    render(){
      // let url = this.props.location.pathname;
      // let last_seg = this.props.location.pathname.split("/");
      // last_seg = last_seg[last_seg.length-1];
      // let isOpen = this.state.modalIsOpen || (last_seg === "login");
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

export default withRouter(AuthModal);
