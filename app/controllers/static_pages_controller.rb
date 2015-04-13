class StaticPagesController < ApplicationController
  def home
    if current_user
      @stories = Story.live.includes(:draft).order('updated_at DESC')
      render :dash
    end
  end
end
