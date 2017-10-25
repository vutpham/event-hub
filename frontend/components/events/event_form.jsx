import React from 'react';
import UploadButton from './upload_button/upload_button';
import Scroll from 'react-scroll';
import { withRouter } from 'react-router-dom';

class EventForm extends React.Component{
  constructor(){
    super();
    this.state = {
      title: "",
      full_description: "",
      date: "",
      price: 0.00,
      venue: "",
      street_address: "",
      city_state_zip: "",
      image_url: "",
    };
    this.event_categories = [];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.addCategory = this.addCategory.bind(this);
  }

  handleChange(key){
    return (e) => {
      return this.setState({[key]: e.target.value});
    };
  }

  addCategory(category){
    return (e) => {
      if (this.event_categories[category]){
        delete this.event_categories[category];
      } else{
        this.event_categories[category] = true;
      }
    };
  }

  componentWillMount(){
    this.props.clearErrors();
    this.props.fetchCategories();
  }

  handleSubmit(e){
    e.preventDefault();
    let urlHolder = document.getElementById('image-url-input');
    let url = urlHolder.getAttribute('data-url');
    this.state.price = parseInt(this.state.price);
    this.state["image_url"] = url;
    const ids = Object.keys(this.event_categories).map((id)=>parseInt(id));
    this.state["category_ids"] = ids;
    this.props.createEvent(this.state)
      .then((res)=>{
        return this.props.history.push(`/events/${res.event.id}`);
      })
      .fail(()=> {
        let scroll = Scroll.animateScroll;
        scroll.scrollToTop();
      }
    );
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
    street_address, city_state_zip, image_url, categories} = this.state;

    let categoryOptions = this.props.categories.map((category, i)=>(
      <label key={`check-${category.id}-${i}`}>
        <input
          type="checkbox"
          onChange={this.addCategory(category.id)}
          value={category.name}>
        </input>
        {category.name}
      </label>
    ));

    return (
      <div className="new-event-form-container">
        <form className="new-event-form">
          <h1>Create An Event</h1>
          {this.renderErrors()}

            <div className='new-event-step-1'>
              <label>Title <span className="required-field">*</span></label>
              <input
                className="event-title-input"
                type="text"
                value={title}
                onChange={this.handleChange("title")}
              />

            <label>Location <span className="required-field">*</span> </label>
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

            <label>Description <span className="required-field">*</span></label>
              <textarea
                value={full_description}
                rows="15"
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

              <div className='category-form-box'>
                <h5>Categories</h5>
                  {categoryOptions}
              </div>

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

export default withRouter(EventForm);
