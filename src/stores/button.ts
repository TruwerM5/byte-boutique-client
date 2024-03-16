import { defineStore } from "pinia";

export const useButtonStore = defineStore('btnStore', {
    state: () => {
        return {
            isPending: false,
            action: <'pending' | 'active' | 'inactive'>('inactive')
        }
    },
    actions: {
        toggleBtnState() {
            this.isPending = !this.isPending;
        }
    }
})