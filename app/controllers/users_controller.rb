class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  def index
    @users = User.all
  end

  # GET /users/1
  def show

  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit

  end

  # POST /users/login
  def login
    @user = User.find_by(email: params[:email]).try(:authenticate, params[:password])
    set_current_user(@user) if @user
    respond_to do |format|
      if @user
        format.html { redirect_to @user }
      else
        format.html { redirect_to '/' }
      end
    end
  end

  # POST /users
  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        UserMailer.with(user: set_current_user(@user)).welcome_email.deliver_now
        format.html { redirect_to @user }
      else
        format.html { render :new }
      end
    end
  end

  # PATCH/PUT /users/1
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user }
      else
        format.html { render :edit }
      end
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :avatar)
    end
end
