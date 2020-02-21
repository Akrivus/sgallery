class Ability
  include CanCan::Ability

  def initialize(user)
    return nil if user.nil?
    unless user.admin?
      cannot :read, Photo, hidden: true
      can :destroy, Comment, photo: { user_id: user.id }
      can :manage, :all, user_id: user.id
    else
      can :manage, :all
    end
  end
end
