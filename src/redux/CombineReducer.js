import { combineReducers } from 'redux';
import PromoReducer from './PromoCode/PromoCodeReducer';
const rootReducer = combineReducers({
    promoCode: PromoReducer
});

export default rootReducer;