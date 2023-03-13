import React from 'react'

export default function MyPara(props) {
    const { status, text } = props;
  return (
    <div style={{ color: status === 'completed' ? 'green' : status === 'on-going' ? 'blue' :'black', fontSize: '25px', padding: '10px', textAlign: 'left'}}>
        {text}
    </div>
  )
}
