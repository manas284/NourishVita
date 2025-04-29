"use client";

import ProductCard from '@/components/shop/product-card';
import ProductFilters from '@/components/shop/product-filters';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import SuperfoodQuiz from '@/components/shop/superfood-quiz';
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from 'react';
import { ProductType } from '@/types/product';

export default function ShopPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ProductType[] = await response.json();
        setProducts(data);
      } catch (error: any) {
        setError(error.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

   return (
    <>
      <div className="container">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 py-4">
          Home <span className="mx-2">&gt;</span> Shop
        </div>
        <Separator />
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12 py-12">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block">
            <ProductFilters />
          </aside>
          {/* Product Grid */}
          <section>
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-8">
              {/* Results */}
              <div className="text-sm text-gray-700">
                Showing 1–12 of 36 products
              </div>
              {/* Sort & View */}
              <div className="flex items-center gap-4">
                <select className="border border-gray-300 rounded-md p-2 text-sm">
                  <option value="popularity">Sort by: Popularity</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                </select>
                {/* TODO: Add View Toggle */}
                <div>
                  {/* Grid/List icons */}
                </div>
              </div>
            </div>
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                &lt;
              </Button>
              <Button variant="outline" className="rounded-md">
                1
              </Button>
              <Button variant="outline" className="rounded-md">
                2
              </Button>
              <Button variant="outline" className="rounded-md">
                3
              </Button>
              <Button variant="outline" className="rounded-md">
                ...
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                &gt;
              </Button>
            </div>
          </section>
        </div>
        {/* Promo Banner */}
        <div className="bg-[#F7F7F7] py-8 px-6 rounded-2xl text-center mt-12 mb-24">
          <div className="container">
              <Badge className="bg-green-500 text-white">💚 Special Offer</Badge>
              <h3 className="text-xl mt-2 font-semibold">Subscribe & Save 10% on every order!</h3>
              <Button className='mt-4' > Learn More</Button>
          </div>
        </div>
        <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center border border-primary/20">
          <h3 className="text-xl font-semibold mb-4 text-primary">Find Your Perfect Superfood</h3>
          <p className="text-sm mb-6 text-foreground/80">Take our quick quiz to get personalized recommendations!</p>
          <SuperfoodQuiz />
        </div>
      </div>
    </>
  );
};

