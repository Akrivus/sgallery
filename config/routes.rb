Rails.application.routes.draw do
  resources :comments, :albums, :photos
  resources :users do
    post 'login', on: :collection
  end
  get '/logout', to: 'index#logout'
  get '/', to: 'index#index'
end
