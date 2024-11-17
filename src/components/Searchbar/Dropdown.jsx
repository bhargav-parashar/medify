import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import InputAdornment from "@mui/material/InputAdornment";

export default function SelectSmall({placeholder,items,name,value,handleChange,disabled}) {
  

  return (
    <FormControl sx={{ m: 1, minWidth: 120,width:{xs:"50vw",sm:'25vw',md:'30vw'} }} size="small">
      {
      <Select
        name={name}
        value={value}
        displayEmpty
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <PlaceOutlinedIcon />
          </InputAdornment>
        }
        disabled={disabled}
      >
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>
        {
          items.map((item,idx)=><MenuItem key={idx} value={item}>{item}</MenuItem>)
        }
        
      </Select>
      }   
    </FormControl>
  );
}