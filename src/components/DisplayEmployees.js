import React from "react";

function formatDate(date) {
  const dateArray = date.split("-");
  const year = dateArray[0];
  const month = dateArray[1];
  const dayArray = dateArray[2].split("T");
  const day = dayArray[0];
  const formattedDate = [month, day, year].join("-");
  return formattedDate;
}

function DisplayEmployees(props) {
  if (!props || !props.results) {
    return null;
  }

  let filteredContacts = props.results.filter(contact => {
    let firstName = contact.name.first;
    let lastName = contact.name.last;
    let fullName = firstName + " " + lastName;

    return fullName.toLowerCase().indexOf(props.search.toLowerCase()) !== -1;
  });

  return (
    <div>
      <table style={{ width: "90%" }}>
        <thead>
          <tr>
            <th>Image</th>
            <th className="text-center">
              <i
                onClick={() => props.sortByNameAsc("name")}
                className="fas fa-arrow-circle-down mr-3"
              ></i>
              Name
              <i
                onClick={() => props.sortByNameDesc("name")}
                className="fas fa-arrow-circle-up ml-3"
              ></i>
            </th>
            <th className="text-center">Phone</th>
            <th className="text-center">Email</th>
            <th className="text-center">
              <i
                onClick={() => props.sortByDateAsc("date")}
                className="fas fa-arrow-circle-down mr-3"
              ></i>
              Date Hired
              <i
                onClick={() => props.sortByDateDesc("date")}
                className="fas fa-arrow-circle-up ml-3"
              ></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map(result => (
            <tr key={result.email}>
              <td>
                <img src={result.picture.medium} alt="Employee Pic" />
              </td>
              <td>{`${result.name.first}  ${result.name.last}`}</td>
              <td>{result.phone}</td>
              <td>{result.email}</td>
              <td>{formatDate(result.registered.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayEmployees;
