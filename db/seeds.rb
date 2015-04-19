user = CreateAdminService.new.call
puts 'CREATED ADMIN USER: ' << user.email
CreatePlanService.new.call
puts 'CREATED PLANS'
