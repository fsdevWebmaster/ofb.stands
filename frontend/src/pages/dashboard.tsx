import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/app.context"
import { User } from "../interfaces";
import { useOfb } from "../hooks/useOfb";
import { AppNav } from "../components/appNav";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { logged } = useContext(AppContext);
  const { getUsers, getGroup } = useOfb();
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    if (logged) {

        // console.log('logged', logged);

        const users = getUsers()
          // .then((result) => {
            
          //   console.log(result);
          
          // }).catch((err) => {
          
          //   console.log(err);
          
          // });

          // let users:User[] = [];


      // if (logged.role === 'coordinator') {
      // }
      // else {
      //   users = getGroup(logged.group);
      // }
      // setUsersList(users);
    }
    else {
      navigate('/login');
    }
  }, []);


  return (
    <>
      <div className="page-container">
        <h3>Dashboard</h3>
        <AppNav />
        <div className="app-list mt-4">
          { usersList.map(user => (
            <div key={ user.idDoc } className="list-row py-3">
              <p>{ user.name }</p>
              <p>{ user.accumulated }</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
