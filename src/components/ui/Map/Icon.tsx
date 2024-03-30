import L from "leaflet"

const icon = L.Icon.extend({
    options: {
        iconUrl: require("./pin.svg"),
        iconRetinaUrl: require("./pin.svg"),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(60, 75),
        className: "leaflet-div-icon",
    },
})

export { icon }
