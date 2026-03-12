import { X, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../context/cartContext";

export function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-green-700" />
            <h2 className="text-2xl text-gray-800">Shopping Cart</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-green-700 hover:text-green-800"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-green-700 mb-2">
                      R{item.price.toFixed(2)} / {item.unit}
                    </p>
                    <p className="text-sm text-gray-500">
                      Stock: {item.stock} {item.unit}s
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors border"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors border"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-gray-800">
                      R{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="w-full text-red-600 hover:text-red-700 transition-colors py-2"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xl text-gray-800">Total:</span>
              <span className="text-2xl text-green-700">
                R{cartTotal.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-green-700 text-white px-6 py-4 rounded-lg hover:bg-green-800 transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
