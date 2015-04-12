module StoriesHelper

  def embed_code story
    embed_code = '<iframe src="' + path_url(@story.id) + '" frameborder="0"></iframe>'
    return embed_code
  end

end
