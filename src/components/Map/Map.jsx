import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import mapdata from '../../utils/mapdata';
const Map = () => {
    return (
        <ComposableMap
            projection='geoMercator'
            style={{ backgroundColor: 'pink' }}
        >
            <Geographies geography={mapdata.data}>
                {(geographies) => {
                    return geographies.geographies.map((geo) => {
                        return <Geography key={geo.rsmKey} geography={geo} />;
                    });
                }}
            </Geographies>
        </ComposableMap>
    );
};

export default Map;