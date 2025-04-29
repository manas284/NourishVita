'use client';

import * as React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ListFilter, RotateCcw } from 'lucide-react';

// Mock filter options (replace with dynamic data)
const categories = ['Superfoods', 'Snacks', 'Blends', 'Gift Boxes'];
const dietaryNeeds = ['Vegan', 'Gluten-Free', 'Keto', 'Sugar-Free', 'Organic'];
const benefits = ['Energy', 'Immunity', 'Digestion', 'Skin Health', 'Weight Management'];

const ProductFilters = () => {
  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 100]);

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const handleResetFilters = () => {
      setPriceRange([0, 100]);
      // TODO: Reset checkbox states as well
      console.log("Filters Reset");
  }

  return (
    <div className="sticky top-20"> {/* Make sidebar sticky */}
      <div className="flex justify-between items-center mb-4 border-b pb-2">
         <h3 className="text-lg font-semibold flex items-center gap-2">
             <ListFilter className="h-5 w-5"/> Filters
         </h3>
         <Button variant="ghost" size="sm" onClick={handleResetFilters} className="text-xs text-muted-foreground hover:text-foreground">
            <RotateCcw className="mr-1 h-3 w-3"/> Reset
         </Button>
      </div>
      <Accordion type="multiple" defaultValue={['category', 'dietary', 'benefits', 'price']} className="w-full">
        {/* Category Filter */}
        <AccordionItem value="category">
          <AccordionTrigger className="text-base font-medium">Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`cat-${category}`} />
                  <Label htmlFor={`cat-${category}`} className="text-sm font-normal cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Dietary Needs Filter */}
        <AccordionItem value="dietary">
          <AccordionTrigger className="text-base font-medium">Dietary Needs</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {dietaryNeeds.map((need) => (
                <div key={need} className="flex items-center space-x-2">
                  <Checkbox id={`diet-${need}`} />
                  <Label htmlFor={`diet-${need}`} className="text-sm font-normal cursor-pointer">
                    {need}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Benefits Filter */}
        <AccordionItem value="benefits">
          <AccordionTrigger className="text-base font-medium">Benefits</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center space-x-2">
                  <Checkbox id={`ben-${benefit}`} />
                  <Label htmlFor={`ben-${benefit}`} className="text-sm font-normal cursor-pointer">
                    {benefit}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range Filter */}
        <AccordionItem value="price">
          <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
             <div className="pt-4 px-1">
                 <Slider
                    defaultValue={[0, 100]}
                    max={100} // Adjust max price as needed
                    step={5}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                    className="w-full"
                    />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
             </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
       <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">Apply Filters</Button>
    </div>
  );
};

export default ProductFilters;
