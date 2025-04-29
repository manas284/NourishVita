import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category?: string;
  benefits?: string[];
  dietary?: string[];
  badges?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
     <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col group">
      <CardHeader className="p-0 relative aspect-square overflow-hidden">
        <Link href={`/shop/product/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
        </Link>
         {/* Badges */}
         <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
          {product.badges?.map((badge) => (
            <Badge key={badge} variant={badge === 'New' ? 'destructive' : badge === 'Organic' ? 'default' : 'secondary'} className="text-xs capitalize backdrop-blur-sm bg-opacity-80">
              {badge}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
         <Link href={`/shop/product/${product.id}`}>
            <CardTitle className="text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">{product.name}</CardTitle>
        </Link>
        <CardDescription className="text-sm mb-2 line-clamp-2">{product.description}</CardDescription>
        <div className="flex items-center justify-between mt-2">
           <span className="text-lg font-semibold text-primary">${product.price.toFixed(2)}</span>
           <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-muted-foreground">{product.rating.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
        {/* <Button variant="outline" size="sm" className="w-1/3">
            Quick Add
        </Button> */}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
