class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text "content"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.string "time"
      t.references :post, foreign_key: true
      t.references :user, foreign_key: true
    end
  end
end
