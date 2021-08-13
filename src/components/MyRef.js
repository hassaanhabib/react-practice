import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'

const MyRef = React.forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }
    useImperativeHandle(
        ref,
        () => {
            return {
                incrementCount: () => {
                    incrementCount();
                }
            }
        }
    )
    return (
        <div>
            <h2>My ref with count: {count}</h2>
        </div>
    )
})
export default MyRef
