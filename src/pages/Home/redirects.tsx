import { Redirect, RouteComponentProps } from 'react-router-dom'

export function RedirectPathToHomeOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/' }} />
}
