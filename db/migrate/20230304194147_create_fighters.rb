class CreateFighters < ActiveRecord::Migration[6.1]
  def change
    create_table :fighters do |t|

      t.timestamps
    end
  end
end
