
const initialState = {
    users: [ 
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Petr' },
        { id: 4, name: 'Katya' }
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;