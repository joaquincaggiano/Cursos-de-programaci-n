import React, {useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

export const Map = () => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => console.log(info),
      err => console.log({err}),
      {
        enableHighAccuracy: true, //nos da la ubicación exacta
      },
    );
  }, []);

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{flex: 1}}
        showsUserLocation
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {/* <Marker
          image={require('../assets/custom-marker.png')} //esto es por si queres un custom marcador
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Titulo del Marcador"
          description="Descripcion del marcador"
        /> */}
      </MapView>
    </>
  );
};
