import React, { useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        }
        fetchProducts();
    }, [])

    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
