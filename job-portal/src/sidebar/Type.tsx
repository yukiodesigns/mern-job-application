import React from 'react'
import Input from '../components/Input'

const Type = ({handleChange}) => {
  return (
    
    <div>
        <h4 className='text-lg font-medium mb-2'>Type of employment</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
                <span className='checkmark'></span>Any experience
            </label>
            <Input handleChange={handleChange} value="full-time" title="Full-time" name="test" />
            <Input handleChange={handleChange} value="part-time" title="Part-time" name="test" />
            <Input handleChange={handleChange} value="temporary" title="Temporary" name="test" />

        </div>
    </div>
  )
}

export default Type