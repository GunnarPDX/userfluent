# frozen_string_literal: true

class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :time, :user_name, :user_id
  belongs_to :user
  belongs_to :post

  def user_name
    object.user.username
  end

  def user_id
    object.user.id
  end
end