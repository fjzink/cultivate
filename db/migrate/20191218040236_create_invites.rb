class CreateInvites < ActiveRecord::Migration[6.0]
  def change
    create_table :invites do |t|
      t.integer :ivitable_id
      t.string :invitable_type

      t.timestamps
    end
  end
end
