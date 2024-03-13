import { useEffect, useState } from 'react';
import { products as mockProducts } from '../../db/mock';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';

const ProductPage = () => {
  const [products, setProducts] = useState(mockProducts);

  useEffect(() => {console.log("updated:", products)}, [products])

  const handleDelete = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => {
        return product.id !== productId.original.id;
      })
    );
  };  

  const handleEdit = (productId, newData) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId.original.id ? { ...product, ...newData } : product
      )
    );
  };

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Product Management</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your products
          </p>
        </div>
      </div>
      <DataTable
        data={products}
        columns={columns}
        onDelete={handleDelete}
        onEdit={handleEdit}
        setProducts={setProducts}
      />
    </div>
  );
};

export default ProductPage;


