import { ShopPage } from "@/components/shop";
import {products} from "@/components/ui/card/products"; 


export default function ShopPageRoute() {
  return <ShopPage products={products} />;
}
