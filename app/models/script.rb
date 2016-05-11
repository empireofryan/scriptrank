class Script < ActiveRecord::Base
  has_many :genres, :authors, :comments
  has_one :title
  has_one :logline
  has_many :ratings through: :users
  belongs_to :user_id
end
