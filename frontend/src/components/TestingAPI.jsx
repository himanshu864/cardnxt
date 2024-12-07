import { useState, useEffect } from "react";

function TestingAPI() {
  const [backendData, setBackendData] = useState([]);

  const fetchBackendData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api");
      const resData = await response.json();
      setBackendData(resData.users);
    } catch (error) {
      console.error("Error fetching backend data:", error);
    }
  };

  useEffect(() => {
    fetchBackendData();
  }, []);

  return (
    <div className="m-5">
      {backendData.length > 0 ? (
        backendData.map((user, index) => <div key={index}>{user}</div>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TestingAPI;
