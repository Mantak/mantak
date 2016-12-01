export default function  anythingElse(state = 'SHOW_ALL', action = {}) {
  switch (action.type) {
    case 'ANYTHIN_ELSE':
      return action.filter;
    default:
      return state;
  }
}
