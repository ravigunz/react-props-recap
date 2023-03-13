import React from 'react'

export default function MyPara(props) {
  return (
    <div style={{ color: 'skyblue', backgroundColor: 'green', fontSize: '25px', padding: '10px'}}>
        {props.text}
    </div>
  )
}
