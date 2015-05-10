user = CreateAdminService.new.call
puts 'CREATED ADMIN USER: ' << user.email

CreatePlanServices.new.call
puts 'CREATED PLANS'
