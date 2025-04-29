import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Pinterest, Linkedin, Youtube } from 'lucide-react';

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
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Pinterest size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Youtube size={20} /></a>
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
