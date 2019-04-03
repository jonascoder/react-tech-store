import React from "react";
import { ProductConsumer } from "../context";
import { Hero } from "../components/Hero";
export default function HomePage() {
  return (
    <>
      <ProductConsumer>
        {value => {
          return <h1>Hello from HomePage</h1>;
        }}
      </ProductConsumer>
    </>
  );
}
