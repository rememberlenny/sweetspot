# == Schema Information
#
# Table name: hotspots
#
#  id          :integer          not null, primary key
#  location    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  film_id     :integer
#  destination :string
#
# Indexes
#
#  index_hotspots_on_film_id  (film_id)
#

FactoryGirl.define do
  factory :hotspot do
    films ""
location "MyString"
  end

end
