# == Schema Information
#
# Table name: event_categories
#
#  id          :integer          not null, primary key
#  category_id :integer          not null
#  event_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class EventCategory < ApplicationRecord
  validates :event_id, :category_id, presence: true
  validates :event_id, uniqueness: { scope: :category_id }
  belongs_to :event
  belongs_to :category
end
