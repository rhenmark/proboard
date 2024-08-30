'use client';

import { withHeader } from '../../components/page-wrapper';
// import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const mockItems = new Array(24).fill('');
const Location = () => {
  return (
    <div className="h-[calc(100dvh-90px)] bg-black/90">
      <div className="grid grid-flow-col grid-cols-[60%_1fr] h-full grid-rows-1 relative">
        <div className="bg-white h-full p-4">
          <div className="py-4">
            <h4>Find by Location</h4>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full ">
            {mockItems.map((item, i) => {
              return (
                <div
                  className="h-64 w-full bg-gray-300 rounded-md"
                  key={i}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="h-full bg-red-100 sticky top-0 w-full overflow-hidden"  >
          <div className='w-full'>
            <MapContent />
          </div>
        </div>
      </div>
    </div>
  );
};

const MapContent = () => {
  return (
    <div>Map</div>
    // <MapContainer center={[14.5995, 120.9842]} zoom={13} scrollWheelZoom={false}>
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   {/* <Marker position={[51.505, -0.09]}>
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </Marker> */}
    // </MapContainer>
  );
};

export default withHeader(Location);
