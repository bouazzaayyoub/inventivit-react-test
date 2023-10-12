import React from "react";

type Props = { image: string; label: string };

const ItemCard = (item: Props) => {
  return (
    <div className="d-flex mb-3">
      <img src={item.image} alt="" height={40} />
      <p className="ms-3 fs-6 item-text">{item.label}</p>
    </div>
  );
};

export default ItemCard;
