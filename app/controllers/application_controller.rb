class ApplicationController < ActionController::Base
  load_and_authorize_resource only: [:show, :edit, :update, :destroy]
  helper_method :current_user
  helper_method :set_current_user
  helper_method :logged_in?

  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.html { redirect_to main_app.root_url, notice: exception.message }
      format.json { head :forbidden, content_type: 'text/html' }
    end
  end

  def current_user
    User.find_by(id: session[:user_id])
  end
  def set_current_user(user)
    session[:user_id] = user.id
    user
  end
  def logged_in?
    !current_user.nil?
  end
end
