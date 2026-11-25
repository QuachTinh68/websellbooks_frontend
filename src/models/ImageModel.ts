class ImageModel {
  imageId: number;
  imageName?: string;
  isIconImage?: boolean;
  imageUrl?: string;
  imageData?: string;
  constructor(
    imageId: number,
    imageName?: string,
    isIconImage?: boolean,
    imageUrl?: string,
    imageData?: string,
  ) {
    this.imageId = imageId;
    this.imageName = imageName;
    this.isIconImage = isIconImage;
    this.imageUrl = imageUrl;
    this.imageData = imageData;
  }
}
export default ImageModel;
