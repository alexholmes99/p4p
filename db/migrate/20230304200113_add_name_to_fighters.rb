class AddNameToFighters < ActiveRecord::Migration[6.1]
  def change
    add_column :fighters, :first_name, :string
    add_column :fighters, :last_name, :string
    add_column :fighters, :division, :integer
  end
end
