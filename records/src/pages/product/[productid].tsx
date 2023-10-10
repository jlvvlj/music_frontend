import { useRouter } from 'next/router'

function ProductDetails() {
    const router = useRouter()
    const productid  = router.query.productid
    return (
        <div>
            <h1>Product Details {productid}</h1>
        </div>
    )
}

export default ProductDetails