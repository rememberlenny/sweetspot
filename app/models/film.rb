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
#  deleted_at  :datetime
#
# Indexes
#
#  index_films_on_deleted_at  (deleted_at)
#  index_films_on_story_id    (story_id)
#

class Film < ActiveRecord::Base
  # acts_as_paranoid
  belongs_to :story
  attachment :image
  has_many :hotspots
end
