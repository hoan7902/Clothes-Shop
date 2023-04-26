import axios, { AxiosError } from "axios";

const API = axios.create({ baseURL: process.env.SERVER_HOST });

API.interceptors.request.use((req) => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user") || "{}").token
    }`;
  }
  return req;
});

export const loginUser = async (dataForm: string) => {
  try {
    const response = await API.post("/api/user/login", dataForm);
    return response.data;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const updateUser = async (dataForm: string) => {
  try {
    const response = await API.put("/api/user/profile", dataForm);
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const updateAvatar = async (formData: any) => {
  try {
    const response = await API.post("/api/user/avatar", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const getMyOrders = async (
  status: string,
  limit: any = 10,
  frame: any = 1
) => {
  try {
    const response = await API.get(
      `api/order/my-orders?status=${status}&limit=${limit}&frame=${frame}`
    );
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const signUpUser = async (dataForm: string) => {
  try {
    const response = await API.post("/api/user/register", dataForm);
    return response.data;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const getUserById = async (userId: any) => {
  try {
    const response = await API.get(`/api/user/${userId}`);
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const addCategory = async (category: any) => {
  try {
    const response = await API.post("/api/category", category);
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const getCategories = async () => {
  try {
    const response = await API.get("/api/categories");
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await API.get("/api/products");
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const getProducts = async (params: any) => {
  try {
    const response = await API.get("/api/products", { params: params });
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const getProduct = async (productId: any) => {
  try {
    console.log("check id inside: ", productId);
    const response = await API.get(`/api/product/${productId}`);
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const getOrderById = async (id: any) => {
  try {
    const response = await API.get(`api/order/${id}`);
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const addtoCart = async (productId: any, params: any) => {
  try {
    const response = await API.post(`/api/cart/${productId}`, params);
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const removeFromCart = async (productId: any, params: any) => {
  try {
    const response = await API.delete(`/api/cart/${productId}/${params}`);
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const addRating = async (productId: any, params: any) => {
  try {
    const response = await API.post(`/api/rating/${productId}`, params);
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const getRating = async (productId: any) => {
  try {
    const response = await API.get(`/api/rating/${productId}`);
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const myCart = async () => {
  try {
    const response = await API.get(`api/cart/my-cart`);
    return response;
  } catch (error) {
    return (error as AxiosError).response;
  }
};

export const createAnOrder = async (params: any) => {
  try {
    const response = await API.post(`api/order/create`, params);
    return response;
  } catch (error) {
    // return (error as AxiosError).response;
    throw error;
  }
};
