import { useContext, useEffect, useState } from "react"

import { AppContext } from "../context/app.context"
import { User } from "../interfaces";
import { useOfb } from "../hooks/useOfb";
import { AppNav } from "../components/appNav";

export const Dashboard = () => {
  const { logged } = useContext(AppContext);
  const { getUsers, getGroup } = useOfb();
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    if (logged) {
      let users:User[] = [];
      if (logged.role === 'coordinator') {
        users = getUsers();
      }
      else {
        users = getGroup(logged.group);
      }
      setUsersList(users);
    }
  }, []);


  return (
    <>
      <div className="page-container">
        <div>Dashboard</div>
        <AppNav />
        <div className="app-list mt-4">
          { usersList.map(user => (
            <div key={ user.idDoc } className="list-row py-3">
              <p>{ user.name }</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
