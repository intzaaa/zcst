import { A } from "@solidjs/router";
import { Component } from "solid-js";

export const ImageCard: Component<{
  image: string;
  title: string;
  link?: string;
  content?: any;
}> = ({ image, title, link, content }) => {
  return (
    <div class="card relative h-[210px] w-[270px] border border-solid border-gray-300">
      <img src={image} class="absolute top-0 w-full object-cover"></img>
      <div class="absolute bottom-0 h-1/4 w-full bg-white transition-all duration-500 hover:h-1/2">
        <div class="p-4 text-sm text-gray-700">{title}</div>
        <div class="overflow-y-scroll">{content}</div>
        <A class="absolute -top-4 right-4 h-fit w-fit" href={link ?? ""}>
          <img src="/arrow.png"></img>
        </A>
      </div>
    </div>
  );
};
