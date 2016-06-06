class Script < ActiveRecord::Base
  belongs_to :user
  belongs_to :genre

  has_many :comments

  acts_as_votable
end
