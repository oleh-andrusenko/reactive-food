export async function fetchMeals() {
  const fetchedData = await fetch("http://localhost:3000/meals")
  const dataObj = await fetchedData.json()
  return dataObj
}

export async function putOrder(order) {
  console.log(order)
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
  return response
}
