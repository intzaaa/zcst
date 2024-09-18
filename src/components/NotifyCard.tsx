import { Component, Show } from "solid-js";

export const NotifyCard: Component<{
  cover?: string;
  date: Date;
  title: string;
  content: any;
  view: number;
}> = ({ cover, date, title, content, view }) => {
  return (
    <div class="flex h-[250px] w-[250px] flex-col border border-solid border-gray-300 bg-gray-50 text-gray-700">
      <Show when={cover}>
        <img src={cover} class="h-[100px] w-full object-cover"></img>
      </Show>
      <div class="px-4 pt-4 text-xl">{title}</div>
      <div class="relative h-0 grow overflow-clip text-ellipsis p-4">
        {content}
        <div
          style={{
            background:
              "linear-gradient(transparent, rgb(249 250 251 / var(--tw-bg-opacity)))",
          }}
          class="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full select-none"
        ></div>
      </div>
      <div class="h-[1px] w-full bg-gray-200"></div>
      <div class="flex flex-row justify-between p-4">
        <div>{date.toLocaleDateString()}</div>
        <div>{view}</div>
      </div>
    </div>
  );
};
