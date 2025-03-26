import { defineStore } from "pinia";

export const useItemStore = defineStore('item', {
    state: () => ({
        item: [],
        erroe:null as string | null,
    }),

actions:{

}



})