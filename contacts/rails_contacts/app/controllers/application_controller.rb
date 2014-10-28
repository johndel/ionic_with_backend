class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :allow_iframes
  
  def allow_iframes
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
    headers['Access-Control-Max-Age'] = "1728000"
    headers["Pragma"] = "no-cache"
    headers["Cache-Control"] = "must-revalidate"   
    headers["Cache-Control"] = "no-cache"   
    headers["Cache-Control"] = "no-store"  
    response.headers.delete('X-Frame-Options')
    response.headers['X-Frame-Options'] = 'ALLOWALL'
  end
end
