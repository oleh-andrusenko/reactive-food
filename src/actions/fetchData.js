export async function fetchMeals() {
  const fetchedData = await fetch("https://reactive-food-backend.onrender.com/meals")
  const dataObj = await fetchedData.json()
  return dataObj
}

export async function putOrder(order) {
  console.log(order)
  const response = await fetch("https://reactive-food-backend.onrender.com/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
  return response
}
