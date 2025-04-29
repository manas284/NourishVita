import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, ShoppingCart, CheckCircle, ArrowLeft, Minus, Plus, Repeat, Cube } from 'lucide-react'; // Added Repeat for Subscribe, Cube for AR
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/shop/product-card';
import * as React from 'react'; // Import React for state
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // Import RadioGroup
import { Label } from '@/components/ui/label';


// Mock function to get product data by ID (replace with actual data fetching)
async function getProductData(id: string) {
  const products = [
    { id: '1', name: 'Organic Chia Seeds', description: 'Nutrient-dense seeds perfect for smoothies, puddings, and baking. A great source of Omega-3 fatty acids, fiber, and protein.', price: 12.99, rating: 4.5, image: 'https://picsum.photos/600/600?random=50', images: ['https://picsum.photos/600/600?random=50', 'https://picsum.photos/600/600?random=150', 'https://picsum.photos/600/600?random=250'], category: 'Superfoods', benefits: ['Energy', 'Digestion', 'Heart Health'], dietary: ['Vegan', 'Gluten-Free', 'Organic'], badges: ['Organic', 'Vegan'], origin: 'Peru', usage: ['Add 1-2 tbsp to smoothies', 'Make chia pudding', 'Sprinkle on salads or yogurt'], nutrition: { calories: 138, protein: '5g', fat: '9g', carbs: '12g', fiber: '10g' }, faqs: [{ q: 'Are these seeds raw?', a: 'Yes, our chia seeds are raw and unprocessed.' }, { q: 'What is the shelf life?', a: 'Approximately 2 years when stored properly in a cool, dark place.' }], isSubscribable: true, isArCompatible: false },
    { id: '2', name: 'Goji Berry Bliss', description: 'Antioxidant-rich dried berries ideal for snacking, adding to trail mixes, or brewing as tea. Known for their immune-boosting properties.', price: 15.49, rating: 4.8, image: 'https://picsum.photos/600/600?random=51', images: ['https://picsum.photos/600/600?random=51', 'https://picsum.photos/600/600?random=151', 'https://picsum.photos/600/600?random=251'], category: 'Superfoods', benefits: ['Immunity', 'Skin Health', 'Eye Health'], dietary: ['Vegan', 'Gluten-Free', 'Organic'], badges: ['Organic', 'New'], origin: 'Tibetan Plateau', usage: ['Eat as a snack', 'Add to cereals or yogurt', 'Brew into tea'], nutrition: { calories: 98, protein: '4g', fat: '0.1g', carbs: '21g', fiber: '3g' }, faqs: [{ q: 'Are these sweetened?', a: 'No, our goji berries are naturally dried with no added sugar.' }], isSubscribable: true, isArCompatible: false },
    { id: '4', name: 'Superfood Gift Box', description: 'Curated blend of seeds, nuts, and bars in eco-friendly packaging.', price: 49.99, rating: 5.0, image: 'https://picsum.photos/600/600?random=53', images: ['https://picsum.photos/600/600?random=53', 'https://picsum.photos/600/600?random=153', 'https://picsum.photos/600/600?random=253'], category: 'Gift Boxes', benefits: ['Immunity', 'Energy'], dietary: ['Vegan Option'], badges: ['Organic', 'Gift'], origin: 'Mixed', usage: ['Ideal for gifting or sampling multiple products'], nutrition: { calories: 'Varies', protein: 'Varies', fat: 'Varies', carbs: 'Varies', fiber: 'Varies' }, faqs: [{ q: 'Can I customize the box?', a: 'Customization is not available currently, but we offer various themed boxes.' }], isSubscribable: false, isArCompatible: true }, // Example AR compatible product
    // Add other products with similar detailed structure
  ];
  return products.find(p => p.id === id);
}

// Mock related products (replace with actual logic)
const relatedProducts = [
     { id: '5', name: 'Organic Hemp Seeds', description: 'Plant-based protein powerhouse.', price: 14.99, rating: 4.6, image: 'https://picsum.photos/300/300?random=54', badges: ['Organic'], isSubscribable: true },
     { id: '6', name: 'Turmeric Latte Mix', description: 'Warming immunity blend.', price: 18.99, rating: 4.7, image: 'https://picsum.photos/300/300?random=55', badges: ['Organic'], isSubscribable: true },
     { id: '8', name: 'Trail Mix Supreme', description: 'Energy-boosting nuts, seeds, and dried fruit.', price: 19.99, rating: 4.4, image: 'https://picsum.photos/300/300?random=57', badges: ['Bestseller'], isSubscribable: false },
];

