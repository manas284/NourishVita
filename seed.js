const mongoose = require('mongoose');
const Product = require('./models/product');
const productController = require('./controllers/productController');
const db = require('./db'); // Import the db module to connect to MongoDB Atlas

const badgesList = [
  "Vegan", "Organic", "BestSeller", "New", "Premium", "Recommended", "Sale"
];


const seed = async () => {
  await db();
  await seedDB();
};


const generateRandomProductData = () => {  
  const names = [
    "Superfood Blend", "Energy Boost Mix", "Daily Vitality Pack", "Immunity Elixir", "Protein Bar",
    "Gut Health Probiotic", "Vegan Snack", "Organic Greens", "Omega-3 Fuel", "Antioxidant Burst",
    "Chia Energy", "Hemp Protein", "Maca Revitalizer", "Spirulina Detox", "Matcha Blend",
    "Acai Boost", "Goji Power", "Cacao Delight", "Turmeric Milk", "Ginger Zest",
    "MultiVitamin", "Greens Blend", "Recovery", "Sleep Support",
  ];

  const tags = [
    "Vegan", "Gluten-Free", "Organic", "Non-GMO", "Superfood", "Protein", "Immunity",
    "Energy", "Detox", "Antioxidant", "Daily", "Snack", "Supplement", "Boost", "Blend",
  ];

  const images = [
    "https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150",
    "https://via.placeholder.com/150", "https://via.placeholder.com/150",
  ];

  const name = names[Math.floor(Math.random() * names.length)];
  const description = `A delicious ${name} to boost your health.`;
  const price = Math.floor(Math.random() * 100) + 10; // $10 to $110
  const randomTags = Array.from({ length: Math.floor(Math.random() * 4) + 1 }, () => tags[Math.floor(Math.random() * tags.length)]);  
  const randomImages = Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => images[Math.floor(Math.random() * images.length)]);
  const rating = Math.floor(Math.random() * 5) + 1; // 1 to 5

  return { name, description, price, tags: randomTags, images: randomImages, rating };
};



const seedDB = async () => {
  console.log('Seeding database...');
  for (let i = 0; i < 100; i++) {
    const randomBadges = Array.from({ length: Math.floor(Math.random() * 4) + 1 }, () => badgesList[Math.floor(Math.random() * badgesList.length)]);
    const isSubscribable = Math.random() < 0.5;
    const productData = generateRandomProductData();
    try {
      const newProduct = await productController.createProduct({ body: {...productData, badges:randomBadges, isSubscribable } }, { status: (code) => ({ json: (msg) => { console.log(`Product creation status: ${code}, Message:`, msg) } }) });
      console.log(`Product ${i + 1} created successfully:`, newProduct);
    } catch (error) {
      console.error(`Error creating product ${i + 1}:`, error);
    }
  }
  mongoose.connection.close();
};

seed();