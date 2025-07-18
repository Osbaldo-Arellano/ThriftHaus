import { client, urlFor } from '@/lib/sanity'
import { Product } from '@/types/Product'

export default async function fetchProductByTitle(title: string): Promise<Product> {
  const result = await client.fetch(
    `*[_type == "product" && title == $title][0]{
      title,
      images,
      description,
      price
    }`,
    { title }
  )

  if (!result) {
    throw new Error(`Product not found for title: ${title}`)
  }

  return {
    title: result.title,
    description: result.description,
    price: result.price,
    imageUrl: result.images?.length > 0
      ? urlFor(result.images[0]).width(400).url()
      : null,
  }
}
