import "leaflet/dist/leaflet.css";
import { MapContainer, ImageOverlay, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

const bounds: [[number, number], [number, number]] = [
  [0, 0],
  [724, 1520],
];

const polygons = [
  {
    name: "THE RAINBOW",
    d: "M682 135L615 56L684 53L684 30L705 19L722 18L724 27L732 29L737 33L739 67L763 91L768 87L776 92L777 102L801 102L809 104L811 112L826 118L825 156L807 166z",
  },
  {
    name: "THE ORIGAMI",
    d: "M846 173L851 134L860 123L880 128L887 128L889 112L902 113L905 110L915 111L919 98L939 101L953 94L965 102L1003 109L1003 115L1019 110L1024 110L1025 127L1037 130L1038 119L1044 115L1054 116L1052 134L1067 135L1070 102L1123 108L1121 144L1133 151L1135 129L1147 127L1151 131L1150 166L1162 167L1163 219L1057 211L995 203L935 192z",
  },
  {
    name: "ĐẠI CÔNG VIÊN 36HA",
    d: "M1055 428L875 263L676 296L675 436z",
  },
  {
    name: "THE MANHATTAN",
    d: "M742 238L707 270L712 284L684 294L672 295L667 374L645 364L627 360L608 358L577 361L564 368L557 379L553 393L540 401L519 409L505 410L491 399L486 387L494 365L475 373L447 378L308 380L324 358L419 358L467 351L497 339L507 327L589 265L670 222z",
  },
  {
    name: "THE MANHATTAN GLORY",
    d: "M384 162L355 174L331 200L343 212L310 213L149 269L135 284L140 308L175 310L173 321L148 339L184 368L257 379L287 377L361 323L570 186z",
  },
];

function SvgOverlay() {
  const map = useMap();
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  useEffect(() => {
    map.setMaxBounds(bounds);
    map.setMinZoom(0);
    map.setZoom(0);
  }, [map]);

  const handleMouseEnter = (name: string) => {
    setHoveredName(name); // Hiển thị tên khi hover
  };

  const handleMouseLeave = () => {
    setHoveredName(null); // Ẩn tên khi di chuột ra ngoài
  };

  return (
    <div>
      {hoveredName && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            padding: "5px 10px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            borderRadius: "5px",
          }}
        >
          {hoveredName}
        </div>
      )}
      <svg
        width={1520}
        height={724}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        {polygons.map((p, i) => (
          <path
            key={i}
            d={p.d}
            fill="#3388ff"
            fillOpacity={0.2}
            stroke="#3388ff"
            strokeWidth={3}
            style={{ pointerEvents: "visiblePainted" }}
            onMouseEnter={() => handleMouseEnter(p.name)} // Bắt sự kiện khi hover
            onMouseLeave={handleMouseLeave} // Bắt sự kiện khi di chuột ra
          >
            <title>{p.name}</title>
          </path>
        ))}
      </svg>
    </div>
  );
}

export default function HotspotMap() {
  return (
    <div style={{ width: "100%", height: "100vh" }} className="mb-10">
      <MapContainer
        crs={L.CRS.Simple}
        bounds={bounds}
        style={{ height: "100%", width: "100%" }}
        zoom={0}
        minZoom={0}
        maxZoom={3}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        dragging={false}
        zoomControl={false}
        attributionControl={false}
      >
        <ImageOverlay
          url="/images/subdivision/hotspot-map.jpg"
          bounds={bounds}
        />
        <SvgOverlay />
      </MapContainer>
    </div>
  );
}
