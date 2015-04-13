module StaticPagesHelper

  def get_featured_photo story
    if !story.featured_photo.nil?
      puts 'THIS WORKS'
      url = attachment_url(Film.find(story.featured_photo), :image) + '.jpeg'
      return url
    end
  end
end
