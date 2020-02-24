class IndexController < ApplicationController

  # GET /
  def index
    if logged_in?
      redirect_to current_user
    else
      render :index
    end
  end

  # GET /logout
  def logout
    session[:user_id] = nil
    redirect_to '/'
  end
end
