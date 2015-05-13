# config/initializers/refile.rb
require "refile/s3"

aws = {
  access_key_id: ENV['S3_RE_KEY'],
  secret_access_key: ENV['S3_RE_SECRET'],
  region: "us-east-1",
  bucket: ENV['S3_RE_BUCKET'],
}
Refile.cache = Refile::S3.new(prefix: "cache", **aws)
Refile.store = Refile::S3.new(prefix: "store", **aws)



