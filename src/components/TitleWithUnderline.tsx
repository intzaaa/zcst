import { Component, JSX } from "solid-js";

export const TitleWithUnderline: Component<{
  children: JSX.Element;
}> = ({ children }) => {
  return (
    <div class="relative pb-2 text-center">
      <h1 class="text-2xl">{children}</h1>
      <div class="inline-block h-[2px] w-16 bg-[#5060b8]"></div>
    </div>
  );
};
