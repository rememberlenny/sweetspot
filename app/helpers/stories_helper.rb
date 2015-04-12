module StoriesHelper

  def embed_code story
    embed_code =  '<!-- Begin getsweet.io embed -->'
    embed_code += '<iframe src="' + path_url(@story.id) + '" frameborder="0" width="600" height="500"></iframe>'
    embed_code += '<!-- End getsweet.io embed -->'
    return embed_code
  end

  def network_json story

    nodes = []
    links = []

    story.films.each do |photo|
      photo.hotspots.each do |hotspot|
        link = {
          source: photo.id,
          target: hotspot.film_id,
          value: 1
        }
        links << link
      end
    end
    datas = {
      nodes: nodes,
      links: links
    }
    return datas
  end

end
