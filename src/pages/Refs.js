import React,{useRef} from 'react'
import MyRef from '../components/MyRef';


function Refs() {
    const myRef = useRef(null);
    const incrementCount = () =>{
        myRef.current.incrementCount();
    }
    return (
        <div className="Refs" align="center">
            {/* <h2>Practicing Refs</h2> */}
            <MyRef ref={myRef}/>
            ~
            <button onClick={incrementCount}>Increment the count</button>
        </div>
    )
}

export default Refs
