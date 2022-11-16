export type FoodInfoOut = {
    calcium: number,
    calories: number,
    carbohydrates: number,
    cholesterol: number,
    dietary_fiber: number,
    iron: number,
    magnesium: number,
    potassium: number,
    protein: number,
    sodium: number,
    sugars: number,
    total_fat: number,
    vitamin_A: number,
    vitamin_B2: number,
    vitamin_B3: number,
    vitamin_C: number,
    vitamin_D: number,
    vitamin_E: number,
    vitamin_K: number,
    water: number
}

export type FoodMealInfo = {
    name: string,
    amount: string
}

export type Food = {
    id: number,
    name: string,
    calories: number,
    carbohydrates: number,
    protein: number,
    total_fat: number,
    sugars: number,
    dietary_fiber: number,
    sodium: number,
    potassium: number,
    calcium: number,
    iron: number,
    vitamin_A: number,
    vitamin_B2: number,
    vitamin_B3: number,
    vitamin_C: number,
    vitamin_D: number,
    cholesterol: number,
    portion: number,
    company: string,
    magnesium: number,
    vitamin_E: number,
    vitamin_K: number,
    unit: string,
}

export type Props = {
    meal: {
        id: number,
        created_at: Date,
        description: string,
        type: string,
        meal_info: string
    },
    foods: any
}