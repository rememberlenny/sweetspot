Refile.host = ENV['REFILE_HOST']

class StoriesController < ApplicationController

  include Refile::AttachmentHelper
  before_action :authenticate_user!, :except => [:path, :index, :show]
  before_action :set_story, only: [:show, :edit, :update, :destroy]

  respond_to :html, :json

  def path

  end

  def index
    @stories = Story.all
    respond_with(@stories)
  end

  def show_json story_id
    story = Story.find(story_id)
    photos = story.films.all
    jphoto = []

    photos.each do |photo|
      jhotspots = []
      hotspots = photo.hotspots.all
      hotspots.each do |hotspot|
        location = []
        if (!hotspot.location.nil?)
          location = eval(hotspot.location)
        end
        jsweet = {
          coordinates: location,
          destination: hotspot.destination.to_i,
          updated_at: hotspot.updated_at
        }
        jhotspots << jsweet
      end
      image_url = nil
      if !attachment_url(photo, :image).nil?
        image_url = attachment_url(photo, :image) + '.jpeg'
      end
      jphoto << {
        id: photo.id,
        title: photo.title,
        description: photo.description,
        created_at: photo.created_at,
        updated_at: photo.updated_at,
        sweetspots: jhotspots,
        image_url: image_url,
      }
    end

    json = {
      story: {
        name: story.name,
        created_at: story.created_at,
        updated_at: story.updated_at,
        blurb: story.blurb,
        byline: story.byline,
        featured: story.featured_photo.to_i,
        first_slide: story.first_slide.to_i
      },
      photos: jphoto
    }
    return json
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: show_json(@story.id) }
    end
    @film = @story.films.new
  end

  def new
    @story = Story.new
    respond_with(@story)
  end

  def edit
  end

  def create
    @story = Story.new(story_params)
    @story.save
    respond_with(@story)
  end

  def update
    @story.update(story_params)
    respond_with(@story)
  end

  def destroy
    @story.destroy
    respond_with(@story)
  end

  private
    def set_story
      @story = Story.find(params[:id])
      @film = @story.films.new
      @films = @story.films.all
    end

    def story_params
      params.require(:story).permit(:name, :first_slide, :featured_photo, :blurb, :byline)
    end
end
