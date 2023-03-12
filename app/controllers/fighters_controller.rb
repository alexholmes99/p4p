class FightersController < ApplicationController
  def index
   
    @fighters = Fighter.all.map {|fighter| {
      "fullname": fighter.full_name,
      "division": fighter.division_string,
      "avatar": url_for(fighter.avatar),
      "id": fighter.id   
    }}
  end
end
