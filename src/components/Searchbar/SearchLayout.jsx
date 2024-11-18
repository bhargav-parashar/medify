import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import Dropdown from "./Dropdown.jsx";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMainContext } from "../Context/MainContextProvider.jsx";
import Loader from "../../components/Loader/Loader.jsx";

const SearchLayout = ({ backgroundColor = "transparent", shadow }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    state: searchParams.get("state") ? searchParams.get("state") : "",
    city: searchParams.get("city") ? searchParams.get("city") : "",
  });
  const nav = useNavigate();
  const { selectedTab, setSelectedTab } = useMainContext();
  const [isLoading,setIsLoading] = useState(false);

  //Get States
  useEffect(() => {
    setIsLoading(true);
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchStates();
  }, []);

  //Get Cities
  useEffect(() => {
    const fetchCities = async () => {
      setCities([]);
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/cities/${formData.state}`
        );
        setCities(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (formData.state) {
      fetchCities();
    }
  }, [formData.state]);

  useEffect(() => {
    setFormData({
      state: "",
      city: "",
    });
  }, [selectedTab]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "state") setFormData((prev) => ({ ...prev, city: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.state && formData.city) {
      setSelectedTab(2);
      nav(`/search?state=${formData.state}&city=${formData.city}`);
    }
  };

  return (
    <>
    {
      isLoading && selectedTab===1 ?(<Box mt={{ xs: "40vh", sm: "15vh", md: "10vh" }}>
        {" "}
        <Loader />
      </Box>):(
        <form onSubmit={handleSubmit}>
      <Box
        sx={{
          backgroundColor: { backgroundColor },
          boxShadow: shadow ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none",
          
          borderRadius: "10px",
          display: "flex",
          width:{xs:"80vw",sm:"100%"},
          height: { xs: "fit-content", sm: "100px" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: { xs: "8px", sm: "0px" },
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: { xs: "cover", sm: "70%" },
            gap: { xs: "0px", md: "10px" },
            padding: { xs: "10px 10px 0px 10px", sm: "0px 0px 0px 0px" },
          }}
        >
          <Dropdown
            name="state"
            value={formData.state}
            handleChange={(e) => handleChange(e)}
            placeholder="State"
            items={states}
          />
          {formData.state ? (
            <Dropdown
              name="city"
              value={formData.city}
              handleChange={(e) => handleChange(e)}
              placeholder="City"
              items={cities}
            />
          ) : (
            <Dropdown
              name="city"
              value={formData.city}
              handleChange={(e) => handleChange(e)}
              placeholder="City"
              items={cities}
              disabled
            />
          )}
        </Box>
        <Box
          sx={{
            width: { xs: "cover", sm: "20%" },
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-end" },
            padding: { xs: "0px 10px 15px 10px", sm: "0px 5px 0px 5px" },
          }}
        >
          <ButtonPrimary
            label="Search"
            icon={<SearchIcon />}
            width={{ xs: "80%", sm: "120px" }}
            height={{ xs: "30px", sm: "40px" }}
          />
        </Box>
      </Box>
    </form>
      )
    }
     
      
    </>
    
  );
};
export default SearchLayout;
