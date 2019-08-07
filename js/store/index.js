import Vuex from "vuex";
import createLogger from 'vuex/dist/logger';

export default new Vuex.Store({
  plugins: [createLogger()],
  state: {
    country: {
      status: 'notLoaded',
      items: [],
    }
  },
  getters: {
    country(state) {
      return state.country;
    }
  },
  mutations: {
    setCountry(state, payload) {
      state.country = {...state.country, ...payload};
    }
  },
  actions: {
    loadCountries(context) {
      if (context.state.country.status === 'notLoaded') {
        context.commit('setCountry', {
          status: 'loading',
        });
        setTimeout(() => {
          context.commit('setCountry', {
            status: 'loaded',
            items: [
              {id: 1, name: 'United States'},
              {id: 2, name: 'United Kingdom'}
            ],
          });
        }, 600);
      }
    }
  }
});
