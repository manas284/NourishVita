'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { superfoodRecommendationQuiz } from '@/ai/flows/superfood-recommendation-quiz';
import { Loader2, Wand2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from 'next/link';

const quizSchema = z.object({
  dietaryPreferences: z.string({
    required_error: 'Please select your dietary preference.',
  }),
  healthGoals: z.string({
    required_error: 'Please select your main health goal.',
  }),
  tastePreferences: z.string({
    required_error: 'Please select your taste preference.',
  }),
});

const dietaryOptions = ['Any', 'Vegan', 'Gluten-Free', 'Keto', 'Sugar-Free'];
const healthGoalOptions = ['Energy', 'Immunity', 'Digestion', 'Skin Health', 'Weight Management'];
const tasteOptions = ['Sweet', 'Savory', 'Neutral', 'Adventurous'];

export default function SuperfoodQuiz() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [recommendations, setRecommendations] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm<z.infer<typeof quizSchema>>({
    resolver: zodResolver(quizSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof quizSchema>) {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);
    console.log('Quiz submitted:', values);
    try {
        const result = await superfoodRecommendationQuiz(values);
        console.log('AI Result:', result);
        // Format recommendations for display (example)
        const formattedRecommendations = result.productRecommendations
          .split('\n') // Assuming recommendations are newline-separated
          .map((item, index) => item.trim())
          .filter(item => item) // Remove empty lines
          .join('\n'); // Keep newline formatting for display
        setRecommendations(formattedRecommendations);
    } catch (err) {
        console.error('Error getting recommendations:', err);
        setError('Sorry, we couldn\'t get recommendations at this time. Please try again later.');
    } finally {
        setIsLoading(false);
    }
  }

   const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset state when dialog closes
      form.reset();
      setRecommendations(null);
      setError(null);
      setIsLoading(false);
    }
  };


  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="default" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <Wand2 className="mr-2 h-4 w-4" /> Take the Quiz
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Find Your Perfect Superfood</DialogTitle>
          <DialogDescription>
            Answer a few quick questions to get personalized product recommendations.
          </DialogDescription>
        </DialogHeader>

        {!recommendations && !error && (
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
                 {/* Dietary Preferences */}
                <FormField
                control={form.control}
                name="dietaryPreferences"
                render={({ field }) => (
                    <FormItem className="space-y-3">
                    <FormLabel className="font-semibold">What are your dietary preferences?</FormLabel>
                    <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-wrap gap-4"
                        >
                        {dietaryOptions.map(option => (
                             <FormItem key={option} className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value={option} id={`diet-${option}`} />
                                </FormControl>
                                <FormLabel htmlFor={`diet-${option}`} className="font-normal cursor-pointer">{option}</FormLabel>
                            </FormItem>
                        ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Health Goals */}
                 <FormField
                  control={form.control}
                  name="healthGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">What's your primary health goal?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a health goal" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {healthGoalOptions.map(option => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                {/* Taste Preferences */}
                <FormField
                control={form.control}
                name="tastePreferences"
                render={({ field }) => (
                    <FormItem className="space-y-3">
                    <FormLabel className="font-semibold">What tastes do you prefer?</FormLabel>
                     <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-wrap gap-4"
                        >
                        {tasteOptions.map(option => (
                             <FormItem key={option} className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value={option} id={`taste-${option}`} />
                                </FormControl>
                                <FormLabel htmlFor={`taste-${option}`} className="font-normal cursor-pointer">{option}</FormLabel>
                            </FormItem>
                        ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />


                <DialogFooter>
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                    {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Getting Recommendations...
                    </>
                    ) : (
                    'Get Recommendations'
                    )}
                </Button>
                </DialogFooter>
            </form>
            </Form>
        )}

        {isLoading && !recommendations && !error && (
             <div className="flex justify-center items-center py-10">
                 <Loader2 className="h-8 w-8 animate-spin text-primary" />
                 <p className="ml-4 text-muted-foreground">Finding the best superfoods for you...</p>
             </div>
        )}


        {recommendations && !isLoading && (
            <div className="py-4 space-y-4">
                 <Alert variant="default" className="bg-primary/10 border-primary/30">
                     <Wand2 className="h-5 w-5 text-primary" />
                    <AlertTitle className="font-semibold text-primary">Your Personalized Recommendations!</AlertTitle>
                    <AlertDescription className="mt-2 whitespace-pre-line text-sm text-foreground/90">
                        {recommendations}
                    </AlertDescription>
                </Alert>
                 <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-2">
                     <DialogClose asChild>
                        <Button variant="outline">Close</Button>
                    </DialogClose>
                     <Button asChild>
                       <Link href="/shop">Shop Now</Link>
                     </Button>
                 </DialogFooter>
            </div>
        )}

        {error && !isLoading && (
             <div className="py-4 space-y-4">
                <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
                 <DialogFooter className="mt-6">
                     <DialogClose asChild>
                        <Button variant="outline">Close</Button>
                    </DialogClose>
                 </DialogFooter>
            </div>
        )}

      </DialogContent>
    </Dialog>
  );
}
