# frozen_string_literal: true

class ProfileSerializer < ActiveModel::Serializer
  attributes :username,
             :id,
             :avatar,
             :avatar_small,
             :avatar_medium,
             :avatar_large,
             :bio,
             :name,
             :location,
             :contact,
             :media,
             :company
end