require 'rails_helper'

RSpec.describe "hotspots/edit", type: :view do
  before(:each) do
    @hotspot = assign(:hotspot, Hotspot.create!(
      :films => "",
      :location => "MyString"
    ))
  end

  it "renders the edit hotspot form" do
    render

    assert_select "form[action=?][method=?]", hotspot_path(@hotspot), "post" do

      assert_select "input#hotspot_films[name=?]", "hotspot[films]"

      assert_select "input#hotspot_location[name=?]", "hotspot[location]"
    end
  end
end
