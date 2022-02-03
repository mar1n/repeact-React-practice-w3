export const reducer = (state = {}, action) => {
    switch (action.type) {
     case 'SHOW_LOGIN':
     case 'HIDE_LOGIN':
      return  action.payload;
     default:
      return state
    }
   }