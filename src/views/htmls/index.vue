<template>
    <div class="page">
        <div class="m-navbar">
            <v-nav 
                :navDataList="navDataList"
                :navDataListHf="navDataListHf" />
        </div>
        <div class="m-banner-top">
            <img src="@/assets/img/hk/banner.png" alt="banner.png" class="img-box">
			<div class="m-banner-text">
                <Row type="flex" justify="center" align="middle" class="code-row-bg">
                    <Col :xs="24" :md="10" >
                        <div class="wow bounceInLeft">
                            <div class="img-box">
                                <img src="@/assets/img/hk/logo_lg.png" alt="banner.png" class="img">
                            </div>
                            <h4 class="font-h4" >{{$t('homePage_001')}}</h4>
                            <div class="v-ahover">
                                <!-- <a href="#" target="_blank" rel="" class="ahover">Chinese White paper</a> -->
                                <a href="https://woopay.app/woopay.pdf" target="_blank" rel="" class="ahover">English White paper</a>
                            </div>
                        </div>
                    </Col>
                </Row>
			</div>
        </div>
        <div class="m-introduce-box">
			<div class="m-iduce-text">
                <Row type="flex" justify="center" align="middle" class="code-row-bg">
                    <Col :xs="24" :lg="24" :xl="13" >
                        <div class="wow bounceInUp">
                            <h4 class="font-h4" >{{$t('homePage_002')}}</h4>
                            <div class="text-ct">
                                <img src="@/assets/img/hk/icon-iduce_ct.png" alt="banner.png" class="img">
                                <h4 class="font-h4">
                                    <p>{{$t('homePage_003')}}</p>
                                    <p style="padding-top: 15px;">{{$t('homePage_004')}}</p>
                                </h4>
                            </div>
                        </div>
                    </Col>
                </Row>
			</div>
        </div>
        <!-- 模块1 -->
        <div class="m-introduce-box m-repeat" id="CBLstd">
			<div class="v-container m-iduce-text">
                <Row type="flex" justify="space-between" class="code-row-bg">
					<h4 class="font-h4 font-title" >{{$t('homePage_005')}}</h4>
                    <Col :xs="24"  :lg="24" :xl="8" v-for="item in advantageData" :key='item.id' class="wow bounceInUp">
                        <div class="text-ct">
                            <img v-lazy="item.url" alt="banner.png" class="img">
                            <h4 class="font-h4">
                                <p>{{item.title}}</p>
                                <p>{{item.text}}</p>
                            </h4>
                        </div>
                    </Col>
                </Row>
			</div>
        </div>
        <!-- 模块2 -特点 -->
        <div class="m-introduce-box m-repeat m-ecology" id="TOPtrait">
			<div class="v-container m-iduce-text">
                <Row type="flex" justify="space-between" class="code-row-bg">
					<h4 class="font-h4 font-title" >{{$t('homePage_018')}}</h4>
                    <Col :xs="24"  :lg="24" :xl="8" v-for="item in ecologyData" :key='item.id' class="wow bounceInRight">
                        <div class="text-ct">
                            <div class="m-list">
                                <img :src="item.url" alt="banner.png" class="m-img">
                                <h4 class="font-h4">
                                    <p>{{item.title}}</p>
                                    <p>{{item.text}}</p>
                                </h4>
                            </div>
                        </div>
                    </Col>
                </Row>
			</div>
        </div>
        <!-- 模块3 -应用 -->
        <div class="m-introduce-box m-repeat">
			<div class="v-container m-iduce-text">
                <Row type="flex" justify="space-between" class="code-row-bg">
					<h4 class="font-h4 font-title" >{{$t('homePage_025')}}</h4>
                    <Col :xs="24" :lg="24" :xl="6" v-for="(item, index) in otherData" :key='index' class="wow bounceInLeft">
                        <div class="text-ct">
                            <img :src="item.url" alt="banner.png" class="img">
                            <h4 class="font-h4">
                                <p>{{item.title}}</p>
                                <p>{{item.text}}</p>
                            </h4>
                        </div>
                    </Col>
                </Row>
			</div>
        </div>
        <!-- 模块4 -体系 -->
        <div class="m-introduce-box m-repeat v-page-bgcolor v-introduce-size" id="CBLstd">
			<div class="v-container m-iduce-text">
                <Row type="flex" justify="space-between" class="code-row-bg">
					<h4 class="font-h4 font-title" >{{$t('homePage_034')}}</h4>
                    <Col :xs="24" :lg="24" :xl="6" v-for="item in advantageSizeData" :key='item.id' class="wow bounceInUp">
                        <div class="text-ct">
                            <img :src="item.url" alt="banner.png" class="img">
                            <h4 class="font-h4">
                                <p>{{item.title}}</p>
                                <p>{{item.text}}</p>
                            </h4>
                        </div>
                    </Col>
                </Row>
			</div>
        </div>
        <!-- 模块5 -发展计划 -->
        <div class="m-introduce-box m-repeat m-ecology m-apply" id="TOPdplan">
			<div class="m-iduce-text">
                <Row type="flex" justify="center" align="middle" class="code-row-bg" :gutter="30">
					<h4 class="font-h4 font-title" >{{$t('homePage_043')}}</h4>
                    <Col :xs="10" :lg="10" :xl="5" class="wow bounceInLeft">
                        <div class="text-ct">
                            <img src="@/assets/img/hk/icon-apply_lf.png" alt="banner.png" class="m-img">
                        </div>
                    </Col>
                    <Col :xs="24" :lg="24" :xl="9" class="wow bounceInRight">
                        <div class="text-ct">
					        <h4 class="font-h4" >{{$t('homePage_044')}}</h4>
                            <p class="font-text">{{$t('homePage_045')}}</p>
					        <h4 class="font-h4" >{{$t('homePage_046')}}</h4>
                            <p class="font-text">{{$t('homePage_047')}}</p>
                            <p class="font-text">{{$t('homePage_048')}}</p>
                            <p class="font-text">{{$t('homePage_049')}}</p>
                            <p class="font-text">{{$t('homePage_050')}}</p>
                            <p class="font-text">{{$t('homePage_051')}}</p>
					        <h4 class="font-h4" >{{$t('homePage_052')}}</h4>
                            <p class="font-text">{{$t('homePage_053')}}</p>
					        <h4 class="font-h4" >{{$t('homePage_054')}}</h4>
                            <p class="font-text">{{$t('homePage_055')}}</p>
                        </div>
                    </Col>
                </Row>
			</div>
        </div>
        <!-- 模块6 -->
        <div class="m-introduce-box m-repeat v-page-bgcolor v-introduce-size" id="CBLstd">
			<div class="v-container m-iduce-text">
                <Row type="flex" justify="space-between" class="code-row-bg">
					<h4 class="font-h4 font-title" >{{$t('homePage_056')}}</h4>
                    <Col :xs="24" :lg="24" :xl="6" v-for="item in sixSizeData" :key='item.id' class="wow bounceInUp">
                        <div class="text-ct">
                            <img :src="item.url" alt="banner.png" class="img">
                            <h4 class="font-h4">
                                <p>{{item.title}}</p>
                                <p>{{item.text}}</p>
                            </h4>
                        </div>
                    </Col>
                </Row>
			</div>
        </div>
        <!-- 模块7 -->
        <div class="m-introduce-box m-repeat" id="CBLsfz" ref="CBLstm">
			<div class="m-iduce-text">
                <Row type="flex" justify="center" align="middle" class="code-row-bg" :gutter="20">
					<h4 class="font-h4 font-title" >{{$t('homePage_065')}}</h4>
                    <Col :xs="24" :lg="20" :xl="10" class="wow bounceInUp">
                        <div class="text-ct">
                            <img src="@/assets/img/hk/banner-team.png" alt="banner.png" class="img-t" v-if="valLocale === 'zh-CN'">
                            <img src="@/assets/img/hk/banner-teamEn.png" alt="banner.png" class="img-t" v-else>
                        </div>
                    </Col>
                </Row>
			</div>
        </div>
        <!-- 模块8 -团队 -->
        <div class="m-introduce-box m-repeat m-ecology m-team" id="TOPteam">
			<div class="v-container m-iduce-text">
                <h4 class="font-h4 font-title" >{{$t('homePage_066')}}</h4>
                <p class="font-text">{{$t('homePage_067')}}</p>
                <Row type="flex" justify="space-between" class="code-row-bg">
                    <Col  :xs="24" :lg="24" :xl="8" v-for="item in teamData" :key='item.id' class="wow bounceInUp">
                        <div class="text-ct">
                            <div class="m-list">
                                <img v-lazy="item.url" alt="banner.png" class="m-img">
                                <h4 class="font-h4">
                                    <p>{{item.title}}</p>
                                    <p>{{item.text}}</p>
                                </h4>
                            </div>
                        </div>
                    </Col>
                </Row>
			</div>
        </div>
        <!-- 模块9 -->
        <!-- <div class="m-introduce-box m-repeat" id="CBLsfz" >
			<div class="m-iduce-text">
                <Row type="flex" justify="center" align="middle" class="code-row-bg" :gutter="20">
					<h4 class="font-h4 font-title" >{{$t('homePage_074')}}</h4>
                    <Col :xs="24" :lg="24" :xl="16" class="wow bounceInUp">
                        <div class="text-ct">
                            <img src="@/assets/img/hk/banner-max.png" alt="banner.png" class="img-t">
                        </div>
                    </Col>
                </Row>
			</div>
        </div> -->
        <!-- 模块9 -->
        <div class="m-introduce-box m-repeat" id="CBLsfz" ref="CBLstm">
			<div class="m-iduce-text">
                <Row type="flex" justify="center" align="middle" class="code-row-bg" :gutter="20">
					<h4 class="font-h4 font-title" >{{$t('homePage_082')}}</h4>
                    <Col :xs="24" :lg="20" :xl="10" class="wow bounceInUp">
                        <div class="text-ct">
                            <v-videoplayer />
                            <!-- <v-vueamap /> -->
                        </div>
                    </Col>
                </Row>
			</div>
        </div>
        <!-- 模块10 -新闻 -->
        <div class="m-introduce-box m-repeat v-news-box v-page-bgcolor" id="TOPnews">
			<div class="v-container m-iduce-text">
                <Row type="flex" justify="space-between" class="code-row-bg">
					<h4 class="font-h4 font-title" >{{$t('homePage_075')}}</h4>
                    <Col :xs="24" :lg="6" :xl="6" v-for="(item, index) in newsListData" :key='index' class="wow bounceInLeft">
                        <a class="text-ct v-text-main" href="#" target="_target">
                            <div class="v-img-box">
                                <img :src="item.url" alt="banner.png" class="v-img">
                            </div>
                            <h1 class="font-h1 ellipsis-xs">
                                {{item.title}}
                            </h1>
                        </a>
                    </Col>
                </Row>
			</div>
        </div>
    </div>
