class ProductsController < ApplicationController

	def index
		@products = Product.page(params[:page]).per_page(10)
		respond_to do |p|
			p.html
			p.js
		end
	end

end