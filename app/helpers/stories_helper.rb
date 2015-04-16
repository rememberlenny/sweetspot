module StoriesHelper

  def embed_code story, chrome = true, width = nil
    if chrome == false
      chrome_status = 'chromestatus=false&'
    else
      chrome_status = ''
    end
    if width.nil?
      width = 600
    end
    dimensions = 'width="' + width.to_s + '"'
    embed_code =  '<!-- Begin getsweet.io embed -->'
    embed_code += '<iframe class="embed-getsweet embed-getsweet-' + width.to_s + '" src="' + path_url(@story.id) + '?' + chrome_status + ' " frameborder="0" ' + dimensions + ' height="500"></iframe>'
    embed_code += '<!-- End getsweet.io embed -->'
    return embed_code
  end

  def network_json story

  end

  def get_user_image(@story)
    if !@story.user_id.nil?
      user = User.find(user_id)
      image = image_tag attachment_url(user, :image, :fill, 100, 100), :class => "image-target"
      return image
    end
  end
end
