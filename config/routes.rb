Rails.application.routes.draw do
  resources :photos, :comments, :albums, :users
  post '/users/authenticate', to: 'users#authenticate'
  get '/users/login', to: 'users#login'
  get '/', to: 'index#index'
end
