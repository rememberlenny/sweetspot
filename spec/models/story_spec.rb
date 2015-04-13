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
#
# Indexes
#
#  index_stories_on_deleted_at  (deleted_at)
#  index_stories_on_groups_id   (groups_id)
#

require 'rails_helper'

RSpec.describe Story, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
