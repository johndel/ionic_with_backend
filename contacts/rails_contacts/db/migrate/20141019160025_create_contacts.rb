class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password
      t.string :address
      t.date :birthdate
      t.string :phone
      t.string :website

      t.timestamps
    end
  end
end
