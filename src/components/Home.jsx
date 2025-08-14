import PageHeading from "./PageHeading";
import ProductListings from "./ProductListing";
import products from "../data/products";

export default function Home() {
  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Explore Storz!!!!!">
        Welcome to Storz, your go-to platform for discovering and sharing the
        latest Stickers. Dive into our curated content, and stay updated with
        the trends that shape our world. Whether you're a tech enthusiast or a
        casual reader, there's something here for everyone. Enjoy your journey
        through Storz!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}
