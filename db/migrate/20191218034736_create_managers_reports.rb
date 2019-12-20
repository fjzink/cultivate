class CreateManagersReports < ActiveRecord::Migration[6.0]
  def change
    create_table :managers_reports do |t|
      t.integer :manager_id
      t.integer :report_id

      t.timestamps
    end
  end
end
