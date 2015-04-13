class StaticPagesController < ApplicationController
  def home
    if current_user
      @stories = Story.live.includes(:draft).order(:updated_at)
      render :dash
    end
  end
end
