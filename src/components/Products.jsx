import React, { useState } from "react"
import { fetchMeals } from "../actions/fetchData"
import { useFetch } from "../hooks/useFetch"
import Product from "./Product"

function Products({  }) {
  const {
    isLoading,
    data: meals,
    setData: setMeals,
    error,
  } = useFetch(fetchMeals, [])

  return (
    <>
      {!isLoading && (
        <div className='grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-x-2 md:gap-y-4 md:p-4 '>
          {!error && (
            <>
              {meals.map((meal) => (
                <Product
                  key={meal.id}
                  product={meal}
                  
                />
              ))}
            </>
          )}
        </div>
      )}
      {isLoading && <div></div>}
    </>
  )
}

export default Products
