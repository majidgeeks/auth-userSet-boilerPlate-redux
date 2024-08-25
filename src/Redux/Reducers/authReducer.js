const initialState = {
    user: null,
    token: '',
    onBoarding : '',
    isLoading: false,
    error: "",
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.payload,
            };
        case 'SET_ONBOARDING':
            return{
                ...state,
                onBoarding: action.payload,
            };
        case "SET_USER":
            return{
                ...state,
                user : action.payload,
            };    
        case 'LOGOUT' :
            return{
                ...state,
                user: null,
                token: '',
            };
        default:
            return state;
    }
  };
  
  export default authReducer;
  