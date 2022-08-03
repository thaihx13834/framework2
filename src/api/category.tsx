import { CategoryType } from "../types/CategoryType";
import instance from "./intance";

export const listCategory = () => {
  const url = `/categories?_sort=createdAt&_order=desc`;
  return instance.get(url);
};

export const deleteCategory = (id?: string) => {
  const url = `/categories/${id}`;
  return instance.delete(url);
};

export const detailCategory = (id: any) => {
  console.log(id);

  const url = `/categories/${id}`;
  return instance.get(url);
};

export const editStatusCategory = (statusData: any, id?: string) => {
  const url = `/categories/${id}`;
  console.log(statusData);

  return instance.patch(url, statusData);
};

export const addCategory = (category: CategoryType) => {
  const url = `/categories`;

  return instance.post(url, category);
};

export const detailPr = (id: string) => {
  const url = `/categories/${id}`;

  return instance.get(url);
};

export const editCategory = (category: CategoryType) => {
  const url = `/categories/${category.id}`;

  return instance.patch(url, category);
};
