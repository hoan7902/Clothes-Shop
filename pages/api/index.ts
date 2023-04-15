import axios from "axios";

const API = axios.create({ baseURL: "http://localhost/PHP_DB_SHOP" });

API.interceptors.request.use((req) => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('user') || '{}').token
    }`;
  }

  return req;
});

export const loginUser = async (dataForm: string) => {
  const response = await API.post("/api/user/login", dataForm);
  return response.data; 
}

export const signUpUser = async (dataForm: string) => {
  const response = await API.post("/api/user/register", dataForm);
  return response.data; 
}

export const addCategory = async(category: any) => {
    const response = await API.post("/api/category", category);
    return response;
}

export const getCategories = async() => {
  const response = await API.get("/api/categories");
  return response;
}

export const getProducts = async(params: any )=>{
    const response = await API.get("/api/products",{ params: params });
    return response;
}

export const getProduct = async(productId: any )=>{
    const response = await API.get(`/api/product/${productId}`);
    return response;
}
export const addtoCart = async(productId: any )=>{
  console.log(`/api/cart/${productId}`)
  const response = await API.post(`/api/cart/${productId}`);
  return response;
}