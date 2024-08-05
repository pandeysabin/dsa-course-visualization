import { Metadata } from "next";
import { Home } from "../components/Home";

export const metadata: Metadata = {
  title: "DSA Course navigation pattern",
};

export default function Page() {
  return <Home />;
}
