import Image from 'next/image';
import ContactForm from '@/components/contact/contact-form';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, MapPin, Instagram, Facebook, Pinterest, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

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
             <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-600 transition-colors"><Pinterest size={24} /></a>
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
