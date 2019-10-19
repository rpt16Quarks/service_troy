import React from 'react';

function ItemSpec(props) {
  //for in loop: loop through obj if val === '' than nothing else render
    let obj = props.specs
    let arr = []
    for(let key in obj) {
      if (obj[key] !== "") {
        arr.push(`${key}:  ${obj[key]}`)
      }
    }

  return (
    <div>
      {arr.map(item => {
        return <p>{item}</p>
      })}
    </div>
  )
}

export default ItemSpec