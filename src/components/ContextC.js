import React from 'react'
import MyContext from './MyContext'
function ContextC() {
    return (
        <div className="Context">
            <MyContext.Consumer>
                {(information) => {
                    return <h2>{information}</h2>
                }}
            </MyContext.Consumer>
        </div>
    )
}

export default ContextC
