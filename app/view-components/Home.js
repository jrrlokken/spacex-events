import React, { useEffect } from 'react'

import Launch from '../partial-components/space-x/Launch'
// import Background from '../images/launch.jpg'

// const sectionStyle = {
//   height: "100%",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundImage: `url(${Background})`
// }

const Home = () => {
  useEffect(() => {document.title = `Home Page`}, [])

  return (
    <div className='view-home'>
      <h3>Next Launch</h3>
      <Launch next={true}/>
    </div>
  )
}

export default Home