</template>

<script>
import { WOW } from 'wowjs'
import { setStore, getStore } from '@/common/localUtil'
import NavBar from "@/components/NavBar"
import videoPlayer from "@/components/videoPlayer/videoPlayer"
import vueAmap from "@/components/vueAmap/vueAmap"

export default {
    data() {
        return {
            valLocale: '',
            navDataList: [],
            navDataListHf: [
				{
					name: this.$t('naviGation_001'),
					herf: "/",
				},
				{
					name: this.$t('naviGation_002'),
					herf: "#TOPtrait"
				},
				{
					name: this.$t('naviGation_003'),
					herf: "#TOPdplan"
				},
				{
					name: this.$t('naviGation_004'),
					herf: "#TOPteam"
				},
				{
					name: this.$t('naviGation_005'),
					herf: "#TOPnews"
				}
            ],
            advantageData: [
                {
                    id: 1,
                    url: require('@/assets/img/hk/icon-ad_1.png'),
                    title: this.$t('homePage_006'),
                    text: this.$t('homePage_007')
                },
                {
                    id: 2,
                    url: require('@/assets/img/hk/icon-ad_2.png'),
                    title: this.$t('homePage_008'),
                    text: this.$t('homePage_009')
                },
                {
                    id: 3,
                    url: require('@/assets/img/hk/icon-ad_3.png'),
                    title: this.$t('homePage_010'),
                    text: this.$t('homePage_011')
                },
                {
                    id: 4,
                    url: require('@/assets/img/hk/icon-ad_4.png'),
                    title: this.$t('homePage_012'),
                    text: this.$t('homePage_013')
                },
                {
                    id: 5,
                    url: require('@/assets/img/hk/icon-ad_4.png'),
                    title: this.$t('homePage_014'),
                    text: this.$t('homePage_015')
                },
                {
                    id: 6,
                    url: require('@/assets/img/hk/icon-ad_4.png'),
                    title: this.$t('homePage_016'),
                    text: this.$t('homePage_017')
                }
            ],
            ecologyData: [
                {
                    id: 1,
                    url: require('@/assets/img/hk/icon-ecology_2.png'),
                    title: this.$t('homePage_019'),
                    text: this.$t('homePage_020')
                },
                {
                    id: 2,
                    url: require('@/assets/img/hk/icon-ecology_1.png'),
                    title: this.$t('homePage_021'),
                    text: this.$t('homePage_022')
                },
                {
                    id: 3,
                    url: require('@/assets/img/hk/icon-ecology_2.png'),
                    title: this.$t('homePage_023'),
                    text: this.$t('homePage_024')
                },
            ],
            otherData: [
                {
                    id: 1,
                    url: require('@/assets/img/hk/icon-other_1.png'),
                    title: this.$t('homePage_026'),
                    text: this.$t('homePage_027')
                },
                {
                    id: 2,
                    url: require('@/assets/img/hk/icon-other_2.png'),
                    title: this.$t('homePage_028'),
                    text: this.$t('homePage_029')
                },
                {
                    id: 3,
                    url: require('@/assets/img/hk/icon-other_3.png'),
                    title: this.$t('homePage_030'),
                    text: this.$t('homePage_031')
                },
                {
                    id: 4,
                    url: require('@/assets/img/hk/icon-other_4.png'),
                    title: this.$t('homePage_032'),
                    text: this.$t('homePage_033')
                }
            ],
            advantageSizeData: [
                {
                    id: 1,
                    url: require('@/assets/img/hk/icon-ad_1.png'),
                    title: this.$t('homePage_035'),
                    text: this.$t('homePage_036')
                },
                {
                    id: 2,
                    url: require('@/assets/img/hk/icon-ad_2.png'),
                    title: this.$t('homePage_037'),
                    text: this.$t('homePage_038')
                },
                {
                    id: 3,
                    url: require('@/assets/img/hk/icon-ad_3.png'),
                    title: this.$t('homePage_039'),
                    text: this.$t('homePage_040')
                },
                {
                    id: 4,
                    url: require('@/assets/img/hk/icon-ad_4.png'),
                    title: this.$t('homePage_041'),
                    text: this.$t('homePage_042')
                },
            ],
            sixSizeData: [
                {
                    id: 1,
                    url: require('@/assets/img/hk/icon-ad_1.png'),
                    title: this.$t('homePage_057'),
                    text: this.$t('homePage_058')
                },
                {
                    id: 2,
                    url: require('@/assets/img/hk/icon-ad_2.png'),
                    title: this.$t('homePage_059'),
                    text: this.$t('homePage_060')
                },
                {
                    id: 3,
                    url: require('@/assets/img/hk/icon-ad_3.png'),
                    title: this.$t('homePage_061'),
                    text: this.$t('homePage_062')
                },
                {
                    id: 4,
                    url: require('@/assets/img/hk/icon-ad_4.png'),
                    title: this.$t('homePage_063'),
                    text: this.$t('homePage_064')
                }
            ],
            teamData: [
                {
                    id: 1,
                    url: require('@/assets/img/hk/icon-team_1.png'),
                    title: this.$t('homePage_068'),
                    text: this.$t('homePage_069')
                },
                {
                    id: 2,
                    url: require('@/assets/img/hk/icon-team_2.png'),
                    title: this.$t('homePage_070'),
                    text: this.$t('homePage_071')
                },
                {
                    id: 3,
                    url: require('@/assets/img/hk/icon-team_3.png'),
                    title: this.$t('homePage_072'),
                    text: this.$t('homePage_073')
                },
                {
                    id: 4,
                    url: require('@/assets/img/hk/icon-team_4.png'),
                    title: this.$t('homePage_076'),
                    text: this.$t('homePage_077')
                },
                {
                    id: 5,
                    url: require('@/assets/img/hk/icon-team_5.png'),
                    title: this.$t('homePage_078'),
                    text: this.$t('homePage_079')
                },
                {
                    id: 6,
                    url: require('@/assets/img/hk/icon-team_6.png'),
                    title: this.$t('homePage_080'),
                    text: this.$t('homePage_081')
                }
            ],
            newsListData: [
                {
                    id: 1,
                    url: require('@/assets/img/hk/logo.png'),
                    title: this.$t('homePage_026'),
                    text: this.$t('homePage_027')
                },
                {
                    id: 2,
                    url: require('@/assets/img/hk/logo.png'),
                    title: this.$t('homePage_028'),
                    text: this.$t('homePage_029')
                },
                {
                    id: 3,
                    url: require('@/assets/img/hk/logo.png'),
                    title: this.$t('homePage_030'),
                    text: this.$t('homePage_031')
                },
                {
                    id: 4,
                    url: require('@/assets/img/hk/logo.png'),
                    title: this.$t('homePage_032'),
                    text: this.$t('homePage_033')
                },
                {
                    id: 5,
                    url: require('@/assets/img/hk/logo.png'),
                    title: this.$t('homePage_032'),
                    text: this.$t('homePage_033')
                },
                {
                    id: 6,
                    url: require('@/assets/img/hk/logo.png'),
                    title: this.$t('homePage_032'),
                    text: this.$t('homePage_033')
                },
                {
                    id: 7,
                    url: require('@/assets/img/hk/logo.png'),
                    title: this.$t('homePage_032'),
                    text: this.$t('homePage_033')
                },
                {
                    id: 8,
                    url: require('@/assets/img/hk/logo.png'),
                    title: this.$t('homePage_032'),
                    text: this.$t('homePage_033')
                }
            ]
        }
    },
    components: {
		'v-nav': NavBar,
		'v-videoplayer': videoPlayer,
		'v-vueamap': vueAmap
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        menuScroll() {
            let _that=this;
        },
		onHomeLocale() {
			let that = this
			let name = getStore('localeCut')
			if (name) {
				that.valLocale = name
			}
			// console.log(name);
		}
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        window.addEventListener('scroll', this.menuScroll);
		let wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true
		})
        wow.init()
        this.onHomeLocale()
    },
}
</script>

