import React from 'react'
import Cards from './Cards'
import Table from './Table'
import Charts from './Charts'
import '../styles/DashHome.css'
function DashHome() {
  return (
      <div className='dashhome'>
      <Cards />
      <Charts/>     
      <Table/>  
        
     </div>
  )
}

export default DashHome