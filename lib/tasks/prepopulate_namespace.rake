namespace :prepopulate_namespace do

  desc "It will populate products table"
  task populate_products: :environment do
  	puts 'product creating......'
  	1000.times do 
	  	p1 = Product.create({name: "Micromax A250", description: "", color: Product::COLOR.index('Silver'), category: Product::CATEGORY.index('Mobiles'), size: '5 inch', rate: 16000.00, discount: 15, image: File.open("lib/assets/Micromax-Canvas-Turbo-A-250.jpg") })
	  	p2 = Product.create({name: "Micromax Canvas", description: "", color: Product::COLOR.index('Black'), category: Product::CATEGORY.index('Mobiles'), size: '4.5 inch', rate: 11500.00, discount: 10, image: File.open("lib/assets/Micromax-Canvas-Turbo-A-250.jpg") })  	
	  	puts '\/'
	  end
  end

end
