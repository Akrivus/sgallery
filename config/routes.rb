Rails.application.routes.draw do
  resources :photos, :comments, :albums
  resources :users do
    
  end

  get '/', to: 'index#index'
end
