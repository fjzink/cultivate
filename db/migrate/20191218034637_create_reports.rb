class CreateReports < ActiveRecord::Migration[6.0]
  def change
    create_table :reports do |t|
      t.string :name
      t.string :department
      t.date :activated
      t.date :deactivated

      t.timestamps
    end
  end
end
