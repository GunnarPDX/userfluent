class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string "title"
      t.text "content"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.string "time"
      t.string "image"
      t.string "category"
      t.string "platform"
    end
  end
end
