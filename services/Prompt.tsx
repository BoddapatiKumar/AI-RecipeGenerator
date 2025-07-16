export default {
  GENERATE_RECIPE_OPTION_PROMPT: `
  Based on the user's input, generate exactly 3 different recipe variations.

  Each recipe should include:
  - recipeName (with a relevant emoji)
  - description (max 2 lines)
  - ingredients (a list of ingredient names only, no quantities or sizes)

  Return the result strictly as a JSON array of 3 objects with the following fields:
  recipeName, description, ingredients

  ❗Output only the JSON. No explanations, no markdown, no extra text.`,

  GENERATE_COMPLETE_RECIPE: ` 

        - As per recipe Name and Description and include both of them also, Give me all list of ingredients as ingredient ,

        - emoji icons for each ingredient as icon, quantity as quantity, along with detail step by step  recipe as steps

        - Total Calories as calories (only number), Minutes to cook as cookTime and serving number as serveTo in number format

        - relastic image Text prompt as per reciepe as imagePrompt

        - Give me category list for recipe from [BreakFast,Lunch,Dinner,Salad,Desert,Fastfood,Drink,Cake] as category

        - Give me response in JSON format only

          Return the result strictly as a single JSON object with the above fields.

        ❗Output only the JSON. No explanations, no markdown, no extra text.
        
        
        `,
};
