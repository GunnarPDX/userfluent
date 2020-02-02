# frozen_string_literal: true

module Api::V1
  class CommentsController < ApplicationController

    def create
      if user_signed_in?
        if (comment = current_user.comments.create(comment_params))
          comment.time = Time.now.to_formatted_s(:long_ordinal)
          comment.save
          render json: comment, status: 201
        else
          render json: comment.errors, status: 400
        end
      else
        render json: {}, status: 401
      end
    end

    def destroy
      if user_signed_in?
        comment = Comment.find(params[:id])
        if current_user.id == comment.user.id
          comment.destroy!
          render json: {}, status: 202
        else
          render json: {}, status: 403
        end
      else
        render json: {}, status: 401
      end
    end

    private

    def comment_params
      params.require(:comment).permit(:content, :post_id)
    end
  end
end