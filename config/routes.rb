Rails.application.routes.draw do
  resources :comments, :albums
  resources :photos do
    get 'search', on: :collection
  end
  resources :users do
    post 'login', on: :collection
    get 'browse', on: :collection
  end
  get '/logout', to: 'index#logout'
  get '/', to: 'index#index'
end
