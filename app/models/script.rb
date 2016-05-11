class Script < ActiveRecord::Base
  has_many :genres, :comments, :ratings, :votes
  has_one_or_many :authors
  has_one :title
  has_one :logline
  belongs_to :user_id
end
