class Api::EventsController < ApplicationController
  def index
    offset = params[:offset] || 0
    @events = Event.includes(:categories).limit(10).offset(offset)
    if current_user
      @bookmarked_events = current_user.bookmarked_events
    else
      @bookmarked_events = []
    end
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
      @event.category_ids = params[:event][:category_ids]
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

  def filter
    #BY CATEGORY
    offset = params[:offset] || 0
    categories = Category.where(name: params[:category_names])
    @events = []
    categories.each do |category|
      @events.concat(category.events.limit(10).offset(offset).includes(:categories))
    end
    if current_user
      @bookmarked_events = current_user.bookmarked_events
    else
      @bookmarked_events = []
    end
    render :index
  end

  def hosted_events
    @events = current_user.events.includes(:categories)
    if current_user
      @bookmarked_events = current_user.bookmarked_events
    else
      @bookmarked_events = []
    end
    render :index
  end

  def bookmarked_events
    @events = current_user.bookmarked_events.includes(:categories)
    if current_user
      @bookmarked_events = current_user.bookmarked_events
    else
      @bookmarked_events = []
    end
    render :index
  end

  def attended_events
    @events = current_user.purchased_events.includes(:categories)
    if current_user
      @bookmarked_events = current_user.bookmarked_events
    else
      @bookmarked_events = []
    end
    render :index
  end

  def search
    @events = Event.where("LOWER(title) LIKE LOWER(:search_string) OR LOWER(full_description) LIKE LOWER(:search_string)",
              search_string: "%#{params[:search_string]}%")
    if current_user
      @bookmarked_events = current_user.bookmarked_events
    else
      @bookmarked_events = []
    end
    render :index
  end

  private

  def event_params
    params
    .require(:event)
    .permit(:title, :full_description, :image_url,
            :date, :total_quantity, :quantity_left, :price, :street_address,
            :city_state_zip, :venue)
  end
end
