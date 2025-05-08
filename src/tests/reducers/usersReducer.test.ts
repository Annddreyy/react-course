import usersReducer, { actions, InitialStateType } from "../../redux/users/usersReducer";

let state: InitialStateType;

beforeEach(() => {
    state = {
        users: [
            { 
                id: 1, 
                name: 'Andrey 1', 
                status: 'status', 
                photos: { small: 'small', large: 'large'},
                followed: false
            },
            { 
                id: 2, 
                name: 'Andrey 2', 
                status: 'status', 
                photos: { small: 'small', large: 'large'},
                followed: false
            },
            { 
                id: 3, 
                name: 'Andrey 3', 
                status: 'status', 
                photos: { small: 'small', large: 'large'},
                followed: false
            },
            { 
                id: 4, 
                name: 'Andrey 4', 
                status: 'status', 
                photos: { small: 'small', large: 'large'},
                followed: true
            }
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: false
    }
})

describe('users reducer', () => { 
    it('follow user', () => {
        let action = actions.follow(1);
        let newState = usersReducer(state, action);

        expect(newState.users.find(user => user.id === 1)?.followed).toBe(true);
    })
    it('unfollow user', () => {
        let action = actions.unfollow(4);
        let newState = usersReducer(state, action);

        expect(newState.users.find(user => user.id === 4)?.followed).toBe(false);
    })
})