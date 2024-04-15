import React from 'react'
import Input from '../components/Input'

const Work = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
    <div>
        <label className='sidebar-label-container'>
            <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
            <span className='checkmark'></span>Any experience
        </label>
        <Input handleChange={handleChange} value="internship" title="Internship" name="test" />
        <Input handleChange={handleChange} value="work remotely" title="Work remotely" name="test" />

    </div>
</div>
  )
}

export default Work