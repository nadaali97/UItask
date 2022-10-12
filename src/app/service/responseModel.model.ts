export interface responseModel

{
    albumId: number;
    id: number;
    title: String;
    url: String;
    thumbnailUrl: String;
  }

  export const mockResponseModel:responseModel=
  {albumId:1,
    id:1,
    thumbnailUrl:"test",
    title:"title",
    url:"url"}