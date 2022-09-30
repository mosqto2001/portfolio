import React from "react";

export default function ProjectFeature(props) {
    

  return (
    <div>
      <div class="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
        <h2 class="text-xl font-bold sm:text-4xl mt-4 mb-4">Feature</h2>
{props.project.features.map((feature,index) => <p key={index} class="mt-2">▶ {feature}</p>)}
        
      </div>
    </div>
  );
}
