declare module "react-simple-maps" {
  import { ReactNode, CSSProperties } from "react";

  interface ProjectionConfig {
    center?: [number, number];
    scale?: number;
    rotate?: [number, number, number];
    parallels?: [number, number];
  }

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    style?: CSSProperties;
    children?: ReactNode;
  }

  interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: Geography[] }) => ReactNode;
  }

  interface Geography {
    rsmKey: string;
    [key: string]: unknown;
  }

  interface GeographyProps {
    geography: Geography;
    fill?: string;
    stroke?: string;
    style?: { outline?: string };
    [key: string]: unknown;
  }

  interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
    [key: string]: unknown;
  }

  export function ComposableMap(props: ComposableMapProps): JSX.Element;
  export function Geographies(props: GeographiesProps): JSX.Element;
  export function Geography(props: GeographyProps): JSX.Element;
  export function Marker(props: MarkerProps): JSX.Element;
  export function ZoomableGroup(props: { children?: ReactNode; [key: string]: unknown }): JSX.Element;
  export function Graticule(props: { [key: string]: unknown }): JSX.Element;
  export function Sphere(props: { [key: string]: unknown }): JSX.Element;
}
