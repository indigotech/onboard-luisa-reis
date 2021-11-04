import React, { useEffect, useState, Component } from "react";
import Title from "../../title/title";
import { gql, useQuery } from "@apollo/client";
import { History } from "history";
import { useHistory, useParams } from "react-router-dom";
import { goToAddUser, goToUserDetails } from "../../routes/coordinator";
import FloatingBtn from "./floatingBtn.component";
import "../index.css";

const USERS = gql`
  query Users($data: PageInputType) {
    users(pageInfo: $data) {
      nodes {
        id
        name
        email
        phone
        birthDate
        role
      }
    }
  }
`;
const UserList: React.FC = (props) => {
  const history: History = useHistory();

  const [page, setPage] = useState(1);
  const limit = 15;
  const [offset, setOffset] = useState(0);

  const { data } = useQuery(USERS, {
    variables: {
      data: {
        offset,
        limit,
      },
    },
  });

  const handleNextPage = () => {
    const newPage = page + 1;
    const newOffset = limit * (newPage - 1);
    setPage(newPage);
    setOffset(newOffset);
  };
  const handlePreviusPage = () => {
    const newPage = page - 1;
    const newOffset = limit * (newPage - 1);
    setPage(newPage);
    setOffset(newOffset);
  };

  React.useEffect(() => console.log(data), [data]);
  return (
    <div className="page">
      <Title text="Lista de usuários" />
      <table>
        <thead>
          <tr>
            <th>ID </th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {data &&
          data.users.nodes.map((user: any) => (
            <tr
              key={user.id}
              onClick={() => {
                localStorage.setItem("userEmail", user.email);
                localStorage.setItem("userData", user.name);
                localStorage.setItem("userPhone", user.phone);
                localStorage.setItem("userBirth", user.birthDate);
                localStorage.setItem("userRole", user.role);

                goToUserDetails(history);
              }}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
      </table>
      <footer>
        <button
          className="prev-next"
          onClick={handlePreviusPage}
          disabled={page === 1}
        >
          Anterior
        </button>
        <button className="prev-next" onClick={handleNextPage}>
          Próxima
        </button>
      </footer>
      <FloatingBtn onClick={() => goToAddUser(history)}>+</FloatingBtn>
    </div>
  );
};

export default UserList;
