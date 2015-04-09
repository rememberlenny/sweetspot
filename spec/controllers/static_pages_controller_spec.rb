require 'rails_helper'

RSpec.describe StaticPagesController, type: :controller do

  describe "GET #dash" do
    it "returns http success" do
      get :dash
      expect(response).to have_http_status(:success)
    end
  end

end
