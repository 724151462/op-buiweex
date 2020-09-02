<template>
  <scroller style="background-color: #F8F8FB;">
    <component
      v-for="(item, index) of appInfoList"
      :key="index"
      v-bind="item.prop"
      v-on="item.event"
      :is="item.component"
    >
      <template v-if="item.slot">
        <div class v-html="item.slot"></div>
      </template>
    </component>
  </scroller>
</template>

<!--引入bui-weex样式文件-->
<style lang="scss" src="bui-weex/src/css/buiweex.scss"></style>

<script>
var globalEvent = weex.requireModule("globalEvent");
import stickyBtns from "../../components/sticky-btns";
import banner from "../../components/banner";
import appContent from "../../components/app-content";
import quickFun from "../../components/quick-fun";
import jingqing from "../../components/jingqing";
import news from "../../components/news";
import noticeNav from "../../components/notice-nav";
import linkapi from "linkapi";
module.exports = {
  data() {
    return {
      appInfoList: [],
      appConfig: [
        "banner",
        "stickyBtns",
        "appContent",
        "quickFun",
        "noticeNav",
        "jingqing",
        "news",
      ],
      prop: {
        noticeNav: {
          noticeList: [],
        },
        banner: {
          imageList: [],
        },
        appContent: {
          sourceData: [],
        },
        news: {},
        stickyBtns: {},
      },
    };
  },
  mounted() {
    globalEvent.addEventListener("androidback", (e) => {
      this.$pop();
    });
  },
  methods: {
    jump() {
      this.$toast(132);
      this.$push("/test");
    },
    getBannerList() {
      this.prop.banner.imageList = [
        { url: "/image/banner.png" },
        { url: "/image/banner.png" },
      ];
    },
    getAppList() {
      this.prop.appContent.sourceData = [
        {
          id: 1,
          name: "云课堂",
          icon: "m-ykt",
        },
        {
          id: 2,
          name: "移动OA",
          icon: "m-OA",
        },
        {
          id: 3,
          name: "邮件助手",
          icon: "m-yjzs",
        },
        {
          id: 4,
          name: "境外人员采集",
          icon: "m-jwry",
        },
        {
          id: 5,
          name: "移动交管",
          icon: "m-ydjg",
        },
        {
          id: 6,
          name: "线索采集",
          icon: "m-xscj",
        },
        {
          id: 7,
          name: "合成作战",
          icon: "m-hczz",
        },
        {
          id: 8,
          name: "全部",
          icon: "m-all",
        },
      ];
    },
    getNoticeList() {
      linkapi
        .post({ url: "http://192.168.7.151:8088/ldt/monitor/AlarmMonitor" })
        .then((res) => {
          this.$toast(res.data);
        })
        .catch((err) => {
          this.$toast("error" + err);
        });
      this.prop.noticeNav.noticeList = [
        {
          content: "aaa1",
        },
        {
          content: "bbb",
        },
      ];
    },
  },
  components: {
    stickyBtns,
    banner,
    appContent,
    quickFun,
    jingqing,
    news,
    noticeNav,
  },
  beforeMount() {
    this.appConfig.forEach((v) => {
      console.log(v);
      this.appInfoList.push({
        component: v,
        prop: this.prop[v],
        slot: "",
        // event: {
        // 	testClick: function () {
        // 		alert(1)
        // 	},
        // 	testClick1: function () {
        // 		alert(2)
        // 	},
        // }
      });
    });
    console.log(this.appInfoList);
  },
  mounted() {
    this.appInfoList.forEach((element) => {
      switch (element.component) {
        case "noticeNav":
          this.getNoticeList();
          break;
        case "banner":
          this.getBannerList();
        case "appContent":
          if (element.prop.title) {
            element.slot = `<div class="title-wrapper" >
                                <text class="title-count">${element.prop.title}</text>
                            </div>`;
          }
          this.getAppList();
          break;
        default:
          break;
      }
    });
  },
};
</script>
<style lang="scss">
</style>