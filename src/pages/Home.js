import React from 'react'
import '../style/Home.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Catalog from '../components/Catalog';
import WPPButton from '../components/WPPButton'
import catalogsInfo from '../utils/catalogsInfo';


const Home = () => {

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="catalogo-container">
          <WPPButton />
          {catalogsInfo.map((catalogsInfo, index) => {
            return (
              <Catalog
                key={index}
                catalogsInfo={catalogsInfo}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
