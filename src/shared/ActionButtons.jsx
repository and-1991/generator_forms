import React from "react";
import Button from "../components/Button";
import {WrapperButtons} from "./style";
import shortid from "shortid";

const ActionButtons = ({ data = [] }) => (
        <>
            {data.length > 0 &&
                    <WrapperButtons>
                        {data.map(el => <Button key={shortid.generate()} text={!!el.text ? el.text: ''} type={el.type}/>)}
                    </WrapperButtons>
            }
        </>
);

export default ActionButtons
