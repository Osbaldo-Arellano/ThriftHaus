import { client, urlFor } from '../lib/sanity'
import ProductsList from '@/components/ProductList'
import Navbar from '@/components/Navbar'
import SuggestedGallery from '@/components/SuggestedGallery'
import Header from '@/components/Header'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'

export default async function Page() {
  const rawProducts = await client.fetch(`*[_type == "product"]{title, images, description, price}`)

  const products = rawProducts.map((product: any) => ({
    title: product.title,
    description: product.description,
    price: product.price,
    imageUrl: product.images?.length > 0
      ? urlFor(product.images[0]).width(400).url()
      : null
  }))

  return (
  <>
    <Navbar /> <Header /> <Featured products={products} /> <ProductsList products={products} /> <Footer />
  </>)
}
