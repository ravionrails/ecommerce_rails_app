class Product < ActiveRecord::Base

	has_attached_file :image, 
														:styles => { :medium => "300x300>", :thumb => "100x100>" }, 														
														:default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

	COLOR = ['Red', 'Blue', 'Green', 'Silver', 'Black']

	CATEGORY = ['Households', 'Mobiles', 'Electronics', 'Mobile Accessories']

end
