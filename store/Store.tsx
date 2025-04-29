import { create } from "zustand";


interface Items{
    image: string,
    price: number,
    material: string,
    name: string
}
interface CartState{
    items: Items[]
    addItem: (item: Items) => void
    removeItem: (index: number) => void
}
const CartStore = create<CartState>((set) => ({
    items: [],

    addItem: (item) => set((state) => ({ items: [...state.items, item]})),

    removeItem: (index) => set((state) => ({items: state.items.filter((_, i) => i !== index)})),

    clearAll: () => set(({ items: []}))


}))

export default CartStore