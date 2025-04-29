import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, MessageSquare, Share2, Bookmark } from 'lucide-react'; // Added Bookmark icon

// Mock function to get post data by slug (replace with actual data fetching)
async function getPostData(slug: string) {
  // In a real app, fetch this from a CMS or database based on the slug
   const posts = [
    { id: 1, title: 'The Ultimate Guide to Chia Seed Puddings', category: 'Recipes', image: 'https://picsum.photos/800/400?random=90', excerpt: 'Learn how to make delicious and healthy chia seed puddings with various toppings.', slug: 'chia-seed-pudding-guide', author: 'Alice Green', authorImage: 'https://picsum.photos/50/50?random=110', date: 'October 26, 2024', content: '<p>Chia seeds are tiny powerhouses of nutrition! Packed with fiber, omega-3 fatty acids, and protein, they make a fantastic base for a healthy and filling breakfast or snack.</p><p>Making chia seed pudding is incredibly simple. The basic ratio is typically 1 part chia seeds to 4 parts liquid (like almond milk, coconut milk, or regular milk). Sweeten to taste with maple syrup, honey, or your favorite sweetener.</p><h2>Basic Chia Seed Pudding Recipe</h2><ul><li>1/4 cup NourishVita Organic Chia Seeds</li><li>1 cup milk of choice</li><li>1-2 tbsp sweetener (optional)</li><li>1/2 tsp vanilla extract (optional)</li></ul><p>Combine all ingredients in a jar or bowl. Stir well, ensuring no clumps remain. Refrigerate for at least 2 hours, or preferably overnight, until thick and pudding-like. Stir again before serving.</p><h2>Topping Ideas</h2><p>Get creative with toppings! Fresh berries, sliced banana, granola, chopped nuts, shredded coconut, or a drizzle of nut butter all work wonderfully.</p><h3>Chocolate Chia Pudding Variation</h3><p>For a chocolatey treat, whisk in 1-2 tablespoons of unsweetened cocoa powder with the other ingredients before refrigerating.</p>', tags: ['chia seeds', 'pudding', 'healthy breakfast', 'recipes'] },
    { id: 2, title: '5 Surprising Benefits of Goji Berries', category: 'Health Tips', image: 'https://picsum.photos/800/400?random=91', excerpt: 'Discover why these tiny red berries pack a powerful nutritional punch.', slug: 'goji-berry-benefits', author: 'Bob White', authorImage: 'https://picsum.photos/50/50?random=111', date: 'October 25, 2024', content: '<p>Goji berries, also known as wolfberries, have been used in traditional Chinese medicine for centuries, and for good reason! These vibrant red berries are nutritional powerhouses.</p><h3>Benefit 1: Rich in Antioxidants</h3><p>Goji berries are loaded with antioxidants like zeaxanthin, which helps protect eyes from age-related macular degeneration and UV damage. They fight harmful free radicals in the body.</p><h3>Benefit 2: Immune System Support</h3><p>The vitamins A and C found abundantly in goji berries are crucial for building immunity and preventing illnesses, from the common cold to more serious conditions.</p><h3>Benefit 3: Promotes Healthy Skin</h3><p>Beta-carotene, an ingredient in goji berries, is known for its ability to promote healthy skin. It can help soothe skin irritation, manage the effects of the sun, and even reduce signs of aging.</p><h3>Benefit 4: Stabilizes Blood Sugar</h3><p>Early research suggests goji berries may help in controlling the release of sugar into the blood, potentially lowering blood sugar levels and improving sugar tolerance.</p><h3>Benefit 5: Improves Mood and Energy Levels</h3><p>Studies have shown that drinking goji berry juice can lead to increased energy levels, better athletic performance, improved quality of sleep, and feelings of calmness and contentment.</p><p>Incorporate NourishVita Goji Berry Bliss into your diet by adding them to trail mixes, oatmeal, yogurt, or simply enjoying them as a snack!</p>', tags: ['goji berries', 'antioxidants', 'superfoods', 'health'] },
    // Add other posts here...
  ];
  return posts.find(post => post.slug === slug);
}

// Mock related posts (replace with actual logic)
const relatedPosts = [
    { id: 4, title: 'How to Build a Balanced Superfood Diet', category: 'Guides', image: 'https://picsum.photos/400/300?random=93', slug: 'balanced-superfood-diet' },
    { id: 5, title: 'Energizing Morning Smoothie Recipes', category: 'Recipes', image: 'https://picsum.photos/400/300?random=94', slug: 'energizing-smoothies' },
    { id: 6, title: 'Why Organic Matters: Beyond the Label', category: 'Health Tips', image: 'https://picsum.photos/400/300?random=95', slug: 'why-organic-matters' },
];

