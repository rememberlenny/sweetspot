json.array!(@stories) do |story|
  json.extract! story, :id, :name
  json.url story_url(story, format: :json)
end
