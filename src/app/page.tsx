import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'; // Updated import
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import Link from 'next/link';

// Mock Instagram Posts Data (Replace with actual API call later)
const instagramPosts = [
  { id: 1, imageUrl: 'https://picsum.photos/300/300?random=1', caption: 'Starting the day right! #nourishvita #superfoods' },
  { id: 2, imageUrl: 'https://picsum.photos/300/300?random=2', caption: 'Fueling my workout with NourishVita protein boost.' },
  { id: 3, imageUrl: 'https://picsum.photos/300/300?random=3', caption: 'Healthy snacks on the go. #organic #healthylifestyle' },
  { id: 4, imageUrl: 'https://picsum.photos/300/300?random=4', caption: 'My favorite smoothie bowl recipe featuring @NourishVita chia seeds!' },
  { id: 5, imageUrl: 'https://picsum.photos/300/300?random=5', caption: 'Unboxing my wellness goodies! ✨' },
  { id: 6, imageUrl: 'https://picsum.photos/300/300?random=6', caption: 'Sustainable and delicious! #ecofriendly' },
];

// Mock Collections Data
const collections = [
  { name: 'Energy Boosters', description: 'Chia seeds, hemp seeds, and energy bars.', image: 'https://picsum.photos/400/300?random=10', link: '/shop?category=energy-boosters' },
  { name: 'Immunity Blends', description: 'Goji berries, turmeric powder, and spirulina.', image: 'https://picsum.photos/400/300?random=11', link: '/shop?category=immunity-blends' },
  { name: 'Gifting Wellness', description: 'Premium gift boxes with superfood assortments.', image: 'https://picsum.photos/400/300?random=12', link: '/shop?category=gifting-wellness' },
  { name: 'Healthy Snacks', description: 'Guilt-free snacks for any time of day.', image: 'https://picsum.photos/400/300?random=13', link: '/shop?category=snacks' },
];

// Mock Testimonials Data
const testimonials = [
    { name: 'Priya M.', city: 'Mumbai', quote: 'NourishVita’s chia seeds transformed my morning routine!', image: 'https://picsum.photos/100/100?random=20', rating: 5 },
    { name: 'Rohan S.', city: 'Delhi', quote: 'The gift box was a hit at our family gathering!', image: 'https://picsum.photos/100/100?random=21', rating: 5 },
    { name: 'Anika T.', city: 'Bangalore', quote: 'Love the eco-conscious vibe and amazing quality.', image: 'https://picsum.photos/100/100?random=22', rating: 4 },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Placeholder for Video - Replace with actual video component */}
        <div className="absolute inset-0 z-0">
           <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://picsum.photos/1920/1080?random=1"
          >
            {/* Add video sources here, e.g., <source src="/videos/hero-video.mp4" type="video/mp4" /> */}
            {/* Fallback image if video doesn't load */}
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay */}
        </div>
        <div className="relative z-10 p-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            NourishVita – Fuel Your Life with Superfoods.
          </h1>
          <p className="text-lg md:text-2xl mb-8">Organic. Sustainable. Extraordinary.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg" asChild>
              <Link href="/shop">Shop Superfoods</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-background px-8 py-3 text-lg" asChild>
               <Link href="/mission">Discover Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Collections</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {collections.map((collection, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 group">
                  <div className="p-1">
                    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="p-0 relative aspect-video">
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          layout="fill"
                          objectFit="cover"
                          className="group-hover:scale-105 transition-transform duration-300"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl mb-2">{collection.name}</CardTitle>
                        <CardDescription className="mb-4">{collection.description}</CardDescription>
                        <Button variant="link" className="p-0 text-primary hover:text-primary/80" asChild>
                          <Link href={collection.link}>Explore Now &rarr;</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Why NourishVita? */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why NourishVita?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Replace with appropriate Lucide icon or custom SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <h3 className="text-xl font-semibold mb-2">Certified Organic</h3>
              <p className="text-muted-foreground">100% natural, non-GMO products.</p>
            </div>
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Replace with appropriate Lucide icon or custom SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="text-xl font-semibold mb-2">Planet-Friendly</h3>
              <p className="text-muted-foreground">Zero-waste packaging & carbon-neutral shipping.</p>
            </div>
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
               {/* Replace with appropriate Lucide icon or custom SVG */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <h3 className="text-xl font-semibold mb-2">Farm-to-Table</h3>
              <p className="text-muted-foreground">Direct partnerships with global organic farmers.</p>
            </div>
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Replace with appropriate Lucide icon or custom SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.242a2 2 0 00-1.846.876l-1.42 2.84a1 1 0 00.446 1.387l3.74 1.87a1 1 0 001.387-.446l1.42-2.84a2 2 0 011.846-.876l.477.095a6 6 0 003.862 0l.477-.095a2 2 0 011.846.876l1.42 2.84a1 1 0 001.387.446l3.74-1.87a1 1 0 00.446-1.387l-1.42-2.84a2 2 0 00-1.022-.547z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" /></svg>
              <h3 className="text-xl font-semibold mb-2">Science-Backed</h3>
              <p className="text-muted-foreground">Nutritionist-approved for maximum benefits.</p>
            </div>
          </div>
        </div>
      </section>

     {/* Customer Spotlight */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Customer Spotlight</h2>
           <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                  <Card className="m-2 shadow-lg">
                    <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6 text-center md:text-left">
                       <Avatar className="h-20 w-20 md:h-24 md:w-24 border-2 border-primary">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <blockquote className="text-lg italic mb-2">"{testimonial.quote}"</blockquote>
                        <p className="font-semibold mb-1">{testimonial.name}, {testimonial.city}</p>
                        <div className="flex justify-center md:justify-start">
                          {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
             <CarouselPrevious className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2" />
             <CarouselNext className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2" />
          </Carousel>
          <div className="text-center mt-10">
             <Button variant="outline" asChild>
               <Link href="/reviews">Read More Reviews</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Wellness Hub Teaser */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square md:aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://picsum.photos/600/400?random=30"
              alt="Wellness Hub Teaser"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Wellness Hub</h2>
            <p className="text-lg mb-6">
              Discover delicious recipes, expert wellness tips, and insightful guides on superfoods in our dedicated Wellness Hub.
            </p>
            <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/wellness-hub">Visit the Hub</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Follow Us @NourishVita</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {instagramPosts.map((post) => (
              <a key={post.id} href="#" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 aspect-square group relative">
                <Image
                  src={post.imageUrl}
                  alt={post.caption || 'Instagram Post'}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center p-2">
                  <p className="text-white text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">{post.caption}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:opacity-90" asChild>
              <a href="https://instagram.com/nourishvita" target="_blank" rel="noopener noreferrer">
                Follow @NourishVita
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
