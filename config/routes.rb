Rails.application.routes.draw do
  resources :stories do
    resources :actors
    resources :films
  end

  devise_for :users

  resources :actors do
    resources :comments, module: :actors
  end
  resources :films do
    resource :comments, module: :films
  end

  root to: "stories#index"
end
