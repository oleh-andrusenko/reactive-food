export async function fetchMeals() {
  const fetchedData = await fetch("http://localhost:3000/meals")
  const dataObj = await fetchedData.json()
  return dataObj
}
