import React from "react"
import { Route, Redirect } from "react-router-dom"

// The content of this component is based on this Youtube tutorial https://www.youtube.com/watch?v=qnH5KNtRYEI

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