module ApplicationHelper

  def story_count tier
    if tier == 'free'
      return '1'
    elsif tier == 'basic'
      return '3'
    elsif tier == 'pro'
      return 'Unlimited'
    elsif tier == 'organization'
      return 'Unlimited'
    end
  end
end
