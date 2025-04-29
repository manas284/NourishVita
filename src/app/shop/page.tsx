import ProductCard from '@/components/shop/product-card';
import ProductFilters from '@/components/shop/product-filters';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SuperfoodQuiz from '@/components/shop/superfood-quiz';

// Mock Product Data (Replace with actual API call or database fetch)
const products = [
  { id: '1', name: 'Organic Chia Seeds', description: 'Nutrient-dense seeds for smoothies and baking.', price: 12.99, rating: 4.5, image: 'https://picsum.photos/300/300?random=50', category: 'Superfoods', benefits: ['Energy', 'Digestion'], dietary: ['Vegan', 'Gluten-Free', 'Organic'], badges: ['Organic', 'Vegan'] },
  { id: '2', name: 'Goji Berry Bliss', description: 'Antioxidant-rich berries for snacking or teas.', price: 15.49, rating: 4.8, image: 'https://picsum.photos/300/300?random=51', category: 'Superfoods', benefits: ['Immunity', 'Skin Health'], dietary: ['Vegan', 'Gluten-Free', 'Organic'], badges: ['Organic', 'New'] },
  { id: '3', name: 'Quinoa Protein Bars', description: 'High-protein, gluten-free bars for on-the-go.', price: 24.99, rating: 4.2, image: 'https://picsum.photos/300/300?random=52', category: 'Snacks', benefits: ['Energy'], dietary: ['Gluten-Free'], badges: ['Bestseller'] },
  { id: '4', name: 'Superfood Gift Box', description: 'Curated blend of seeds, nuts, and bars.', price: 49.99, rating: 5.0, image: 'https://picsum.photos/300/300?random=53', category: 'Gift Boxes', benefits: ['Immunity', 'Energy'], dietary: ['Vegan Option'], badges: ['Organic', 'Gift'] },
  { id: '5', name: 'Organic Hemp Seeds', description: 'Plant-based protein powerhouse.', price: 14.99, rating: 4.6, image: 'https://picsum.photos/300/300?random=54', category: 'Superfoods', benefits: ['Energy', 'Digestion'], dietary: ['Vegan', 'Gluten-Free', 'Organic'], badges: ['Organic'] },
  { id: '6', name: 'Turmeric Latte Mix', description: 'Warming immunity blend.', price: 18.99, rating: 4.7, image: 'https://picsum.photos/300/300?random=55', category: 'Blends', benefits: ['Immunity'], dietary: ['Vegan', 'Gluten-Free', 'Organic'], badges: ['Organic'] },
  { id: '7', name: 'Activated Charcoal Powder', description: 'Detoxifying food-grade powder.', price: 16.50, rating: 4.3, image: 'https://picsum.photos/300/300?random=56', category: 'Superfoods', benefits: ['Digestion'], dietary: ['Vegan', 'Gluten-Free'], badges: [] },
  { id: '8', name: 'Trail Mix Supreme', description: 'Energy-boosting nuts, seeds, and dried fruit.', price: 19.99, rating: 4.4, image: 'https://picsum.photos/300/300?random=57', category: 'Snacks', benefits: ['Energy'], dietary: [], badges: ['Bestseller'] },
];

export default function ShopPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[40vh] bg-gradient-to-r from-green-200 via-lime-100 to-green-200 flex items-center justify-center text-center text-foreground overflow-hidden">
         <Image
            src="https://picsum.photos/1920/400?random=40" // Replace with a relevant banner image
            alt="Superfood Spread"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Superfood Journey Starts Here</h1>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Browse All Products
          </Button>
        </div>
      </section>

      {/* Filters & Product Grid */}
      <section className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4 xl:w-1/5">
            <ProductFilters />
             <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center border border-primary/20">
                <h3 className="text-xl font-semibold mb-4 text-primary">Find Your Perfect Superfood</h3>
                <p className="text-sm mb-6 text-foreground/80">Take our quick quiz to get personalized recommendations!</p>
                <SuperfoodQuiz />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:w-3/4 xl:w-4/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {/* TODO: Add Pagination */}
          </div>
        </div>
      </section>


    </div>
  );
}
