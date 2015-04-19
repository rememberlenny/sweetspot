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
#  first_slide    :integer
#  deleted_at     :datetime
#  groups_id      :integer
#  draft_id       :integer
#  published_at   :datetime
#  trashed_at     :datetime
#  user_id        :integer
#  featured_story :boolean          default(FALSE)
#  image_id       :string
#  slug           :string
#
# Indexes
#
#  index_stories_on_deleted_at  (deleted_at)
#  index_stories_on_groups_id   (groups_id)
#  index_stories_on_slug        (slug) UNIQUE
#

require 'rails_helper'

RSpec.describe Story, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
