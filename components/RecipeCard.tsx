import React from "react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    imageUrl: string;
    cookTime?: string;
    servings?: number;
}

const RecipeCard = ({
    id = "1",
    title = "Creamy Garlic Pasta",
    description = "A delicious pasta dish with a creamy garlic sauce that's ready in minutes.",
    ingredients = ["Pasta", "Garlic", "Heavy Cream", "Parmesan", "Butter"],
    imageUrl = "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=600&q=80",
    cookTime = "20 mins",
    servings = 2,
}: RecipeCardProps) => {
    return (
        <Link
            href={`/recipes/${id}`}
            className="block transition-transform hover:scale-[1.02]"
        >
            <Card className="h-full overflow-hidden bg-white">
                <div className="relative h-48 w-full overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 flex gap-2">
                        <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">
                            {cookTime}
                        </Badge>
                        <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">
                            {servings} {servings === 1 ? "serving" : "servings"}
                        </Badge>
                    </div>
                </div>

                <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                        {description}
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <h3 className="mb-2 text-sm font-medium text-gray-700">
                        Main Ingredients:
                    </h3>
                    <div className="flex flex-wrap gap-1">
                        {ingredients.slice(0, 5).map((ingredient, index) => (
                            <Badge key={index} variant="outline" className="bg-gray-50">
                                {ingredient}
                            </Badge>
                        ))}
                        {ingredients.length > 5 && (
                            <Badge variant="outline" className="bg-gray-50">
                                +{ingredients.length - 5} more
                            </Badge>
                        )}
                    </div>
                </CardContent>

                <CardFooter className="pt-0">
                    <div className="text-sm text-blue-600 hover:underline">
                        View full recipe →
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default RecipeCard;
