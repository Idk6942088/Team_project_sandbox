import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { getPizzas } from '../utils'

export const Products = () => {

  const {data,isLoading,isError,error}=useQuery({queryKey:["products"],queryFn:getPizzas })
  if(isLoading) return <div>Loading... </div>
  if(isError) return <div>Error: {error.message}</div>
  console.log(data.data);
  

  return (
    <div>
      {data.data.map(obj=>
        <div key={obj.id}>
          {obj.name}
          <img src={obj.img_url} alt="" />
        </div>
      )}
    </div>
  )
}