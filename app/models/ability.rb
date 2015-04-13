
3
4
5
6
7
8
9
10
11
12
13
# app/models/ability.rb
class Ability
  include CanCan::Ability

  def initialize(user)
    # Define abilities for the passed in user here.
    user ||= User.new # guest user (not logged in)
    # a signed-in user can do everything
    if user_signed_in?
      can :manage, :all
    end
  end
end
