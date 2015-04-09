require "rails_helper"

RSpec.describe HotspotsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/hotspots").to route_to("hotspots#index")
    end

    it "routes to #new" do
      expect(:get => "/hotspots/new").to route_to("hotspots#new")
    end

    it "routes to #show" do
      expect(:get => "/hotspots/1").to route_to("hotspots#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/hotspots/1/edit").to route_to("hotspots#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/hotspots").to route_to("hotspots#create")
    end

    it "routes to #update" do
      expect(:put => "/hotspots/1").to route_to("hotspots#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/hotspots/1").to route_to("hotspots#destroy", :id => "1")
    end

  end
end
