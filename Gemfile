ruby '2.1.5'
source 'https://rubygems.org'

gem 'rails', '~> 4.2.0'
gem 'sass-rails', '~> 4.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'bootstrap-sass'
gem 'devise-bootstrap-views'
gem 'devise'
gem 'annotate'
gem "mini_magick"
gem 'refile', '~> 0.4.2', require: ["refile/rails", "refile/image_processing"]
gem "aws-sdk", '< 2'
gem 'rollbar', '~> 1.4.4'


group :development do
  gem 'pry-rails'
  gem 'better_errors'
  gem 'binding_of_caller'
end

group :development, :test do
  gem 'dotenv-rails'
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'sqlite3'
  gem 'childprocess'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end
