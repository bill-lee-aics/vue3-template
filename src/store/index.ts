import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';

interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export default store;

export function useStore(): Store<State> {
  return baseUseStore(key);
}
