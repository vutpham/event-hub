import React from 'react';
import UploadButton from './upload_button/upload_button';

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

  handleChange(key){
    return (e) => {
      this.setState({[key]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let urlHolder = document.getElementById('image-url-input');
    let url = urlHolder.getAttribute('data-url');
    this.state.price = parseInt(this.state.price);
    this.state["image_url"] = url;
    this.props.createEvent(this.state);
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
          <div className="new-event-step-1">
              Title
              <input
                type="text"
                value={title}
                placeholder="Event name"
                onChange={this.handleChange("title")}
              />

              Location
              <br></br>
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

              Short Description:
              <input
                type="text"
                value={short_description}
                placeholder="One sentence overview of your event"
                onChange={this.handleChange("short_description")}
              />

              Full Description
              <textarea
                value={full_description}
                placeholder="Full Description"
                onChange={this.handleChange("full_description")}
                />

              Date:
              <input
                type="date"
                value={date}
                onChange={this.handleChange("date")}
                />

              Ticket Price:
              <input
                type="number"
                value={price}
                onChange={this.handleChange("price")}
                />

              // Event Type:
            <select>
              <option value="OIJF">IMPLEMENT THIS LATER</option>
            </select>
          </div>

          <div className="new-event-step-2">
            <UploadButton />
          </div>

          <div className="new-event-step-3">
            <input type="submit" onClick={this.handleSubmit} value="Create Event!"></input>
          </div>

        </form>
      </div>
    );
  }
}

export default EventForm;
