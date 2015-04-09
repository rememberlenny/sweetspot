require 'rails_helper'

RSpec.describe "hotspots/new", type: :view do
  before(:each) do
    assign(:hotspot, Hotspot.new(
      :films => "",
      :location => "MyString"
    ))
  end

  it "renders new hotspot form" do
    render

    assert_select "form[action=?][method=?]", hotspots_path, "post" do

      assert_select "input#hotspot_films[name=?]", "hotspot[films]"

      assert_select "input#hotspot_location[name=?]", "hotspot[location]"
    end
  end
end
