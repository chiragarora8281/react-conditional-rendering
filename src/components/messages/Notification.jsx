/* eslint-disable react/prop-types */
//! CONDITIONAL RENDERING USING IIFE (IMMEDIATELY INVOLE FUNCTION EXPRESSION)

import Info from "./Info"

const Notification = ({state}) => {
   return (
    <div>
      {state.map((data, index) => {
        return <Info key={index+1} {...data}/>
      })}
    </div>
  )
}

export default Notification