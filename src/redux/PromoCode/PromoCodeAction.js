import { PROMO_CODE } from './PromoCodeTypes';
export const promoCode = (e) => {
    return {
        type: PROMO_CODE,
        payload: e.target.value
    }
}