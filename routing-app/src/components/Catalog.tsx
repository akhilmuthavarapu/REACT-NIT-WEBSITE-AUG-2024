import React, { useEffect, useState } from 'react'
import NitNav from './NitNav'
import axios from 'axios';

export default function Catalog() {
    interface Cars
    {
        image:    string,
        model:    string,
        year:    number,
        mileage:    number
        fuelType:    string,
        transmission:    string,
        horsepower:    number,
        price:    number
    }
    const [cars,setCars] = useState<Cars[]>([]);
    useEffect( () =>{
        axios.get("https://freetestapi.com/api/v1/cars").then(res=>setCars(res.data))
    }

    );
  return (
    <div>
        <NitNav/>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">IMAGE</th>
      <th scope="col">MODEL</th>
      <th scope="col">YEAR</th>
      <th scope="col">MILEAGE</th>
      <th scope="col">FUEL TYPE</th>
      <th scope="col">TRANSMISSION</th>
      <th scope="col">HORSEPOWER</th>
      <th scope="col">PRICE</th>
    </tr>

  </thead>
  <tbody>
  {cars.map(eachcar =>(
      <tr>
      <td><img  src={eachcar.image} width="200px" height="250px" /></td>
      <td>{eachcar.model}</td>
      <td>{eachcar.year}</td>
      <td>{eachcar.mileage}</td>
      <td>{eachcar.fuelType}</td>
      <td>{eachcar.transmission}</td>
      <td>{eachcar.horsepower}</td>
      <td>{eachcar.price}</td>
      
    </tr>
   
    ))}
    
  </tbody>
</table>
    </div>
  )
}
