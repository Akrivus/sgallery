class Ability
  include CanCan::Ability

  def initialize(user)
    can :read, :all
    unless user.nil?
      can :manage, Photo, user: { id: user.id }
      can :manage, Comment, user: { id: user.id }
      can :manage, Album, user: { id: user.id }
      can :manage, User, id: user.id
      can :delete, Comment, photo: { user: { id: user.id } }
      can :delete, :all if user.admin?
    end
  end
end
