import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Award, Users, Leaf, Globe } from 'lucide-react'; // Example icons

// Mock Farmer Data
const farmers = [
  { name: 'Maria', location: 'Peru', product: 'Organic Quinoa', story: 'Grows organic quinoa using traditional, sustainable methods passed down through generations.', image: 'https://picsum.photos/300/300?random=60', videoUrl: '#' },
  { name: 'Rajesh', location: 'India', product: 'Chia Seeds', story: 'Leads a cooperative of smallholder farmers committed to organic practices and fair wages.', image: 'https://picsum.photos/300/300?random=61', videoUrl: '#' },
  { name: 'Aisha', location: 'Ghana', product: 'Cacao Nibs', story: 'Focuses on agroforestry techniques to cultivate cacao while preserving biodiversity.', image: 'https://picsum.photos/300/300?random=62', videoUrl: '#' },
   { name: 'Kenji', location: 'Japan', product: 'Matcha Powder', story: 'Cultivates premium matcha with meticulous care, ensuring the highest quality and flavor.', image: 'https://picsum.photos/300/300?random=63', videoUrl: '#' },
];

export default function MissionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
         <Image
            src="https://picsum.photos/1920/800?random=70" // Replace with drone shot of a farm
            alt="Organic Farm"
            layout="fill"
            objectFit="cover"
            className="brightness-75" // Adjust brightness as needed
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> {/* Optional Gradient */}
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            Empowering Health, Sustaining the Planet.
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-sm">From Earth to You, with Care.</p>
        </div>
      </section>

       {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              NourishVita was born from a vision to make superfoods accessible, sustainable, and delicious. We partner with dedicated organic farmers worldwide to bring you nutrient-packed products that fuel your body and soul, fostering a connection from the earth directly to your table.
            </p>
             <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="#farmers">Meet Our Farmers</Link>
             </Button>
          </div>
          {/* Replace with Interactive Slider or Image Carousel */}
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
             <Image
              src="https://picsum.photos/600/400?random=71" // Image showing journey: farm -> packaging
              alt="Farm to packaging journey"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Sustainability Pledge */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Sustainability Pledge</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We’re committed to making a positive impact. This includes zero-waste packaging initiatives, achieving carbon-neutral shipping, and upholding fair trade practices. Every NourishVita purchase contributes to reforestation efforts and supports the livelihoods of small-scale farmers globally.
          </p>
          {/* Infographic Placeholder */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
             <div className="flex flex-col items-center p-6 border rounded-lg bg-background shadow-sm">
               <Leaf className="h-10 w-10 text-primary mb-3"/>
               <span className="text-2xl font-bold">10,000+</span>
               <span className="text-muted-foreground">Trees Planted</span>
             </div>
             <div className="flex flex-col items-center p-6 border rounded-lg bg-background shadow-sm">
               <Users className="h-10 w-10 text-primary mb-3"/>
               <span className="text-2xl font-bold">50+</span>
               <span className="text-muted-foreground">Farmer Families Empowered</span>
             </div>
             <div className="flex flex-col items-center p-6 border rounded-lg bg-background shadow-sm">
               <Globe className="h-10 w-10 text-primary mb-3"/>
               <span className="text-2xl font-bold">Zero-Waste</span>
               <span className="text-muted-foreground">Packaging Goal by 2028</span>
             </div>
          </div>
           <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10" asChild>
            <Link href="/sustainability-report">Join Our Green Movement</Link>
           </Button>
        </div>
      </section>

      {/* Farmer Stories */}
      <section id="farmers" className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Farmers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {farmers.map((farmer) => (
              <Card key={farmer.name} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <CardHeader className="p-0 relative aspect-square">
                  <Image
                    src={farmer.image}
                    alt={`${farmer.name}, ${farmer.location}`}
                    layout="fill"
                    objectFit="cover"
                  />
                   {/* Optional Play Button Overlay */}
                   <a href={farmer.videoUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 16 16">
                       <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                     </svg>
                   </a>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="text-lg mb-1">{farmer.name}, {farmer.location}</CardTitle>
                  <CardDescription className="text-sm mb-2 font-medium text-primary">{farmer.product}</CardDescription>
                  <CardDescription className="text-sm">{farmer.story}</CardDescription>
                </CardContent>
                 <CardFooter className="p-4 pt-0">
                   <Button variant="link" size="sm" className="p-0 text-primary hover:text-primary/80" asChild>
                      <a href={farmer.videoUrl} target="_blank" rel="noopener noreferrer">Watch Story &rarr;</a>
                   </Button>
                 </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-secondary/10 border-t">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Certifications</h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Our commitment to quality and ethics is reflected in the rigorous standards we uphold. NourishVita products are certified by leading global organizations.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Replace with actual certification logos */}
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Award size={40} />
                <span>USDA Organic</span>
            </div>
             <div className="flex flex-col items-center gap-2 text-muted-foreground">
                 <Award size={40} />
                 <span>Non-GMO Project</span>
             </div>
             <div className="flex flex-col items-center gap-2 text-muted-foreground">
                 <Award size={40} />
                 <span>Fair Trade Certified</span>
             </div>
             <div className="flex flex-col items-center gap-2 text-muted-foreground">
                 <Award size={40} />
                 <span>Certified B Corporation</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
