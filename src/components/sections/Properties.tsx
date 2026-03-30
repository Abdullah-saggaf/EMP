import { getProperties } from "@/lib/properties";
import PropertiesClient from "./PropertiesClient";

export default async function Properties() {
  const properties = await getProperties();

  return <PropertiesClient properties={properties} />;
}
