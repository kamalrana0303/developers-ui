import { createAction } from "@ngrx/store"

export const loggedOut= createAction(
    '[Logout] Attempt Logout'
  )
  
  export const loggedOutConfirmed= createAction(
    '[Logout] Logout Confirmed'
  )

  export const loggedOutCancelled = createAction(
      '[Logout] Logout Cancelled'
  )
