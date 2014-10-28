class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :json
  
  def create
    user = User.where(email: params[:email]).first if params[:email]
    if user && params[:password] && user.valid_password?(params[:password])
      render json: { message: "Success",
                     uploads: user.uploads.map   { |upload|  { url: upload.upload_url,
                                                               description: upload.description,
                                                               content_type: upload.content_type,
                                                               file_size: upload.beautify_file_size,
                                                               created_at: upload.created_at.strftime("%d/%m/%Y") } }
                   }
    else
      render json: { message: "Error", errors: ["Λάθος email ή κωδικός. Παρακαλούμε δοκιμάστε ξανά."] }
    end
  end
  
  def destroy
    sign_out(resource_name)
  end
 
  protected
  def ensure_params_exist
    return unless params[:user_login].blank?
    render json: { success: false, message: "missing user_login parameter" }, status: 422
  end
 
  def invalid_login_attempt
    render json: { success: false, message: "΄Λάθος email ή κωδικός" }, status: 401
  end
end