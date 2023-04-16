import React from 'react'
import { Banner } from '../../components/Banner'
import { Methods } from '../../components/methods/Methods'
import { Divider } from '../../components/Divider'
import { Card } from '../../components/productsCards/Card'
import { ProductsCards } from '../../components/productsCards/ProductsCards'
import { FeaturedProducts } from '../../components/featuredProducts/FeaturedProducts'

export const Home = () => {
  return (
    <>
        <Banner/>
        {/* <Methods /> */}
        <Divider text={'DESTACADOS'}/>
        <FeaturedProducts/>
        <Divider text={'NUESTROS PRODUCTOS'}/>
        <ProductsCards/>
    </>
  )
}
