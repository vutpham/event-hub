import React from 'react';
import UploadButton from './upload_button/upload_button';
import Scroll from 'react-scroll';

class EventForm extends React.Component{
  constructor(){
    super();
    this.state = {
      title: "",
      short_description: "",
      full_description: "",
      date: "",
      price: 0.00,
      venue: "",
      street_address: "",
      city_state_zip: "",
      image_url: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  handleChange(key){
    return (e) => {
      this.setState({[key]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let urlHolder = document.getElementById('image-url-input');
    let url = urlHolder.getAttribute('data-url');
    console.log(urlHolder);
    console.log(url);
    this.state.price = parseInt(this.state.price);
    this.state["image_url"] = url;
    this.props.createEvent(this.state)
      .fail(() => {
        let scroll = Scroll.animateScroll;
        scroll.scrollToTop();
      });
  }

  renderErrors() {
    return(
      <ul className="errors-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}-{error}`} className="errors">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    let {title, short_description, full_description, date, price, venue,
    street_address, city_state_zip, image_url} = this.state;
    return (
      <div className="new-event-form-container">
        <form className="new-event-form">
          <h1>Create An Event</h1>
          {this.renderErrors()}

            <div className='new-event-step-1'>
              <header className="step-header">
                <span className='step-num'>1</span>
                <span className="step-name">Event Details</span>
              </header>

              <label>Title <span className="required-field">*</span></label>
              <input
                className="event-title-input"
                type="text"
                value={title}
                placeholder="Event Name"
                onChange={this.handleChange("title")}
              />

            <label>Location </label>
              <div id='location-input'>
                <input
                  type="text"
                  value={venue}
                  placeholder="Venue"
                  onChange={this.handleChange("venue")}
                />

                <input
                  type="text"
                  value={street_address}
                  placeholder="Street Address"
                  onChange={this.handleChange("street_address")}
                />

                <input
                  type="text"
                  value={city_state_zip}
                  placeholder="City, State, Zip"
                  onChange={this.handleChange("city_state_zip")}
                />
              </div>

              <label>Short Description <span className="required-field">*</span> </label>
              <textarea
                value={short_description}
                rows="5"
                placeholder="One sentence overview of your event"
                onChange={this.handleChange("short_description")}
              />

            <label>Full Description <span className="required-field">*</span></label>
              <textarea
                value={full_description}
                rows="15"
                placeholder="Full Description"
                onChange={this.handleChange("full_description")}
                />

              <label>Date <span className="required-field">*</span> </label>
              <input
                type="date"
                value={date}
                onChange={this.handleChange("date")}
                />

              <label>Ticket Price ($)</label>
              <input
                type="number"
                value={price}
                onChange={this.handleChange("price")}
                />

              <label>Event Type <span className="required-field">*</span></label>
            <select>
              <option value="OIJF">IMPLEMENT THIS LATER</option>
            </select>

          </div>

            <div className="new-event-step-2">
              <header className="step-header">
                <span className='step-num'>2</span>
                <span className="step-name">Upload Image (Optional)</span>
              </header>
              <UploadButton />
            </div>


              <div className="new-event-step-3">
                <header className="step-header">
                  <span className='step-num'>3</span>
                  <span className="step-name">Make this Event Live!</span>
                </header>
                <input type="submit" onClick={this.handleSubmit} value="Create Event!"></input>
              </div>

        </form>
      </div>
    );
  }
}

export default EventForm;
