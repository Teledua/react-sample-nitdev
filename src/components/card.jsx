export const ProductCard = ({ img, price, description }) => {
  return (
    <div className="flex flex-col w-[16rem] bg-slate-100 gap-2 p-6 border-2 border-slate-200">
      <div>
        <img src={img} alt="product image" className="w-[16rem] h-[16rem]" />
      </div>
      <div>
        <p>Price: {price}</p>
        <p>description: {description}</p>
      </div>
    </div>
  );
};
