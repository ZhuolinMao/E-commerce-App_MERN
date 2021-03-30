import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products.map(product => (
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
