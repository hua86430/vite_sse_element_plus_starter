import { defineStore, acceptHMRUpdate } from 'pinia';

export const useGlobalStore = defineStore('GlobalStore', {
    state: () => ({}),
    actions: {}
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}
