class CreateScripts < ActiveRecord::Migration
  def change
    create_table :scripts do |t|
      t.string :title
      t.string :author
      t.text :logline
      t.integer :rating
      t.integer :genre_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
