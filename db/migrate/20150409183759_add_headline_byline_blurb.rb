class AddHeadlineBylineBlurb < ActiveRecord::Migration
  def change
    add_column :stories, :byline, :text
    add_column :stories, :blurb, :text
  end
end
