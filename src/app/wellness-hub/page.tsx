import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Tag } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Mock Blog Post Data with ingredients
const posts = [
  { id: 1, title: 'The Ultimate Guide to Chia Seed Puddings', category: 'Recipes', image: 'https://picsum.photos/400/300?random=90', excerpt: 'Learn how to make delicious and healthy chia seed puddings with various toppings.', slug: 'chia-seed-pudding-guide', ingredients: ['Chia Seeds', 'Milk', 'Sweetener'] },
  { id: 2, title: '5 Surprising Benefits of Goji Berries', category: 'Health Tips', image: 'https://picsum.photos/400/300?random=91', excerpt: 'Discover why these tiny red berries pack a powerful nutritional punch.', slug: 'goji-berry-benefits', ingredients: ['Goji Berries'] },
  { id: 3, title: 'Our Journey Towards Zero-Waste Packaging', category: 'Sustainability', image: 'https://picsum.photos/400/300?random=92', excerpt: 'Read about our commitment to the planet and our steps towards sustainable packaging.', slug: 'zero-waste-journey', ingredients: [] },
  { id: 4, title: 'How to Build a Balanced Superfood Diet', category: 'Guides', image: 'https://picsum.photos/400/300?random=93', excerpt: 'Expert tips on incorporating superfoods into your daily meals for optimal health.', slug: 'balanced-superfood-diet', ingredients: ['Quinoa', 'Chia Seeds', 'Hemp Seeds', 'Leafy Greens'] },
   { id: 5, title: 'Energizing Morning Smoothie Recipes', category: 'Recipes', image: 'https://picsum.photos/400/300?random=94', excerpt: 'Kickstart your day with these vibrant and nutrient-dense smoothie ideas.', slug: 'energizing-smoothies', ingredients: ['Spinach', 'Banana', 'Hemp Seeds', 'Goji Berries'] },
   { id: 6, title: 'Why Organic Matters: Beyond the Label', category: 'Health Tips', image: 'https://picsum.photos/400/300?random=95', excerpt: 'Understand the importance of choosing organic foods for your health and the environment.', slug: 'why-organic-matters', ingredients: [] },
];

const categories = ['All', 'Recipes', 'Health Tips', 'Sustainability', 'Guides', 'Trending'];

// Extract unique ingredients for filtering (simple example)
const allIngredients = [...new Set(posts.flatMap(post => post.ingredients))].sort();

export default function WellnessHubPage() {
  // TODO: Implement state management for filters

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-b from-lime-100 via-green-50 to-background flex items-center justify-center text-center text-foreground overflow-hidden">
         <Image
            src="https://picsum.photos/1920/500?random=100" // Replace with meal prep image
            alt="Wellness Meal Prep"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Wellness Journey Starts Here</h1>
          <p className="text-lg md:text-xl text-muted-foreground">Recipes, tips, and superfood science to nourish your life.</p>
        </div>
      </section>

      {/* Content Grid & Filters */}
      <section className="container py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4 xl:w-1/5 lg:sticky top-24 self-start">
             <h3 className="text-xl font-semibold mb-4 border-b pb-2">Filter Articles</h3>
             {/* Category Filters */}
             <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                 <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <Button key={category} variant={category === 'All' ? 'default' : 'outline'} size="sm" className="text-xs md:text-sm">
                            {category}
                        </Button>
                    ))}
                </div>
             </div>

              {/* Ingredient Filters */}
             <Accordion type="single" collapsible className="w-full mb-6" defaultValue='ingredients'>
              <AccordionItem value="ingredients">
                <AccordionTrigger className="text-base font-medium">Filter by Ingredient</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pt-2 max-h-60 overflow-y-auto pr-2">
                    {allIngredients.map((ingredient) => (
                      <div key={ingredient} className="flex items-center space-x-2">
                        <Checkbox id={`ing-${ingredient}`} />
                        <Label htmlFor={`ing-${ingredient}`} className="text-sm font-normal cursor-pointer">
                          {ingredient}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Search Input */}
            <div className="relative">
             <Input type="search" placeholder="Search articles..." className="h-9 pr-8 w-full" />
             <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
           </div>
          </aside>

          {/* Blog Post Grid */}
          <div className="lg:w-3/4 xl:w-4/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {posts.map((post) => (
                 <Link key={post.id} href={`/wellness-hub/${post.slug}`} passHref>
                   <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col group cursor-pointer">
                    <CardHeader className="p-0 relative aspect-video">
                      <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                       <div className="absolute top-2 left-2 bg-primary/80 text-primary-foreground text-xs font-medium px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                          <Tag size={12} /> {post.category}
                       </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                      {/* Optionally display ingredients */}
                      {post.ingredients.length > 0 && (
                         <p className="text-xs text-muted-foreground mt-2 italic">
                           Ingredients: {post.ingredients.slice(0, 3).join(', ')}{post.ingredients.length > 3 ? '...' : ''}
                         </p>
                      )}
                    </CardContent>
                     <CardFooter className="p-6 pt-0">
                        <span className="text-sm text-primary font-medium group-hover:underline">Read More &rarr;</span>
                     </CardFooter>
                  </Card>
                  </Link>
                ))}
            </div>
             {/* TODO: Add Pagination for Blog Posts */}
          </div>
        </div>
      </section>

      {/* Interactive Tools Teaser - Placeholder */}
       <section className="py-16 md:py-24 bg-secondary/10 border-t">
         <div className="container text-center">
           <h2 className="text-3xl font-bold mb-6">Interactive Wellness Tools</h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
             Plan your meals, calculate nutritional intake, and explore more ways to integrate NourishVita into your healthy lifestyle. (Tools coming soon!)
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <Card className="p-6 bg-background shadow-sm text-left">
                    <CardTitle className="text-xl mb-3">Calorie Calculator</CardTitle>
                    <CardDescription>Estimate nutritional intake based on your favorite NourishVita products and portions.</CardDescription>
                    <Button variant="outline" className="mt-4" disabled>Coming Soon</Button>
                </Card>
                <Card className="p-6 bg-background shadow-sm text-left">
                    <CardTitle className="text-xl mb-3">Meal Planner</CardTitle>
                    <CardDescription>Create weekly meal plans featuring NourishVita superfoods and save your favorites.</CardDescription>
                     <Button variant="outline" className="mt-4" disabled>Coming Soon</Button>
                </Card>
           </div>
         </div>
       </section>

    </div>
  );
}
