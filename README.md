# Medify 

Medify allows users to find medical centers in a specific state and city across the USA and book appointments. 

## Tech stack
-React.js
-Javascript
-HTML
-CSS


## Third Party Libraries
-Material UI
-Notistack
-date-fns
-swiperJs
-React Router

## Development details
-Navigation is done via react router
-In Home tab, a list of states is first fetched via an API call, subsequently for the selected state, a list of cities are fetched, finally for the combination of state and city, a list of medical centers are fetched.
-User can interactively pick date and time slot while making booking in Hospitals Tab.
-The bookings are persisted in browser's local storage.
-User finds the previous booking in My Bookings tab.



##API Endpoints 

States - https://meddata-backend.onrender.com/states
Cities - https://meddata-backend.onrender.com/cities/:state
Medical centers - https://meddata-backend.onrender.com/data?state= /state-name/ &city=/city-name/

I enjoyed building this project, faced some challenges, overcame them and continued to familiarize myself with React and all its moving parts.
