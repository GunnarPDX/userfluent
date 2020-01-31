# frozen_string_literal: true

class Post < ActiveRecord::Base

  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :title, :content, :image, presence: true

  is_impressionable
  acts_as_votable

  def thumbnail
    if image.nil?
      'https://res.cloudinary.com/dmqtrnawm/image/upload/w_350,h_275,c_fill/par8wc5w5foyrihwb1yd.jpg'
    else
      'https://res.cloudinary.com/dmqtrnawm/image/upload/e_improve/q_auto:best/dpr_3.0/w_350,h_275,c_fill/' + image + '.png'
    end
  end

  def full_image
    if image.nil?
      'https://res.cloudinary.com/dmqtrnawm/image/upload/w_350,h_275/dpr_3.0/par8wc5w5foyrihwb1yd.jpg'
    else
      'https://res.cloudinary.com/dmqtrnawm/image/upload/' + image + '.png'
    end
  end

  def likes
    cached_votes_up # uses cached data
    # self.get_likes.size
  end

  def views
    impressionist_count
  end

  include PgSearch::Model

  pg_search_scope :search_by_title_and_content, against: %i[title content]
  pg_search_scope :filter_category, against: %i[category]
  pg_search_scope :filter_platform, against: %i[platform]

  def self.search(query)
    if query.present?
      search_by_title_and_content(query).reorder('updated_at DESC')
    else
      order('created_at DESC') # No query? Return all records, newest first.
    end
  end

  def self.filter(platform)
    if category.present?
      filter_platform(platform)
    else
      order('created_at DESC')
    end
  end

end
