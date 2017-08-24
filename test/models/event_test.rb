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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
