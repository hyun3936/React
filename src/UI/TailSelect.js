import { useState } from "react";

export default function TailSelect({opItem, handleChange}) {
  const ops = opItem.map((item, idx) =>
    <option key={`op${idx}`} value={item}>{item}</option>  
  );

  
    return (
    <select
        onChange={handleChange}
        className="className=h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
        <option value=''>--선택--</option>
        {ops}
    </select>   
  )
}
