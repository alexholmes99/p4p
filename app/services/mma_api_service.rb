require "Singleton"

class MmaApiService
  include Singleton

  def self.champions
    response = HTTParty.get("https://api.sportradar.us/mma/trial/v2/en/champions.json?api_key=#{ENV['MMA_API_KEY']}")
  end

  def self.rankings
    response = HTTParty.get("https://api.sportradar.com/mma/trial/v2/en/rankings.xml?api_key=#{ENV['MMA_API_KEY']}")
    response["rankings"]["ranking"]
  end

  def self.pound_for_pound
    divisions = rankings.select {|value| value["name"] == "pound_for_pound"}
    p4p = divisions[0]["competitor_rankings"]["competitor_ranking"]
    
    p4p.first(10).map do |rank|
      details = rank["competitor"]
      {
        name: details["name"]
      }
    end
  end
end