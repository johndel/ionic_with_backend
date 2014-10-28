class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable, :registerable,
  devise :database_authenticatable, :recoverable,
         :rememberable, :trackable, :validatable

  has_many :uploads, dependent: :destroy
  accepts_nested_attributes_for :uploads, allow_destroy: true
end
