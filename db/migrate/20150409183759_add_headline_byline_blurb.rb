class AddHeadlineBylineBlurb < ActiveRecord::Migration
  def change
    add_column :stories, :byline, :text
    add_column :stories, :blurb, :text
    add_column :stories, :featured_photo, :integer
    add_column :stories, :first_slide, :integer
  end
end
