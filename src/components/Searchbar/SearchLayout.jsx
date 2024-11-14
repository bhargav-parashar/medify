import {useState,useEffect,useContext} from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import Dropdown from "./Dropdown.jsx";
import axios from "axios";
import {useNavigate, useSearchParams} from "react-router-dom";
import { useMainContext } from "../Context/MainContextProvider.jsx";

const SearchLayout = ({backgroundColor="transparent",shadow="none"}) => {
  const [states,setStates] = useState([]);
  const [cities,setCities] = useState([]);
  const[searchParams,setSearchParams]=useSearchParams();
  const [formData,setFormData] = useState({
    state:searchParams.get("state")?searchParams.get("state"):"",
    city:searchParams.get("city")?searchParams.get("city"):""
  });
  const nav = useNavigate();
  const { selectedTab,setSelectedTab } = useMainContext();
 
 //Get States
  useEffect(()=>{
    const fetchStates = async ()=>{
      try{
      const response = await axios.get("https://meddata-backend.onrender.com/states");
      setStates(response.data);
      }catch(err){
        console.log(err);
      }
    };
    fetchStates()
  },[]);
  
  //Get Cities
  useEffect(()=>{
    const fetchCities = async ()=>{
      setCities([]);
      try{
      const response = await axios.get(`https://meddata-backend.onrender.com/cities/${formData.state}`);
      setCities(response.data);
      }catch(err){
        console.log(err);
      }
     
    };
    if(formData.state){
      fetchCities()
    }
  },[formData.state]);

  useEffect(()=>{
    setFormData({
       state:"",
       city:""
    })
  },[selectedTab])
 

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData((prev)=>({...prev,[name]:value}));  
    if(name === "state")setFormData((prev)=>({...prev,city:""}));  
  }

  const handleSubmit = (e)=>{
     e.preventDefault();
   
    if(formData.state && formData.city){
       setSelectedTab(2);
       nav(`/search?state=${formData.state}&city=${formData.city}`);
    }
  }
  
  return (
    <form
    onSubmit={handleSubmit}
    >
    <Box
      sx={{
        //border: "2px solid black",
        backgroundColor:{backgroundColor},
        boxShadow:{shadow},
        borderRadius:"10px",
        display: "flex",
        height:{xs: "fit-content", sm: "100px"},
        flexDirection:  {xs:"column",sm: "row"},
        justifyContent:"center",
        gap:  {xs:"8px",sm:"0px"},
        margin:"20px"
      }}
    >
      <Box
        sx={{
          //border: "2px solid green",
          display: "flex",
          flexDirection: {xs:"column",sm:  "row"},
          alignItems: "center",
          justifyContent: "space-between",
          width: {xs:"cover",sm : "70%"},
          gap: {xs: "5px",md:"10px"},
          padding: { xs:"0px 10px 0px 10px",sm: "0px 0px 0px 0px"}
        }}
      >
        <Dropdown name="state" value={formData.state} handleChange={(e)=>handleChange(e)} placeholder="State" items={states}/>
        <Dropdown name="city" value={formData.city} handleChange={(e)=>handleChange(e)}placeholder="City" items={cities}/>
        
      </Box>
      <Box
        sx={{
          //border: "2px solid red",
          width: {xs: "cover",sm : "20%"},
          display: "flex",
          alignItems: "center",
          justifyContent: {xs: "center",sm : "flex-end"},
          padding: {xs: "0px 10px 0px 10px",sm: "0px 5px 0px 5px"},
        }}
      >
        <ButtonPrimary
          label="Search"
          icon= {<SearchIcon />}
          width= {{xs:"90px",sm:"120px"}}
          height={{xs:"30px",sm: "40px"}}
        />
      </Box>
      
    </Box>
    </form>
  );
};
export default SearchLayout;
