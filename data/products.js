export function getProduct(productId){
    let matchingItem;
    products.forEach((product)=>{
        if(productId===product.productId){
            matchingItem=product;
        }
    });
    return matchingItem;

}

export let products=[
    {
        productId:'PID1001',
        category: 'sarees',
        image: 'https://i.ibb.co/Bzwv6mq/product1image.webp',
        rating: 4.3,
        name: 'Dark Green Kanchipuram Silk Saree',
        price: 2200,
        description: "Elevate your traditional wardrobe with this exquisite Dark Green Kanchipuram Silk Saree, crafted with precision to embody the rich heritage and craftsmanship of Kanchipuram silk. The luxurious dark green hue forms the base of this stunning saree, exuding elegance and sophistication. Made from premium quality Kanchipuram silk, it is known for its durability and rich texture, ensuring you stay comfortable while looking resplendent. The saree features intricate gold zari motifs woven throughout the fabric, adding a touch of opulence, with detailed floral and geometric patterns reflecting the traditional artistry of Kanchipuram weaving"
    },
    {
        productId:'PID1002',
        category: 'sarees',
        image: 'https://i.ibb.co/7bWMKkV/product2image.webp',
        rating: 3.2,
        name: "Women's Linen Cotton Embroidery Work Saree with Blouse Piece",
        price: 1200,
        description: "Explore the collection of beautifully designed linen cotton fabric embroidered Saree from ALAGINI on Amazon. Each piece is elegantly crafted and will surely add to your wardrobe. Pair this piece with heels or flats for a graceful look."
    },
    {
        productId:'PID1003',
        category: 'sarees',
        image: 'https://i.ibb.co/SrGLX5Q/product3image.jpg',
        rating: 3.9,
        name: "Exclusive Warli Embroidered Semi Silk Saree",
        price: 7500,
        description: "Step into elegance with our Exclusive Warli Embroidered Semi Silk Saree, where traditional craftsmanship meets contemporary allure. Handcrafted with intricate Warli embroidery, this saree blends the richness of semi-silk fabric with timeless artistry."
    },
    {
        productId:'PID1004',
        category: 'sarees',
        image: 'https://i.ibb.co/1fnBQRv/product4image.jpg',
        rating: 3.5,
        name: "Georgette Designer Saree with Blouse Piece",
        price: 1900,
        description: "Make the heads turn whenever you costume up in this pretty Red georgette classic designer saree. The amazing attire creates a dramatic canvas with amazing embroidered and patch border work. Comes with matching blouse."
    },
    {
        productId:'PID1005',
        category: 'sarees',
        image: 'https://i.ibb.co/HqrqDwr/product5image.webp',
        rating: 4.2,
        name: "Floral Printed Poly Georgette Saree",
        price: 7500,
        description: "Faux Georgette Saree in Royal Blue,Gracefully enhanced with Digital Print and Patch Border Work Available with a Royal Blue Semi-stitched Faux Georgette Blouse Crafted in Round Neck and Short Sleeve. Blouse Length is 13 to 15 and Sleeve Length is 1 to 5 inches respectively"
    },
    {
        productId:'PID1006',
        category: 'shirts',
        image: 'https://i.ibb.co/0DzcCy1/product6image.jpg',
        rating: 4.6,
        name: "DENNISLINGO PREMIUM ATTIRE Checked Slim Fit Shirt",
        price: 700,
        description: "DENNISLINGO Premium Attire Checked Slim Fit Shirt offers a sophisticated blend of style and comfort. Crafted with meticulous attention to detail, this shirt features a timeless checked pattern that adds a touch of elegance to any wardrobe. Tailored for a slim fit, it enhances the silhouette while ensuring freedom of movement. Ideal for both formal and casual settings, it promises versatility and enduring quality"
    },
    {
        productId:'PID1007',
        category: 'shirts',
        image: 'https://i.ibb.co/ygCxxg4/product7image.webp',
        rating: 4.1,
        name: "Men Regular Fit Printed Slim Collar Casual Shirt",
        price: 1000,
        description: "Discover timeless style and comfort with our Men's Regular Fit Printed Slim Collar Casual Shirt. Crafted with premium cotton fabric, this shirt blends contemporary design with classic sophistication. The slim collar adds a modern touch, perfect for both casual outings and semi-formal occasions. Available in a variety of prints to suit your personal style, this shirt promises durability and a flattering fit. Elevate your wardrobe with effortless elegance and unparalleled comfort."
    },
    {
        productId:'PID1008',
        category: 'shirts',
        image: 'https://i.ibb.co/1ZYcq72/product8image.webp',
        rating: 3.9,
        name: "Standard Slim Fit Pure Cotton Casual Shirt",
        price: 690,
        description: "Discover timeless elegance with our Standard Slim Fit Pure Cotton Casual Shirt, crafted for those who appreciate both style and comfort. Made from 100% premium cotton, this shirt promises a soft and breathable feel, perfect for all-day wear. Its slim fit design offers a modern silhouette that effortlessly transitions from office to casual outings. Available in a range of classic colors, each shirt is meticulously tailored with attention to detail, featuring a button-down collar and adjustable cuffs for a polished look. Elevate your wardrobe with this versatile essential that combines sophistication with everyday ease."
    },
    {
        productId:'PID1009',
        category: 'shirts',
        image: 'https://i.ibb.co/HddYv7j/product9image.jpg',
        rating: 3.3,
        name: "CAMPUS SUTRA Checked Spread-Collar Shirt",
        price: 1100,
        description: "Introducing the CAMPUS SUTRA Checked Spread-Collar Shirt, a versatile addition to your wardrobe. Crafted with meticulous attention to detail, this shirt combines classic style with contemporary comfort. The checked pattern adds a touch of sophistication, perfect for both casual outings and semi-formal occasions. Featuring a spread collar design, it offers a smart and polished look that effortlessly pairs with jeans or tailored trousers. Elevate your style with the timeless appeal of the CAMPUS SUTRA Checked Spread-Collar Shirt, where comfort meets elegance"
    },
    {
        productId:'PID1010',
        category: 'shirts',
        image: 'https://i.ibb.co/nChcGq4/product10image.jpg',
        rating: 4.0,
        name: "Men Regular Fit Checkered Spread Collar Casual Shirt",
        price: 910,
        description: "Elevate your casual wardrobe with our Men's Regular Fit Checkered Spread Collar Casual Shirt. Crafted for comfort and style, this shirt features a classic checkered pattern that effortlessly blends versatility with a touch of sophistication. The spread collar adds a modern twist, making it suitable for both casual outings and semi-formal occasions. Pair it with jeans for a relaxed look or layer it under a blazer for a more polished ensemble. Available in a range of sizes and colors to suit every preference, this shirt is a must-have staple for any wardrobe."
    },
    {
        productId:'PID1011',
        category: 'jeans',
        image: 'https://i.ibb.co/7N55HDq/product11image.webp',
        rating: 4.4,
        name: "Lymio Men Jeans || Men Jeans Pants || Denim Jeans || Baggy Jeans for Men (Jeans-04-05)",
        price: 860,
        description: "Discover ultimate comfort and style with our Lymio Men Jeans. Crafted for the modern man, these jeans blend classic denim appeal with contemporary trends. Featuring a relaxed baggy fit, they offer unrestricted movement and a laid-back silhouette. Perfect for everyday wear or casual outings, the durable denim fabric ensures long-lasting quality"
    },
    {
        productId:'PID1012',
        category: 'jeans',
        image: 'https://i.ibb.co/NmSMWvt/product12image.webp',
        rating: 4.7,
        name: "MEN'S 511 MID INDIGO SLIM FIT JEANS",
        price: 2400,
        description: "A modern slim with room to move, the 511 Slim Fit Stretch Jeans are a classic, you can wear with anything. Complete your casual wardrobe with a splash of style with these 511 slim fit jeans from Levi's. Cut in a cotton fabric with the right amount of stretch, these mid-indigo jeans in solid pattern can be paired with most things to create a super cool outfit.These jeans sit low waist with a slim fit from hip to ankle.It is woven, with a hint of stretch, to deliver maximum comfort.Cut close to the body, the 511 Slim is a great alternative to the skinny jeans."
    },
    {
        productId:'PID1013',
        category: 'jeans',
        image: 'https://i.ibb.co/VHPBBHq/product13image.webp',
        rating: 4.8,
        name: "MEN'S 65504 MID INDIGO SKINNY JEANS",
        price: 3400,
        description: "These skinny jeans are known for their classic style, timeless appeal, and easy wearability. Made with sturdy denim that's been used for generations, these jeans will last you a lifetime. Levi's are the epitome of utilitarian fashion, and you can't go wrong with them."
    },
    {
        productId:'PID1014',
        category: 'jeans',
        image: 'https://i.ibb.co/crZ1HrQ/product14image.webp',
        rating: 3.1,
        name: "MEN'S 512 LIGHT INDIGO SLIM TAPERED FIT JEANS",
        price: 2200,
        description: "Everything you like about 512 slim, but updated with a narrow fit through the thigh and tapered leg for the fashion-forward guy. It's perfect for the modern look right now. This pair has just the right amount of stretch for all-day comfort and comes in a blue hue with the classic 5 pocket and a cotton material. Style it with our classic shirts and a pair of sneakers to complete your casual look."
    },
    {
        productId:'PID1015',
        category: 'jeans',
        image: 'https://i.ibb.co/fDXCpsD/product15image.webp',
        rating: 3.6,
        name: "MEN'S 512 MID INDIGO SLIM TAPERED FIT JEANS",
        price: 2600,
        description: "Everything you like about 512 slim, but updated with a narrow fit through the thigh and tapered leg for the fashion-forward guy. It's perfect for the modern look right now. This pair has just the right amount of stretch for all-day comfort and comes in a blue hue with the classic 5 pocket and a cotton material. Style it with our classic shirts and a pair of sneakers to complete your casual look."
    },
    {
        productId:'PID1016',
        category: 'kurtis',
        image: 'https://i.ibb.co/x7BZttt/product16image.jpg',
        rating: 3.9,
        name: "WOMEN TOUCH Floral Print Straight Kurta",
        price:  750,
        description: "Embrace elegance and comfort with the WOMEN TOUCH Floral Print Straight Kurta. Designed for the modern woman, this kurta features a timeless floral print that adds a touch of sophistication to your everyday wardrobe."
    },
    {
        productId:'PID1017',
        category: 'kurtis',
        image: 'https://i.ibb.co/hZ3YCY8/product17image.webp',
        rating: 4.1,
        name: "Women Rayon A-line Printed Long Kurti With Palazzos",
        price: 560,
        description: "Step into effortless elegance with our Women Rayon A-line Printed Long Kurti With Palazzos. This exquisite ensemble is crafted from high-quality rayon, ensuring a soft, lightweight feel that's perfect for all-day wear."
    },
    {
        productId:'PID1018',
        category: 'kurtis',
        image: 'https://i.ibb.co/K0Z1z4X/product18image.jpg',
        rating: 4.2,
        name: "LIBAS Women Printed Cotton Blend Straight Kurta (Blue)",
        price: 590,
        description: "Elevate your everyday style with the LIBAS Women Printed Cotton Blend Straight Kurta in a captivating shade of blue. Crafted with precision and care, this kurta offers a perfect blend of comfort and elegance, making it an essential addition to your wardrobe."
    },
    {
        productId:'PID1019',
        category: 'kurtis',
        image: 'https://i.ibb.co/wWwRnKb/product19image.png',
        rating: 4.6,
        name: "Jaipur Sarai Women Striped Pure Cotton Straight Kurta  (Beige)",
        price: 425,
        description: "Elevate your everyday ethnic wear with the Jaipur Sarai Women Striped Pure Cotton Straight Kurta in a timeless beige hue. Crafted from 100% pure cotton, this kurta promises unmatched comfort and breathability, perfect for any season.The subtle striped pattern adds a touch of sophistication, making it a versatile piece that can be dressed up or down. The straight-cut design ensures a flattering fit for all body types, offering both style and ease of movement."
    },
    {
        productId:'PID1020',
        category: 'kurtis',
        image: 'https://i.ibb.co/kSYnvDH/product20image.jpg',
        rating: 4.4,
        name: "MIRCHI FASHION Floral Print Straight Kurta Set",
        price: 825,
        description: "Elevate your ethnic wardrobe with the MIRCHI FASHION Floral Print Straight Kurta Set. This exquisite ensemble combines traditional charm with contemporary style, making it perfect for any occasion."
    },
    {
        productId:'PID1021',
        category: 'tshirts',
        image: 'https://i.ibb.co/q149hp4/product21image.jpg',
        rating: 3.8,
        name: "Men Colorblock Round Neck Cotton Blend Navy Blue T-Shirt",
        price: 220,
        description: "Elevate your casual wardrobe with the Men Colorblock Round Neck Cotton Blend Navy Blue T-Shirt. Designed for the modern man, this versatile piece effortlessly combines comfort and style."
    },
    {
        productId:'PID1022',
        category: 'tshirts',
        image: 'https://i.ibb.co/pP91sJL/product22image.jpg',
        rating: 4.4,
        name: "Lush Green Polo T-shirt",
        price: 540,
        description: "Step into a world of timeless style with our Lush Green Polo T-shirt. Crafted for those who appreciate the perfect blend of comfort and sophistication, this polo is more than just a shirt—it's a statement."
    },
    {
        productId:'PID1023',
        category: 'tshirts',
        image: 'https://i.ibb.co/ydKQBNK/product23image.jpg',
        rating: 4.1,
        name: "Colourblock Full Sleeves T-shirt",
        price: 1200,
        description: "Unveil a fresh, contemporary look with our Colourblock Full Sleeves T-shirt, designed to infuse your wardrobe with a splash of bold colors and timeless charm. This t-shirt is perfect for those who love to make a statement with their style."
    },
    {
        productId:'PID1024',
        category: 'tshirts',
        image: 'https://i.ibb.co/sqftPLc/product24image.jpg',
        rating: 4.3,
        name: "Men Navy Solid Polo Neck T-Shirt",
        price: 1220,
        description: "Elevate your casual wardrobe with our Men Navy Solid Polo Neck T-shirt, a perfect blend of comfort and style. Crafted from premium cotton, this t-shirt promises a soft touch against your skin while ensuring durability. The classic navy hue adds versatility, making it ideal for various occasions, whether paired with jeans for a relaxed outing or under a blazer for a more polished look. The polo neck design offers a timeless appeal, perfect for the modern man seeking effortless sophistication. Upgrade your essentials with this wardrobe staple that combines practicality with understated elegance."
    },
    {
        productId:'PID1025',
        category: 'tshirts',
        image: 'https://i.ibb.co/LSMR91S/product25image.webp',
        rating: 4.2,
        name: "Cotstyle Cotton Fabrics Round Neck Short Length Plain Half Sleeve Casual & Daily Wear Men's T-Shirts",
        price: 460,
        description: "Discover comfort and style with the Cotstyle Cotton Fabrics Round Neck T-Shirt. Crafted from premium cotton fabrics, this short-length, half-sleeve t-shirt is designed for both casual and daily wear. Its round neck ensures a classic look, while the plain design offers versatility for various outfits. Perfect for all-day comfort, whether you're lounging at home or out for a casual outing. Available in a range of sizes and colors to suit your personal style."
    },
    {
        productId: 'PID1026',
        category: 'accessories',
        image: 'https://i.ibb.co/DM2ZRBH/product26image.png',
        rating: '',
        name: '',
        price: 0,
        description: ''

    },
    {
        productId: 'PID1027',
        category: 'accessories',
        image: 'https://i.ibb.co/7pdgg0h/product27image.jpg',
        rating: '',
        name: '',
        price: 0,
        description: ''

    },
    {
        productId: 'PID1028',
        category: 'accessories',
        image: 'https://i.ibb.co/hM7zxkJ/product28image.webp',
        rating: '',
        name: '',
        price: 0,
        description: ''

    },
    {
        productId: 'PID1029',
        category: 'accessories',
        image: 'https://i.ibb.co/sCD8YgH/product29image.webp',
        rating: '',
        name: '',
        price: 0,
        description: ''

    },
    {
        productId: 'PID1030',
        category: 'accessories',
        image: 'https://i.ibb.co/Kr380Z7/product30image.webp',
        rating: '',
        name: '',
        price: 0,
        description: ''

    },
    {
        productId: 'PID1031',
        category:'accessories',
        image: 'https://i.ibb.co/P4t7P8w/product31image.webp',
        rating: '',
        name: '',
        price: 0,
        description: '',
    },
    {
        productId: 'PID1032',
        category:'Shoes',
        image: "https://i.ibb.co/1G30LYh/product32image.jpg",
        rating: '',
        name: 'PUMA Electron E Sneakers',
        priceBeforeDiscount: 6300,
        price: 5040,
        description: '',
        size: 'UK/India-7',
        color: 'Black',
        discountPercentage: '20%'
    },
    {
        productId: 'PID1033',
        category:'Shoes',
        image: "https://i.ibb.co/vQHHDzw/product33image.webp",
        rating: '',
        name: 'OG-D3 Sneakers For Men',
        priceBeforeDiscount: 974,
        price: 633,
        description: '',
        size: 'UK/India-8',
        color: 'White-Black',
        discountPercentage: '35%'
    },
    {
        productId: 'PID1034',
        category:'Shoes',
        image: "https://i.ibb.co/7t549Wf/product34mage.webp",
        rating: '',
        name: "Calcetto Lightweight Casual Men's Sneakers Shoes",
        priceBeforeDiscount: 2265,
        price: 2200,
        description: '',
        size: 'UK/India-6',
        color: 'White-Light Brown',
        discountPercentage: '25%'
    },
    {
        productId: 'PID1035',
        category:'Shoes',
        image: "https://i.ibb.co/gVx6y0p/product36image.jpg",
        rating: '',
        name: "ADIDAS POMAZOR SHOES",
        priceBeforeDiscount: 3599,
        price: 1871,
        description: '',
        size: 'UK/India-6',
        color: 'GRAY-PINK',
        discountPercentage: '48%'
    },
    {
        productId: 'PID1036',
        category:'Shoes',
        image: "https://i.ibb.co/4t6jJQ9/product35image.webp",
        rating: '',
        name: "Avant Men's Rainbow Sports Shoe-Blue/White",
        priceBeforeDiscount: 1471,
        price: 1871,
        description: '',
        size: 'UK/India-6',
        color: 'BLUE-WHITE',
        discountPercentage: '24%'
    },
    {
        productId: 'PID1037',
        category:'Shoes',
        image: "https://i.ibb.co/WzFsQ4B/product36image.webp",
        rating: '',
        name: "Men's Black Printed Sneakers",
        priceBeforeDiscount: 3499,
        price: 1871,
        description: '',
        size: 'UK/India-6',
        color: 'BLACK-WhITE',
        discountPercentage: '78%'
    }
];

let sarees=[products[0],products[1],products[2],products[3],products[4]];

let shirts=[products[5],products[6],products[7],products[8],products[9]];

let jeans=[products[10],products[11],products[12],products[13],products[14]];

let kurtis=[products[15],products[16],products[17],products[18],products[19]];

let shoes=[products[32],products[33],products[34],products[35],products[36],products[37]];

export let bestSellers=[products[31],products[32],products[33],products[34],products[35],products[36]];


