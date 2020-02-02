# frozen_string_literal: true

class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :platform, :thumbnail, :full_image, :content, :created_at, :time, :likes, :views
  belongs_to :user
  has_many :comments

end