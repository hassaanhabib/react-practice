import React from 'react'
import ContextA from '../components/ContextA'
import MyContext from '../components/MyContext'
function Context() {
    return (
        <MyContext.Provider value={"Practicing Context"}>
            <ContextA />
        </MyContext.Provider>
    )
}

export default Context
