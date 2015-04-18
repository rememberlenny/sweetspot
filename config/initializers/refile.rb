# config/initializers/refile.rb
# require "refile/backend/s3"

# aws = {
#   access_key_id: ENV['S3_RE_KEY'],
#   secret_access_key: ENV['S3_RE_SECRET'],
#   bucket: ENV['S3_RE_BUCKET'],
# }
# Refile.cache = Refile::Backend::S3.new(prefix: "cache", **aws)
# Refile.store = Refile::Backend::S3.new(prefix: "store", **aws)
