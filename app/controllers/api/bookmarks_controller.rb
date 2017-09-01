class Api::BookmarksController < ApplicationController
  def create
    if logged_in?
      @bookmark = Bookmark.create(user_id: current_user.id, event_id: params[:event_id])
      @event = Event.find_by(id: params[:event_id])
      @host = @event.host
      render '/api/events/show'
    else
      render json: ["Please sign in to bookmark an event"], status: 422
    end
  end

  def destroy
    render json: ["Please sign in to remove bookmark"], status: 422 unless logged_in?
    @bookmark = Bookmark.find_by(event_id: [params[:id]])
    if @bookmark
      @event = @bookmark.event
      @host = @event.host
      @bookmark.destroy
      render '/api/events/show'
    else
      render json: ["Request cannot be completed"], status: 404
    end
  end
end
