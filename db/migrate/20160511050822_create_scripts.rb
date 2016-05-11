class CreateScripts < ActiveRecord::Migration
  def change
    create_table :scripts do |t|
      t.string :title
      t.string :author
      t.string :genre
      t.text :logline
      t.text :comments
      t.integer :rating
      t.integer :votes #doineed
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
