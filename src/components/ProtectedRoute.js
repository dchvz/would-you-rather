import React from "react"
import { Route, Redirect } from "react-router-dom"

export const ProtectedRoute = ({
  isLogged,
  fallbackRoute,
  component: Component,
  ...rest
}) => {
  const defaultRoute = fallbackRoute || '/login'
  return (
    <Route
      {...rest}
      render={props => {
        if (isLogged) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: defaultRoute,
                state: {
                  from: props.location
                }
              }}
            />
          )
        }
      }}
    />
  )
}