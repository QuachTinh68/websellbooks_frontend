export async function my_request(path: string) {
  //Fetch data from the API endpoint
  const response = await fetch(path);

  //Check if the response is return error
  if (!response.ok) {
    throw new Error(`Error fetching books from ${path}`);
  }
  //Return the response as JSON if the response is successful
  return response.json();
}
