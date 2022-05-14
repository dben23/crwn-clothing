import React from "react";
import "./collection-item.styles.scss";
import SHOP_DATA from "../../pages/shop/SHOP_DATA";

function CollectionItem({ id, imageUrl, name, price }) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="name">{price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
