class MainController < ApplicationController
  before_action :authenticate_user!, except: [:contact]

  def index
  end

  def contact
  end
end
