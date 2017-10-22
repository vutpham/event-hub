Rails.application.routes.draw do
  namespace :api do
    get 'tickets/create'
  end

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:create, :destroy, :update, :index, :show]
    resources :categories, only: [:index]
    resources :bookmarks, only: [:create, :destroy]
    resources :tickets, only: [:create]
  end

  get 'api/events-filtered' => 'api/events#filter'
  get 'api/events-bookmarked' => 'api/events#bookmarked_events'
  get 'api/events-hosted' => 'api/events#hosted_events'
  get 'api/events-purchased' => 'api/events#attended_events'
  get 'api/events-search' => 'api/events#search'
end
