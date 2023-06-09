import { 
  ProductsCards, 
  FeaturedProducts, 
  Divider, 
  Banner, 
  Footer} from '../../components'


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
        <a href='https://www.instagram.com/naty_lahoradulce_cake/' target='_blank' rel='noreferrer'>
          <i className="fab fa-instagram text-md text-white bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full p-2"></i>
        </a>
        <Footer/>
    </>
  )
}
