Rails.application.routes.draw do
  namespace :api do
    get 'categories/index'
  end

  get 'categories/index'

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:create, :destroy, :update, :index, :show]
    resources :categories, only: [:index]
  end

  get 'api/events-filtered' => 'api/events#filter'
end
