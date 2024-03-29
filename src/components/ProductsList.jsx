import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/Api';
import Card from "./Card"

export default function ProductsList(){
    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await fetchProducts();
                setData(fetchedData);
                console.log(fetchedData)
                setProducts(fetchedData.products);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
  
    return (
        <>
            <h1 className='px-12 py-12 text-4xl font-medium'>{data.categoryName}</h1>
            <div className="grid grid-cols-3 gap-6 px-6">
                {products.map((product) => (
                    <Card 
                        category={data.categoryName}
                        additionalImageUrls={data.products.additionalImageUrls}
                        key={product.id}  
                        imageUrl={product.imageUrl} 
                        name={product.name} 
                        brandName={product.brandName} 
                        colour={product.colour} 
                        price={product.price.current.value} 
                    />
                ))}
            </div>
        </>
    );
}
