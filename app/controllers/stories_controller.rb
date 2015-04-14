Refile.host = ENV['REFILE_HOST']

class StoriesController < ApplicationController

  include Refile::AttachmentHelper
  before_action :authenticate_user!, :except => [:network, :path, :index, :show, :show_json]

  before_filter :find_story,  :only => [:network, :show, :edit, :update, :destroy]
  before_filter :reify_story, :only => [:show, :edit]

  respond_to :html, :json

  def path

  end

  def network
    nodes = []
    links = []
    first_id = @story.films.first.id
    if @story.id == 1
      first_id = 0
    end
    @photos =  @story.films.order(:id)
    @photos.each do |photo|
      if !photo.title.blank?
        name = photo.title
      else
        name = 'Unnamed'
      end
      if !attachment_url(photo, :image).nil?
        url = attachment_url(photo, :image, :fill, 100, 100) + '.jpeg'

        if !photo.id.nil?
          node = {
            name: url,
            group: photo.id - first_id
          }
          nodes << node
          photo.hotspots.each do |hotspot|
            link = {
              source: photo.id - first_id,
              target: hotspot.destination.to_i - first_id,
              value: 1
            }
            links << link
          end
        end
      end
    end

    datas = {
      nodes: nodes,
      links: links
    }

    render json: datas
  end

  def index
    # The `live` scope gives us widgets that aren't in the trash.
    # It's also strongly recommended that you eagerly-load the `draft` association via `includes` so you don't keep
    # hitting your database for each draft.
    @stories = Story.live.includes(:draft).order(:updated_at)

    # Load drafted versions of each widget
    # @stories.map! { |story| story.draft.reify if story.draft? }
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
        if !hotspot.location.nil?
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
    @featured_image = ''
    if !@story.films.first.nil?
      if !@story.films.first.image
        @featured_image = @story.films.first
      end
    end
    if !@story.featured_photo.blank?
      @featured_image = Film.find(@story.featured_photo.to_i)
    end
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

    if @story.draft_creation
      flash[:success] = 'A draft of the new story was saved successfully.'
      redirect_to story_path(@story)
    else
      flash[:error] = 'There was an error creating the story. Please review the errors below and try again.'
      render :new
    end
  end

  def update

    @story.update(story_params)
    @story.attributes = story_params
    respond_with(@story)
  end

  def destroy
    # Instead of calling `destroy`, you call `draft_destroy` to "trash" it as a draft
    @story.draft_destroy
    flash[:success] = 'The story was moved to the trash.'
    redirect_to story_path
  end

private

  # Finds non-trashed widget by `params[:id]`
  def find_story
    @story = Story.live.find(params[:id])
    @film = @story.films.new
    @films = @story.films.all
  end

  # If the widget has a draft, load that version of it
  def reify_story
    @story = @story.draft.reify if @story.draft?
  end

  def story_params
    params.require(:story).permit(:name, :first_slide, :featured_photo, :blurb, :byline)
  end
end
