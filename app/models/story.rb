# == Schema Information
#
# Table name: stories
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  byline     :text
#  blurb      :text
#

class Story < ActiveRecord::Base
  has_many :actors
  has_many :films
end
