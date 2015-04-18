# == Schema Information
#
# Table name: accounts
#
#  id         :integer          not null, primary key
#  subdomain  :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_accounts_on_subdomain  (subdomain) UNIQUE
#

class Account < ActiveRecord::Base
  validates :subdomain, length: { maximum: 18 },
                      uniqueness: { case_sensitive: false }

  belongs_to :user
end
