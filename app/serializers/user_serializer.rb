# frozen_string_literal: true

class UserSerializer < ActiveModel::Serializer
  attributes :username, :id, :avatar_small
end