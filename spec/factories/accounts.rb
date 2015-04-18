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

FactoryGirl.define do
  factory :account do
    subdomain "MyString"
user_id 1
  end

end
