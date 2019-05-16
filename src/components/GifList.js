import React from 'react';


const GitList = (props) => {
  console.log(props.data)

  return(
    <div>
      <ul>
        {props.data.map( prop => (
          <li>
            <img key={prop.id} src={prop.images.original.url} alt='a gif'/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GitList;
