import React, { useState, useEffect } from "react";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    console.log(response);

    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>LIST OF HITHUB USERS</h1>
      <div className="container-fluid mt -5">
        <div className="row text- center">
          {users.map((curElement) => {
            return (
              <div>
                <div className="col-10 col-md-4 mt-5">
                  <div className="d-flex align-left">
                    <div className="image">
                      {" "}
                      <img
                        src={curElement.avatar_url}
                        alt="name"
                        className="rounded"
                        width="155"
                      />{" "}
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textleft">{curElement.login}</h4>
                      <span className="tetleft">{curElement.repos_url}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default UseEffectAPI;
