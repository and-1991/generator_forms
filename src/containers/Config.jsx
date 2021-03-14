/* eslint no-eval: 0 */
import React, { useState, createRef } from 'react';
import {Wrapper, WrapperButtons, Error} from './style';
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import { startValue } from "../utils";

const Config = ({ handleChange, count = 0 }) => {
    const [ value, setValue ] = useState(count === 0 ? startValue : '');
    const textareaRef = createRef();
    const [error, setError] = useState(null)

    const changeValue = e => {
        setError(null);
        setValue(e.target.value)
    }

    const onKeyDown = event => {
        const { selectionStart, selectionEnd } = event.target;
        if (event.keyCode === 9) {
            event.preventDefault();
            setValue(prevState => (`${prevState.substring(0, selectionStart)}\t${prevState.substring(selectionEnd)}`),
            );
        }
        if(event.keyCode === 13) {
            // need more time to do it
        }
    }

    return (
            <Wrapper>
                <div>
                    <TextArea ref={textareaRef} value={value} onChange={changeValue} onKeyDown={onKeyDown}/>
                    {error && (
                            <Error>{error}</Error>
                    )}
                </div>
                <WrapperButtons>
                    {value !== '' && value ? <Button type="button" text="Clear" onClick={() => setValue('')}/> : null}
                    <Button text='apply' onClick={() => {
                        try {
                            const a = eval('(' + value + ')');
                            handleChange(a)
                        } catch (err) {
                            setError("value is dirty")
                        }
                    }}/>
                </WrapperButtons>

            </Wrapper>
    )
};

export default Config;

