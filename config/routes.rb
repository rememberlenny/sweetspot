Rails.application.routes.draw do
  get 'static_pages/dash'

  resources :stories do
      resources :films do
      resources :hotspots
    end
  end

  match 'stories/:id/path',     to: 'stories#path',     via: [:get], as: :path
  match 'stories/:id/network',  to: 'stories#network',  via: [:get], as: :network

  devise_for :users, :controllers => { omniauth_callbacks: 'omniauth_callbacks' }
  match '/users/:id/finish_signup' => 'users#finish_signup', via: [:get, :patch], :as => :finish_signup

  root to: "stories#index"

  # get "*any", via: :all, to: "errors#not_found" #404 - Creates issues with reflie
end
