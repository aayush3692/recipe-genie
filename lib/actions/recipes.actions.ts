'use server';
import { createSupabaseClient } from "../supabase"

export const createRecipe = async (FormData: any) => {
    const supabase = createSupabaseClient();

    const { data, error } = await supabase.from('recipes')
        .insert({ ...FormData })
        .select();

    if (error || !data) throw new Error(error?.message || 'failed to create recipe')

    return data[0];
}

export const getRecipe = async (id: string) => {
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('recipes')
        .select()
        .eq('id', id)

    if (error) return console.log(error);

    return data[0];
}


export const createdGeneratedRecipe = async (recipeId: string, Recipes: any) => {

    const supabase = createSupabaseClient();

    const { data, error } = await supabase.from('generated_recipes')
        .insert({
            ...Recipes,
            recipe_id: recipeId
        })
        .select();

    if (error || !data) throw new Error(error?.message || 'failed to create recipe')

    return data[0];
}


export const getRecipeWithGeneratedData = async (id: string) => {
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('generated_recipes')
        .select()
        .eq('recipe_id', id)
        .single(); // optional: only one expected

    if (error) {
        console.error("Error fetching joined data:", error.message);
        return null;
    }

    return data;
};
