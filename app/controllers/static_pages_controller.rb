class StaticPagesController < ApplicationController
  def home
    if current_user
      @stories = Story.live.includes(:draft).order('updated_at DESC')
      render :dash
    else
      @stories = Story.live
    end
  end
end
