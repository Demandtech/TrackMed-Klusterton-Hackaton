const MobileAsideReducer = (state, action) => {
    switch (action.type) {
      case 'LANDING_PAGE_ASIDE_NAV':
        return {
          ...state,
          isLandingPageNavOpen: action.payload,
        }
    }
  }
  
  export default MobileAsideReducer
  