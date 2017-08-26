class EventCategory < ApplicationRecord
  validates :event_id, :category_id, presence: true
  validates :event_id, uniqueness: { scope: :category_id }
  belongs_to :event
  belongs_to :category
end
