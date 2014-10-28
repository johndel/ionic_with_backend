CarrierWave.configure do |config|
  config.fog_credentials = {
    provider: "AWS",
    aws_access_key_id: "your_id",
    aws_secret_access_key: "your_key",
    region: "eu-west-1"
  }

  config.fog_directory = "your_bucker_name"
end