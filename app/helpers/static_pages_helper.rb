module StaticPagesHelper

  def get_featured_photo story
    if !story.featured_photo.nil?
      url = attachment_url(Film.find(story.featured_photo), :image) + '.jpeg'
      return url
    end
  end

  def contact

  end

  def terms

  end

  def privacy

  end

  def submission

  end
end
