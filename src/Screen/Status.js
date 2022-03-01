import React from 'react'
import StatusList from '../components/StatusList'

function Status() {
  return (
    <StatusList data={ {
            
        image:'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
        name:'My status',
        text:{
            last:'Tap to add status update',
            time:''
        }
} } />
  )
}

export default Status