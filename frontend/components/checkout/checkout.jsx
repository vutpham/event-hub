import React from 'react';
import { withRouter } from 'react-router-dom';

class Checkout extends React.Component{
  constructor(props){
    super(props);
    this.state = {quantity: 0};
    this.updateQuantity = this.updateQuantity.bind(this);
    this.purchase = this.purchase.bind(this);
  }

  updateQuantity(e){
    this.setState({quantity: e.target.value});
  }

  purchase(e){
    e.preventDefault();
    let quantity = parseInt(this.state.quantity);
    this.props.buyTicket(this.props.eventId)
      .then(this.props.history.push('/user-events/tickets'));
  }

  render(){
    let totalPrice = this.state.quantity * this.props.price;
    totalPrice = (totalPrice === 0) ? "FREE" : `$${totalPrice}`;
    let perTicketPrice = (this.props.price === 0) ? "FREE" : `$${this.props.price}`;
    let checkoutText = (perTicketPrice === "FREE") ? "Register" : "Checkout";
    return(
      <form className="checkout-form">
          <header className="checkout-header">
            <h1>Select Tickets</h1>
          </header>
          <section className="checkout-ticket">

            <span>
              General Admission
            </span>

            <span>
              {perTicketPrice}
            </span>

            <span>
              <select value={this.state.quantity} onChange={this.updateQuantity}>
                <option value="0" disabled>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </span>
          </section>

          <footer className="checkout-footer">
            <span>
              QTY:{this.state.quantity}
            </span>
            <span>
              {totalPrice}
            </span>
            <span className="checkout-options">
              <img src="http://res.cloudinary.com/events4u/image/upload/v1495403641/Visa.png"></img>
              <img src="http://res.cloudinary.com/events4u/image/upload/v1495403620/mastercard.png"></img>
              <img src="http://res.cloudinary.com/events4u/image/upload/v1495403624/american-express.png"></img>
              <img src="http://res.cloudinary.com/events4u/image/upload/v1495403614/discover.png"></img>
            </span>
            <input type="submit" value={checkoutText} onClick={this.purchase} />
          </footer>
      </form>
    );
  }
}

export default withRouter(Checkout);
