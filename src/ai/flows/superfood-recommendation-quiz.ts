'use server';
/**
 * @fileOverview A superfood recommendation quiz AI agent that provides a wellness report card.
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

// Updated output schema for a detailed report card
const SuperfoodRecommendationQuizOutputSchema = z.object({
  reportTitle: z.string().describe("A catchy title for the wellness report card."),
  analysis: z.string().describe("A brief analysis based on the user's health goals and preferences."),
  focusArea: z.string().describe("Suggests a key nutritional area to focus on (e.g., antioxidants, fiber, protein)."),
  recommendations: z.array(z.object({
    productName: z.string().describe("Name of the recommended NourishVita product."),
    reasoning: z.string().describe("Explanation why this product is recommended based on user input."),
    // Optional: Add a direct link slug if needed later
    // productSlug: z.string().optional().describe("URL slug for the product page.")
  })).describe("A list of personalized product recommendations with explanations.")
});
export type SuperfoodRecommendationQuizOutput = z.infer<
  typeof SuperfoodRecommendationQuizOutputSchema
>;

export async function superfoodRecommendationQuiz(
  input: SuperfoodRecommendationQuizInput
): Promise<SuperfoodRecommendationQuizOutput> {
  return superfoodRecommendationQuizFlow(input);
}

// Updated prompt to generate the report card structure
const prompt = ai.definePrompt({
  name: 'superfoodRecommendationQuizPrompt',
  input: {
    schema: SuperfoodRecommendationQuizInputSchema,
  },
  output: {
    schema: SuperfoodRecommendationQuizOutputSchema,
  },
  prompt: `You are a helpful AI assistant for NourishVita, specializing in personalized superfood recommendations. Generate a friendly and insightful wellness report card based on the user's input.

  User Input:
  - Dietary Preferences: {{{dietaryPreferences}}}
  - Health Goals: {{{healthGoals}}}
  - Taste Preferences: {{{tastePreferences}}}

  Generate a response in the specified JSON format. Provide a concise analysis, identify a key focus area (like antioxidants, fiber, energy support), and recommend 2-3 specific NourishVita products. For each product, explain briefly *why* it aligns with the user's goals and preferences.

  Example NourishVita Products (Use these or similar relevant ones): Organic Chia Seeds, Goji Berry Bliss, Quinoa Protein Bars, Turmeric Latte Mix, Hemp Seeds, Spirulina Powder.

  Keep the reasoning for each product recommendation to 1-2 sentences.
  `,
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
    // Ensure output is not null, though definePrompt should handle errors
    if (!output) {
        throw new Error("AI failed to generate recommendations.");
    }
    // Add basic validation or refinement if needed
     if (!output.recommendations || output.recommendations.length === 0) {
       // Fallback or refinement logic if needed
       console.warn("AI did not return specific recommendations, might need prompt adjustment.");
       // You could return a default message or attempt a retry here
       // For now, returning the potentially incomplete output
    }
    return output;
  }
);
