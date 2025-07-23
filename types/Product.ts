export interface Product {
  title: string;
  description: string;
  price: number;
  imageUrl: string | null;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: {
      asset?: {
        url: string;
      };
    };
  };
}
