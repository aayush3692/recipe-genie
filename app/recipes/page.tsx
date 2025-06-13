import RecipeCard from '@/components/RecipeCard'
import React from 'react'

interface Recipe {
    id: string;
    name: string;
    description: string;
    mainIngredients: string[];
    imageUrl: string;
    prepTime: string;
    cookTime: string;
    servings: number;
}


const page = () => {
    const recipes: Recipe[] = [
        {
            id: "1",
            name: "Garlic Butter Shrimp Pasta",
            description:
                "Creamy pasta with garlic butter shrimp, ready in just 20 minutes.",
            mainIngredients: ["Shrimp", "Pasta", "Garlic", "Butter", "Parmesan"],
            imageUrl:
                "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
            prepTime: "10 mins",
            cookTime: "15 mins",
            servings: 4,
        },
        {
            id: "2",
            name: "Roasted Vegetable Quinoa Bowl",
            description:
                "Healthy bowl packed with roasted vegetables and protein-rich quinoa.",
            mainIngredients: [
                "Quinoa",
                "Bell Peppers",
                "Zucchini",
                "Chickpeas",
                "Olive Oil",
            ],
            imageUrl:
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
            prepTime: "15 mins",
            cookTime: "25 mins",
            servings: 2,
        },
        {
            id: "3",
            name: "Lemon Herb Roasted Chicken",
            description: "Juicy roasted chicken with bright lemon and fresh herbs.",
            mainIngredients: ["Chicken", "Lemon", "Rosemary", "Thyme", "Garlic"],
            imageUrl:
                "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80",
            prepTime: "20 mins",
            cookTime: "45 mins",
            servings: 6,
        },
    ];
    return (
        <section className='bg-white min-h-screen py-16 px-4 md:px-8 lg:px-16'>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                    Generated Your Recipes
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Take a look to see what best suits your taste
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} {...recipe} />
                ))}
            </div>
        </section>
    )
}

export default page
