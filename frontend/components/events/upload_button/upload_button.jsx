import React from 'react';

class UploadButton extends React.Component{

  constructor(props){
    super(props);
  }

  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(window.cloudinary_options,
      (error, results) => {
        if(!error){
          let imageUrlInput = document.getElementById('image-url-input');
          imageUrlInput.setAttribute('data-url', results[0].url);
        }
    });
  }

  render(){
    return (
      <div className="upload-form">
        <button onClick={this.upload}>Upload Event Image!</button>
        <input type="hidden" id="image-url-input"></input>
      </div>
    );
  }
}

export default UploadButton;
