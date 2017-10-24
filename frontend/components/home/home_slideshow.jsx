import React from 'react';

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.animate();
  }

 componentWillUnmount(animation){
    clearInterval(this.animation);
  }

 animate(){
    $("#slideshow > div:gt(0)").hide();
    this.animation = setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(2000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  5000);
  }

  render() {
    return (
      <div id="slideshow">
          <div className="slide-border">
            <img src="https://res.cloudinary.com/vutpham/image/upload/v1508829096/compressed_yglwgi.jpg"
                 className="slide-image" />
          </div>
          <div className="slide-border">
            <img className="slide-image" src="https://res.cloudinary.com/vutpham/image/upload/v1508828984/compressed_lantern_a4tkbl.jpg"/>
          </div>
          <div className="slide-border">
            <img className="slide-image" src="https://res.cloudinary.com/vutpham/image/upload/v1508830394/pools_gkxaij.jpg"/>
          </div>
          <div className="slide-border">
            <img className="slide-image" src="https://res.cloudinary.com/vutpham/image/upload/v1508830505/parade_nuzy33.webp"/>
          </div>
        </div>
    );
  }
}

export default SlideShow;
