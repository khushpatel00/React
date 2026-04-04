import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import { hotelReducer } from '../Reducers/hotelReducer'

const initialState = {
  rooms: {
    items: [],
    loading: false,
    error: null,
    selectedRoom: null,
  },
  reservations: {
    items: [],
    loading: false,
    error: null,
  },
  auth: {
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null,
  },
  filters: {
    sortBy: 'availability',
    filters: {
      roomType: 'all',
      priceRange: [0, 10000],
      features: [],
      reservationStatus: 'all',
    },
  },
}

const middleware = [thunk]

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

export const store = createStore(
  hotelReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
)
