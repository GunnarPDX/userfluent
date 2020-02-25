# frozen_string_literal: true
#
#

module Api::V1
  class UsersController < ApplicationController

    def show
      user = User.find(params[:id])
      puts user
      find_user_posts(user)
      render json: @user_posts, each_serializer: PostWLikedSerializer
    end

    def user_info
      user = User.find(params[:id])
      render json: user, serializer: ProfileSerializer
    end

    def find_user_posts(user)
      @user_posts = []
      posts = user.posts.all
      posts.each do |p|
        add_user_data_to_user_posts(p)
      end
      @user_posts
    end

    def add_user_data_to_user_posts(post)
      if user_signed_in?
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
      else
        liked = 'unliked'
        owner = 'false'
        session_user_id = 'null'
      end
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

  end
end