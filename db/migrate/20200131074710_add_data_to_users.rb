class AddDataToUsers < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.string "username", default: ""
      t.string "avatar", default: ""
      t.string "media", default: ""
      t.string "bio", default: ""
      t.string "location", default: ""
      t.string "company", default: ""
      t.string "contact", default: ""
    end
  end
end
