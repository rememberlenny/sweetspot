class StaticPagesController < ApplicationController
  def home
    if current_user
      @stories = Story.live.where(:user_id => current_user.id).includes(:draft).order('updated_at DESC')
      render :dash
    else
      @stories = Story.live
      @featured_stories = Story.where(featured_story: true).limit(6)
    end
  end
end
