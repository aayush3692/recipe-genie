import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Clock, Leaf, Utensils } from "lucide-react";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description = "" }: FeatureCardProps) => {
    return (
        <Card className="bg-white h-full transition-all hover:shadow-lg">
            <CardContent className="flex flex-col items-center text-center p-6">
                <div className="rounded-full bg-orange-50 p-4 mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </CardContent>
        </Card>
    );
};

const FeaturesGrid = () => {
    const features = [
        {
            icon: <Mic className="h-6 w-6 text-orange-500" />,
            title: "Voice-Guided Cooking",
            description:
                "Follow step-by-step instructions with hands-free voice guidance while you cook.",
        },
        {
            icon: <Clock className="h-6 w-6 text-orange-500" />,
            title: "Instant Recipe Suggestions",
            description:
                "Get personalized recipe ideas in seconds based on ingredients you already have.",
        },
        {
            icon: <Leaf className="h-6 w-6 text-green-600" />,
            title: "Zero Waste Meals",
            description:
                "Reduce food waste by creating delicious meals with ingredients about to expire.",
        },
        {
            icon: <Utensils className="h-6 w-6 text-orange-500" />,
            title: "Personalized Flavors",
            description:
                "AI learns your taste preferences over time to suggest recipes you'll love.",
        },
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Smart Features for Modern Cooking
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our AI-powered recipe generator transforms how you cook with these
                        innovative features
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
