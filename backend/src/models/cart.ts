import {model, models, Schema} from "mongoose";

type Cart = {
    _id: Schema.Types.ObjectId,
    product: Schema.Types.ObjectId,
    quantity: number,
    unitPrice: number,
    discount: number,
    totalPrice:number,
};

const cartSchema = new Schema<Cart>({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        default: 1,
    },
    unitPrice: Number,
    discount: {
        type:Number,
        default: 0,
    },
    totalPrice: Number,
});

const Cart = models['Cart'] || model<Cart>('Cart', cartSchema);
export default Cart;