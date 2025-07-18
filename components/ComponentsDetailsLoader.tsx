// import { client, urlFor } from '@/lib/sanity'
// import { Product } from '@/types/Product'

// export default async function fetchProductBySlug(slug: string): Promise<Product> {
//   const result = await client.fetch(
//     `*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       title,
//       images,
//       description,
//       price
//     }`,
//     { slug }
//   )

//   if (!result) {
//     throw new Error(`Product not found for slug: ${slug}`)
//   }

//   return {
//     title: result.title,
//     description: result.description,
//     price: result.price,
//   }
// }
