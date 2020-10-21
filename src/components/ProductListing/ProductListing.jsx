import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import image1 from '../../images/item1.png';

const renderComponent = (products) => (
  <div className="container">
    <div className="row row-cols-2 row-cols-sm-6">
      {products.map((product) => (
        <Link key={product.id} to={`/view/${product.id}`}>
          <div className="col mb-4">
            <div className="card">
              <img src={image1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.attributes.title}</h5>
                <p className="card-text text-danger font-weight-bolder">{product.attributes.price}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const ProductListing = () => {
  return (
    <StaticQuery
      query={graphql`
      {
        allListProducts {
          nodes {
            id
            type
            attributes {
              title
              price
              condition
              location
              seller_name
              seller_type
              phone
              description
              links {
                image
                self
              }
            }
          }
        }
      }      
    `}
      render={(data) => renderComponent(data.allListProducts.nodes)}
    />
  );
};

export default ProductListing;
