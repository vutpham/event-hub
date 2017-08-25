import React from 'react';

class UploadButton extends React.Component{
  upload(e) {

    e.preventDefault();
    window.cloudinary.openUploadWidget(window.cloudinary_options, function(error, results){
      if(!error){
        console.log(results[0]);
      }
    }.bind(this));
  }

  render(){
    return (
      <div className="upload-form">
        <button onClick={this.upload}>Upload Image</button>
      </div>
    );
  }
}

export default UploadButton;
