import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Tag } from 'lucide-react';

// Mock Blog Post Data
const posts = [
  { id: 1, title: 'The Ultimate Guide to Chia Seed Puddings', category: 'Recipes', image: 'https://picsum.photos/400/300?random=90', excerpt: 'Learn how to make delicious and healthy chia seed puddings with various toppings.', slug: 'chia-seed-pudding-guide' },
  { id: 2, title: '5 Surprising Benefits of Goji Berries', category: 'Health Tips', image: 'https://picsum.photos/400/300?random=91', excerpt: 'Discover why these tiny red berries pack a powerful nutritional punch.', slug: 'goji-berry-benefits' },
  { id: 3, title: 'Our Journey Towards Zero-Waste Packaging', category: 'Sustainability', image: 'https://picsum.photos/400/300?random=92', excerpt: 'Read about our commitment to the planet and our steps towards sustainable packaging.', slug: 'zero-waste-journey' },
  { id: 4, title: 'How to Build a Balanced Superfood Diet', category: 'Guides', image: 'https://picsum.photos/400/300?random=93', excerpt: 'Expert tips on incorporating superfoods into your daily meals for optimal health.', slug: 'balanced-superfood-diet' },
   { id: 5, title: 'Energizing Morning Smoothie Recipes', category: 'Recipes', image: 'https://picsum.photos/400/300?random=94', excerpt: 'Kickstart your day with these vibrant and nutrient-dense smoothie ideas.', slug: 'energizing-smoothies' },
   { id: 6, title: 'Why Organic Matters: Beyond the Label', category: 'Health Tips', image: 'https://picsum.photos/400/300?random=95', excerpt: 'Understand the importance of choosing organic foods for your health and the environment.', slug: 'why-organic-matters' },
];

const categories = ['All', 'Recipes', 'Health Tips', 'Sustainability', 'Guides', 'Trending'];

export default function WellnessHubPage() {
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
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                    <Button key={category} variant={category === 'All' ? 'default' : 'outline'} size="sm" className="text-xs md:text-sm">
                        {category}
                    </Button>
                ))}
            </div>
            <div className="relative w-full md:w-auto">
             <Input type="search" placeholder="Search articles..." className="h-9 pr-8 w-full md:w-64" />
             <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
           </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                </CardContent>
                 <CardFooter className="p-6 pt-0">
                    <span className="text-sm text-primary font-medium group-hover:underline">Read More &rarr;</span>
                 </CardFooter>
              </Card>
              </Link>
            ))}
        </div>
         {/* TODO: Add Pagination for Blog Posts */}
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
