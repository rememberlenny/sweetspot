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

require 'rails_helper'

RSpec.describe Account, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
