import React from "react";
import { Title } from "./style";

const TitleForm = ({ data = null }) => (
        <>
            {data && <Title>{data}</Title>}
        </>
)

export default TitleForm
