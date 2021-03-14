import React from 'react';
import shortid from 'shortid';
import { TITLE, ITEMS, ACTIONS } from '../utils';
import {Wrapper, EmptyResult} from './style';
import TitleForm from "../shared/TitleForm";
import FieldGenerator from "../shared/FieldGenerator";
import ActionButtons from "../shared/ActionButtons";

const switchBlock = (key, data) => {
    switch (key) {
        case TITLE: return <TitleForm data={data}/>
        case ITEMS: return <FieldGenerator data={data}/>
        case ACTIONS: return <ActionButtons data={data}/>
        default: return null
    }
}

const Result = ({ formConfig }) => {
    const generatorResult = formConfig ? JSON.parse(formConfig) : null;
    console.log("generatorResult", generatorResult)
    return (
            <Wrapper>
                {generatorResult
                        ? <>{Object.entries(generatorResult).map(([el, value]) => (
                                <div key={shortid.generate()}>{switchBlock(el, value)}</div>
                        ))}</>
                        : <EmptyResult>Data empty</EmptyResult>}
            </Wrapper>
    )
};

export default Result;

