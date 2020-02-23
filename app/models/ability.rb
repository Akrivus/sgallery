class Ability
  include CanCan::Ability

  def initialize(user)
    can :read, :all
    unless user.nil?
      can :manage, Comment, Photo, Album, user_id: user.id
      can :manage, User, id: user.id
      can :destroy, Comment, photo: { user_id: user.id }
      can :read, Photo, hidden: false
      if user.admin?
        can :manage, :all
      end
    end
  end
end
