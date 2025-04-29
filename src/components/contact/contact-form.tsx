"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast"; // Import useToast
import { Send } from "lucide-react";
import * as React from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  inquiryType: z.enum(["Order Support", "Product Questions", "Partnerships", "Feedback", "Other"], {
     required_error: "Please select an inquiry type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, { message: "Message cannot exceed 500 characters."}),
});

export default function ContactForm() {
  const { toast } = useToast(); // Initialize toast
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(values);
    setIsSubmitting(false);
    form.reset(); // Reset form after submission

    // Show success toast
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
      variant: "default", // or 'success' if you add a success variant
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="inquiryType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Inquiry Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a reason for contacting us" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Order Support">Order Support</SelectItem>
                  <SelectItem value="Product Questions">Product Questions</SelectItem>
                  <SelectItem value="Partnerships">Partnerships</SelectItem>
                  <SelectItem value="Feedback">Feedback</SelectItem>
                   <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us how we can help"
                  className="resize-none min-h-[120px]"
                  {...field}
                  disabled={isSubmitting}
                  maxLength={500}
                />
              </FormControl>
              <FormMessage />
               <p className="text-xs text-right text-muted-foreground">{field.value?.length || 0}/500</p>
            </FormItem>
          )}
        />
         <p className="text-xs text-muted-foreground">
            Your data is safe with us. View our <a href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</a>.
        </p>
        <Button type="submit" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
            </>
          ) : (
             <>
             <Send className="mr-2 h-4 w-4" /> Submit Message
             </>
          )}

        </Button>
      </form>
    </Form>
  );
}
