class Ticket < ApplicationRecord
  validates :user, :event, presence: true

  belongs_to :owner,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :event
end
