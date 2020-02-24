Rails.application.routes.draw do
  resources :users do
    post 'login', on: :collection
  end
  resources :albums
  resources :photos do
    resources :comments
  end
  get '/logout', to: 'index#logout'
  get '/', to: 'index#index'
end
