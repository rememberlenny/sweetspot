Rails.application.routes.draw do
  mount Payola::Engine => '/payola', as: :payola
  get 'about_process',    to: 'onboard#about_process'
  get 'setup_story',      to: 'stories#new'
  get 'register_account', to: 'users/registrations#new'

  resources :stories do
    resources :films do
      resources :hotspots
    end
  end

  match '/@:id' => 'users#show', via: [:get], as: :user_profile

  get 'pricing',    to: 'static_pages#free'
  # get 'pricing',    to: 'static_pages#pricing'
  get 'contact',    to: 'static_pages#contact'
  get 'terms',      to: 'static_pages#terms'
  get 'privacy',    to: 'static_pages#privacy'
  get 'submission', to: 'static_pages#submission'
  match 'stories/:id/path',     to: 'stories#path',     via: [:get], as: :path
  match 'stories/:id/network',  to: 'stories#network',  via: [:get], as: :network

  match 'dash',                 to: 'users#dash',       via: [:get], as: :dash
  devise_for :users, :controllers => {
    :omniauth_callbacks => "omniauth_callbacks",
    :registrations => 'registrations'
  }
  get 'users',      to: 'users#index', as: :users
  match '/users/:id/finish_signup' => 'users#finish_signup', via: [:get, :patch], :as => :finish_signup

  root to: "static_pages#home"

  # get "*any", via: :all, to: "errors#not_found" #404 - Creates issues with reflie
end
