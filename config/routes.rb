Rails.application.routes.draw do
  namespace :api do
    get 'users/api/sessions'
  end

  root to: "static_pages#root"
end
