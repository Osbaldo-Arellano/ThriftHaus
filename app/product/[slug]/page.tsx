// product/[slug]/page.tsx
import fetchProductByTitle from '@/lib/fetchProductBySlug'
import fetchSuggestedProducts from '@/lib/FetchSuggestedProducts'
import ProductDetails from '@/components/ProductDetails'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic';  // 👈 this is the fix

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const decodedTitle = decodeURIComponent(params.slug)
  const product = await fetchProductByTitle(decodedTitle)
  const suggestions = await fetchSuggestedProducts(decodedTitle)

  return (
    <>
      <Navbar />
      <ProductDetails
        product={product}
        suggestions={suggestions}
      />
      <Footer />
    </>
  )
}
