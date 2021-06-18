import React, { useState, useRef, useCallback } from 'react';

function Result(props) {
    const results = props.results
    return (
        results.map((r, i) => <div key={i}>{r}</div>)
    )
}


export default Result