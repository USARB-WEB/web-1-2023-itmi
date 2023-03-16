import ProductsFilters from "./filters";
import ProductsList from "./List";

export default function Products(){
    return <>
        <ProductsFilters></ProductsFilters>
        <ProductsList></ProductsList>
    </>
}