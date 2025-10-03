export default async function FetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('error while fetching products data ==> ', error)
  }
}