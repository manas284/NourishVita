import Image from 'next/image';
import ContactForm from '@/components/contact/contact-form';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'; // Removed Pinterest
import Link from 'next/link';
import { Input } from '@/components/ui/input';

// Inline SVG for Pinterest
const PinterestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pinterest">
    <path d="M12.017 1.987c-5.899 0-8.94 4.036-8.94 8.073 0 3.188 1.94 6.156 4.958 7.084.301.054.444-.131.49-.293.04-.131.24-.979.293-1.189.076-.309.054-.411-.04-.691-.24-.744-.775-2.481-.775-3.385 0-2.967 2.167-5.147 4.866-5.147 2.645 0 4.193 1.974 4.193 4.321 0 2.719-1.676 4.791-3.971 4.791-.989 0-1.724-.811-1.487-1.818.278-1.17.847-2.411.847-3.223 0-.782-.411-1.445-1.272-1.445-.99 0-1.817 1.01-1.817 2.326 0 .857.308 1.783.691 2.336.076.11.087.213.054.32-.11.342-.353 1.43-.444 1.772-.131.5-.589.67-.95.361-1.252-1.085-1.95-3.179-1.95-5.447 0-4.02 2.888-7.431 7.859-7.431 4.14 0 7.278 2.973 7.278 6.873 0 4.202-2.562 7.421-6.17 7.421-1.21 0-2.36-.644-2.76-1.41l-.689 2.623c-.278 1.059-1.02 2.336-1.54 3.061-.01.01-.001 0 0 0z"/>
  </svg>
);


export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-b from-green-100 to-background flex items-center justify-center text-center text-foreground overflow-hidden">
         <Image
            src="https://picsum.photos/1920/500?random=80" // Replace with a warm team image
            alt="NourishVita Team"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
          />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let’s Connect!</h1>
          <p className="text-lg md:text-xl text-muted-foreground">Your questions, our priority.</p>
        </div>
      </section>

      {/* Contact Form & Channels */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Channels */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Other Ways to Reach Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:hello@nourishvita.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@nourishvita.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+91-XXXXXXXXXX</p>
                  <p className="text-xs text-muted-foreground/80">Monday–Friday, 8 AM–8 PM IST</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">WhatsApp & Live Chat</h3>
                   <div className="flex gap-4 mt-1">
                     <Button size="sm" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                       <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
                     </Button>
                     <Button size="sm" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                       Chat Now
                     </Button>
                   </div>
                   <p className="text-xs text-muted-foreground/80 mt-1">Instant support available during business hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Map Placeholder */}
       <section className="py-16 md:py-24 bg-secondary/10 border-t border-b">
         <div className="container text-center">
           <h2 className="text-3xl font-bold mb-6">Our Global Reach</h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
             We source the finest organic superfoods directly from dedicated farmers across the globe.
           </p>
           {/* Placeholder for Interactive Map */}
           <div className="relative bg-muted rounded-lg h-64 md:h-96 flex items-center justify-center overflow-hidden">
             <MapPin className="h-16 w-16 text-primary opacity-50" />
             <p className="absolute bottom-4 text-sm text-muted-foreground">[ Interactive World Map Coming Soon ]</p>
             {/* Example Tooltip Trigger Points (Conceptual) */}
             <div className="absolute top-1/3 left-1/4 bg-primary rounded-full h-3 w-3 animate-pulse" title="Peru: Quinoa"></div>
             <div className="absolute top-1/2 right-1/3 bg-primary rounded-full h-3 w-3 animate-pulse" title="India: Chia Seeds"></div>
             <div className="absolute bottom-1/4 left-1/2 bg-primary rounded-full h-3 w-3 animate-pulse" title="Ghana: Cacao Nibs"></div>
           </div>
         </div>
       </section>

       {/* Community Hub */}
       <section className="py-16 md:py-24 bg-background">
         <div className="container text-center">
           <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
           <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
             Connect with us for exclusive updates, wellness tips, recipes, and more!
           </p>
           <div className="flex justify-center space-x-6 mb-10">
             <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
             <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors"><Facebook size={24} /></a>
             <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-600 transition-colors"><PinterestIcon /></a>
             <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-700 transition-colors"><Linkedin size={24} /></a>
           </div>
            <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex justify-center space-x-2 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="flex-1 h-10 text-sm" />
              <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">Join Now</Button>
            </form>
         </div>
       </section>
    </div>
  );
}
