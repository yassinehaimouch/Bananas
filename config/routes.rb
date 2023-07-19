Rails.application.routes.draw do
  root "public#index"
  post 'account', to: 'public#account', as: :account
end
