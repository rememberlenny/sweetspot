require 'rails_helper'

RSpec.describe "hotspots/show", type: :view do
  before(:each) do
    @hotspot = assign(:hotspot, Hotspot.create!(
      :films => "",
      :location => "Location"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(/Location/)
  end
end
