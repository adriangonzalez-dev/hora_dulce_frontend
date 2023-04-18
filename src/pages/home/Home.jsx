import { 
  ProductsCards, 
  FeaturedProducts, 
  Divider, 
  Banner } from '../../components'


export const Home = () => {
  return (
    <>
        <Banner/>
        {/* <Methods /> */}
        <Divider 
        text={'DESTACADOS'}
        href={'destacados'} 
        />
        <FeaturedProducts/>
        <Divider 
        text={'NUESTROS PRODUCTOS'}
        href={'productos'}
        />
        <ProductsCards/>
        <Divider text={'SEGUINOS!'}/>
        <div>
          <i className="fab fa-instagram text-md text-white bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full p-2"></i>
        </div>
    </>
  )
}
