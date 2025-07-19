import fetchProductByTitle from '@/lib/fetchProductBySlug'
import fetchSuggestedProducts from '@/lib/FetchSuggestedProducts'
import ProductDetails from '@/components/ProductDetails'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params  
  const decodedTitle = decodeURIComponent(slug)

  const product = await fetchProductByTitle(decodedTitle)
  const suggestions = await fetchSuggestedProducts(decodedTitle)  // excludes current product

  return (
    <>
    <Navbar/>
    <ProductDetails
      product={product}
      suggestions={suggestions}
    />
    <Footer />
    </>

  )
}
