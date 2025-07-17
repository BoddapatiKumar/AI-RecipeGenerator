import axios from "axios";
import OpenAI from "openai";

const axiosClient = axios.create({
  baseURL: "http://192.168.1.11:1337/api",
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`,
  },
});

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.EXPO_PUBLIC_OPENROUTR_API_KEY,
});

const createUser = (data: any) =>
  axiosClient.post("/user-lists", { data: data });

const getUserByEmail = (email: string) =>
  axiosClient.get("/user-lists?filters[email][$eq]=" + email);

const getCategories = () => axiosClient.get("/categories?populate=*");

const createRecipe = (data: any) =>
  axiosClient.post("/recipes", { data: data });

const getRecipeByCategory = (category: any) =>
  axiosClient.get("/recipes?filters[category][$contains]=" + category);

const getAllRecipeList=()=>axiosClient.get('/recipes?sort[0]=id:desc');

const getAllRecipesByLimit=(limit:any)=>axiosClient.get('/recipes?sort[0]=id:desc&pagination[start]=1&pagination[limit]='+limit);

const AiModel = async (prompt: string) =>
  await openai.chat.completions.create({
    model: "deepseek/deepseek-r1:free",
    messages: [{ role: "user", content: prompt }],
  });

const BASE_URL = "https://aigurulab.tech";
const generateAiImage = async (input: string) =>
  await axios.post(
    BASE_URL + "/api/generate-image",
    {
      width: 1024,
      height: 1024,
      input: input,
      model: "sdxl", //'flux'
      aspectRatio: "1:1", //Applicable to Flux model only
    },
    {
      headers: {
        "x-api-key": process.env.EXPO_PUBLIC_GURU_API_KEY, // Your API Key
        "Content-Type": "application/json", // Content Type
      },
    }
  );

export default {
  getUserByEmail,
  createUser,
  getCategories,
  AiModel,
  generateAiImage,
  createRecipe,
  getRecipeByCategory,
  getAllRecipeList,
  getAllRecipesByLimit
};
