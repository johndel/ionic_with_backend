class Upload < ActiveRecord::Base
  mount_uploader :upload, UploadUploader
  belongs_to :user, touch: true
  before_save :update_upload_attributes


  def beautify_file_size
    if file_size
      file_size_length = file_size.length
      if file_size_length <= 3
        "#{file_size}B"
      elsif file_size_length > 3 && file_size_length < 7
        "#{file_size.to_d / 1000}KB"
      else
        "#{file_size.to_d / 1000000}MB"
      end
    end
  end

  private
    def update_upload_attributes
      if upload.present? && upload_changed?
        self.content_type = upload.file.content_type
        self.file_size = upload.file.size
      end
    end

end
