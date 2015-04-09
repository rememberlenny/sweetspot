# == Schema Information
#
# Table name: films
#
#  id          :integer          not null, primary key
#  title       :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_id    :string
#  story_id    :integer
#
# Indexes
#
#  index_films_on_story_id  (story_id)
#

class Film < ActiveRecord::Base
  has_many :comments, as: :commentable
  attachment :image
  belongs_to :story
end
