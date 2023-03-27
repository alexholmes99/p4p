require "Singleton"

class MmaApiService
  include Singleton

  def self.champions
    response = HTTParty.get('https://api.sportradar.us/mma/trial/v2/en/champions.json?api_key=bv5y39b93cx4daqarn3sfj9m')
  end
end