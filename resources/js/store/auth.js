import { defineStore } from "pinia";

export const useStore = defineStore('auth', {
    state:() => ({
        token: null,
    }),
    getters:{
        get_token: (state) => state.token,
    },
    actions:{
        set_token(token_new){
            this.token = token_new
        }
    }
})