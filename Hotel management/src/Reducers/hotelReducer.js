

const initialRoomsState = {
    items: [],
    loading: false,
    error: null,
    selectedRoom: null,
}

const initialReservationsState = {
    items: [],
    loading: false,
    error: null,
}

const initialAuthState = {
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null,
    userRole: 'user',
}

const initialFiltersState = {
    sortBy: 'availability',
    filters: {
        roomType: 'all',
        priceRange: [0, 10000],
        features: [],
        reservationStatus: 'all',
    },
}

export const roomsReducer = (state = initialRoomsState, action) => {
    switch (action.type) {
        case 'FETCH_ROOMS_REQUEST':
            return { ...state, loading: true, error: null }
        case 'FETCH_ROOMS_SUCCESS':
            return { ...state, loading: false, items: action.payload }
        case 'FETCH_ROOMS_FAILURE':
            return { ...state, loading: false, error: action.payload }
        case 'CREATE_ROOM_REQUEST':
            return { ...state, loading: true, error: null }
        case 'CREATE_ROOM_SUCCESS':
            return { ...state, loading: false, items: [...state.items, action.payload] }
        case 'CREATE_ROOM_FAILURE':
            return { ...state, loading: false, error: action.payload }
        case 'UPDATE_ROOM_REQUEST':
            return { ...state, loading: true, error: null }
        case 'UPDATE_ROOM_SUCCESS':
            return {
                ...state,
                loading: false,
                items: state.items.map((room) => (room.id === action.payload.id ? action.payload : room)),
            }
        case 'UPDATE_ROOM_FAILURE':
            return { ...state, loading: false, error: action.payload }
        case 'DELETE_ROOM_REQUEST':
            return { ...state, loading: true, error: null }
        case 'DELETE_ROOM_SUCCESS':
            return { ...state, loading: false, items: state.items.filter((room) => room.id !== action.payload) }
        case 'DELETE_ROOM_FAILURE':
            return { ...state, loading: false, error: action.payload }
        case 'SET_SELECTED_ROOM':
            return { ...state, selectedRoom: action.payload }
        default:
            return state
    }
}

export const reservationsReducer = (state = initialReservationsState, action) => {
    switch (action.type) {
        case 'FETCH_RESERVATIONS_REQUEST':
            return { ...state, loading: true, error: null }
        case 'FETCH_RESERVATIONS_SUCCESS':
            return { ...state, loading: false, items: action.payload }
        case 'FETCH_RESERVATIONS_FAILURE':
            return { ...state, loading: false, error: action.payload }
        case 'FETCH_ALL_RESERVATIONS_REQUEST':
            return { ...state, loading: true, error: null }
        case 'FETCH_ALL_RESERVATIONS_SUCCESS':
            return { ...state, loading: false, items: action.payload }
        case 'FETCH_ALL_RESERVATIONS_FAILURE':
            return { ...state, loading: false, error: action.payload }
        case 'CREATE_RESERVATION_REQUEST':
            return { ...state, loading: true, error: null }
        case 'CREATE_RESERVATION_SUCCESS':
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload],
            }
        case 'CREATE_RESERVATION_FAILURE':
            return { ...state, loading: false, error: action.payload }
        case 'UPDATE_RESERVATION_REQUEST':
            return { ...state, loading: true, error: null }
        case 'UPDATE_RESERVATION_SUCCESS':
            return {
                ...state,
                loading: false,
                items: state.items.map((reservation) =>
                    reservation.id === action.payload.id ? action.payload : reservation
                ),
            }
        case 'UPDATE_RESERVATION_FAILURE':
            return { ...state, loading: false, error: action.payload }
        case 'DELETE_RESERVATION_REQUEST':
            return { ...state, loading: true, error: null }
        case 'DELETE_RESERVATION_SUCCESS':
            return {
                ...state,
                loading: false,
                items: state.items.filter((reservation) => reservation.id !== action.payload),
            }
        case 'DELETE_RESERVATION_FAILURE':
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case 'SET_AUTH_LOADING':
            return { ...state, loading: action.payload }
        case 'SET_CURRENT_USER':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: !!action.payload,
                loading: false,
                error: null,
            }
        case 'SET_USER_ROLE':
            return { ...state, userRole: action.payload }
        case 'LOGOUT':
            return { ...initialAuthState, loading: false }
        default:
            return state
    }
}

export const filtersReducer = (state = initialFiltersState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return { ...state, sortBy: action.payload }
        case 'SET_FILTER':
            return {
                ...state,
                filters: { ...state.filters, ...action.payload },
            }
        case 'CLEAR_FILTERS':
            return { ...initialFiltersState }
        default:
            return state
    }
}

export const hotelReducer = (state = {}, action) => {
    return {
        rooms: roomsReducer(state.rooms, action),
        reservations: reservationsReducer(state.reservations, action),
        auth: authReducer(state.auth, action),
        filters: filtersReducer(state.filters, action),
    }
}

export default hotelReducer
