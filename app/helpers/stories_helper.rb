module StoriesHelper

  def embed_code story
    embed_code =  '<!-- Begin getsweet.io embed -->'
    embed_code += '<iframe src="' + path_url(@story.id) + '" frameborder="0" width="600" height="500"></iframe>'
    embed_code += '<!-- End getsweet.io embed -->'
    return embed_code
  end

  def network_json story

  end

end
