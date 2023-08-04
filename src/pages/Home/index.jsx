import React from 'react'
import Collection from '../../components/Collection'
import Header from '../../components/Header'
import HeaderHero from '../../components/HeaderHero'
import Container from '../../layout/container'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <Container>
       <Header></Header>
       <HeaderHero></HeaderHero>
       <Collection></Collection>
       <Footer></Footer>
    </Container>
  )
}

export default Home