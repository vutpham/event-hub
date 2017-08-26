class Api::EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def show
    @event = Event.find_by(id: params[:id])
    if @event
      @host = @event.host
      render :show
    else
      render json: ["Event does not exist"], status: 404
    end
  end

  def create
    @event = Event.new(event_params)
    @event.host = current_user
    if @event.save
      @host = @event.host
      render :show
    else
      render json: @event.errors.full_messages, status: 400
    end
  end

  def destroy
    @event = Event.find_by(id: params[:id])
    if @event
      @event.destroy
      render json: {}
    else
      render json: ["Event cannot be found"], status: 404
    end
  end

  def update
    @event = Event.find_by(id: params[:id])
    if @event && @event.user == current_user
      if @event.update_attributes(event_params)
        @host = @event.host
        render :show
      else
        render json: @event.errors.full_messages, status: 400
      end
    elsif @event #case that the user tried to update an event that was not theirs
      render json: ["Action only permitted for event hosts"], status: 400
    else #case event was not found
      render json: ["Event does not exist"], status: 404
    end
  end

  private

  def event_params
    params
    .require(:event)
    .permit(:title, :short_description, :full_description, :image_url,
            :date, :total_quantity, :quantity_left, :price, :street_address,
            :city_state_zip)
  end
end
