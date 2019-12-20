departments = ["Engineering", "Sales", "Product"]

3.times do |index|
    man = Manager.create(name: Faker::Name.name, department: departments[index])
    rep = Report.create(name: Faker::Name.name, department: departments[index])
    ManagersReport.create(manager: man, report: rep)
end