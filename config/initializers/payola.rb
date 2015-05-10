Payola.configure do |config|
  config.secret_key = Rails.application.secrets.stripe_api_key
  config.publishable_key = Rails.application.secrets.stripe_publishable_key
end
