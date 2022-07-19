import { message } from "antd";
import { RcFile, UploadFile } from "antd/lib/upload";
import axios from "axios";

export const upload = async (file: any) => {
  const CLOUNDINARY_URL =
    "https://api.cloudinary.com/v1_1/thaicodejj/image/upload";
  const CLOUNDINARY_PRESET = "fl3e89zr";
  console.log(file);

  const formData = new FormData();
  formData.append("file", file.originFileObj);
  formData.append("upload_preset", CLOUNDINARY_PRESET);

  const { data } = await axios.post(CLOUNDINARY_URL, formData, {
    headers: { "Content-Type": "application/form-data" },
  });

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
    message.error("Ảnh có kích cỡ quá to (>2MB)");
    return !isLt2M;
  }
  return false;
};
