module StoriesHelper

  def embed_code story
    embed_code = '<iframe src="' + path_url(@story.id) + '" frameborder="0" width="600" height="500"></iframe>'
    return embed_code
  end

end
