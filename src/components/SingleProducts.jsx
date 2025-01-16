import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const SingleProducts = () => {
  return (
    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className=" text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <button className='border'>Cigany</button>
  </div>
</div>
    </div>
  )
}