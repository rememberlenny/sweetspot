# == Schema Information
#
# Table name: stories
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :story do
    name "MyString"
  end

end