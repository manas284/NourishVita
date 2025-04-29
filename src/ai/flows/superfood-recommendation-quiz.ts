'use server';
/**
 * @fileOverview A superfood recommendation quiz AI agent.
 *
 * - superfoodRecommendationQuiz - A function that handles the superfood recommendation quiz process.
 * - SuperfoodRecommendationQuizInput - The input type for the superfoodRecommendationQuiz function.
 * - SuperfoodRecommendationQuizOutput - The return type for the superfoodRecommendationQuiz function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SuperfoodRecommendationQuizInputSchema = z.object({
  dietaryPreferences: z
    .string()
    .describe(
      'The dietary preferences of the user, such as vegan, gluten-free, keto, or sugar-free.'
    ),
  healthGoals: z
    .string()
    .describe(
      'The health goals of the user, such as energy, immunity, digestion, or skin health.'
    ),
  tastePreferences: z
    .string()
    .describe('The taste preferences of the user, such as sweet, savory, or neutral.'),
});
export type SuperfoodRecommendationQuizInput = z.infer<
  typeof SuperfoodRecommendationQuizInputSchema
>;

const SuperfoodRecommendationQuizOutputSchema = z.object({
  productRecommendations: z
    .string()
    .describe(
      'A list of personalized product recommendations from NourishVita based on the user input.'
    ),
});
export type SuperfoodRecommendationQuizOutput = z.infer<
  typeof SuperfoodRecommendationQuizOutputSchema
>;

export async function superfoodRecommendationQuiz(
  input: SuperfoodRecommendationQuizInput
): Promise<SuperfoodRecommendationQuizOutput> {
  return superfoodRecommendationQuizFlow(input);
}

const prompt = ai.definePrompt({
  name: 'superfoodRecommendationQuizPrompt',
  input: {
    schema: z.object({
      dietaryPreferences: z
        .string()
        .describe(
          'The dietary preferences of the user, such as vegan, gluten-free, keto, or sugar-free.'
        ),
      healthGoals: z
        .string()
        .describe(
          'The health goals of the user, such as energy, immunity, digestion, or skin health.'
        ),
      tastePreferences: z
        .string()
        .describe('The taste preferences of the user, such as sweet, savory, or neutral.'),
    }),
  },
  output: {
    schema: z.object({
      productRecommendations: z
        .string()
        .describe(
          'A list of personalized product recommendations from NourishVita based on the user input.'
        ),
    }),
  },
  prompt: `You are a helpful AI assistant that provides personalized superfood product recommendations from NourishVita based on user preferences.

  Given the following dietary preferences, health goals, and taste preferences, recommend the best NourishVita products for the user.

  Dietary Preferences: {{{dietaryPreferences}}}
  Health Goals: {{{healthGoals}}}
  Taste Preferences: {{{tastePreferences}}}

  Product Recommendations:`,
});

const superfoodRecommendationQuizFlow = ai.defineFlow<
  typeof SuperfoodRecommendationQuizInputSchema,
  typeof SuperfoodRecommendationQuizOutputSchema
>(
  {
    name: 'superfoodRecommendationQuizFlow',
    inputSchema: SuperfoodRecommendationQuizInputSchema,
    outputSchema: SuperfoodRecommendationQuizOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
