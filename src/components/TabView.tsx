import { Component, createSignal, For } from "solid-js";

export const TabView: Component<{
  tabs: {
    name: string;
    content: any;
  }[];
}> = ({ tabs }) => {
  const [current, setCurrent] = createSignal(0);

  return (
    <div class="h-full w-full p-4">
      <div class="relative flex w-full flex-row items-center justify-start">
        <For each={tabs}>
          {({ name }, idx) => (
            <div
              role="button"
              onClick={() => setCurrent(idx())}
              style={{
                "z-index": idx() === current() ? 10 : -10,
                "border-top":
                  idx() === current() ? "2px solid #5060b8" : "none",
                "border-left":
                  idx() === current() ? "1px solid rgb(209 213 219)" : "none",
                "border-right":
                  idx() === current() ? "1px solid rgb(209 213 219)" : "none",
              }}
              class="bg-white px-6 py-2 text-lg"
            >
              {name}
            </div>
          )}
        </For>
        <div
          style={{
            "border-bottom": "2px solid #5060b8",
          }}
          class="absolute left-0 top-0 z-0 h-full w-full"
        ></div>
      </div>
      <div class="h-fit w-full pt-4">{tabs[current()].content}</div>
    </div>
  );
};
