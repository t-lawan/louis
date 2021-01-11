import { createStore } from "redux"
import * as ActionTypes from "./actions"
const initalState = {
  pages: [],
  sidebar_links: [],
  site_info: null,
  isLoaded: false
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PAGES:
      return Object.assign({}, state, {
        pages: action.pages
      })
    case ActionTypes.SET_SIDEBAR_LINKS:
      return Object.assign({}, state, {
        sidebar_links: action.sidebar_links
      })
    case ActionTypes.SET_SITE_INFO:
      return Object.assign({}, state, {
        site_info: action.site_info
      })
    case ActionTypes.IS_LOADED:
      return Object.assign({}, state, {
        isLoaded: true
      })
    default:
      return state
  }
}

export const store = () =>
  createStore(
    reducer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
