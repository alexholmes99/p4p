class FightersController < ApplicationController
  def index
    p4p = MmaApiService.pound_for_pound
    @fighters = Fighter.all.each_with_index.map {|fighter, index| {
      "fullname": p4p[index][:name],
      "division": fighter.division_string,
      "avatar": url_for(fighter.avatar),
      "id": fighter.id   
    }}
  end
end
