/** @format */

interface User {
  name?: string;
}
interface State {
  user: User;
}
export const state = (): State => ({
  user: {}
});

export const mutations = {
  setUser(state: State, user: User) {
    state.user = user;
  }
};

export const getters = {
  getUser: (state: State) => () => state.user
};

export const actions = {};
