class AddUserToPosts < ActiveRecord::Migration[5.2]
  def change
    change_table :posts do |t|
      t.references :user, foreign_key: true
    end
  end
end
