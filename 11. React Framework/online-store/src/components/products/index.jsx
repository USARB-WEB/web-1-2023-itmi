import ProductsFilters from "./filters";
import ProductsList from "./List";

export default function Products({items}){
    return <>
        <ProductsFilters></ProductsFilters>
        <ProductsList items={items}></ProductsList>
    </>
}