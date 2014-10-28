# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#(1..20).each do |i| User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: "whatever", address: Faker::Address.street_address, birthdate: Faker::Date.between(60.years.ago, 20.years.ago), phone: Faker::PhoneNumber.cell_phone, website: Faker::Internet.url) end