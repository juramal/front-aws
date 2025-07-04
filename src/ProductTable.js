import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ProductTable = ({ products, loading }) => {


  if (loading) return <p>Carregando...</p>;

  console.log(products)

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.Id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductTable;
