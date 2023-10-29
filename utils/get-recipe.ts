import fetcher from "@/lib/fetcher";
import axios from "axios";

export async function getRecipes(query: string, page?: string, filters?: any){
  if (!query){
    return null;
  }
  const data = await fetcher({
    url: "https://api.edamam.com/search",
    params: {
      q: query,
      app_id: process.env.EDAMAM_RECIPES_API_ID,
      app_key: process.env.EDAMAM_RECIPES_API_KEY,
      from: page ? (Number(page) - 1) * 20 : 0,
      to: page? (Number(page) * 20) : 20,
      ...filters
    }
  })
  return data;
}

export async function getRecipe(recipeId: string){
  if (!recipeId){
    console.log("No recipe id")
    return null;
  }
  const data = await fetcher({
    url: `https://api.edamam.com/api/recipes/v2/${recipeId}`,
    params: {
      type: 'public',
      app_id: process.env.EDAMAM_RECIPES_API_ID,
      app_key: process.env.EDAMAM_RECIPES_API_KEY,
    }

  })
  return data;
}


export async function getProduct(productId: string){
  if (!productId){
    console.log("No recipe id")
    return null;
  }
  const data = await fetcher({
    url: `https://api.edamam.com/api/food-database/v2/parser`,
    params: {
      ingr: productId,
      app_id: process.env.EDAMAM_FOOD_API_ID,
      app_key: process.env.EDAMAM_FOOD_API_KEY,
    }
  }).catch(err => {
    console.log(err);
    console.log(err.message)
  })
  return data;
}

export async function getNutrients(productId: string){
  if (!productId){
    console.log("No recipe id")
    return null;
  }
  const url = 'https://api.edamam.com/api/food-database/v2/nutrients'
  const params = {
    app_id: process.env.EDAMAM_FOOD_API_ID,
    app_key: process.env.EDAMAM_FOOD_API_ID,
  }
  const body =
  {
    "ingredients": [
    {
      "quantity": 1,
      "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit"
      ,
      "foodId": productId
    }
  ]}

  const response = await axios.post(url, body, {
    params: params
  }).then(resp => resp.data)
    .catch(err => console.log(err))
  return response;
}