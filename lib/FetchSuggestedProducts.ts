import { client, urlFor } from '@/lib/sanity'
import { Product } from '@/types/Product'

export default async function fetchSuggestedProducts(currentTitle: string): Promise<Product[]> {
  const rawProducts = await client.fetch(
    `*[_type == "product" && title != $currentTitle][0...5]{
      title,
      images,
      description,
      price
    }`,
    { currentTitle }
  )

  return rawProducts.map((product: any) => ({
    title: product.title,
    description: product.description,
    price: product.price,
    imageUrl: product.images?.length > 0
      ? urlFor(product.images[0]).width(400).url()
      : null,
  }))
}
