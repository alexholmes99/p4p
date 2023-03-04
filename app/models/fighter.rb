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
  
end
