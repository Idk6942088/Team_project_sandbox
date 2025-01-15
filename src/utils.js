import axios from "axios"

const url="http://localhost:3000"

export const getPizzas=async (id) => {
    const response = await axios.get(url+"/products")
    return response
}

export const getSinglePizza=async (id) => {
    const response = await axios.get(url+"/product/"+id)
    return response
}