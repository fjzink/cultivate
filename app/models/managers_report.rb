class ManagersReport < ApplicationRecord
    belongs_to :manager 
    belongs_to :report
end
