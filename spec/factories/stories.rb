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
#  featured_photo :string
#  first_slide    :string
#  deleted_at     :datetime
#
# Indexes
#
#  index_stories_on_deleted_at  (deleted_at)
#

FactoryGirl.define do
  factory :story do
    name "MyString"
  end

end
