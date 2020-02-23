class AddLinkToPosts < ActiveRecord::Migration[5.2]
  def change
    change_table :posts do |t|
      t.string :link, default: ""
    end
  end
end
