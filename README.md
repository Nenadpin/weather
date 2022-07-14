Just for practice of API calls First type in location. API from positionstack.com returns an array of places that is used to populate select tag with geocoding data in Header component. Geoposition is passed as a prop and can be selected from select tag. There, position is set and used in Weather and Map component.

Weather component uses that prop and obrains weather data from api.openweathermap.org. Useeffect hook enables obtaining fresh data when position changes.

Mapa component also uses position data to display google map of a place via @react-google-maps/api. All API calls are handeled with axios which returns json format so there's no need to do res.json().

I've used external libraries, so I needed to install them: npm i axios npm i @react-google-maps/api

React v18 was giving me a hard time with @react-google-maps/api, so I used react v17.
