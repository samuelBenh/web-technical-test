import { randomPosition } from "@turf/turf";

export const barcelonaBBox = [2.109671, 41.353423, 2.216272, 41.433780] satisfies GeoJSON.BBox;

export const getRandomPosition = () => randomPosition(barcelonaBBox);