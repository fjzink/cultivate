class Invite < ApplicationRecord
    belongs_to :invitable, polymorphic: true
end
