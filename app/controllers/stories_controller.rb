class StoriesController < ApplicationController
  before_action :set_story, only: [:show, :edit, :update, :destroy]

  respond_to :html, :json

  def path

  end

  def index
    @stories = Story.all
    respond_with(@stories)
  end

  def show_json story
    @story = story
    return @story
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: show_json(@story) }
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
      params.require(:story).permit(:name)
    end
end
