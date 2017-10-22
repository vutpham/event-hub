
import React from 'react';

class UploadButton extends React.Component{

  constructor(props){
    super(props);
    this.state = {uploaded: false};
  }

  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(window.cloudinary_options,
      (error, results) => {
        if(!error){
          let imageUrlInput = document.getElementById('image-url-input');
          imageUrlInput.setAttribute('data-url', results[0].url);
          let $uploadedConfirmation1 = $(document.getElementById('upload-confirmation'));
          let $uploadedConfirmation2 = $(document.getElementById('upload-button'));
          let $uploadedConfirmation3 = $(document.getElementById('add-event-image'));
          $uploadedConfirmation1.addClass('green');
          $uploadedConfirmation2.addClass('green-border');
          $uploadedConfirmation3.addClass('green');
        }
    });
  }

  render(){
    console.log(this.state);
    return (
      <div className="upload-form">
        <button onClick={this.upload} id='upload-button'>
          <i id="upload-confirmation" className="fa fa-cloud-upload" aria-hidden="true"></i>
          <div id="add-event-image">Add Event Image</div>
          </button>
        <input type="hidden" id="image-url-input"></input>
      </div>
    );
  }
}

export default UploadButton;
