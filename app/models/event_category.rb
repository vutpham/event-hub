class EventCategory < ApplicationRecord
  validates :event_id, :category_id, presence: true
  belongs_to :event
  belongs_to :category
end
