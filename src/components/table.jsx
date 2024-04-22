import React from 'react'

function table() {
  return (
   <table className='table-auto bg-gray-900 text-white '>
    <thead className='border-b-2 border-t-2 border-l-2 border-white '>
        <tr>
            <th className='p-3 text-sm  tracking-widest text-left'>Name</th>
            <th className='p-3 text-sm  tracking-widest text-left'>Age</th>
            <th className='p-3 text-sm  tracking-widest text-left'>Gender</th>
            <th className='p-3 text-sm  tracking-widest text-left'>Skill</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className='p-3 text-sm '>John</td>
            <td className='p-3 text-sm'>21</td>
            <td className='p-3 text-sm'>Male</td>
            <td className='p-3 text-sm'>Driving</td>
        </tr>
        <tr>
        <td className='p-3 text-sm '>James</td>
            <td className='p-3 text-sm'>27</td>
            <td className='p-3 text-sm'>Male</td>
            <td className='p-3 text-sm'>Accounting</td>
        </tr>
        <tr>
        <td className='p-3 text-sm '>Jeremey</td>
            <td className='p-3 text-sm'>27</td>
            <td className='p-3 text-sm'>Male</td>
            <td className='p-3 text-sm'>Singing</td>
        </tr>
        <tr>
        <td className='p-3 text-sm '>Jason</td>
            <td className='p-3 text-sm'>19</td>
            <td className='p-3 text-sm'>Male</td>
            <td className='p-3 text-sm'>Comedy</td>
        </tr>
    </tbody>
   </table>
  )
}

export default table