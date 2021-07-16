import React from 'react';
import './index.css';
import GoogleMapReact from 'google-map-react';
import marker from './map-pin-svgrepo-com.svg';
const centersLocations = [
	{
		name: '37 Military Hospital',
		long: -0.1841,
		lat: 5.5875,
	},
];
const Map = () => {
	const mapProps = {
		center: {
			lat: 7.9465,
			lng: -1.0232,
		},
		zoom: 10,
	};

	const MarkerComponent = ({ text }) => (
		<>
			<img style={{ height: '30px' }} src={marker} alt="marker"></img>
		</>
	);

	return (
		<div className="map" style={{ width: '100vw', height: '100vh' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyBYGL2U18OZciTVRidf3GRialBCUpkMp3A' }}
				defaultCenter={mapProps.center}
				defaultZoom={mapProps.zoom}
				yesIWantToUseGoogleMapApiInternals
			>
				{centersLocations.map((location) => (
					<MarkerComponent
						lat={location.lat}
						lng={location.long}
						key={location.lat}
						text={'A'}
					></MarkerComponent>
				))}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
