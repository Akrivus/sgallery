Rails.application.routes.draw do
  post '/login', to: 'index#authenticate'
  get '/', to: 'index#index'
  get '/login', to: 'index#login'
  
  resources :photos
  resources :comments
  resources :albums
  resources :images
  resources :users
end
