import React from 'react'
import Location from './Location'
import Salary from './Salary'
import Posting from './Posting'
import Work from './Work'
import Type from './Type'

const Sidebar = ({handleChange, handleClick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>Filters</h3>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />
      <Posting handleChange={handleChange} />
      <Work handleChange={handleChange} />
      <Type handleChange={handleChange} />
    </div>
  )
}

export default Sidebar