require 'rails_helper'

RSpec.describe OnboardController, type: :controller do

  describe "GET #about_process" do
    it "returns http success" do
      get :about_process
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #setup_story" do
    it "returns http success" do
      get :setup_story
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #register_account" do
    it "returns http success" do
      get :register_account
      expect(response).to have_http_status(:success)
    end
  end

end