// State component for quantity selector
function QuantitySelector() {
    const [quantity, setQuantity] = React.useState(1);

    const decreaseQuantity = () => setQuantity(q => Math.max(1, q - 1));
    const increaseQuantity = () => setQuantity(q => q + 1); // Add upper limit if needed

    return (
        <div className="flex items-center border rounded-md">
            <Button variant="ghost" size="icon" className="h-9 w-9" onClick={decreaseQuantity} disabled={quantity <= 1}>
                <Minus className="h-4 w-4" />
            </Button>
            <span className="w-10 text-center text-sm font-medium">{quantity}</span>
            <Button variant="ghost" size="icon" className="h-9 w-9" onClick={increaseQuantity}>
                <Plus className="h-4 w-4" />
            </Button>
        </div>
    );
}


export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductData(params.id);

  if (!product) {
    return <div className="container py-16 text-center">Product not found.</div>;
  }

  // Mock state for purchase type (one-time or subscribe)
  const [purchaseType, setPurchaseType] = React.useState('one-time');

  return (
    <div className="bg-background">
      <div className="container py-8 md:py-12">
         {/* Back Button */}
         <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
             <ArrowLeft size={16} /> Back to Shop
         </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div className="sticky top-20 self-start">
            {/* Main Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden border mb-4 shadow-sm group">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                priority
                className="transition-transform duration-300 group-hover:scale-105"
              />
               {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1 items-start z-10">
                {product.badges?.map((badge) => (
                    <Badge key={badge} variant={badge === 'New' ? 'destructive' : badge === 'Organic' ? 'default' : 'secondary'} className="text-xs capitalize backdrop-blur-sm bg-black/50 text-white border-none shadow-sm">
                    {badge}
                    </Badge>
                ))}
                </div>
                 {/* AR View Button Placeholder */}
                {product.isArCompatible && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute bottom-3 right-3 backdrop-blur-sm bg-black/50 hover:bg-black/70 text-white"
                      // TODO: onClick should trigger AR view
                      onClick={() => alert('AR View Coming Soon!')}
                    >
                        <Cube className="mr-1.5 h-4 w-4" /> View in Your Space
                    </Button>
                )}
            </div>
            {/* Thumbnail Images */}
             <div className="grid grid-cols-4 gap-2">
              {product.images?.map((imgSrc, index) => (
                <button key={index} className={`relative aspect-square rounded-md overflow-hidden border-2 ${index === 0 ? 'border-primary' : 'border-transparent'} hover:border-primary focus:border-primary focus:outline-none transition`}>
                   <Image
                    src={imgSrc}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
               <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="text-base font-medium">{product.rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">(50+ reviews)</span> {/* Placeholder */}
              </div>
              <Separator orientation="vertical" className="h-5"/>
               <span className="text-sm text-primary font-medium">{product.category}</span>
            </div>
            <p className="text-2xl font-semibold text-primary mb-6">${product.price.toFixed(2)}</p>

             <p className="text-base text-muted-foreground mb-6">{product.description}</p>

             {/* Purchase Options: One-time vs Subscribe */}
             {product.isSubscribable && (
                <RadioGroup
                    defaultValue="one-time"
                    className="mb-6 space-y-3"
                    onValueChange={setPurchaseType} // Update state on change
                    value={purchaseType}
                    >
                    <Label
                        htmlFor="one-time"
                        className={`flex items-center gap-4 rounded-lg border p-4 cursor-pointer transition-colors ${purchaseType === 'one-time' ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/50'}`}
                    >
                        <RadioGroupItem value="one-time" id="one-time" />
                        <div className="flex-1">
                            <span className="font-medium">One-time Purchase</span>
                            <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                        </div>
                    </Label>
                    <Label
                        htmlFor="subscribe"
                        className={`flex items-center gap-4 rounded-lg border p-4 cursor-pointer transition-colors ${purchaseType === 'subscribe' ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/50'}`}
                    >
                        <RadioGroupItem value="subscribe" id="subscribe" />
                        <div className="flex-1">
                             <span className="font-medium flex items-center gap-1.5">
                                <Repeat className="h-4 w-4 text-primary" /> Subscribe & Save 10%
                             </span>
                             <p className="text-sm text-muted-foreground">
                                <span className="line-through mr-1.5">${product.price.toFixed(2)}</span>
                                <span className="font-semibold text-primary">${(product.price * 0.9).toFixed(2)}</span> every month
                             </p>
                              <p className="text-xs text-muted-foreground/80 mt-1">Auto-delivery. Cancel anytime.</p>
                        </div>
                    </Label>
                </RadioGroup>
             )}


             <div className="flex flex-col sm:flex-row gap-4 mb-8">
                 <QuantitySelector />
                 <Button size="lg" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                     {purchaseType === 'subscribe' ? 'Subscribe Now' : 'Add to Cart'}
                </Button>
             </div>

             {/* Trust Signals */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground mb-8 border-t pt-6">
                <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Free Shipping $50+
                </div>
                 <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> 30-Day Returns
                </div>
                 <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Secure Payments
                </div>
            </div>


            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="text-sm space-y-4 mt-4 prose prose-sm max-w-none dark:prose-invert">
                 <h4 className="font-semibold not-prose">Benefits:</h4>
                 <ul className="list-disc list-inside text-muted-foreground space-y-1">
                     {product.benefits?.map(b => <li key={b}>{b}</li>)}
                 </ul>
                  <h4 className="font-semibold not-prose">Origin:</h4>
                  <p className="text-muted-foreground">{product.origin}</p>
                  <h4 className="font-semibold not-prose">Usage Tips:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {product.usage?.map(u => <li key={u}>{u}</li>)}
                 </ul>
              </TabsContent>
              <TabsContent value="nutrition" className="text-sm space-y-2 mt-4">
                <h4 className="font-semibold mb-2">Nutritional Information (per serving):</h4>
                 <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-muted-foreground">
                    <span>Calories:</span><span className="font-medium text-foreground">{product.nutrition.calories}</span>
                    <span>Protein:</span><span className="font-medium text-foreground">{product.nutrition.protein}</span>
                    <span>Fat:</span><span className="font-medium text-foreground">{product.nutrition.fat}</span>
                    <span>Carbohydrates:</span><span className="font-medium text-foreground">{product.nutrition.carbs}</span>
                     <span>Fiber:</span><span className="font-medium text-foreground">{product.nutrition.fiber}</span>
                 </div>
                 <p className="text-xs text-muted-foreground/80 mt-4">*Approximate values. Check packaging for precise information.</p>
              </TabsContent>
              <TabsContent value="reviews" className="text-sm mt-4">
                 <h4 className="font-semibold mb-4">Customer Reviews</h4>
                 {/* Review Placeholder */}
                 <div className="space-y-4">
                    <div className="border p-4 rounded-md">
                        <div className="flex items-center justify-between mb-1">
                             <div className="flex items-center gap-1">
                                {Array(5).fill(0).map((_, i) => <Star key={i} className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />)}
                            </div>
                             <span className="text-xs text-muted-foreground">2 days ago</span>
                        </div>
                        <p className="font-medium">Excellent Quality!</p>
                        <p className="text-muted-foreground text-xs mt-1">Highly recommend these chia seeds. Great value.</p>
                        <p className="text-xs text-muted-foreground/80 mt-2">- Sarah J.</p>
                    </div>
                     {/* Add more reviews or a link to all reviews */}
                 </div>
                 <Button variant="outline" size="sm" className="mt-6">Write a Review</Button>
              </TabsContent>
              <TabsContent value="faqs" className="text-sm mt-4">
                  <h4 className="font-semibold mb-4">Frequently Asked Questions</h4>
                 <div className="space-y-4">
                    {product.faqs?.map((faq, index) => (
                        <div key={index}>
                             <p className="font-medium mb-1">{faq.q}</p>
                             <p className="text-muted-foreground">{faq.a}</p>
                        </div>
                    ))}
                 </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

         {/* Upsell Section */}
         <section className="mt-16 md:mt-24 border-t pt-12">
             <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Complete Your Routine</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {relatedProducts.map((relatedProduct) => (
                 <ProductCard key={relatedProduct.id} product={relatedProduct as any} /> // Cast as any to match ProductCard props quickly
               ))}
             </div>
         </section>

      </div>
    </div>
  );
}
