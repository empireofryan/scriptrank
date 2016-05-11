class CreateScripts < ActiveRecord::Migration
  def change
    create_table :scripts do |t|
      t.string :title
      t.string :author
      t.string :genre
      t.text :logline
      t.integer :rating
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
