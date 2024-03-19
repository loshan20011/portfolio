'use client';

import React from 'react'
import Page from '../page'

const page = () => {
  return (
    <div>
        <Page
            src="/foodflow.png"
            alt="FoodFlow"
            title="FoodFlow"
            description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
            techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
            functionalities={["User Authentication", "Product Browsing", "Cart Management", "Responsive UI"]}
            // onclick={() => {
            //   window.open("https://clone-45ed0.web.app/", "_blank");
            // }} 
          />
    </div>
  )
}

export default page
