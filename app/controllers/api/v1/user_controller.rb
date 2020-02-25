# frozen_string_literal: true
#

module Api::V1
  class UserController < ApplicationController

    before_action :find_user_posts, only: %i[user_profile]


    def index
      if user_signed_in?
        render json: current_user, serializer: ProfileSerializer
      else
        render json: {}, status: 401
      end
    end

    def user_info
      if user_signed_in?
        render json: current_user, serializer: ProfileSerializer
      else
        render json: {}, status: 401
      end
    end

    def user_profile
      if user_signed_in?
        render json: @user_posts, each_serializer: PostWLikedSerializer
      else
        render json: {}, status: 401
      end
    end

    def update
      if user_signed_in?
        if current_user.update(user_params)
          render json: current_user, serializer: ProfileSerializer
        else
          render json: {}, status: 401
        end
      else
        render json: {}, status: 401
      end
    end

    def find_user_posts
      @user_posts = []
      posts = current_user.posts.all
      posts.each do |p|
        add_user_data_to_user_posts(p)
      end
      @user_posts
    end

    def add_user_data_to_user_posts(post)
      liked = if current_user.liked? post
                'liked'
              else
                'unliked'
              end

      owner = if current_user.id == post.user.id
                'true'
              else
                'false'
              end

      session_user_id = current_user.id

      class << post
        attr_accessor :liked
        attr_accessor :owner
        attr_accessor :session_user_id
      end
      post.liked = liked
      post.owner = owner
      post.session_user_id = session_user_id

      @user_posts << post
    end

    def user_params
      params.require(:body).permit(:name, :location, :bio, :avatar, :media, :company, :contact)
    end

  end
end