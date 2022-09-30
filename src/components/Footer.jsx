import React from "react";
import IconTelephone from "../icons/IconTelephone"
import IconEmail from "../icons/IconEmail"
import IconGithub from "../icons/IconGithub"

export default function Footer() {
return (
<div
      class="py-12 mt-32 border-t border-white/25"
    >
   <div class="flex flex-col justify-center items-center gap-y-2">
        <p>THANADOL WANGSIRISOMBOON</p>
        <div class="flex flex-col sm:flex-row text-xl gap-x-16"><a class="flex gap-x-2"
          target="_blank"
        >
            <IconTelephone class=""/> <p class="text-xs sm:text-sm">095 008 5831</p>
        </a>
        <a class="flex gap-x-2"
          target="_blank"
        >
            <IconEmail/><p class="text-xs sm:text-sm">mosqto2001@gmail.com</p>
        </a>
        <a href="https://github.com/mosqto2001" class="flex gap-x-2"
          target="_blank"
        >
            <IconGithub/><p class="text-xs sm:text-sm">mosqto2001</p>
        </a>
        </div>

   </div>

        


    </div>)
}