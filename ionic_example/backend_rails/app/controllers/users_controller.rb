class UsersController < ApplicationController
  before_action :authenticate_user!, except: :show
  before_action :authorize_user!, except: :show
  before_action :set_user, only: [:edit, :update, :destroy]

  def index
    @users = User.order("created_at DESC").page(params[:page]).per(100)
  end

  def new
    @user = User.new
  end

  def show
    show_user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to users_path, notice: "Δημιουργήθηκε νέος χρήστης"
    else
      render :new
    end
  end

  def edit
  end

  def update
    if params[:user][:password].blank? && params[:user][:password_confirmation].blank?
        params[:user].delete(:password)
        params[:user].delete(:password_confirmation)
    end
    if @user.update(user_params)
      redirect_to users_path, notice: "Ανανέωση στοιχείων χρήστη"
    else
      render :edit
    end
  end

  def destroy
    if @user.destroy
      redirect_to users_path, notice: "Ο χρήστης διαγράφηκε"
    else
      redirect_to users_path, error: "Ο χρήστης δε διαγράφηκε"
    end
  end

  private
    def authorize_user!
      unless current_user && current_user.admin
        redirect_to root_path, alert: "Δεν έχετε πρόσβαση σε αυτή τη σελίδα."
      end
    end

    def set_user
      @user = User.find(params[:id])
    end

    def show_user
      if current_user && current_user.admin
        @user = User.includes(:uploads).find(params[:id])
      else
        binding.pry
        @user = current_user.includes(:uploads)
      end
    end

    def user_params
      params.require(:user).permit(:email, :password, :active, :admin, uploads_attributes: [:id, :upload, :description, :_destroy])
    end
end
