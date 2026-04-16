import React from 'react'

function Student(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Marks: {props.marks}</p>
      <p>Major: {props.major}</p>
    </div>
  )
}

export default Student
