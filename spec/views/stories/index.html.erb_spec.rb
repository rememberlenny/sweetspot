require 'rails_helper'

RSpec.describe "stories/index", type: :view do
  before(:each) do
    assign(:stories, [
      Story.create!(
        :name => "Name"
      ),
      Story.create!(
        :name => "Name"
      )
    ])
  end

  it "renders a list of stories" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
  end
end
