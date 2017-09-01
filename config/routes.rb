Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:create, :destroy, :update, :index, :show]
    resources :categories, only: [:index]
    resources :bookmarks, only: [:create, :destroy]
  end

  get 'api/events-filtered' => 'api/events#filter'
end
