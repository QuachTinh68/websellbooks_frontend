import ImageModel from "../models/ImageModel";
import { my_request } from "./Request";


async function getImageOfBook(path: string): Promise<ImageModel[]> {
  const result: ImageModel[] = [];
  //Call request function to fetch data from the API endpoint
  const response = await my_request(path);
  //Extract the books data from the response
  const responseData = response._embedded.images;

  for (const key in responseData) {
    result.push({
      imageId: responseData[key].imageId,
      imageName: responseData[key].imageName,
      isIconImage: responseData[key].isIconImage,
      imageUrl: responseData[key].imageUrl,
      imageData: responseData[key].imageData,
    });
  }

  return result;
}


export async function getAllImagesByBookId(imageId: number): Promise<ImageModel[]> {
  //Fetch data from the API endpoint
  const path: string = `http://localhost:8080/books/${imageId}/images`;
  return getImageOfBook(path)
}


export async function getImagesIsImageIcon(imageId: number): Promise<ImageModel[]> {
  //Fetch data from the API endpoint
  const path: string = `http://localhost:8080/books/${imageId}/images?sort=imageId,asc&size=1`;
  return getImageOfBook(path)
}