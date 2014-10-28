require 'sinatra'
require 'sinatra/cross_origin'

configure do
  enable :cross_origin
end

get "/*" do
  cross_origin :allow_origin => '*',
    :allow_methods => [:get],
    :allow_credentials => false,
    :max_age => "60"
  response.headers['Access-Control-Allow-Origin'] = '*'
  send_file File.join(settings.public_folder, 'main.html')
end

