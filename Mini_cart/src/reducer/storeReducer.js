export const initialState = {
    totalPrice: 0,
    productsInCart: []
}

export function reducer(state, action) {
    switch (action.type) {
        case "updateProducts":
            return {
                ...state,
                productsInCart: action.payload
            }

        case "updatePrice":
            return {
                ...state,
                totalPrice: action.payload,
            }
    }
}