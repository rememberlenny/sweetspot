class StaticPagesController < ApplicationController
  def dash

  end

  def home
    if current_user
      render :dash
    end
  end
end
