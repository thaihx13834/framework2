import { message } from "antd";
import { RcFile, UploadFile } from "antd/lib/upload";
import axios from "axios";
import { useState } from "react";
import { uploadImage } from "../api/image";

export const upload = async (file: any) => {
  let dataAfterRead = "a";

  dataAfterRead = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj as RcFile);
    reader.onload = () => resolve(reader.result as string);
  });

  const { data } = await uploadImage(dataAfterRead);

  return data.url;
};

export const onPreview = async (file: UploadFile) => {
  let src = file.url as string;
  if (!src) {
    src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj as RcFile);
      reader.onload = () => resolve(reader.result as string);
    });
  }
  console.log(src);

  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow?.document.write(image.outerHTML);
};

export const validateFile = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("Ảnh ko đúng định dạng");
    return !isJpgOrPng;
  }
  const isLt2M = file.size / 1024 / 1024 < 10;
  if (!isLt2M) {
    message.error("Ảnh có kích cỡ quá to (>10MB)");
    return !isLt2M;
  }
  return false;
};
