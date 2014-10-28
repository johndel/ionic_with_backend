json.array!(@contacts) do |contact|
  json.firstName do
    json.array! [contact.first_name, "text"]
  end

  json.lastName do
    json.array! [contact.last_name, "text"]
  end

  json.mail do
    json.array! [contact.email, "text"]
  end

  json.street do
    json.array! [contact.address, "text"]
  end
  
  json.birthday do
    json.array! [contact.birthdate, "date"]
  end   

  json.mobile do
    json.array! [contact.phone, "tel"]
  end  

  json.site do
    json.array! [contact.website, "url"]
  end  

  # json.extract! contact, :id, :first_name, :last_name, :email, :password, :address, :birthdate, :phone, :website
  json.url contact_url(contact, format: :json)
end
