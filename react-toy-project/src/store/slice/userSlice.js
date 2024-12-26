import { createSlice} from '@reduxjs/toolkit';
import { getCurrentDateTime } from '../../utils/utils';
import {hashPassword} from '../../utils/crypto';

const User = (User) => {
    this.name = User.name;
    this.password = hashPassword(User.password);
    this.isAdmin = false;
    this.setIsAdmin = () => {
        this.isAdmin = true;
    }
}

const admin = new User({name:'admin',password:'123'},admin.setIsAdmin());

export const userSlice = createSlice(
    {
        name: 'userSlice',
        initialState: {
            users : [admin],
            loginUser : {}

        },
        reducers: {
            add : (state,action) =>{
                const newUser = new User(action.payload);
                state.users = [...state.users,newUser];
                return state;
            },
            login : (state,action) => {
                const loginUser = state.users.find(users => { action.payload.name === users.name});
                    if(!loginUser){
                        if(hashPassword(action.payload.password) === loginUser.password){
                            return state.loginUser = loginUser;
                        }else{
                            return state.message = 'not correct password';
                        }
                    }else{
                        return state.message = 'not exist userName';
                    }
            }
        }

    }
)