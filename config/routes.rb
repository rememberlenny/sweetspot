Rails.application.routes.draw do
  resources :stories do
    resources :actors
    resources :films do
      resources :hotspots
    end
  end


  match 'stories/:id/path', to: 'stories#path', via: [:get]

  devise_for :users

  resources :actors do
    resources :comments, module: :actors
  end
  resources :films do
    resource :comments, module: :films
    resources :hotspots
  end

  root to: "stories#index"
end
