import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Linkedin } from 'lucide-react'; // Removed Pinterest, Youtube

// Inline SVG for Pinterest
const PinterestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pinterest">
    <path d="M12.017 1.987c-5.899 0-8.94 4.036-8.94 8.073 0 3.188 1.94 6.156 4.958 7.084.301.054.444-.131.49-.293.04-.131.24-.979.293-1.189.076-.309.054-.411-.04-.691-.24-.744-.775-2.481-.775-3.385 0-2.967 2.167-5.147 4.866-5.147 2.645 0 4.193 1.974 4.193 4.321 0 2.719-1.676 4.791-3.971 4.791-.989 0-1.724-.811-1.487-1.818.278-1.17.847-2.411.847-3.223 0-.782-.411-1.445-1.272-1.445-.99 0-1.817 1.01-1.817 2.326 0 .857.308 1.783.691 2.336.076.11.087.213.054.32-.11.342-.353 1.43-.444 1.772-.131.5-.589.67-.95.361-1.252-1.085-1.95-3.179-1.95-5.447 0-4.02 2.888-7.431 7.859-7.431 4.14 0 7.278 2.973 7.278 6.873 0 4.202-2.562 7.421-6.17 7.421-1.21 0-2.36-.644-2.76-1.41l-.689 2.623c-.278 1.059-1.02 2.336-1.54 3.061-.01.01-.001 0 0 0z"/>
  </svg>
);

// Inline SVG for YouTube
const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);


const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Explore */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/shop" className="text-sm text-muted-foreground hover:text-primary">Shop</Link></li>
              <li><Link href="/mission" className="text-sm text-muted-foreground hover:text-primary">Our Mission</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/wellness-hub" className="text-sm text-muted-foreground hover:text-primary">Wellness Hub</Link></li>
              <li><Link href="/gift-guide" className="text-sm text-muted-foreground hover:text-primary">Gift Guide</Link></li>
            </ul>
          </div>

          {/* Column 2: Support */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">FAQs</Link></li>
              <li><Link href="/shipping-returns" className="text-sm text-muted-foreground hover:text-primary">Shipping & Returns</Link></li>
              <li><Link href="/track-order" className="text-sm text-muted-foreground hover:text-primary">Track Order</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 3: Community */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Community</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><PinterestIcon /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><YoutubeIcon /></a>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Get 10% off your first order!</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-1 h-9 text-sm" />
              <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">Join</Button>
            </form>
          </div>

          {/* Column 4: Our Promise */}
          <div>
             <h4 className="font-semibold mb-4 text-lg">Our Promise</h4>
            <p className="text-sm text-muted-foreground mb-4">Organic, sustainable, and customer-first.</p>
             {/* Placeholder for Certifications Logos */}
            <div className="flex space-x-3 mb-4">
              <span className="text-xs border px-2 py-1 rounded">USDA Organic</span>
              <span className="text-xs border px-2 py-1 rounded">Fair Trade</span>
              <span className="text-xs border px-2 py-1 rounded">B Corp</span>
            </div>
            {/* Placeholder for Payment Icons */}
            <div className="flex space-x-2">
              <span className="text-xs font-semibold">Payment Methods:</span>
              {/* Replace with actual icons */}
              <span className="text-xs">Visa</span>
              <span className="text-xs">MC</span>
              <span className="text-xs">PayPal</span>
              <span className="text-xs">UPI</span>
              <span className="text-xs">COD</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          © {new Date().getFullYear()} NourishVita. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
