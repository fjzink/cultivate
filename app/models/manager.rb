class Manager < ApplicationRecord
    has_many :ManagersReports
    has_many :reports, through: :ManagersReports
    has_many :invites, as: :invitable
end
