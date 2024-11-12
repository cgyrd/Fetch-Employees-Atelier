import { useState } from "react";
import EmployeeCard from "./Components/EmployeeCard";

const sampleEmployee = {
  gender: "female",
  name: {
    title: "Mrs",
    first: "آرمیتا",
    last: "جعفری",
  },
  location: {
    street: {
      number: 9332,
      name: "کارگر شمالی",
    },
    city: "خرم‌آباد",
    state: "هرمزگان",
    country: "Iran",
    postcode: 60457,
    coordinates: {
      latitude: "16.5174",
      longitude: "102.8293",
    },
    timezone: {
      offset: "+2:00",
      description: "Kaliningrad, South Africa",
    },
  },
  email: "armyt.jaafry@example.com",
  login: {
    uuid: "00a8ef5b-8269-4bbb-8f93-a78ba241d6b2",
    username: "blueostrich549",
    password: "mini",
    salt: "jyKTQTb9",
    md5: "6c6deecccd993cf53ae6f3418da33426",
    sha1: "b60920254e5f681df00157199ce933bc257c8148",
    sha256: "562cde9fcf04fd950470468af727feb1948f2a85420d19356ba0f3c2fb4ddf7e",
  },
  dob: {
    date: "1973-09-28T12:36:23.389Z",
    age: 51,
  },
  registered: {
    date: "2016-10-09T20:59:51.757Z",
    age: 8,
  },
  phone: "012-18371029",
  cell: "0985-426-5122",
  id: {
    name: "",
    value: null,
  },
  picture: {
    large: "https://randomuser.me/api/portraits/women/64.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg",
  },
  nat: "IR",
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };
  return (
    <div className="App">
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}

export default App;
