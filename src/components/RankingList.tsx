import { A } from "@solidjs/router";
import { Component, For } from "solid-js";

export const RankingList: Component<{
  icon: string;
  title: string;
  link: string;
  list: {
    title: string;
    teacher: string;
    view: number;
  }[];
}> = ({ icon, title, link, list }) => {
  const Line = () => <div class="h-[1px] w-full bg-gray-300"></div>;

  return (
    <div>
      <Line />
      <div class="standard-width flex h-20 w-full flex-row items-center justify-between px-4">
        <div class="flex flex-row items-center gap-6 text-xl">
          <img src={icon} class="h-full w-fit"></img>
          {title}
        </div>
        <div class="contents text-lg text-gray-700">
          <A href={link}>查看更多{">"}</A>
        </div>
      </div>
      <Line />
      <ol>
        <For each={list}>
          {(item, idx) => (
            <li>
              <div class="flex h-12 flex-row justify-between px-4 py-2">
                <div class="flex flex-row items-center gap-4 text-lg">
                  <div
                    style={{
                      color: idx() < 3 ? "white" : "black",
                      background: (() => {
                        switch (idx()) {
                          case 0:
                            return "red";
                          case 1:
                            return "yellowgreen";
                          case 2:
                            return "green";
                          default:
                            return "silver";
                        }
                      })(),
                    }}
                    class="aspect-square h-full text-center"
                  >
                    {idx() + 1}
                  </div>
                  <div>{item.title}</div>
                </div>

                <div class="flex flex-row items-center justify-end gap-4">
                  <div class="flex flex-row items-center gap-2">
                    <img src="/teacher.png" class="h-full w-fit"></img>
                    {(() => {
                      if (item.teacher.length === 2) {
                        return item.teacher[0] + "　" + item.teacher[1];
                      } else {
                        return item.teacher;
                      }
                    })()}
                  </div>
                  <div class="flex flex-row items-center gap-2">
                    <img src="/see.png" class="h-full w-fit"></img>
                    <div class="min-w-12 text-right">{item.view}</div>
                  </div>
                </div>
              </div>
            </li>
          )}
        </For>
      </ol>
    </div>
  );
};
