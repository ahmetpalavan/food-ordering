import Image from "next/image";
import Title from "../../components/ui/Title";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
  };

  console.log(cart, "das");
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="min-h-[calc(100vh_-_433px)] flex items-center flex-1 overflow-x-auto w-full">
          <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  PRODUCT
                </th>
                <th scope="col" className="py-3 px-6">
                  EXTRAS
                </th>
                <th scope="col" className="py-3 px-6">
                  PRICE
                </th>
                <th scope="col" className="py-3 px-6">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => (
                <tr key={product.id} className="border-b bg-secondary border-gray-700 hover:bg-primary">
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                    <Image src="https://html.design/demo/feane/images/f1.png" alt="" width={50} height={50} />
                    <span>
                      <b>{product.name}</b>
                    </span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    <span>
                      <b>
                        {product.extraOptions.map((extra) => (
                          <span key={extra.id}>{extra.name},</span>
                        ))}
                      </b>
                    </span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <b>
                      ${product.price} {product.currency}
                    </b>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <b>{product.quantity}</b>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center text-white p-12 md:w-auto w-full md:text-start !text-center">
          <Title addClass="text-[40px]">CART TOTAL</Title>

          <div className="mt-6">
            <b>Subtotal: </b>${cart.total}
            <br />
            <b className=" inline-block my-1">Discount: </b>
            <br />
            <b>Total: </b>${cart.total}
          </div>
          <div>
            <button
              onClick={() => {
                dispatch(reset());
              }}
              className="btn-primary mt-4 md:w-auto w-52"
            >
              CHECKOUT NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
