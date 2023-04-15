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

export const loginUser = async (dataForm: any) => {
  const response = await API.post("/api/user/login", dataForm);
  return response.data; 
}

export const addCategory = async(category: any) => {
  console.log("check request: ", category)
  const response = await API.post("/api/category", category);
  return response;
}

export const getCategories = async() => {
  const response = await API.get("/api/categories");
  return response;
}
export const getProducts = async(params:any )=>{
    console.log("fetch data", params)
    const response = await API.get("/api/products",{ params: params });
     console.log("haha", response.data)
    return response;
}
export const getProduct = async(productId:any )=>{
    console.log("fetch product", `/api/product/${productId}`)
    const response = await API.get(`/api/product/${productId}`);
     console.log("haha", response.data)
    return response;
}