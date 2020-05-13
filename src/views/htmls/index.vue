<template>
    <div class="page">
        <div class="v-navbar">
            <v-nav 
                :navDataList="navDataList"
                :navDataListHf="navDataListHf" />
        </div>
        <div class="v-mian-box">
            <div class="v-banner-top">
                <div class="v-img-box">
                    <img :src="bannerTop" alt="banner.jpg" class="v-img">
                </div>
                <div class="v-text-box">
                    <div class="v-container">
                        <Row>
                            <Col :xs="24" :md="24" :lg="24" :xl="12">
                                <h2 class="v-h2">{{$t('homePage_001')}}</h2>
                                <h2 class="v-h2">{{$t('homePage_002')}}</h2>
                                <div class="v-ahover">
                                    <a href="http://d.firim.ink/pau6" class="v-href up-shaking" target="_target">
                                        <img src="@/assets/img/hk/android.png" alt="icon.jpg" class="v-img">
                                    </a>
                                    <a href="http://d.firim.ink/ew96" class="v-href" target="_target">
                                        <img src="@/assets/img/hk/ios.png" alt="icon.jpg" class="v-img">
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div class="v-item-container" :style="{backgroundImage: 'url(' + imgBg + ')'}">
                <!-- 介绍 video -->
                <div class="v-video-box">
                    <div class="v-container">
                        <Row type="flex" justify="space-between" class="code-row-bg" :gutter="30">
                            <Col :xs="24" :md="14" :lg="14" :xl="14">
                                <div class="v-item-box">
                                    <h3 class="v-h3-max color-ft-gy">- introduce</h3>
                                    <div class="v-icon-box">
                                        <img src="@/assets/img/hk/logo-min.png" alt="icon.png" class="v-img">
                                        <p class="v-text">{{$t('homePage_003')}}</p>
                                    </div>
                                    <h4 class="v-h4">
                                        {{$t('homePage_004')}}
                                    </h4>
                                </div>
                            </Col>
                            <Col :xs="24" :md="10" :lg="10" :xl="10">
                                <v-videoplayer />
                            </Col>
                            <Col :xs="24" :md="8" :lg="8" :xl="6" v-for="item in videoData" :key="item.id">
                                <div class="v-item-list">
                                    <div class="v-img-box">
                                        <img v-lazy="item.url" alt="icon.png" class="v-img">
                                    </div>
                                    <div class="v-text-box">
                                        <h3 class="v-h3">{{item.title}}</h3>
                                        <p class="v-text">{{item.text}}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <!-- 优势特点 advantages -->
                <div class="v-advantages-box">
                    <div class="v-container">
                        <Row type="flex" justify="space-between" class="code-row-bg" :gutter="30">
                            <Col :xs="24" :md="7" :lg="6" :xl="5">
                                <div class="v-item-box">
                                    <h3 class="v-h3-max color-ft-gy">- advantage</h3>
                                    <div class="v-icon-box">
                                        <img src="@/assets/img/hk/logo-min.png" alt="icon.png" class="v-img">
                                        <p class="v-text">{{$t('homePage_011')}}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col :xs="24" :md="7" :lg="6" :xl="5">
                                <div class="v-item-list">
                                    <div class="v-img-box">
                                        <img v-lazy="require('@/assets/img/hk/i-advantages-1.png')" alt="icon.png" class="v-img">
                                    </div>
                                    <div class="v-text-box">
                                        <h3 class="v-h3">{{$t('homePage_012')}}</h3>
                                        <p class="v-text">{{$t('homePage_013')}}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col :xs="24" :md="7" :lg="6" :xl="5">
                                <div class="v-item-list">
                                    <div class="v-img-box">
                                        <img v-lazy="require('@/assets/img/hk/i-advantages-2.png')" alt="icon.png" class="v-img">
                                    </div>
                                    <div class="v-text-box">
                                        <h3 class="v-h3">{{$t('homePage_014')}}</h3>
                                        <p class="v-text">{{$t('homePage_015')}}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row type="flex" justify="space-between" class="code-row-bg" :gutter="30">
                            <Col :xs="24" :md="7" :lg="6" :xl="5" v-for="item in advantagesData" :key="item.id">
                                <div class="v-item-list">
                                    <div class="v-img-box">
                                        <img :src="item.url" alt="icon.png" class="v-img">
                                    </div>
                                    <div class="v-text-box">
                                        <h3 class="v-h3">{{item.title}}</h3>
                                        <p class="v-text">{{item.text}}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <!-- 共识 consensus -->
                <div class="v-consensus-box">
                    <div class="v-container">
                        <Row type="flex" justify="space-between" class="code-row-bg" :gutter="30">
                            <Col :xs="24" :md="10" :lg="10" :xl="10">
                                <div class="v-img-lf">
                                    <img v-lazy="require('@/assets/img/hk/i-consensus.png')" alt="icon.png" class="v-img">
                                </div>
                            </Col>
                            <Col :xs="24" :md="13" :lg="12" :xl="10">
                                <div class="v-item-box">
                                    <div class="v-img-box">
                                        <img src="@/assets/img/hk/i-consensus-1.png" alt="icon.png" class="v-img">
                                    </div>
                                    <div class="v-text-box">
                                        <h3 class="v-h3">{{$t('homePage_022')}}</h3>
                                        <p class="v-text">{{$t('homePage_023')}}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div class="v-consensus-box">
                    <div class="v-container">
                        <Row type="flex" justify="space-between" class="code-row-bg" :gutter="30">
                            <Col :xs="24" :md="13" :lg="12" :xl="10">
                                <div class="v-item-box">
                                    <div class="v-img-box">
                                        <img src="@/assets/img/hk/i-help-1.png" alt="icon.png" class="v-img">
                                    </div>
                                    <div class="v-text-box">
                                        <h3 class="v-h3">{{$t('homePage_022')}}</h3>
                                        <p class="v-text">{{$t('homePage_023')}}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col :xs="24" :md="10" :lg="10" :xl="10">
                                <div class="v-img-lf">
                                    <img v-lazy="require('@/assets/img/hk/i-help.png')" alt="icon.png" class="v-img">
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <!-- 特点 -->
            <div class="v-technical-box">
                <div class="v-container">
                    <Row type="flex" justify="space-between" class="code-row-bg" :gutter="30">
                        <Col :xs="24" :md="10" :lg="10" :xl="10">
                            <div class="v-item-box">
                                <h3 class="v-h3-max color-ft-gy">- introduce</h3>
                                <div class="v-icon-box">
                                    <img src="@/assets/img/hk/logo-min.png" alt="icon.png" class="v-img">
                                    <p class="v-text">{{$t('homePage_026')}}</p>
                                </div>
                                <h4 class="v-h4" style="">
                                    {{$t('homePage_027')}}
                                </h4>
                            </div>
                        </Col>
                        <Col :xs="24" :md="13" :lg="13" :xl="8" class-name="v-technical-abs">
                            <div class="v-technical-list">
                                <div class="v-item">
                                    <img src="@/assets/img/hk/i-technical-1.png" alt="icon.png" class="v-img">
                                    <p class="v-text">
                                        {{$t('homePage_028')}}
                                    </p>
                                </div>
                                <div class="v-item">
                                    <img src="@/assets/img/hk/i-technical-2.png" alt="icon.png" class="v-img">
                                    <p class="v-text">
                                        {{$t('homePage_029')}}
                                    </p>
                                </div>
                                <div class="v-item">
                                    <img src="@/assets/img/hk/i-technical-3.png" alt="icon.png" class="v-img">
                                    <p class="v-text">
                                        {{$t('homePage_030')}}
                                    </p>
                                </div>
                                <div class="v-item">
                                    <img src="@/assets/img/hk/i-technical-4.png" alt="icon.png" class="v-img">
                                    <p class="v-text">
                                        {{$t('homePage_031')}}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <!-- 团队介绍 -->
            <div class="v-about-box">
                <div class="v-container">
                    <Row type="flex" justify="space-between" class="code-row-bg" :gutter="30">
                        <Col :xs="24" :md="8" :lg="8" :xl="7">
                            <div class="v-item-box effect">
                                <div class="v-img-box">
                                    <img v-lazy="require('@/assets/img/hk/i-about-1.png')" alt="icon.png" class="v-img">
                                </div>
                                <h2 class="v-h2">{{$t('homePage_032')}}</h2>
                            </div>
                        </Col>
                        <Col :xs="24" :md="8" :lg="8" :xl="7">
                            <div class="v-item-box">
                                <div class="v-img-box">
                                    <img v-lazy="require('@/assets/img/hk/i-about-2.png')" alt="icon.png" class="v-img">
                                </div>
                                <div class="v-text-box">
                                    <h3 class="v-title">{{$t('homePage_033')}}</h3>
                                    <h3 class="v-title">{{$t('homePage_034')}}</h3>
                                    <p class="v-text">{{$t('homePage_035')}}</p>
                                </div>
                            </div>
                        </Col>
                        <Col :xs="24" :md="8" :lg="8" :xl="7">
                            <div class="v-item-box">
                                <div class="v-img-box">
                                    <img v-lazy="require('@/assets/img/hk/i-about-3.png')" alt="icon.png" class="v-img">
                                </div>
                                <div class="v-text-box">
                                    <h3 class="v-title">{{$t('homePage_036')}}</h3>
                                    <h3 class="v-title">{{$t('homePage_037')}}</h3>
                                    <p class="v-text">{{$t('homePage_038')}}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="space-between" class="code-row-bg" :gutter="30">
                        <Col :xs="24" :md="8" :lg="8" :xl="7" v-for="item in aboutData" :key="item.id">
                            <div class="v-item-box">
                                <div class="v-img-box">
                                    <img v-lazy="item.url" alt="icon.png" class="v-img">
                                </div>
                                <div class="v-text-box">
                                    <h3 class="v-title">{{item.name}}</h3>
                                    <h3 class="v-title">{{item.title}}</h3>
                                    <p class="v-text">{{item.text}}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div class="v-plan-box" :style="{backgroundImage: 'url(' + imgPlanBg + ')'}">
                <div class="v-container">
                    <Row type="flex" justify="space-between" class="code-row-bg" :gutter="30">
                        <Col :xs="24" :md="10" :lg="10" :xl="10">
                            <div class="v-item-box">
                                <h3 class="v-h3-max color-ft-gy">- The development of</h3>
                                <div class="v-icon-box">
                                    <img src="@/assets/img/hk/logo-min.png" alt="icon.png" class="v-img">
                                    <p class="v-text">{{$t('homePage_048')}}</p>
                                </div>
                            </div>
                        </Col>
                        <Col :xs="24" :md="24" :lg="24" :xl="24">
                            <div class="v-swiper">
                                <swiper :options="swiperOption">
                                　　<swiper-slide v-for="item in swiperData" :key="item.id">
                                        <img :src="item.url" alt="icon.png" class="v-img">
                                        <p class="v-text">{{item.text}}</p>
                                    </swiper-slide>
                                　　 <div class="swiper-pagination" slot="pagination"></div>
                                </swiper>
                                <img src="@/assets/img/hk/i-plan.png" alt="icon.png" class="v-img-ft" >
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
        <!-- 页脚 -->
        <div class="v-footer-box">
            <div class="v-footer-top" :style="{backgroundImage: 'url(' + imgFooterBg + ')'}">
                <h3 class="v-title">{{$t('homePage_049')}}</h3>
                <div class="v-cooperate-box">
                    <div class="v-container">
                        <Row type="flex" justify="center" class="code-row-bg">
                            <Col :xs="24" :md="20" :lg="20" :xl="20">
                                <div class="v-item-box">
                                    <p class="v-text">{{$t('homePage_050')}}</p>
                                    <div class="v-img-box">
                                        <div class="v-img-list" v-for="item in copteFooterData" :key="item.id">
                                            <img :src="item.url" alt="icon.png" class="v-img">
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div class="v-footer-ft">
                <div class="v-container">
                    <Row type="flex" justify="center" class="code-row-bg" :gutter="30">
                        <Col :xs="24" :md="20" :lg="20" :xl="20">
                            <div class="v-icon-box">
                                <img src="@/assets/img/hk/logo-white.png" alt="icon.png" class="v-img">
                            </div>
                            <div class="v-item-list">
                                <div class="v-text">
                                    <a href="" class="v-ahover">{{$t('naviGation_001')}}</a>
                                </div>
                                <div class="v-text">
                                    <a href="" class="v-ahover">{{$t('naviGation_002')}}</a>
                                </div>
                                <div class="v-text">
                                    <a href="" class="v-ahover">{{$t('naviGation_003')}}</a>
                                </div>
                                <div class="v-text">
                                    <a href="" class="v-ahover">{{$t('naviGation_004')}}</a>
                                </div>
                            </div>
                            <p class="v-item-time">@2020 nai-china.net</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { WOW } from 'wowjs';
