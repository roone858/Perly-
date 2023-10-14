import { Product } from "@/types/typeStore";

export function sortProductsByTitle(arr: Product[]) {
  return arr.sort(function (a: Product, b: Product) {
    var titleA = a.title.toUpperCase(); // Convert titles to uppercase for case-insensitive sorting
    var titleB = b.title.toUpperCase();

    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0; // Titles are equal
  });
}

export function sortProductsByPrice(arr: Product[]) {
  return arr.sort(function (a: Product, b: Product) {
    return +b.price - +a.price;
  });
}

export function sortProductsByMostCommon(arr: Product[]) {
  return arr.sort(function (a: Product, b: Product) {
    return +b.rating.count - +a.rating.count;
  });
}
export const filterArray = (
  products: Product[],
  sort: string,
  category: string
): Product[] => {
  if (sort && !category) {
    if (sort == "title") return sortProductsByTitle(products);
    if (sort == "price") return sortProductsByPrice(products).reverse();
    if (sort == "mostCommon") return sortProductsByMostCommon(products);
  }
  if (!sort && category)
    return products.filter((product: Product) => product.category == category);

  if (sort && category) {
    const categoryProducts = products.filter(
      (product: Product) => product.category == category
    );
    if (sort == "title") return sortProductsByTitle(categoryProducts);
    if (sort == "price") return sortProductsByPrice(categoryProducts).reverse();
    if (sort == "mostCommon") return sortProductsByMostCommon(categoryProducts);
  }
  return products;
};
