class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :description
      t.integer :script_id
      t.integer :user_id
    end
  end
end
