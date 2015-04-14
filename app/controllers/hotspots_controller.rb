class HotspotsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_hotspot, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @hotspots = Hotspot.all
    respond_with(@hotspots)
  end

  def show
    respond_with(@hotspot)
  end

  def new
    @hotspot = Hotspot.new
    respond_with(@hotspot)
  end

  def edit
  end

  def create
    @hotspot = @film.hotspots.new(hotspot_params)
    @hotspot.save
    respond_with(@story, @film)
  end

  def update
    @hotspot.update(hotspot_params)
    respond_with(@hotspot)
  end

  def destroy
    @hotspot = @film.hotspots.find(params[:id])
    @hotspot.destroy
    respond_with(@story, @film)
  end

  private
    def set_hotspot
      @story = Story.find(params[:story_id])
      @film = Film.find(params[:film_id])
      @hotspot = Hotspot.find(params[:id])
    end

    def hotspot_params
      params.require(:hotspot).permit(:destination, :location)
    end
end
