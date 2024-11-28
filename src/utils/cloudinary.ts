import * as ImagePicker from 'expo-image-picker';
export const handleUploadImage = async (
  photo: ImagePicker.ImagePickerSuccessResult
) => {
  let newFile: any = {
    uri: photo.assets[0].uri,
    type: `test/${photo.assets[0].uri.split('.')[1]}`,
    name: `test.${photo.assets[0].uri.split('.')[1]}`,
  };
  const data = new FormData();
  data.append('file', newFile);
  console.log("process.env.UPLOAD_PRESET_CLOUDINARY", process.env.UPLOAD_PRESET_CLOUDINARY);
  console.log("process.env.CLOUD_NAME_CLOUDINARY", process.env.CLOUD_NAME_CLOUDINARY);
  console.log("process.env.PUBLIC_URL_CLOUDINARY", process.env.PUBLIC_URL_CLOUDINARY);
  data.append('upload_preset', process.env.UPLOAD_PRESET_CLOUDINARY as string);
  data.append('cloud_name', process.env.CLOUD_NAME_CLOUDINARY as string);
  return fetch(process.env.PUBLIC_URL_CLOUDINARY as string, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  }).then((res) => res.json());
};
