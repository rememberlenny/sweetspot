class HotspotsController < ApplicationController
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
    @hotspot = Hotspot.new(hotspot_params)
    @hotspot.save
    respond_with(@hotspot)
  end

  def update
    @hotspot.update(hotspot_params)
    respond_with(@hotspot)
  end

  def destroy
    @hotspot.destroy
    respond_with(@hotspot)
  end

  private
    def set_hotspot
      @hotspot = Hotspot.find(params[:id])
    end

    def hotspot_params
      params.require(:hotspot).permit(:films, :location)
    end
end
