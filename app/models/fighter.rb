# == Schema Information
#
# Table name: fighters
#
#  id         :integer          not null, primary key
#  division   :integer
#  first_name :string
#  last_name  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Fighter < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :division, presence: true


  enum division: {fly_weight: 0, bantam_weight: 1, feather_weight: 2, light_weight: 3, welter_weight: 4, middle_weight: 5, light_heavy_weight: 6, heavy_weight: 7}
end
