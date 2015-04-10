Rails.application.routes.draw do
  get 'static_pages/dash'

  resources :stories do
    resources :actors
    resources :films do
      resources :hotspots
    end
  end


  match 'stories/:id/path', to: 'stories#path', via: [:get], as: :path

  devise_for :users, :controllers => { omniauth_callbacks: 'omniauth_callbacks' }
  match '/users/:id/finish_signup' => 'users#finish_signup', via: [:get, :patch], :as => :finish_signup

  resources :actors do
    resources :comments, module: :actors
  end
  resources :films do
    resource :comments, module: :films
    resources :hotspots
  end

  root to: "stories#index"

  get "*any", via: :all, to: "errors#not_found" #404
end
