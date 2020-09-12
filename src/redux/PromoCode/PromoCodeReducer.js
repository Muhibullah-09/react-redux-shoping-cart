import { PROMO_CODE } from './PromoCodeTypes';
const initialState = {
    open: false,
    value: ''
}

const PromoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROMO_CODE:
            return {
                ...state,
                value: action.payload
            };
        default:
            return state
    }
}
export default PromoReducer