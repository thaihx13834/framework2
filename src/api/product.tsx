import { ProductType } from "../types/ProductType";
import instance from "./intance";

export const listProduct = () => {
  const url = `/products?_sort=createdAt&_order=desc`;
  return instance.get(url);
};

export const listProductt = () => {
  const url = `/products?_sort=createdAt&_order=desc&status=0`;
  return instance.get(url);
};

export const product = (id: string) => {
  const url = `/products/${id}`;
  return instance.get(url);
};

export const addProduct = (product: ProductType) => {
  const url = `/products`;
  return instance.post(url, product);
};

export const deleteProduct = (id?: string) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};

export const editStatusProduct = (statusData: any, id?: string) => {
  const url = `/products/${id}`;
  console.log(statusData);

  return instance.patch(url, statusData);
};

export const GetPrWithCategory = (id: string) => {
  const url = `/categories/${id}/products?_sort=createdAt&_order=desc`;

  return instance.get(url);
};

export const updateProduct = (product: any, id?: string) => {
  const url = `/products/${id}`;

  return instance.patch(url, product);
};

export const similarProduct = (categoryId: string) => {
  console.log(categoryId);

  const url = `/products?categoryId=${categoryId}&_limit=6`;

  return instance.get(url);
};

export const search = (searchTxt: string) => {
  const url = `/products?q=${searchTxt}`;
  return instance.get(url);
};
