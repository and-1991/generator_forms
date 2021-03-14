import React from "react";
import {WrapperFields, Wrapper } from "./style";
import shortid from "shortid";
import Input from "../components/Input";
import {CHECKBOX, RADIO_BUTTONS, TEXTAREA, RADIO } from "../utils";
import TextArea from "../components/TextArea";
import Checkbox from "../components/Checkbox";
import RadioButtons from "../components/RadioButtons";

const switchFields = (props) => {
    switch (props.type) {
        case TEXTAREA: return <TextArea {...props}/>
        case CHECKBOX: return <Checkbox {...props}/>
        case RADIO_BUTTONS:
        case RADIO:
            return <RadioButtons {...props}/>
        default: return <Wrapper><Input {...props}/></Wrapper>
    }
}

const FieldGenerator = ({ data = [] }) => (
        <WrapperFields>
            {data.length > 0 &&
                    <>{data.map(el => <div key={shortid.generate()}>{switchFields(el)}</div>)}</>
            }
        </WrapperFields>
)

export default FieldGenerator
