class Api::TicketsController < ApplicationController
  def create
    if logged_in?
      @ticket = Ticket.create(user_id: current_user.id, event_id: params[:event_id])
      @event = Event.find_by(id: params[:event_id])
      @host = @event.host
      render '/api/events/show'
    else
      render json: ["Must be logged in to purchase tickets for an event"], status: 422
    end
  end
end
