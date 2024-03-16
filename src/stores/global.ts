import { defineStore } from "pinia";

export const useGlobalStore = defineStore('globalStore', {
    state: () => {
        return {
            btnAction: <'active' | 'inactive' | 'pending'>('inactive'),
            
        }
    }
})