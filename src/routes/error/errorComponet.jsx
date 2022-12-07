import React from 'react'
import Footer from '../../components/footer/footer.component';

const ErrorPage = () => {
  return (
      <div className=' flex flex-col'>
          <img src={require('../images/404.png')} alt="" />

          <Footer />
      </div>
  )
}

export default ErrorPage;