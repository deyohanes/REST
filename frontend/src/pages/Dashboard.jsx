import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
 
import React from "react";

const API_URL = "http://localhost:5000/api/product/";

function Dashboard() {
  const [product, setProduct] = React.useState(null);
  
  
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    axios.get(API_URL).then((response) => {
      setProduct(response.data);
    });
  });
  return <div>Dashboard
    
  </div>;
}

export default Dashboard;
