import React from 'react'

const ShowStatus = (props) => {
  const t=props.flag;
  return (
    <div className='status'>
        {t==2 && <h1>You Lose!☹️</h1>}
        {t==1 && <h1>You Win😀</h1>}
    </div>
  )
}

export default ShowStatus