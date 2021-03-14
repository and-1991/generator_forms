import React, { useState, createRef } from 'react';
import {Wrapper, WrapperTextArea, Error} from './style';
import TextArea from "../components/TextArea";
import Button from "../components/Button";

const Config = ({ handleChange }) => {
    const [ value, setValue ] = useState('');
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
                <WrapperTextArea>
                    <TextArea ref={textareaRef} value={value} onChange={changeValue} onKeyDown={onKeyDown}/>
                    {error && (
                            <Error>{error}</Error>
                    )}
                </WrapperTextArea>
                <Button text='apply' onClick={() => {
                    try {
                        const a = eval('(' + value + ')');
                        handleChange(a)
                    } catch (err) {
                        setError("value is dirty")
                    }
                }}/>
            </Wrapper>
    )
};

export default Config;

