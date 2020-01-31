source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.0'

gem 'rails', '~> 5.2.4', '>= 5.2.4.1'

gem 'pg', '>= 0.18', '< 2.0'

gem 'puma', '~> 3.11'

gem 'devise_token_auth'

gem 'bootsnap', '>= 1.1.0', require: false

gem 'rack-cors'

gem 'active_model_serializers'

### Feature Gems

gem 'pg_search' # Search engine interface for postgres

gem 'pagy' # Paginator

gem 'acts_as_votable' # Adds Likes for posts

gem 'impressionist' # Adds view count to posts




# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development


group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem "better_errors"
  gem "binding_of_caller"
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
