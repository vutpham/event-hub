# config/initializers/pusher.rb
require 'pusher'

Pusher.app_id = '389209'
Pusher.key = '3c4d8b46e0012e16d645'
Pusher.secret = '20a83ede023deb29ab94'
Pusher.cluster = 'us2'
Pusher.logger = Rails.logger
Pusher.encrypted = true
