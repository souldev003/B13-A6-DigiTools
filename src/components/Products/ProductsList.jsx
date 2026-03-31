import React, { use } from "react";

const ProductsList = ({ productsPromise }) => {
  const productsData = use(productsPromise);
  console.log(productsData);

  return (
    <div className="bg-[#FFFFFF] lg:py-28">
      <div className="max-w-300 mx-auto">
        <div>
          <h1 className="text-5xl font-extrabold text-center text-[#101727] mb-5">
            Premium Digital Tools
          </h1>
          <p className="text-center text-[#627382] mb-4">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {productsData.map((product, i) => (
            <div key={i}>
              <div className="card w-96 bg-base-100 shadow-sm">
                <div>
                  <span className="badge">{product.tagType}</span>

                  <div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
