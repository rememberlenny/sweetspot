# == Schema Information
#
# Table name: plans
#
#  id         :integer          not null, primary key
#  name       :string
#  stripe_id  :string
#  interval   :string
#  amount     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Plan < ActiveRecord::Base
  include Payola::Plan

  has_many :users
  validates :stripe_id, inclusion: { in: Plan.pluck('DISTINCT stripe_id'),
      message: "not a valid subscription plan" }

  def redirect_path(subscription)
    '/'
  end

end