import { setStore, getStore } from '@/common/localUtil';
import NavBar from "@/components/NavBar";
import videoPlayer from "@/components/videoPlayer/videoPlayer";
import vueAmap from "@/components/vueAmap/vueAmap";

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
					herf: "#advantages"
				},
				{
					name: this.$t('naviGation_003'),
					herf: "#technical"
				},
				{
					name: this.$t('naviGation_004'),
					herf: "#about"
				}
            ],
            bannerTop: require('@/assets/img/hk/i-banner-top.png'),
            imgBg: require('@/assets/img/hk/i-banner-maxbg.png'),
            videoData: [
                {
                    id: 1,
                    url: require('@/assets/img/hk/i-base.png'),
                    title: this.$t('homePage_005'),
                    text: this.$t('homePage_006')
                },
                {
                    id: 2,
                    url: require('@/assets/img/hk/i-base-1.png'),
                    title: this.$t('homePage_007'),
                    text: this.$t('homePage_008')
                },
                {
                    id: 3,
                    url: require('@/assets/img/hk/i-base-2.png'),
                    title: this.$t('homePage_009'),
                    text: this.$t('homePage_010')
                }
            ],
            advantagesData: [
                {
                    id: 1,
                    url: require('@/assets/img/hk/i-advantages-3.png'),
                    title: this.$t('homePage_016'),
                    text: this.$t('homePage_017')
                },
                {
                    id: 2,
                    url: require('@/assets/img/hk/i-advantages-4.png'),
                    title: this.$t('homePage_018'),
                    text: this.$t('homePage_019')
                },
                {
                    id: 3,
                    url: require('@/assets/img/hk/i-advantages-5.png'),
                    title: this.$t('homePage_020'),
                    text: this.$t('homePage_021')
                }
            ],
            aboutData: [
                {
                    id: 1,
                    url: require('@/assets/img/hk/i-about-3.png'),
                    name: this.$t('homePage_039'),
                    title: this.$t('homePage_040'),
                    text: this.$t('homePage_041')
                },
                {
                    id: 2,
                    url: require('@/assets/img/hk/i-about-4.png'),
                    name: this.$t('homePage_042'),
                    title: this.$t('homePage_043'),
                    text: this.$t('homePage_044')
                },
                {
                    id: 3,
                    url: require('@/assets/img/hk/i-about-5.png'),
                    name: this.$t('homePage_045'),
                    title: this.$t('homePage_046'),
                    text: this.$t('homePage_047')
                }
            ],
            imgFooterBg: require('@/assets/img/hk/i-footer-bg.png'),
            copteFooterData: [
                {
                    id: 1,
                    url: require('@/assets/img/hk/i-footer-1.png')
                },
                {
                    id: 2,
                    url: require('@/assets/img/hk/i-footer-2.png')
                },
                {
                    id: 3,
                    url: require('@/assets/img/hk/i-footer-3.png')
                },
                {
                    id: 4,
                    url: require('@/assets/img/hk/i-footer-4.png')
                },
                {
                    id: 5,
                    url: require('@/assets/img/hk/i-footer-5.png')
                },
                {
                    id: 6,
                    url: require('@/assets/img/hk/i-footer-6.png')
                },
                {
                    id: 7,
                    url: require('@/assets/img/hk/i-footer-7.png')
                },
                {
                    id: 8,
                    url: require('@/assets/img/hk/i-footer-8.png')
                }
            ],
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
            　　pagination: {
            　　　　el: '.swiper-pagination',
            　　　　clickable: true // 允许点击小圆点跳转
            　　},
                breakpoints: { 
                    //当宽度大于等于320
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    //当宽度大于等于480
                    480: { 
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1020: { 
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            },
            swiperData: [
                {
                    id: 1,
                    url: require('@/assets/img/hk/i-slide-1.png'),
                    text: this.$t('homePage_051')
                },
                {
                    id: 2,
                    url: require('@/assets/img/hk/i-slide-2.png'),
                    text: this.$t('homePage_052')
                },
                {
                    id: 3,
                    url: require('@/assets/img/hk/i-slide-3.png'),
                    text: this.$t('homePage_053')
                },
                {
                    id: 4,
                    url: require('@/assets/img/hk/i-slide-4.png'),
                    text: this.$t('homePage_054')
                },
                {
                    id: 5,
                    url: require('@/assets/img/hk/i-slide-5.png'),
                    text: this.$t('homePage_055')
                },
                {
                    id: 6,
                    url: require('@/assets/img/hk/i-slide-6.png'),
                    text: this.$t('homePage_056')
                },
                {
                    id: 7,
                    url: require('@/assets/img/hk/i-slide-7.png'),
                    text: this.$t('homePage_057')
                },
                {
                    id: 8,
                    url: require('@/assets/img/hk/i-slide-8.png'),
                    text: this.$t('homePage_058')
                },
                {
                    id: 9,
                    url: require('@/assets/img/hk/i-slide-7.png'),
                    text: this.$t('homePage_059')
                },
                {
                    id: 10,
                    url: require('@/assets/img/hk/i-slide-8.png'),
                    text: this.$t('homePage_060')
                }
            ],
            imgPlanBg: require('@/assets/img/hk/i-plan-bg.png')
        }
    },
    components: {
		'v-nav': NavBar,
		'v-videoplayer': videoPlayer
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
			let _that = this
			let name = getStore('localeCut')
			if (name) {
				_that.valLocale = name
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
/** @import url(); 引入公共css类*/
.v-page-bgcolor {background-color: #f9f9f9 !important;}
/deep/.swiper-container {
    height: 270px;
    .swiper-slide {
        position: relative;
        cursor: pointer; 
        transition: all .3s linear; 
        transform: scale(.8);
        .v-text {
            position: absolute;
            top: 100px;
            left: 50%;
            width: 280px;
            text-align: center;
            font-size: 14px;
            transform: translateX(-50%);
        }
        &:nth-child(odd) .v-text {
            color: #fff;
        }
        &:nth-child(even) .v-text {
            color: $color-body-c;
        }
    }
    .swiper-slide-active {transform: scale(1);}
}
/deep/.swiper-pagination-bullet-active {background: $color-body-c;}

.page {
    .v-navbar {
        padding-bottom: 75px;
    }
    .v-mian-box {
        .v-h3-max {
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 3px;
        }
        .v-icon-box {
            margin: 15px 0 30px 0;
            font-size: 0;
            .v-img, .v-text {
                display: inline-block;
                vertical-align: middle;
                font-size: 18px;
                font-weight: bold;
                line-height: 1;
            }
            .v-img {
                width: 50px;
                height: 50px;
            }
            .v-text {
                padding: 10px 25px;
                margin: 0 10px;
                border-radius: 50px;
                color: #fff;
                box-shadow: 0 5px 8px rgba(0, 199, 117, .3);
                background-color: $color-body-c;
            }
        }
        .v-banner-top {
            position: relative;
            .v-img-box {
                line-height: 0;
                .v-img {
                    min-height: 400px;
                }
            }
            .v-text-box {
                position: absolute;
                top: 22%;
                left: 0;
                right: 0;
                .v-h2 {
                    padding-bottom: 10px;
                    font-size: 36px;
                    color: $color-body-c;
                }
                .v-ahover {
                    font-size: 0;
                    .v-href {
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 30px;
                        margin-top: 50px;
                        line-height: 0;
                        border-radius: 5px;
                        transition: all .3s linear;
                        &:nth-child(1) {
                            box-shadow: 0 5px 8px rgba(102, 181, 155, .4);
                        }
                        &:nth-child(2):hover {
                            box-shadow: 0 5px 8px rgba(202, 200, 200, 0.4);
                        }
                        &:hover {
                            transform: translateY(5px);
                        }
                        .v-img {
                            width: 170px;
                        }
                    }
                }
            }
        }
        .v-item-container {
            min-height: 400px;
            background-size: 100% auto;
            background-repeat: no-repeat;
            background-position-y: 160px;
            background-color: #fff;
            .v-video-box {
                padding: 50px 0;
                .v-item-box {
                    .v-h4 {
                        padding: 5px 200px 15px 0;
                        font-size: 16px;
                        color: $color-gray-bg;
                    }
                }
                /deep/.video-player-box {
                    overflow: hidden;
                    border-radius: 15px;
                }
                .v-item-list {
                    margin-top: 100px;
                    overflow: hidden;
                    border-radius: 20px;
                    box-shadow: 0 8px 10px rgba(196, 217, 237, 0.41);
                    background-color: #fff;
                    transition: all .3s linear;
                    &:hover {
                        transform: translateY(10px);
                        .v-img {
                            animation: scaleDraw 4s ease-in-out infinite;
                        }
                    }
                    .v-img-box {
                        position: relative;
                        height: 168px;
                        line-height: 0;
                        overflow: hidden;
                        background-color: #ddd;
                        .v-img {
                            @include ct();
                            width: 100%;
                            height: auto;
                        }
                    }
                    .v-text-box {
                        padding: 15px;
                        .v-h3 {
                            padding: 5px 0 15px 0;
                            text-align: center;
                            font-size: 18px;
                            font-weight: bold;
                            color: #66b59b;
                        }
                        .v-text {
                            min-height: 105px;
                            color: $color-gray-bg;
                        }
                    }
                }
            }
            .v-advantages-box {
                padding: 60px 0;
                .v-item-list {
                    margin-bottom: 40px;
                    &:hover {
                        .v-text-box .v-h3 {
                            transform: translateX(35%);
                            &::after {
                                width: 50%;
                            }
                        }
                    }
                    .v-img-box {
                        line-height: 0;
                        .v-img {
                            display: block;
                            width: 60px;
                            height: 60px;
                        }
                    }
                    .v-text-box {
                        min-height: 200px;
                        padding: 10px 0;
                        color: $color-gray-bg;
                        .v-h3 {
                            position: relative;
                            padding: 5px 0 15px;
                            font-size: 18px;
                            font-weight: bold;
                            color: #333;
                            transition: all .8s ease-in-out;
                            &::after {
                                content: ' ';
                                position: absolute;
                                left: 0;
                                display: block;
                                width: 40px;
                                height: 8px;
                                border-bottom: 2px solid $color-body-c;
                                transition: all .5s linear;
                            }
                        }
                    }
                }
            }
            .v-consensus-box {
                padding: 60px 0;
                .v-img-lf, .v-img-box {
                    display: block;
                    line-height: 0;
                    overflow: hidden;
                }
                .v-img-lf {
                    .v-img {
                        height: auto;
                    }
                }
                .v-item-box {
                    padding-top: 15px;
                    .v-img-box {
                        width: 70px;
                        height: 70px;
                    }
                    .v-text-box {
                        .v-h3 {
                            padding: 15px 0;
                            font-size: 28px;
                            color: #155038;
                        }
                        .v-text  {
                            padding-top: 20px;
                            font-size: 16px;
                            color: $color-gray-bg;
                        }
                    }
                }
            }
        }
        .v-technical-box {
            position: relative;
            padding: 80px 0;
            background-color: #ecfbf6;
            .v-item-box {
                .v-h4 {
                    padding-bottom: 30px;
                    color: #155038;
                }
            }
            .v-technical-abs {
                position: relative;
                .v-technical-list {
                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    padding: 30px;
                    font-size: 0;
                    border-radius: 30px;
                    box-shadow: 0 10px 15px rgba(0, 199, 117, .4);
                    background: $color-body-c;
                    .v-item {
                        position: relative;
                        display: inline-block;
                        width: 50%;
                        height: 174px;
                        box-sizing: border-box;
                        padding: 20px;
                        vertical-align: middle;
                        font-size: 14px;
                        text-align: center;
                        color: #fff;
                        &:nth-child(1), &:last-child {
                            position: relative;
                            &::before {
                                content: ' ';
                                position: absolute;
                                left: 0;
                                right: 0;
                                display: block;
                                height: 3px;
                            }
                            &::after {
                                content: ' ';
                                position: absolute;
                                bottom: 0;
                                top: 0;
                                display: block;
                                width: 3px;
                            }
                        }
                        &:nth-child(1) {
                            &::before {
                                bottom: 0;
                                border-bottom: 1px solid #fff;
                            }
                            &::after {
                                right: 0;
                                border-right: 1px solid #fff;
                            }
                        }
                        &:last-child {
                            &::before {
                                top: -1px;
                                border-top: 1px solid #fff;
                            }
                            &::after {
                                left: -1px;
                                border-left: 1px solid #fff;
                            }
                        }
                        .v-img {
                            display: block;
                            width: 50px;
                            height: 50px;
                            margin: 10px auto;
                        }
                        .v-text {
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
        .v-about-box {
            padding: 150px 0;
            .v-item-box {
                position: relative;
                margin: 20px 0;
                &:hover {
                    animation: upAnimation 1s ease-in infinite normal;
                    cursor: pointer;
                }
                .v-img-box {
                    height: 240px;
                    line-height: 0;
                }
                .v-h2 {
                    position: absolute;
                    top: 105px;
                    left: 25px;
                    display: block;
                    line-height: 1.25;
                    font-size: 40px;
                    font-weight: bold;
                    color: #fff;
                }
                .v-text-box {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    padding: 60px 120px 0 15px;
                    font-size: 12px;
                    color: #fff;
                    .v-title {
                        padding-bottom: 5px;
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
            }
        }
        .v-plan-box {
            padding: 100px 0 60px;
            background-size: 100% auto;
            background-repeat: no-repeat;
            background-position: center top;
            .v-swiper {
                padding: 50px 0;
                .v-img {
                    height: auto;
                }
                .v-img-ft {
                    display: block;
                    width: 45px;
                    margin: 40px auto 0;
                }
            }
        }
    }
    .v-footer-box {
        min-height: 800px;
        background: #222734;
        .v-footer-top {
            position: relative;
            height: 560px;
            box-sizing: border-box;
            padding-top: 50px;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
            background-color: #00C775;
            .v-title {
                display: block;
                width: 230px;
                padding: 10px;
                margin: 50px auto;
                font-size: 18px;
                text-align: center;
                font-weight: bold;
                border-radius: 50px;
                color: $color-body-c;
                background-color: #fff;
            }
            .v-cooperate-box {
                z-index: 1;
                position: absolute;
                top: 260px;
                left: 0;
                right: 0;
                .v-item-box {
                    padding: 50px;
                    border-radius: 15px;
                    background-color: #fff;
                    .v-text {
                        padding: 30px 70px 0;
                        font-size: 16px;
                        color: $color-gray-bg;
                    }
                    .v-img-box {
                        font-size: 0;
                        .v-img-list {
                            display: inline-block;
                            width: 25%;
                            box-sizing: border-box;
                            padding: 0 15px;
                            margin-top: 40px;
                            vertical-align: middle;
                            background-color: #fff;
                            .v-img {
                                box-shadow: 0 0 20px rgba(221, 221, 221, 0.3);
                            }
                        }
                    }
                }
            }
        }
        .v-footer-ft {
            padding: 160px 0 50px;
            font-size: 0;
            .v-icon-box, .v-item-list {
                display: inline-block;
                vertical-align: middle;
                padding: 30px 0;
            }
            .v-item-list {
                margin-left: 80px;
                .v-text {
                    display: inline-block;
                    vertical-align: middle;
                    padding: 0 40px;
                    font-size: 14px;
                    border-right: 1px solid #707070;
                    &:last-child {border: none;}
                    .v-ahover {
                        color: #fff !important;
                    }
                }
            }
            .v-item-time {
                display: block;
                padding-top: 30px;
                font-size: 14px;
                text-align: center;
                border-top: 1px solid #707070;
                color: #fff;
            }
        }
    }
}

// 小于1024
@media only screen and (max-width: 1024px) {
.page {
    .v-mian-box {
        .v-banner-top {
            .v-img-box {
                .v-img {
                    width: auto;
                    object-fit: cover;
                }
            }
            .v-text-box {
                .v-ahover {
                    .v-href {
                        margin-right: 40px;
                        margin-top: 30px;
                    }
                }
            }
        }
        .v-item-container {
            .v-video-box {
                .v-item-box {
                    .v-h4 {
                        padding-right: 20px;
                    }
                }
            }
        }
        .v-technical-box {
            .v-technical-abs {
                position: relative;
                .v-technical-list {
                    position: inherit;
                    top: inherit;
                    right: inherit;
                    left: inherit;
                    padding: 30px 15px;
                }
            }
        }
        .v-about-box {
            padding: 30px 0;
            .effect:after, .effect:before {left: 12px;}
            .v-item-box {
                .v-text-box .v-title {
                    font-size: 14px;
                }
            }
        }
    }
    .v-footer-box {
        .v-footer-top {
            height: 460px;
            .v-cooperate-box {
                .v-item-box {
                    padding: 20px;
                    .v-text {
                        padding: 30px;
                    }
                }
            }
        }
        .v-footer-ft {
            padding-top: 200px;
            .v-icon-box, .v-item-list {
                display: block;
                padding: 15px 0 30px;
            }
            .v-icon-box {
                width: 298px;
            }
            .v-item-list {
                margin-left: 0;
                .v-text {padding: 0 15px;}
            }
        }
    }
}
}
@media only screen and (max-width: 414px) {
    /deep/.swiper-container {
        // height: 240px;
        .swiper-slide {
            transform: scale(1);
            .v-text {
                width: 260px;
                font-size: 12px;
            }
        }
    }
    .page {
        .v-mian-box {
            .v-banner-top {
                .v-text-box {
                    top: 12%;
                    .v-h2 {font-size: 18px;}
                }
            }
            .v-item-container {
                .v-video-box {
                    .v-item-box {
                        .v-h4 {
                            padding-right: 0;
                        }
                    }
                    .v-item-list {
                        margin-top: 30px;
                    }
                }
                .v-advantages-box {
                    padding: 20px 0;
                    .v-item-list {
                        margin-bottom: 15px;
                        .v-text-box {
                            min-height: auto;
                        }
                    }
                }
                .v-consensus-box {
                    padding: 20px 0;
                    .v-img-lf {
                        margin: 15px 0;
                    }
                }
            }
            .v-technical-box {
                padding: 20px 0;
            }
            .v-about-box {
                .effect:after, .effect:before {bottom: 2px;left: 14px;}
            }
            .v-plan-box {
                padding: 50px 0;
                .v-swiper {
                    padding: 30px 0;
                }
            }
            
        }
    }
}
@media only screen and (max-width: 375px) {
    .page {
        .v-mian-box {
            .v-about-box {
                .effect:after, .effect:before {bottom: 25px;}
                .v-item-box {
                    .v-h2 {
                        font-size: 32px;
                    }
                }
            }
            
        }
    }
}
</style>