import React from 'react'
import Input from '../components/Input'

const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Location</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
                <span className='checkmark'></span>All
            </label>
            <Input handleChange={handleChange} value="london" title="London" name="test" />
            <Input handleChange={handleChange} value="seattle" title="Seattle" name="test" />
            <Input handleChange={handleChange} value="madrid" title="Madrid" name="test" />
            <Input handleChange={handleChange} value="boston" title="Boston" name="test" />

        </div>
    </div>
  )
}

export default Location