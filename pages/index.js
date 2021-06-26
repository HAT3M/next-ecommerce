import { API } from '../config/global-constants';
import Products from '../components/Products/Products';

export default function Home({ products }) {
  return <Products products={products} />;
}

export async function getStaticProps() {
  const res = await fetch(`${API.url}`);
  const products = await res.json();

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products }, // will be passed to the page component as props
  };
}
