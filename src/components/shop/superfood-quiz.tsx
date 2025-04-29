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
import { superfoodRecommendationQuiz, SuperfoodRecommendationQuizOutput } from '@/ai/flows/superfood-recommendation-quiz'; // Import output type
import { Loader2, Wand2, Sparkles, Target } from 'lucide-react'; // Added icons
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
  const [report, setReport] = React.useState<SuperfoodRecommendationQuizOutput | null>(null); // Store the full report object
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm<z.infer<typeof quizSchema>>({
    resolver: zodResolver(quizSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof quizSchema>) {
    setIsLoading(true);
    setError(null);
    setReport(null);
    console.log('Quiz submitted:', values);
    try {
        const result = await superfoodRecommendationQuiz(values);
        console.log('AI Result:', result);
        setReport(result); // Store the full report
    } catch (err) {
        console.error('Error getting recommendations:', err);
        setError('Sorry, we couldn\'t generate your wellness report card at this time. Please try again later.');
    } finally {
        setIsLoading(false);
    }
  }

   const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset state when dialog closes
      form.reset();
      setReport(null);
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
      <DialogContent className="sm:max-w-lg"> {/* Increased max width slightly */}
        <DialogHeader>
          <DialogTitle className="text-2xl">Find Your Perfect Superfood</DialogTitle>
          <DialogDescription>
            Answer a few quick questions to get your personalized wellness report card.
          </DialogDescription>
        </DialogHeader>

        {!report && !error && ( // Show form if no report or error
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
                 {/* Dietary Preferences */}
                <FormField
                control={form.control}
                name="dietaryPreferences"
                render={({ field }) => (
                    <FormItem className="space-y-3">
                    <FormLabel className="font-semibold">1. What are your dietary preferences?</FormLabel>
                    <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-wrap gap-x-4 gap-y-2"
                        >
                        {dietaryOptions.map(option => (
                             <FormItem key={option} className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value={option} id={`diet-${option}`} />
                                </FormControl>
                                <FormLabel htmlFor={`diet-${option}`} className="font-normal cursor-pointer text-sm">{option}</FormLabel>
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
                      <FormLabel className="font-semibold">2. What's your primary health goal?</FormLabel>
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
                    <FormLabel className="font-semibold">3. What tastes do you generally prefer?</FormLabel>
                     <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-wrap gap-x-4 gap-y-2"
                        >
                        {tasteOptions.map(option => (
                             <FormItem key={option} className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value={option} id={`taste-${option}`} />
                                </FormControl>
                                <FormLabel htmlFor={`taste-${option}`} className="font-normal cursor-pointer text-sm">{option}</FormLabel>
                            </FormItem>
                        ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />


                <DialogFooter className="pt-4">
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Report...
                    </>
                    ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get My Wellness Report
                    </>
                    )}
                </Button>
                </DialogFooter>
            </form>
            </Form>
        )}

        {isLoading && !report && !error && ( // Show loading indicator
             <div className="flex flex-col justify-center items-center py-10 space-y-3">
                 <Loader2 className="h-8 w-8 animate-spin text-primary" />
                 <p className="text-muted-foreground">Analyzing your preferences...</p>
             </div>
        )}


        {report && !isLoading && ( // Display the generated report card
            <div className="py-4 space-y-5">
                 <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/20">
                    <CardHeader>
                        <CardTitle className="text-xl text-primary flex items-center gap-2"> <Wand2 className="h-5 w-5"/> {report.reportTitle || "Your Wellness Report Card"}</CardTitle>
                        <CardDescription>{report.analysis}</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <div className="mb-4 p-3 bg-background rounded-md border border-dashed">
                            <p className="text-sm font-semibold flex items-center gap-1.5"><Target className="h-4 w-4 text-accent"/> Focus Area:</p>
                            <p className="text-sm text-muted-foreground">{report.focusArea}</p>
                         </div>
                         <h4 className="font-semibold mb-2 text-foreground">Recommendations:</h4>
                         <div className="space-y-3">
                            {report.recommendations.map((rec, index) => (
                                <div key={index} className="p-3 border rounded-md bg-background/50">
                                    <p className="font-medium text-foreground">{rec.productName}</p>
                                    <p className="text-xs text-muted-foreground">{rec.reasoning}</p>
                                    {/* Placeholder for Shop Now link */}
                                    {/* <Button variant="link" size="sm" className="p-0 h-auto mt-1 text-primary">Shop Now</Button> */}
                                </div>
                            ))}
                         </div>
                    </CardContent>
                 </Card>

                 <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-2">
                     <DialogClose asChild>
                        <Button variant="outline">Close</Button>
                    </DialogClose>
                     <Button asChild className="bg-accent hover:bg-accent/90">
                       <Link href="/shop">Shop Recommendations</Link>
                     </Button>
                 </DialogFooter>
            </div>
        )}

        {error && !isLoading && ( // Display error message
             <div className="py-4 space-y-4">
                <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
                 <DialogFooter className="mt-6">
                     <DialogClose asChild>
                        <Button variant="outline">Try Again</Button>
                    </DialogClose>
                 </DialogFooter>
            </div>
        )}

      </DialogContent>
    </Dialog>
  );
}
