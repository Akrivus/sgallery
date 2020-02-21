class ApplicationController < ActionController::Base
  load_and_authorize_resource only: [:show, :edit, :update, :destroy]
  helper_method :current_user
  helper_method :logged_in?

  def current_user    
    User.find_by(id: session[:user_id])  
  end
  def logged_in?
    !current_user.nil?
  end
end
