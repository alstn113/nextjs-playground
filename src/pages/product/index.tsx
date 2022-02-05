import { useGetProducts } from '@/api/product';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

export default function ProductList() {
  const router = useRouter();
  const { data } = useGetProducts(router.query);

  return (
    <Wrapper>
      <ProductTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>DELIVERY FEE</th>
            <th>STOCK</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(product => (
            <tr key={product.id}>
              <td className="number">{product.id}</td>
              <td className="text">{product.name}</td>
              <td className="number">{product.price}</td>
              <td className="number">{product.deliveryFee}</td>
              <td className="number">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  padding: 5rem 5rem 0 5rem;
`;

const ProductTable = styled('table')`
  width: 100%;
  .number {
    text-align: right;
  }
  .text {
    text-align: left;
    width: 50%;
  }
  th,
  td {
    padding: 10px;
    vertical-align: middle;
    text-align: center;
  }
  tbody tr:nth-of-type(even) {
    background-color: #fff;
  }
  tbody tr:nth-of-type(odd) {
    background-color: #dee2e6;
  }
  th {
    background-color: #04aa6d;
    color: white;
  }
`;
