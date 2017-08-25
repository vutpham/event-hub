# == Schema Information
#
# Table name: events
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  short_description :text             not null
#  full_description  :text             not null
#  image_url         :string           default("default_image.jpg"), not null
#  date              :date             not null
#  host_id           :integer          not null
#  total_quantity    :integer
#  quantity_left     :integer
#  price             :float            default("0.0"), not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Event < ApplicationRecord
  validates :title, :short_description, :full_description,
    :date, :host_id, :price, presence: true

  belongs_to :host,
    foreign_key: :host_id, class_name: "User"
end
