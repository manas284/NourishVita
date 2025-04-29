'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Award, Leaf, Heart, MapPin, Settings, LogOut, Bookmark } from 'lucide-react'; // Added Bookmark
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast'; // Assuming useToast exists for logout

// Mock User Data (Replace with actual user session/data)
const userData = {
    name: 'Priya M.',
    email: 'priya.m@example.com',
    loyaltyLevel: 'Sprout', // Seedling, Sprout, Bloom
    loyaltyPoints: 1250,
    pointsToNextLevel: 2000, // Points needed for 'Bloom'
    treesPlanted: 5,
    savedRecipesCount: 3,
    // Add other user details like addresses, orders etc.
};

const loyaltyLevels = {
    Seedling: { points: 0, icon: <Leaf className="h-5 w-5 text-green-400" />, perks: 'Basic member benefits.' },
    Sprout: { points: 1000, icon: <Leaf className="h-5 w-5 text-lime-500" />, perks: '10% off next order, early access newsletter.' },
    Bloom: { points: 2500, icon: <Leaf className="h-5 w-5 text-emerald-500" />, perks: '15% off, early access to products, birthday gift.' },
};

const getCurrentLevelInfo = (points: number) => {
    if (points >= loyaltyLevels.Bloom.points) return { ...loyaltyLevels.Bloom, name: 'Bloom' };
    if (points >= loyaltyLevels.Sprout.points) return { ...loyaltyLevels.Sprout, name: 'Sprout' };
    return { ...loyaltyLevels.Seedling, name: 'Seedling' };
}

const getNextLevelInfo = (currentLevelName: string) => {
    if (currentLevelName === 'Seedling') return { ...loyaltyLevels.Sprout, name: 'Sprout' };
    if (currentLevelName === 'Sprout') return { ...loyaltyLevels.Bloom, name: 'Bloom' };
    return null; // Max level reached
}

export default function AccountPage() {
    const { toast } = useToast();
    const currentLevel = getCurrentLevelInfo(userData.loyaltyPoints);
    const nextLevel = getNextLevelInfo(currentLevel.name);

    const pointsProgress = nextLevel ? (userData.loyaltyPoints / nextLevel.points) * 100 : 100;
    const pointsRemaining = nextLevel ? nextLevel.points - userData.loyaltyPoints : 0;


     // Mock logout function
     const handleLogout = () => {
        console.log("Logout initiated from account page");
        // TODO: Implement actual logout logic
        toast({
            title: "Logged Out",
            description: "You have been successfully logged out.",
        });
        // TODO: Redirect user
        // router.push('/'); // Example redirect
    }


    return (
        <div className="container py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">My Account</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 {/* Main Content Area */}
                 <div className="lg:col-span-2 space-y-8">
                    {/* Welcome Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Welcome back, {userData.name}!</CardTitle>
                            <CardDescription>{userData.email}</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-muted-foreground">Manage your profile, orders, and preferences here.</p>
                        </CardContent>
                    </Card>

                    {/* Loyalty Program Card */}
                    <Card className="border-primary/30 bg-primary/5">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-medium flex items-center gap-2">
                                <Award className="h-5 w-5 text-primary" /> Loyalty Status
                            </CardTitle>
                            <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                               {currentLevel.icon} {currentLevel.name} Member
                            </span>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{userData.loyaltyPoints.toLocaleString()} Points</div>
                            <p className="text-xs text-muted-foreground mb-4">
                                Perks: {currentLevel.perks}
                            </p>
                            {nextLevel && (
                                <>
                                <Progress value={pointsProgress} className="w-full h-2 mb-1" />
                                <p className="text-xs text-muted-foreground text-right">
                                    {pointsRemaining.toLocaleString()} points until {nextLevel.name} level!
                                </p>
                                </>
                            )}
                             {nextLevel === null && (
                                <p className="text-sm text-emerald-600 font-medium">You've reached the highest level!</p>
                            )}
                            <Button variant="link" size="sm" className="p-0 mt-2 text-primary">Learn more about levels</Button>
                        </CardContent>
                    </Card>

                    {/* Eco Impact Card */}
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-medium flex items-center gap-2">
                                <Leaf className="h-5 w-5 text-green-600" /> Your Eco Impact
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                             <p className="text-lg">
                                With your purchases, you've helped plant <span className="font-bold text-primary">{userData.treesPlanted} trees!</span> 🌱
                             </p>
                             <p className="text-sm text-muted-foreground mt-1">Thank you for supporting sustainability.</p>
                             <Button variant="link" size="sm" className="p-0 mt-2 text-primary">See Our Impact</Button>
                        </CardContent>
                    </Card>

                      {/* Saved Recipes Card - Placeholder */}
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-medium flex items-center gap-2">
                                <Bookmark className="h-5 w-5 text-accent" /> My Wellness Hub
                            </CardTitle>
                            <Link href="/wellness-hub/saved" className="text-sm text-primary hover:underline">
                                View All
                            </Link>
                        </CardHeader>
                        <CardContent>
                             <p className="text-base">
                                You have <span className="font-bold">{userData.savedRecipesCount} saved recipes</span>.
                             </p>
                             {/* Placeholder list or link */}
                             <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                                <p> - Chia Seed Pudding Guide</p>
                                <p> - Energizing Morning Smoothies</p>
                                <p>...</p>
                             </div>
                        </CardContent>
                    </Card>

                </div>

                 {/* Sidebar/Navigation */}
                 <div className="lg:col-span-1 space-y-4 lg:sticky top-24 self-start">
                     <Card>
                        <CardHeader>
                            <CardTitle>Account Menu</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                             <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
                                <Heart className="h-4 w-4"/> Wishlist
                             </Button>
                             <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
                                 {/* Add appropriate icon for orders */}
                                <MapPin className="h-4 w-4" /> Addresses
                             </Button>
                            <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
                                <Settings className="h-4 w-4"/> Profile Settings
                             </Button>
                            <Separator className="my-2" />
                            <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10" onClick={handleLogout}>
                                <LogOut className="h-4 w-4"/> Logout
                             </Button>
                        </CardContent>
                     </Card>
                 </div>

            </div>
        </div>
    );
}
