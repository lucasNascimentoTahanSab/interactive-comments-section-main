import { createContext } from 'react'

export default function UserContext(props) {
  const UserContext = createContext()

  return (
    <UserContext.Provider value={{ currentUser: props.user }}>
      {props.children}
    </UserContext.Provider>
  )
}