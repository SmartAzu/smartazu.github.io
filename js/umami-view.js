// 从配置文件中获取 umami 的配置
const umamiCfg = CONFIG.web_analytics && CONFIG.web_analytics.umami;

// 如果未配置相关字段，则直接退出
if (!umamiCfg || !umamiCfg.website_id || !umamiCfg.api_server || !umamiCfg.token) {
  console.warn('Umami analytics config missing');
  // eslint-disable-next-line no-useless-return
  return;
}

// 拼接请求地址
const website_id = umamiCfg.website_id;
const request_url = `${umamiCfg.api_server}/websites/${website_id}/stats`;

const start_time = new Date(umamiCfg.start_time).getTime();
const end_time = new Date().getTime();
const token = umamiCfg.token;

// 构造请求参数
const params = new URLSearchParams({
  startAt: start_time,
  endAt: end_time,
});
// 构造请求头
const request_header = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-umami-api-key": "oZKCH3msvqt10VlXKwoJvHclmaS4bVx0",
  },
};

// 获取站点统计数据
async function siteStats() {
  try {
    const response = await fetch(`${request_url}?${params}`, request_header);
    const data = await response.json();
    const uniqueVisitors = data.uniques.value; // 获取独立访客数
    const pageViews = data.pageviews.value; // 获取页面浏览量

    let pvCtn = document.querySelector("#umami-site-pv-container");
    if (pvCtn) {
      let ele = document.querySelector("#umami-site-pv");
      if (ele) {
        ele.textContent = pageViews; // 设置页面浏览量
        pvCtn.style.display = "inline"; // 将元素显示出来
      }
    }

    let uvCtn = document.querySelector("#umami-site-uv-container");
    if (uvCtn) {
      let ele = document.querySelector("#umami-site-uv");
      if (ele) {
        ele.textContent = uniqueVisitors;
        uvCtn.style.display = "inline";
      }
    }
  } catch (error) {
    console.error(error);
    return "-1";
  }
}

// 获取页面浏览量
async function pageStats(path) {
  try {
    const response = await fetch(`${request_url}?${params}&url=${path}`, request_header);
    const data = await response.json();
    const pageViews = data.pageviews.value;

    let viewCtn = document.querySelector("#umami-page-views-container");
    if (viewCtn) {
      let ele = document.querySelector("#umami-page-views");
      if (ele) {
        ele.textContent = pageViews;
        viewCtn.style.display = "inline";
      }
    }
  } catch (error) {
    console.error(error);
    return "-1";
  }
}

siteStats();

// 获取页面容器
let viewCtn = document.querySelector("#umami-page-views-container");
// 如果页面容器存在，则获取页面浏览量
if (viewCtn) {
  let path = window.location.pathname;
  let target = decodeURI(path.replace(/\/*(index.html)?$/, "/"));
  pageStats(target);
}
