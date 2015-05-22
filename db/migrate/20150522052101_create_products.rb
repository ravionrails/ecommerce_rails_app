class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.integer :color
      t.integer :category
      t.string :size
      t.decimal :rate, precision: 10, scale: 2
      t.decimal :discount, precision: 4, scale: 2

      t.timestamps
    end
  end
end