// TODO: Add client-side logic for saving recipes
const handleSaveRecipe = (postId: number) => {
    console.log(`Saving recipe ${postId} to Wellness Hub`);
    // Implement actual save logic here (e.g., using localStorage or API call if user is logged in)
    alert('Recipe saved! (Placeholder)');
};


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    // Handle post not found, maybe redirect or show a 404 component
    return <div className="container py-16 text-center">Post not found.</div>;
  }

  return (
    <div className="bg-background">
        {/* Post Header */}
         <section className="relative h-[40vh] md:h-[50vh] w-full">
            <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                priority // Prioritize loading the hero image
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
             <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
                 <div className="container">
                    <Link href="/wellness-hub" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-4">
                        <ArrowLeft size={16} /> Back to Wellness Hub
                    </Link>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{post.title}</h1>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/90 text-sm">
                         <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src={post.authorImage} alt={post.author} />
                                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{post.author}</span>
                        </div>
                        <span>&bull;</span>
                        <span>{post.date}</span>
                         {/* Save Recipe Button */}
                         {post.category === 'Recipes' && (
                            <>
                                <span>&bull;</span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-white/80 hover:text-white hover:bg-white/10 p-1 h-auto"
                                    onClick={() => handleSaveRecipe(post.id)} // Placeholder onClick
                                >
                                    <Bookmark className="mr-1.5 h-4 w-4" /> Save Recipe
                                </Button>
                            </>
                        )}
                    </div>
                 </div>
             </div>
         </section>

        {/* Post Content & Sidebar */}
        <section className="container py-12 md:py-16">
             <div className="flex flex-col lg:flex-row gap-12">
                 {/* Main Content Area */}
                 <article className="lg:w-2/3 prose lg:prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:font-semibold">
                    {/* Render HTML content safely */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                 </article>

                  {/* Sidebar */}
                 <aside className="lg:w-1/3 lg:sticky top-24 self-start space-y-8">
                     {/* Share Buttons */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Share This Post</h3>
                        <div className="flex gap-3">
                             <Button variant="outline" size="icon" title="Share"><Share2 size={18} /></Button>
                             {/* Add specific share buttons (Twitter, Facebook, Pinterest, WhatsApp) */}
                             <Button variant="outline" size="sm">Twitter</Button>
                             <Button variant="outline" size="sm">Facebook</Button>
                             <Button variant="outline" size="sm">Pinterest</Button>
                        </div>
                    </div>

                     <Separator />

                    {/* Related Products (Placeholder) */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Featured Products</h3>
                         <div className="space-y-4">
                            {/* Example Product Link - Make dynamic based on post content */}
                            <Link href="/shop/product/1" className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/10 transition-colors border">
                                <Image src="https://picsum.photos/80/80?random=50" alt="Organic Chia Seeds" width={60} height={60} className="rounded-md" />
                                <div>
                                    <p className="font-medium">Organic Chia Seeds</p>
                                    <p className="text-sm text-muted-foreground">Perfect for puddings & smoothies!</p>
                                </div>
                            </Link>
                             {/* Add more related products */}
                         </div>
                    </div>

                     <Separator />

                     {/* Related Posts */}
                     <div>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Related Articles</h3>
                        <div className="space-y-4">
                            {relatedPosts.filter(related => related.id !== post.id).slice(0, 3).map(related => ( // Exclude current post
                                <Link key={related.id} href={`/wellness-hub/${related.slug}`} className="block p-3 rounded-lg hover:bg-secondary/10 transition-colors border">
                                    <p className="font-medium mb-1">{related.title}</p>
                                     <p className="text-xs text-muted-foreground">{related.category}</p>
                                </Link>
                            ))}
                        </div>
                     </div>
                 </aside>
             </div>
        </section>

        {/* Comments Section Placeholder */}
        <section className="container pb-16 md:pb-24 border-t pt-12">
             <h2 className="text-2xl font-semibold mb-6">Comments</h2>
            <div className="p-6 bg-muted rounded-lg text-center">
                <MessageSquare className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">[ Disqus Comments Section Placeholder ]</p>
                 <p className="text-sm text-muted-foreground/80 mt-2">Join the conversation below.</p>
            </div>
        </section>
    </div>
  );
}
