# frozen_string_literal: true

module Api::V1
  class PostsController < ApplicationController
    before_action :set_post, only: %i[like destroy]
    before_action :find_posts_data, only: %i[index]
    before_action :find_post_data, only: %i[show]


    def index
      render json: {
          content: ActiveModelSerializers::SerializableResource.new(@posts_w_liked, each_serializer: PostWLikedSerializer),
          page_data: @pagy
      }, status: 200
    end


    def liked_posts
      if user_signed_in?
        # render json: current_user.find_liked_items
        render json: {}, status: 501
      else
        render json: {}, status: 401
      end
    end

    def show
      render json: @post_w_data, serializer: PostWLikedSerializer
    end


    def like
      if user_signed_in?
        if current_user.voted_for? @post
          @post.unliked_by current_user
        else
          @post.liked_by current_user
        end
        render json: {}, status: 200
      else
        render json: {}, status: 401
      end
    end


    def create
      if user_signed_in?
        if (post = current_user.posts.create(post_params))
          post.time = Time.now.to_formatted_s(:long_ordinal)
          post.save
          render json: post, status: 201
        else
          render json: post.errors, status: 400
        end
      else
        render json: {}, status: 401
      end
    end


    def destroy
      if user_signed_in?
        if current_user.id == @post.user.id
          @post.destroy!
          render json: {}, status: 202
        else
          render json: {}, status: 403
        end
      else
        render json: {}, status: 401
      end
    end


    private


    def set_post
      @post = Post.find(params[:id])
    end


    def content_filter
      # ADD RANK PARAM
      platform = params[:platform]
      rank = params[:rank]
      result = Post.filter(platform, rank)
      result
    end


    def find_posts_data
      @posts_w_liked = []
      search = content_filter
      @pagy, posts = pagy(search, page: params[:page], items: 24)

      posts.each do |p|
        # add_user_data_to_posts(p)
        @posts_w_liked << add_data(p)
      end

      @posts_w_liked
    end


    def find_post_data
      post = Post.find(params[:id])
      impressionist(post, "my optional message", unique: %i[impressionable_type impressionable_id session_hash]) if user_signed_in?
=begin
      if user_signed_in?
        impressionist(post, "my optional message", unique: %i[impressionable_type impressionable_id session_hash])
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
=end
      @post_w_data = add_data(post)
    end


    def add_user_data_to_posts(post)
=begin
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
=end
      @posts_w_liked << add_data(post)
    end


    def add_data(post)
      if user_signed_in?
        liked = (current_user.liked? post) ? 'liked' : 'unliked'
        owner = (current_user.id == post.user.id) ? 'true' : 'false'
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
      post
    end


    def post_params
      params.require(:post).permit(:title, :image, :link, :content, :category, :platform)
    end

  end
end