import instance from "./intance";

export const listCategory = () => {
  const url = `/categories`;
  return instance.get(url);
};

export const deleteCategory = (id?: string) => {
  const url = `/categories/${id}`;
  return instance.delete(url);
};
