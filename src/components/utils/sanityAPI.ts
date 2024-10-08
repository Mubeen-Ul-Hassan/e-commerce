export async function fetchProduct() {
  try {
    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-07-29/data/query/production?query=*%5B_type+%3D%3D+%27products%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++size%2C%0A++++description%2C%0A++++producttype%0A%7D%5B0...16%5D`,
      {
        next: {
          revalidate: 10,
        },
      }
    );
    return response.json();
  } catch (error) {
    console.log("Error", error);
  }
}

export async function fetchCurrentProductDetails(search: string) {
  try {
    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-07-29/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+slug.current+%3D%3D+%27${search}%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++size%2C%0A++++description%2C%0A++++producttype%0A%7D%5B0...16%5D`,
      {
        next: {
          revalidate: 10,
        },
      }
    );
    return response.json();
  } catch (error) {
    console.log("Error", error);
  }
}
