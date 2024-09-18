import { Key } from "@solid-primitives/keyed";
import { A } from "@solidjs/router";
import {
  Accessor,
  Component,
  createEffect,
  createMemo,
  createSignal,
  For,
} from "solid-js";
import "solid-styled-jsx";

export const ImageGalley: Component<{
  images: Accessor<
    {
      src: string;
      link?: string;
    }[]
  >;
  duration: number;
}> = ({ images, duration }) => {
  const length = createMemo(() => images().length);

  const [index, setIndex] = createSignal(0);

  setInterval(() => {
    setIndex((index() + 1) % images().length);
  }, duration);

  return (
    <>
      <div class="galley relative h-full w-full">
        <Key
          each={[
            images().at((index() - 1) % length())!,
            images().at(index())!,
            images().at((index() + 1) % length())!,
          ]}
          by={(data) => data.src}
        >
          {(data) => {
            return (
              <A
                href={data()?.link ?? ""}
                data-src={data().src}
                class="absolute block h-full w-full bg-transparent opacity-100 transition-opacity duration-1000"
              >
                <img
                  src={data()?.src ?? ""}
                  class="h-full w-full object-cover"
                ></img>
              </A>
            );
          }}
        </Key>
      </div>
      <div class="absolute">
        <For each={images().map((_, i) => i)}>
          {(idx) => {
            return (
              <div
                class="inline-block h-2 w-2 rounded-full bg-white opacity-50 hover:opacity-100"
                onClick={() => setIndex(index())}
              ></div>
            );
          }}
        </For>
      </div>
    </>
  );
};
