import React from 'react';

const Checkbox = (props) => (
        <label> {props.label}
            <input {...props} name='checkbox'/>
        </label>
)

export default Checkbox
