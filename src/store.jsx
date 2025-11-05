import {create} from 'zustand'

export const UserData=create((set)=>({
    name:'',
    setName: (newName)=>set({name:newName}),
}));

    
