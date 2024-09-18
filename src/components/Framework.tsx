import { A } from "@solidjs/router";
import { Component, For, JSX } from "solid-js";

const Nav: Component = () => {
  const Delimiter = () => <div class="h-full w-[1px] bg-[#5060b8]"></div>;

  return (
    <nav class="flex h-[50px] flex-row justify-center bg-[#3f51b5] text-white">
      <div class="flex flex-row overflow-clip text-ellipsis text-nowrap">
        <Delimiter />
        <For
          each={[
            {
              name: "主页",
              link: "/",
            },
            { name: "学习" },
            { name: "活动" },
            { name: "播客" },
            { name: "精品课" },
            {
              name: "专业",
              link: "/major",
            },
            { name: "资源" },
            { name: "课程联盟" },
            { name: "学习社区" },
          ]}
        >
          {(item) => {
            return (
              <>
                <A
                  href={item?.link ?? ""}
                  class="flex items-center justify-center pl-6 pr-6 hover:bg-[#313E84]"
                >
                  {item.name}
                </A>
                <Delimiter />
              </>
            );
          }}
        </For>
      </div>
    </nav>
  );
};

export const Search: Component = () => {
  return (
    <form
      class="flex h-[35px] flex-row items-center justify-center border border-solid p-2"
      action="./course.do"
      method="post"
    >
      <input
        type="text"
        name="s_keyword"
        class="text-sm outline-none placeholder:text-gray-600"
        placeholder="请输入课程名称或编号"
      />
      <input
        type="button"
        style={{
          "background-image": "url(/search.gif)",
        }}
        class="button aspect-square h-full bg-blue-400 bg-cover"
        // onclick="checkTopSearch(this.form)"
      />
    </form>
  );
};

export const Header: Component = () => {
  return (
    <header class="flex flex-col">
      <div class="flex w-full flex-row justify-center">
        <div class="standard-width flex h-[80px] flex-row justify-between pb-2 pt-2">
          <img src="/school_name.png" class="h-full"></img>
          <div class="flex h-full flex-row items-center justify-end gap-4">
            <Search />
            <button class="rounded-md bg-[#566CC2] pb-2 pl-4 pr-4 pt-2 text-white">
              登录
            </button>
          </div>
        </div>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
};

export const Footer: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center bg-[#2A2D34] text-gray-400">
      <div class="standard-width flex flex-col items-center justify-center">
        <div class="flex h-[80px] flex-row items-center justify-center gap-4 text-lg">
          <div>总访问量：68835089</div>
          <div>总课程数：31349</div>
          <div>在线人数：119</div>
        </div>
        <div class="h-[1px] w-full bg-[#474A51]"></div>
        <div class="w-full pb-4 pt-4 text-center text-xs">
          <a href="http://www.jluzh.edu.cn" target="_blank">
            {" "}
            珠海科技学院
          </a>{" "}
          版权所有 2019{" "}
          <a href="http://www.umooc.com.cn/" target="_blank">
            {" "}
            优慕课在线教育科技（北京）有限责任公司
          </a>{" "}
          技术支持（请使用1280*1024分辨率，Chrome/Firefox/Edge/IE11浏览器访问本系统）
        </div>
      </div>
    </div>
  );
};

export const Framework: Component<{ children: JSX.Element }> = ({
  children,
}) => {
  return (
    <div class="flex h-full min-h-screen flex-col">
      <Header />
      <div class="h-full w-full grow">{children}</div>
      <Footer />
    </div>
  );
};
