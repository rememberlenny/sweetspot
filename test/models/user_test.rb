# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  created_at             :datetime
#  updated_at             :datetime
#  name                   :string
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#  deleted_at             :datetime
#  groups_id              :integer
#  username               :string
#  name_first             :string
#  name_last              :string
#  account_type           :string
#  location               :string
#  biography              :text
#  postal_address         :text
#  disqus                 :string
#  website_personal       :string
#  email_personal         :string
#  instagram_personal     :string
#  twitter_personal       :string
#  flickr_personal        :string
#  facebook_personal      :string
#  image_id               :string
#  pay_level              :string           default("free")
#  pay_date_start         :date
#  pay_date_end           :date
#  slug                   :string
#  plan_id                :integer
#
# Indexes
#
#  index_users_on_confirmation_token    (confirmation_token) UNIQUE
#  index_users_on_deleted_at            (deleted_at)
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_groups_id             (groups_id)
#  index_users_on_plan_id               (plan_id)
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_slug                  (slug) UNIQUE
#  index_users_on_username              (username) UNIQUE
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
