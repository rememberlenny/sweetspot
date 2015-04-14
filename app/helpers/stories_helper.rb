module StoriesHelper

  def embed_code story, width = nil
    if width.nil?
      width = 600
    end
    dimensions = 'width="' + width.to_s + '"'
    embed_code =  '<!-- Begin getsweet.io embed -->'
    embed_code += '<iframe class="embed-getsweet embed-getsweet-' + width.to_s + '" src="' + path_url(@story.id) + '" frameborder="0" ' + dimensions + ' height="500"></iframe>'
    embed_code += '<!-- End getsweet.io embed -->'
    return embed_code
  end

  def network_json story

  end

end
