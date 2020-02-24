class UserMailer < ApplicationMailer
  def welcome_email
    @name = params[:name]
    mail(to: params[:email], subject: 'Welcome to PhotoGo')
  end
end
