import { Component, For } from "solid-js";
import { ImageGalley } from "../components/ImageGalley";
import { TitleWithUnderline } from "../components/TitleWithUnderline";
import { ImageCard } from "../components/ImageCard";
import { NotifyCard } from "../components/NotifyCard";
import { RankingList } from "../components/RankingList";

export const Recommendations: Component = () => {
  return (
    <section class="bg-gray-50">
      <TitleWithUnderline>推荐课程</TitleWithUnderline>
      <div class="flex w-full flex-row justify-center">
        <div class="standard-width flex flex-row items-center justify-evenly gap-4">
          <For
            each={[
              {
                title: "大学生心理健康教育",
              },
              {
                title: "创新创业",
              },
              { title: "美学原理" },
              { title: "中国茶道" },
            ].map((v, i) => ({
              ...v,
              image: `/recommendations/${i + 1}.jpg`,
            }))}
          >
            {(data) => <ImageCard {...data} />}
          </For>
        </div>
      </div>
    </section>
  );
};

export const Notifications: Component = () => {
  return (
    <section class="bg-gray-100">
      <TitleWithUnderline>通知公告</TitleWithUnderline>
      <div class="flex w-full flex-row justify-center">
        <div class="standard-width flex flex-row items-center justify-evenly">
          <For
            each={[
              {
                date: new Date("2024-02-27"),
                title: "手机号绑定找回密码",
                content: () => (
                  <>
                    一、绑定手机号 如何通过手机号找回密码？
                    首页登录页面，点击【忘记密码】
                  </>
                ),
                view: 4970,
              },
              {
                cover: "/notify-img.jpg",
                date: new Date("2020-10-23"),
                title: "厉行节约，反对浪费",
                content: () => <></>,
                view: 9432,
              },
              {
                date: new Date("2011-01-11"),
                title: "欢迎使用网络教学综合平台",
                content: () => (
                  <>
                    各位老师、同学： 大家好！
                    我校网络教学综合平台系统已经开通，欢迎各位老师、同学积极应用网络平台开展教学活动。
                    网络教学综合平台
                  </>
                ),
                view: 24948,
              },
            ]}
          >
            {(data) => <NotifyCard {...data} />}
          </For>
        </div>
      </div>
    </section>
  );
};

export const Rankings: Component = () => {
  return (
    <section class="bg-gray-50">
      <TitleWithUnderline>课程排行</TitleWithUnderline>
      <div class="flex flex-row items-center justify-center">
        <div class="standard-width flex flex-row items-start justify-evenly gap-12">
          <div class="w-1/2">
            <RankingList
              icon="/day.png"
              title="课程日访问排行"
              link=""
              list={[
                {
                  title: "集成电路工艺原理",
                  teacher: "潘欣欣",
                  view: 79,
                },
                {
                  title: "概率论与数理统计",
                  teacher: "潘伟",
                  view: 77,
                },
                {
                  title: "模拟电子技术",
                  teacher: "杨晓玲",
                  view: 68,
                },
                {
                  title: "Java Welcoming",
                  teacher: "肖远辉",
                  view: 67,
                },
              ]}
            />
          </div>
          <div class="w-1/2">
            <RankingList
              icon="/all.png"
              title="课程总访问排行"
              link=""
              list={[
                {
                  title: "线性代数B",
                  teacher: "祝颖润",
                  view: 105477,
                },
                {
                  title: "高等数学AⅡ",
                  teacher: "廖益文",
                  view: 96189,
                },
                {
                  title: "校规校纪与安全教育",
                  teacher: "柴浩",
                  view: 90362,
                },
                {
                  title: "操作系统",
                  teacher: "陈群",
                  view: 86384,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home: Component = () => {
  return (
    <>
      <div class="h-[280px] w-full">
        <ImageGalley
          images={() =>
            new Array(4)
              .fill(0)
              .map((_, i) => i + 1)
              .map((v) => ({
                src: `/galley/${v}.jpg`,
              }))
          }
          duration={5000}
        />
      </div>
      <Recommendations />
      <Notifications />
      <Rankings />
    </>
  );
};
