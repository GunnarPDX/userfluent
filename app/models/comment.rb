# frozen_string_literal: true

class Comment < ActiveRecord::Base

  belongs_to :user
  belongs_to :post

  validates :content, presence: true

  is_impressionable
  acts_as_votable

end