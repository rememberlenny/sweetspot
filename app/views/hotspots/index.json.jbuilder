json.array!(@hotspots) do |hotspot|
  json.extract! hotspot, :id, :films, :location
  json.url hotspot_url(hotspot, format: :json)
end
