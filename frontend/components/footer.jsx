import React from 'react';

const Footer = (props) => (
  <div className='footer'>
      <div>
        <small>Inspired by Eventbrite, made by <a className="portfolio-link" href='http://vutpham.com/'>Vu T. Pham</a></small>
        <br/>
        <small>For Portfolio Purposes Only</small>
      </div>
      <div className='icon-box'>
        <a href='mailto:vutpham@outlook.com'><i className='fa fa-envelope-o' aria-hidden='true'></i></a>
        <a href='https://github.com/vutpham/event-hub' target='_blank'><i className='fa fa-github' aria-hidden='true'></i></a>
        <a href='https://www.linkedin.com/in/vutpham/' target='_blank'><i className='fa fa-linkedin' aria-hidden='true'></i></a>
      </div>
  </div>
);

export default Footer;
