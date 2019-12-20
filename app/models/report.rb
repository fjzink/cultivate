class Report < ApplicationRecord
    has_many :ManagersReports
    has_many :invites, as: :invitable
end
