import { Component, For } from "solid-js";
import { TabView } from "../components/TabView";

export const Major: Component = () => {
  return (
    <div class="flex flex-row justify-center">
      <div class="standard-width flex flex-col">
        <img src="/second.jpg" class="h-fit w-full py-4"></img>
        <div class="flex flex-row">
          <div class="flex w-1/4 flex-col gap-2">
            <For each={[{ name: "专业建设动态" }, { name: "专业建设研究" }]}>
              {(item) => {
                return (
                  <div class="bg-blue-800 px-4 py-2 text-white">
                    {item.name}
                  </div>
                );
              }}
            </For>
          </div>

          <div class="flex h-fit w-0 grow flex-col items-center justify-center gap-4">
            <TabView
              tabs={[
                {
                  name: "专业建设",
                  content: (
                    <p>
                      推动专业建设，开展学科专业等专项教学评估是各高效的一项重要工作。就是要大力加强本科专业建设，按照优势突出、特色鲜明、新兴交叉、社会急需的原则，引导各级各类高等学校发挥自身优势，努力办出特色。
                      　
                      特色专业、品牌专业、精品专业或者重点专业（以下简称特色专业）的展示，既是高校科研教学能力的对外展示窗口，也是高校教学改革的一项重要工作。
                      综合网络教学平台，可以在精品课程、教学名师展示的基础上，进一步推出“特色专业/精品专业”建设的子系统。
                      特色专业子系统，包括特色专业主页的展示、管理。特色专业主页可以用于专业建设成果展示，也可以用于申报评审。还可以考虑校级精品专业的评审功能的支持。
                    </p>
                  ),
                },
              ]}
            ></TabView>
          </div>
        </div>
      </div>
    </div>
  );
};
