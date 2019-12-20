class Report < ApplicationRecord
    has_many :ManagersReports
    has_many :invites, as: :ivitable
end
