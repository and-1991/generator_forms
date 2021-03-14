import React from 'react';
import { FormControl } from "./style";

const Input = (props) => {
    return (
            <FormControl>
                <input {...props} required/>
                <label>{props.label || ''}</label>
            </FormControl>

    )
}

export default Input;
