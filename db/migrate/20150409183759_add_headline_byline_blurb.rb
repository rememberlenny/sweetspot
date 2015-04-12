class AddHeadlineBylineBlurb < ActiveRecord::Migration
  def change
    add_column :stories, :byline, :text
    add_column :stories, :blurb, :text
    add_column :stories, :featured_photo, :integer
    add_column :stories, :first_slide, :integer
  end
end


ss = Story.all
ss.each do |s|
  if ! s.featured_photo.nil?
    puts 'Found featured_photo non-nil'
    s.featured_photo = s.featured_photo.to_i
  end
  if ! s.first_slide.nil?
    puts 'Found featured_slide non-nil'
    s.first_slide = s.first_slide.to_i
  end
  s.save
end
