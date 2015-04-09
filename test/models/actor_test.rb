# == Schema Information
#
# Table name: actors
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_id    :string
#  story_id    :integer
#
# Indexes
#
#  index_actors_on_story_id  (story_id)
#

require 'test_helper'

class ActorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
