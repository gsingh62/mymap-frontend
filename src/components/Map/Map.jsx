import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import mapdata from '../../utils/mapdata';
const Map = () => {
    return (
        <ComposableMap
            projection='geoMercator'
            projectionConfig={{
                scale: 300,
                center: [-110, 52]
            }}
            fill='white'
            stroke='black'
            stroke-width={3}
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