import React from "react";
import shortid from "shortid";

const RadioButtons = (props) => {
    const keys = Object.values(props);
    if(keys.length > 1 && Array.isArray(keys[1])) {
        const array = keys[1]
        return (
                <div>
                    {array.map(el => (
                            <label key={shortid.generate()}>
                                <input {...el} name='value'/>
                            </label>
                    ))}
                </div>
        )
    } else {
        return (
                <label>
                    <input {...props} name='checkbox'/>
                </label>

        )
    }

}

export default RadioButtons
