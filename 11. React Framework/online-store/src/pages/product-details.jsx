import { useParams } from 'react-router-dom';
export default function ProductDetailsPage(){
    const {id} = useParams();
    return (
        <>
         Products details {id}
        </>
    )
}