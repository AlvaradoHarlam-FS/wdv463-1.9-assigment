
import React from "react";
import Image from "next/image";
import api from '../public/Api.jpg'

export default function Home() {
  return (
    // eslint-disable-next-line react/no-unescaped-entities
    <div>
 <h1> What Does an API-First Approach Mean?
 An API-first approach means that for any given development project, your APIs are treated as “first-class citizens.” That everything about a project revolves around the idea that the end product will be consumed by mobile devices, and that APIs will be consumed by client applications. An API-first approach involves developing APIs that are consistent and reusable, which can be accomplished by using an API description language to establish a contract for how the API is supposed to behave.  Establishing a contract involves spending more time thinking about the design of an API. It also often involves additional planning and collaboration with the stakeholders providing feedback on the design of an API before any code is written.</h1>,
 <Image
 src={api}

 placeholder="blur"
 />
 </div>
  );
}
