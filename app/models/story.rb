# == Schema Information
#
# Table name: stories
#
#  id             :integer          not null, primary key
#  name           :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  byline         :text
#  blurb          :text
#  deleted_at     :datetime
#  groups_id      :integer
#  featured_photo :integer
#  first_slide    :integer
#  draft_id       :integer
#  published_at   :datetime
#  trashed_at     :datetime
#  user_id        :integer
#  featured_story :boolean
#
# Indexes
#
#  index_stories_on_deleted_at  (deleted_at)
#  index_stories_on_groups_id   (groups_id)
#

class Story < ActiveRecord::Base
  # acts_as_paranoid
  has_drafts
  has_many :films
  has_many :groups
end
