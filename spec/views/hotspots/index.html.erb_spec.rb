require 'rails_helper'

RSpec.describe "hotspots/index", type: :view do
  before(:each) do
    assign(:hotspots, [
      Hotspot.create!(
        :films => "",
        :location => "Location"
      ),
      Hotspot.create!(
        :films => "",
        :location => "Location"
      )
    ])
  end

  it "renders a list of hotspots" do
    render
    assert_select "tr>td", :text => "".to_s, :count => 2
    assert_select "tr>td", :text => "Location".to_s, :count => 2
  end
end
