import cartIcon from "../../assets/icons/cart-icon.svg";
import star from "../../assets/icons/star.svg";

export const Card = ({ data, layout = 1 }) => (
  <article className="max-w-[355px] laptop:h-[385px] flex flex-col justify-between rounded-xl bg-white p-5 shadow-md ">
    <div className="relative w-full h-[70%] bg-light rounded-xl overflow-hidden mb-2">
      <img
        src={data.image}
        alt="product img"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-2 left-2 w-fit p-1 rounded-full bg-glass">
        <div className="p-1 px-2 text-xs font-semibold bg-white rounded-full flex items-center gap-1">
          <span> {data.rating}</span>
          <img src={star} alt="star" />
        </div>
      </div>
    </div>
    <div>
      <div className="flex items-center justify-between laptop:text-[1.5em]">
        <h3 className="font-semibold">{data.name}</h3>
        <strong>${data.price}</strong>
      </div>
      <div className="flex items-center justify-between">
        {layout === 1 && (
          <div className="flex gap-3">
            <button className="text-primary border-2 border-primary px-4 py-1 text-[.875em] laptop:text-[1em] rounded opacity-70 hover:opacity-100">
              Hot
            </button>
            <button className="text-primary border-2 border-primary px-4 py-1 text-[.875em] laptop:text-[1em] rounded opacity-70 hover:opacity-100">
              Cold
            </button>
          </div>
        )}
        {layout === 2 && <p className="font-semibold text-[.8em] text-light">{data.description}</p>}
        <div className="w-[43px] h-[43px] p-3 bg-primary rounded-full">
          <img src={cartIcon} alt="add to cart" />
        </div>
      </div>
    </div>
  </article>
);
