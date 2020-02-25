Rails.application.routes.draw do
  resources :users do
    post 'login', on: :collection
    resources :albums do
      put :add_photo, on: :member
    end
  end
  resources :photos do
    resources :comments
  end
  get '/logout', to: 'index#logout'
  get '/', to: 'index#index'
end
