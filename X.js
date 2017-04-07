import React from 'react';

const X = (props) => (
    <div>
        <svg width={40} height={40} viewBox={"0 0 40 40"}>
            <polyline
                points={"0,10,10,20,0,30,10,40,20,30,30,40,40,30,30,20,40,10,30,0,20,10,10,0,0,10"}
                fill={"rgb(9, 34, 1)"}/>
        </svg>
    </div>
);

export default X;