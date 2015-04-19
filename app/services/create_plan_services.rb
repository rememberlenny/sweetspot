class CreatePlanService
  def call
    p1 = Plan.where(name: 'Organization').first_or_initialize do |p|
      p.amount = 15
      p.interval = 'month'
      p.stripe_id = 'SWTSPT-Org'
    end
    p1.save!(:validate => false)
    p2 = Plan.where(name: 'Pro').first_or_initialize do |p|
      p.amount = 9.99
      p.interval = 'month'
      p.stripe_id = 'SWTSPT-Pro'
    end
    p2.save!(:validate => false)
    p3 = Plan.where(name: 'Basic').first_or_initialize do |p|
      p.amount = 5
      p.interval = 'month'
      p.stripe_id = 'SWTSPT-Basic'
    end
    p3.save!(:validate => false)
  end
end