<style lang="scss" scoped>
/*
 * @import url(); 引入公共css类
 */
.v-page-bgcolor {background-color: #f9f9f9 !important;}
.m-navbar {
    /deep/.nav-box .nav-content {
        box-shadow: 0 4px 6px #222;
        background-color: #101010;
    }
}
.m-banner-top {
    position: relative;
    padding-top: 60px;
    .v-ahover {
        .ahover {
            position: relative;
            z-index: 9;
            display: block;
            margin: 30px auto 0;
            text-align: center;
            padding: 10px 15px;
            font-size: 16px;
            color: #333 !important;
            &::before {
                content: ' ';
                z-index: -1;
                position: absolute;
                left: 50%;
                top: 0;
                bottom: 0;
                transform: translateX(-50%);
                display: block;
                width: 200px;
                border-radius: 50px;
                box-shadow: 0 4px 6px #999;
                overflow: hidden;
                background-color: #fff;
            }
        }
    }
    .m-banner-text {
        width: 100%;
        @include tb;
        .img-box, .font-h4 {
            padding: 10px 0;
            text-align: center;
        }
        .font-h4 {
            font-size: 24px;
            font-weight: bold;
            color: #fff;
        }
    }
}
.m-introduce-box {
    padding: 70px 0;
    color: #fff;
    background-color: #1c1d36;
    .m-iduce-text {
        padding: 0 20px;
        .font-h4 {
            padding-bottom: 20px;
            font-size: 32px;
            text-align: center;
        }
        .text-ct {
            position: relative;
            padding: 80px 0 30px;
            margin: 0 15px;
            .font-h4 {
                min-height: 235px;
                padding: 60px 100px;
                font-size: 16px;
                border-radius: 10px;
                box-shadow: 5px 5px 2px rgba(137, 141, 169, .2);
                color: #333;
                background-color: #fff;
            }
            .img {
                top: 40px;
                width: 70px;
                height: 75px;
                @include lr;
            }
        }
    }
}
// 模块1
.m-repeat {
    color: #333;
    background-color: #fff;
    .m-iduce-text {
        .font-title {
            width: 100%;
            font-weight: bold;
        }
        .text-ct {
            .font-h4 {
                min-height: 272px;
                padding: 60px 20px;
                font-size: 12px;
                box-shadow: 0 4px 6px rgba(137, 141, 169, .2);
                color: #999;
                p {
                    padding: 10px 0;
                    &:nth-child(1) {
                        font-size: 14px;
                        font-weight: bold;
                        color: #333;
                    }
                }
            }
        }
    }
}
.v-introduce-size .m-iduce-text .text-ct .font-h4 {
    min-height: 308px;
}
.m-ecology {
    color: #fff;
    background-color: #1c1d36;
    .m-iduce-text {
        .text-ct {
            padding: 80px 0 30px;
            .m-list {
                padding: 20px;
                border-radius: 10px;
                text-align: left;
                background-color: #fff;
            }
            .font-h4 {
                min-height: 180px;
                padding: 10px 0;
                border-radius: 10px;
                box-shadow: none;
                text-align: left;
            }
            .m-img {
                width: 50px;
                height: 50px;
            }
        }
    }
}
// 模块5
.m-apply {
    .m-iduce-text {
        .text-ct {
            font-size: 14px;
            padding-left: 15px;
            padding-right: 15px;
            .m-img {
                width: 100%;
                height: auto;
            }
            .font-h4 {
                min-height: auto;
                padding: 5px 15px;
                font-size: 18px;
                font-weight: bold;
                color: #fff;
                background-color: transparent;
            }
            .font-text {
                padding: 5px 15px 0;
                color: #888;
            }
        }
    }
}
.m-team {
    .m-iduce-text {
        margin: auto;
        .font-text {
            max-width: 700px;
            margin: auto;
            padding: 15px;
            font-size: 14px;
            text-align: center;
            white-space:pre-wrap;
            word-wrap:break-word;
        }
        .text-ct {
            .m-img {
                display: block;
                width: 140px;
                height: 140px;
                margin: auto;
            }
            .font-h4 {
                min-height: 208px;
                text-align: center;
                p {
                    color: #999;
                    &:nth-child(1) {
                        color: $color-body-c;
                    }
                }
            }
        }
    }
}
.v-news-box {
    .m-iduce-text {
        margin: auto;
        .font-title {padding-bottom: 50px;}
        .text-ct {
            display: block;
            padding: 15px;
            margin-top: 30px;
            background-color: #fff;
            .v-img-box {
                display: block;
                width: auto;
                height: 140px;
                margin: auto;
                overflow: hidden;
                text-align: center;
            }
            .font-h1 {
                min-height: auto;
                padding-top: 15px;
                font-size: 20px;
                color: #666;
                text-align: center;
            }
        }
    }

}
//小于1024
@media only screen and (max-width: 1024px) {
    .m-banner-top {
        > .img-box {height: 340px;object-fit: cover;}
        .m-banner-text .img-box {
            width: 150px;
            margin: auto;
        }
        .m-banner-text .font-h4 {font-size: 18px;}
    }
    .m-team {
        .m-iduce-text {
            width: 100%;
            margin: auto;
        }
    }
    .m-introduce-box {
        .m-iduce-text .text-ct {
            margin: 15px auto;
            .font-h4 {
                padding-left: 15px;
                padding-right: 15px;
            }
        }

    }
}
</style>