import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types/product';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, RefreshCw } from 'lucide-react'; // Added RefreshCw for subscribe icon

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
     <Card className="overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out h-full flex flex-col group border border-transparent hover:border-primary/20">
      <CardHeader className="p-0 relative aspect-square overflow-hidden">
        <Link href={`/shop/product/${product?.id}`}>
            <Image
              src={product?.image ?? ""}
              alt={product?.name ?? ""}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out" // Slightly longer image zoom
            />
            {/* Micro-animation concept placeholder: seeds falling (visual effect)
            Could be implemented with CSS animations or a small JS effect on hover,
            but keeping it simple with scale/shadow for now. */}
        </Link>
         {/* Badges */}
         <div className="absolute top-2 right-2 flex flex-col gap-1 items-end z-10">
          {product.badges?.map((badge) => (
            <Badge key={badge} variant={badge === 'New' ? 'destructive' : badge === 'Organic' ? 'default' : 'secondary'} className="text-xs capitalize backdrop-blur-sm bg-black/50 text-white border-none shadow-sm">
              {badge}
            </Badge>
          ))}
           {product.isSubscribable && (
             <Badge variant="outline" className="text-xs capitalize bg-accent/10 text-accent-foreground border-accent backdrop-blur-sm shadow-sm">
                <RefreshCw className="mr-1 h-3 w-3" /> Subscribe & Save
             </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
         <Link href={`/shop/product/${product?.id}`}>
            <CardTitle className="text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">{product?.name}</CardTitle>
        </Link>
        <CardDescription className="text-sm mb-2 line-clamp-2">{product?.description}</CardDescription>
        <div className="flex items-center justify-between mt-2">
           <span className="text-lg font-semibold text-primary">${product?.price?.toFixed(2)}</span>
           <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-muted-foreground">{product?.rating?.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
        {/* Placeholder for Quick Add animation/functionality */}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
