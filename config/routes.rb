Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :api do
    namespace :v1 do

      mount_devise_token_auth_for 'User', at: 'auth'

      resources :posts, only: %i[index create show destroy] do
        collection do
          put '/like/:id', to: 'posts#like'
        end
      end

      resources :user, only: %i[index update] do
        collection do
          get '/user_info', to: 'user#user_info'
          get '/posts', to: 'user#user_posts'
        end
      end

      resources :comments, only: %i[create destroy]

      resources :users, only: %i[show] do
        collection do
          get '/user_info/:id', to: 'users#user_info'
        end
      end

    end
  end

  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }

end
