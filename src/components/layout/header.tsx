import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Search, ShoppingCart, User, Menu, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator';

const Header = () => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/mission', label: 'Our Mission' },
    { href: '/contact', label: 'Contact' },
    { href: '/wellness-hub', label: 'Wellness Hub' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-6">
          {/* Replace with actual logo */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
          <span className="font-bold text-lg text-primary">NourishVita</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Icons & Search (Desktop) */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
           <div className="relative">
             <Input type="search" placeholder="Search products..." className="h-9 pr-8 w-40 lg:w-64" />
             <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
           </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Change Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Hindi</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button variant="ghost" size="icon">
                 <User className="h-5 w-5" />
                 <span className="sr-only">Account</span>
               </Button>
            </DropdownMenuTrigger>
             <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link href="/login">Login</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/signup">Sign Up</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link href="/account/wishlist">Wishlist</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/account/orders">Order History</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/account/subscriptions">Subscriptions</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
           <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
            <span className="sr-only">Cart</span>
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
           <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
            <span className="sr-only">Cart</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-3/4 sm:w-1/2">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                 <Separator className="my-4" />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                       <Button variant="ghost" className="justify-start gap-2">
                         <User className="h-5 w-5" /> My Account
                       </Button>
                    </DropdownMenuTrigger>
                     <DropdownMenuContent>
                       <DropdownMenuItem asChild><Link href="/login">Login</Link></DropdownMenuItem>
                       <DropdownMenuItem asChild><Link href="/signup">Sign Up</Link></DropdownMenuItem>
                       <DropdownMenuSeparator />
                       <DropdownMenuItem asChild><Link href="/account/wishlist">Wishlist</Link></DropdownMenuItem>
                       <DropdownMenuItem asChild><Link href="/account/orders">Order History</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild><Link href="/account/subscriptions">Subscriptions</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                       <Button variant="ghost" className="justify-start gap-2">
                         <Globe className="h-5 w-5" /> Language
                       </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>English</DropdownMenuItem>
                      <DropdownMenuItem>Hindi</DropdownMenuItem>
                      <DropdownMenuItem>Spanish</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
