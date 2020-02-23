class IndexController < ApplicationController

  # GET /
  def index
    render :index
  end

  # GET /logout
  def logout
    session[:user_id] = nil
    redirect_to '/'
  end
end
