"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import * as React from "react";
import styled from "styled-components";
import Button from "../Button";
import Link from "next/link";
import data from "./mapa-biomas-org.json";

import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import Head from "next/head";

export interface IMarker {
  latY: number;
  lonX: number;
  name: string;
  type: string;
  biome: string;
  local: string;
  projectDefault: string;
  kg: string | number;
  link?: string;
}

interface MapProps {
  markers: IMarker[];
  zoom?: number;
  x?: number;
  y?: number;
}

const AMZBiome: LatLngExpression[][][] =
  data.features[0].geometry.coordinates.map((f) =>
    f.map((s) => s.map((row) => [row[1], row[0]]))
  );

const CAATBiome: LatLngExpression[][][] =
  data.features[1].geometry.coordinates.map((f) =>
    f.map((s) => s.map((row) => [row[1], row[0]]))
  );

const CERBiome: LatLngExpression[][][] =
  data.features[2].geometry.coordinates.map((f) =>
    f.map((s) => s.map((row) => [row[1], row[0]]))
  );

const MATBiome: LatLngExpression[][][] =
  data.features[3].geometry.coordinates.map((f) =>
    f.map((s) => s.map((row) => [row[1], row[0]]))
  );

const PMPBiome: LatLngExpression[][][] =
  data.features[4].geometry.coordinates.map((f) =>
    f.map((s) => s.map((row) => [row[1], row[0]]))
  );

const PTNBiome: LatLngExpression[][][] =
  data.features[5].geometry.coordinates.map((f) =>
    f.map((s) => s.map((row) => [row[1], row[0]]))
  );

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  box-sizing: border-box;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .info-container {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    /* top: auto; */
    z-index: 2;
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 250px;

    h2 {
      margin: 0 0 1rem 0;
    }

    .color-block {
      display: inline-block;
      border-radius: 50%;
      padding: 10px;
    }

    .AMZ {
      background-color: #517430;
    }

    .CAAT {
      background-color: #83bc51;
    }

    .CER {
      background-color: #9b991b;
    }

    .MAT {
      background-color: #ffbb00;
    }

    .PMP {
      background-color: #c41700;
    }

    .PTN {
      background-color: #c40083;
    }

    .SAV {
      background-color: #ffd666;
    }
  }

  .mapa-projeto {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
    color: #210062;
    z-index: 1;
  }
`;

const Map = ({ markers, zoom, x, y }: MapProps) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <Container>
        <div className="info-container">
          <h2 className="secundary">Biomas</h2>
          <div>
            <ul>
              <li>
                <span className="color-block AMZ"></span>
                <span className="opacity">Amazônia</span>
              </li>
              <li>
                <span className="color-block CAAT"></span>
                <span className="opacity">Caatinga</span>
              </li>

              <li>
                <span className="color-block CER"></span>
                <span className="opacity">Cerrado</span>
              </li>
              <li>
                <span className="color-block MAT"></span>
                <span className="opacity">Mata Atlântica</span>
              </li>
              <li>
                <span className="color-block PMP"></span>
                <span className="opacity">Pampa</span>
              </li>
              <li>
                <span className="color-block PTN"></span>
                <span className="opacity">Pantanal</span>
              </li>
              <li>
                <span className="color-block SAV"></span>
                <span className="opacity">Savana</span>
              </li>
            </ul>
          </div>
        </div>
        <MapContainer
          center={[y ?? -16.35, x ?? -56.666]}
          zoom={zoom ?? 3.8}
          scrollWheelZoom={false}
          className="mapa-projeto"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polygon positions={AMZBiome} color="#517430" opacity={0.3} />
          <Polygon positions={CAATBiome} color="#83BC51" opacity={0.3} />
          <Polygon positions={CERBiome} color="#9b991b" opacity={0.3} />
          <Polygon positions={MATBiome} color="#ffbb00" opacity={0.3} />
          <Polygon positions={PMPBiome} color="#c41700" opacity={0.3} />
          <Polygon positions={PTNBiome} color="#c40083" opacity={0.3} />

          {markers &&
            markers.map((item, index) => (
              <Marker position={[item.latY, item.lonX]} key={index}>
                <Popup>
                  <h1>{item.name}</h1>
                  <p>
                    <b>Tipo de Projeto</b>: {item.type}
                  </p>
                  <p>
                    <b>Bioma</b>: {item.biome}
                  </p>
                  <p>
                    <b>Local</b>: {item.local}
                  </p>
                  <p>
                    <b>Padrão</b>: {item.projectDefault}
                  </p>
                  <p>
                    <b>Kg de CO2eq</b>: {item.kg}
                  </p>
                  {item?.link && (
                    <Link href={item?.link ? item?.link : "/"}>
                      <Button variant="outlined">Ver mais</Button>
                    </Link>
                  )}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </Container>
    </>
  );
};

export default Map;
