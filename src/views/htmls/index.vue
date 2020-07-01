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
            </div>
            <!-- 团队服务 -->
            <div class="v-service-box">
                <div class="v-container">
                    <h2 class="v-h2-max" :style="{backgroundImage: 'url(' + serviceBg + ')'}">
                        <span>蓝鲸地推服务团队</span>
                    </h2>
                    <Row type="flex" justify="center" class="code-row-bg">
                        <Col :xs="24" :md="16" :lg="16" :xl="14">
                            <h3 class="v-h3">
                                <p>专供</p>
                                <p>天猫，淘宝，JD商城，拼多多</p>
                            </h3>
                            <div class="v-icon-box">
                                <img src="@/assets/img/hk/i-service-icon01.png" alt="icon.png" class="v-img">
                                <img src="@/assets/img/hk/i-service-icon02.png" alt="icon.png" class="v-img">
                                <img src="@/assets/img/hk/i-service-icon03.png" alt="icon.png" class="v-img">
                                <img src="@/assets/img/hk/i-service-icon04.png" alt="icon.png" class="v-img">
                            </div>
                            <div class="v-text-list">
                                <p class="v-text">
                                    <img src="@/assets/img/hk/i-service-icon05.png" alt="icon.png" class="v-img">
                                    拥有 <span>10+</span> 年经验天猫群店玩家
                                </p>
                                <p class="v-text">
                                    <img src="@/assets/img/hk/i-service-icon05.png" alt="icon.png" class="v-img">
                                    严格把控操作环节，保证有效地推补单真实有权重
                                </p>
                                <p class="v-text">
                                    <img src="@/assets/img/hk/i-service-icon05.png" alt="icon.png" class="v-img">
                                    拥有全国 <span>130+</span> 城市一单一个地区 拒绝关联
                                </p>
                                <p class="v-text">
                                    <img src="@/assets/img/hk/i-service-icon05.png" alt="icon.png" class="v-img">
                                    根据把宝贝属性定制目标客户人群，超精准标签
                                </p>
                                <p class="v-text">
                                    <img src="@/assets/img/hk/i-service-icon05.png" alt="icon.png" class="v-img">
                                    降权，扣分，跑单 一律赔付
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="v-text-ft">
                    <h2 class="v-h2-ft wow bounceInUp" data-wow-delay="0.1s">真实实体公司运作 <span>“恭迎上门洽谈”</span></h2>
                    <h2 class="v-h2-ft wow bounceInUp" data-wow-delay="0.15s">不是小团队，不是小作坊，公司真实可查 保障资金安全问题</h2>
                </div>
            </div>
            <!-- 服务业务 -->
            <div class="v-business-box" id="business" name="business">
                <div class="v-container">
                    <h2 class="v-h2-max" :style="{backgroundImage: 'url(' + businessBg + ')'}">
                        <span>业务服务</span>
                    </h2>
                    <Row type="flex" justify="center" class="code-row-bg" :gutter="30">
                        <Col :xs="24" :md="24" :lg="24" :xl="24">
                            <h3 class="v-h3 wow bounceInLeft" data-wow-delay="0.1s">
                                <p>什么是地推补单？</p>
                                <p>我们联合线下店铺或与当地门店及摆摊合作，通过零售方式将线下优质流量客户引导到您店铺上进行成交，相当于您在全国各地雇佣了一批业务团队，在全国各地以促销手段给您店铺进行补单，以此帮您打造店铺宝贝爆款，权重高，快速见效。</p>
                            </h3>
                            <h3 class="v-h3 wow bounceInLeft" data-wow-delay="0.1s">这种补单方式是迄今为止</h3>
                        </Col>
                        <Col :xs="24" :md="7" :lg="7" :xl="6">
                            <div class="v-business-list wow bounceInRight" data-wow-delay="0.1s">
                                <div class="v-item">
                                    <img src="@/assets/img/hk/i-business01.png" alt="business.png" class="v-img">
                                    <p>最安全的补单</p>
                                </div>
                            </div>
                        </Col>
                        <Col :xs="24" :md="7" :lg="7" :xl="6">
                            <div class="v-business-list wow bounceInRight" data-wow-delay="0.15s">
                                <div class="v-item">
                                    <img src="@/assets/img/hk/i-business02.png" alt="business.png" class="v-img">
                                    <p>最快打造爆款</p>
                                </div>
                            </div>
                        </Col>
                        <Col :xs="24" :md="7" :lg="7" :xl="6">
                            <div class="v-business-list wow bounceInRight" data-wow-delay="0.2s">
                                <div class="v-item">
                                    <img src="@/assets/img/hk/i-business03.png" alt="business.png" class="v-img">
                                    <p>最高效的方式</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="v-text-ft">
                    <div class="v-container">
                        <Row type="flex" justify="center" class="code-row-bg" :gutter="30">
                            <Col :xs="24" :md="24" :lg="24" :xl="24">
                                <img src="@/assets/img/hk/i-business-bg.png" alt="business.png" class="v-img">
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <!-- 服务优势 -->
            <div class="v-advantage-box" id="advantage">
                <div class="v-container">
                    <Row type="flex" justify="space-between" align="middle" class="code-row-bg">
                        <Col :xs="24" :md="10" :lg="10" :xl="10">
                            <div class="v-img-box wow bounceInLeft" data-wow-delay="0.1s">
                                <img v-lazy="require('@/assets/img/hk/i-advantage01.png')" alt="business.png" class="v-img">
                            </div>
                        </Col>
                        <Col :xs="24" :md="10" :lg="10" :xl="10">
                            <div class="v-img-box wow bounceInRight" data-wow-delay="0.1s">
                                <img v-lazy="require('@/assets/img/hk/i-advantage02.png')" alt="business.png" class="v-img">
                            </div>
                        </Col>
                    </Row>
                    <h2 class="v-h2-max" :style="{backgroundImage: 'url(' + advantageBg + ')'}">
                        <span>服务优势</span>
                    </h2>
                    <h2 class="v-title wow bounceInLeft" data-wow-delay="0.1s">地推团队那么多凭什么选择我们</h2>
                    <Row type="flex" justify="center" class="code-row-bg" :gutter="30">
                        <Col :xs="24" :md="6" :lg="6" :xl="5">
                            <div class="v-advantage-list wow bounceInRight" data-wow-delay="0.1s">
                                <img src="@/assets/img/hk/i-advantage03.png" alt="business.png" class="v-img">
                                <p>拒绝诈骗团队</p>
                            </div>
                        </Col>
                        <Col :xs="24" :md="6" :lg="6" :xl="5">
                            <div class="v-advantage-list wow bounceInRight" data-wow-delay="0.15s">
                                <img src="@/assets/img/hk/i-advantage04.png" alt="business.png" class="v-img">
                                <p>拒绝虚假地推</p>
                            </div>
                        </Col>
                        <Col :xs="24" :md="6" :lg="6" :xl="5">
                            <div class="v-advantage-list wow bounceInRight" data-wow-delay="0.2s">
                                <img src="@/assets/img/hk/i-advantage05.png" alt="business.png" class="v-img">
                                <p>拒绝违规操作</p>
                            </div>
                        </Col>
                        <Col :xs="24" :md="6" :lg="6" :xl="5">
                            <div class="v-advantage-list wow bounceInRight" data-wow-delay="0.25s">
                                <img src="@/assets/img/hk/i-advantage06.png" alt="business.png" class="v-img">
                                <p>拒绝中介团队</p>
                            </div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" class="code-row-bg">
                        <Col :xs="24" :md="24" :lg="24" :xl="20">
                            <div class="v-text-list wow bounceInUp" data-wow-delay="0.1s">
                                <h3 class="v-h3">本金安全保障</h3>
                                <p>‘我们真实公司方式运作可上门洽谈签署合作协议保障商家本金的安全’</p>
                            </div>
                            <div class="v-text-list wow bounceInUp" data-wow-delay="0.15s">
                                <h3 class="v-h3">风控技术优势</h3>
                                <p>根据 3.0风控稽查系统 定制操作流程及分散模式保障客户违规安全问题</p>
                            </div>
                            <div class="v-text-list wow bounceInUp" data-wow-delay="0.2s">
                                <h3 class="v-h3">地推价格优势</h3>
                                <p>完全地推团队源头价格，全网性价比最高，拥有专业服务团队助您迅速打造爆款</p>
                            </div>
                            <div class="v-text-list wow bounceInUp" data-wow-delay="0.25s">
                                <h3 class="v-h3">地推服务优势</h3>
                                <p>拥有专业一流团队，满足商家个性化补单计划需求，24小时在线售后团队实时响应</p>
                            </div>
                        </Col>
                    </Row>
                    <h2 class="v-title">恭迎上门洽谈，自有9年稀有类目天猫店</h2>
                </div>
            </div>
            <!-- 关于我们 -->
            <div class="v-about-box" id="about">
                <div class="v-container">
                    <h2 class="v-h2-max" :style="{backgroundImage: 'url(' + advantageBg + ')'}">
                        <span>关于我们</span>
                    </h2>
                    <div class="v-item-center">
                        <Row type="flex" justify="center" align="middle" class="code-row-bg">
                            <Col :xs="24" :md="14" :lg="14" :xl="12">
                                <div class="v-img-right wow bounceInLeft" data-wow-delay="0.1s">
                                    <div class="v-info">
                                        <h3 class="v-h3">蓝鲸地推团队</h3>
                                        <p>蓝鲸地推团队，是一家10+年电商运营公司旗下自有多家TOP店铺，依据多年电商运营经验打造专业地推补单服务公司现在已拥有130+城市及地区资源，并根据  3.0风控稽查系统 打造真实买家购物模型 百分百权重最高，百分百最安全，我们购物模型会随着更大电商平台发展而升级改变，为店铺持续高效补单服务体系。</p>
                                    </div>
                                </div>
                                <div class="v-img-right wow bounceInLeft" data-wow-delay="0.15s">
                                    <img v-lazy="require('@/assets/img/hk/i-about01.png')" alt="business.png" class="v-img">
                                </div>
                                <div class="v-img-right wow bounceInLeft" data-wow-delay="0.1s">
                                    <img v-lazy="require('@/assets/img/hk/i-about02.png')" alt="business.png" class="v-img">
                                </div>
                                <div class="v-img-right wow bounceInLeft" data-wow-delay="0.15s">
                                    <img v-lazy="require('@/assets/img/hk/i-about03.png')" alt="business.png" class="v-img">
                                </div>
                            </Col>
                            <Col :xs="24" :md="7" :lg="7" :xl="6">
                                <div class="v-img-left wow bounceInRight" data-wow-delay="0.1s">
                                    <img v-lazy="require('@/assets/img/hk/i-about-left.png')" alt="business.png" class="v-img">
                                </div>
                            </Col>
                            <Col :xs="24" :md="21" :lg="21" :xl="18">
                                <div class="v-img-left wow bounceInLeft" data-wow-delay="0.1s">
                                    <img v-lazy="require('@/assets/img/hk/i-about04.png')" alt="business.png" class="v-img">
                                </div>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" align="middle" class="code-row-bg">
                            <Col :xs="24" :md="7" :lg="7" :xl="6">
                                <div class="v-img-ft wow bounceInLeft" data-wow-delay="0.1s">
                                    <div class="v-text">
                                        <p>真实地推团队</p>
                                        <p>团队照片</p>
                                        <p>做地推我们是认真，选择我们拒绝走弯路</p>
                                    </div>
                                </div>
                                <div class="v-img-ft wow bounceInLeft" data-wow-delay="0.15s">
                                    <div class="v-info">
                                        <img v-lazy="require('@/assets/img/hk/i-about05.png')" alt="business.png" class="v-img">
                                    </div>
                                </div>
                            </Col>
                            <Col :xs="24" :md="7" :lg="7" :xl="6">
                                <div class="v-img-ft wow bounceInLeft" data-wow-delay="0.2s">
                                    <div class="v-info">
                                        <img v-lazy="require('@/assets/img/hk/i-about06.png')" alt="business.png" class="v-img">
                                    </div>
                                </div>
                            </Col>
                            <Col :xs="24" :md="7" :lg="7" :xl="6">
                                <div class="v-img-ft wow bounceInLeft" data-wow-delay="0.25s">
                                    <div class="v-info">
                                        <img v-lazy="require('@/assets/img/hk/i-about07.png')" alt="business.png" class="v-img">
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" align="middle" class="code-row-bg">
                            <Col :xs="24" :md="7" :lg="7" :xl="6">
                                <div class="v-img-ft wow bounceInRight" data-wow-delay="0.1s">
                                    <div class="v-info">
                                        <img v-lazy="require('@/assets/img/hk/i-about08.png')" alt="business.png" class="v-img">
                                    </div>
                                </div>
                            </Col>
                            <Col :xs="24" :md="7" :lg="7" :xl="6">
                                <div class="v-img-ft wow bounceInRight" data-wow-delay="0.15s">
                                    <div class="v-info">
                                        <img v-lazy="require('@/assets/img/hk/i-about09.png')" alt="business.png" class="v-img">
                                    </div>
                                </div>
                            </Col>
                            <Col :xs="24" :md="7" :lg="7" :xl="6">
                                <div class="v-img-ft wow bounceInRight" data-wow-delay="0.5s">
                                    <div class="v-info">
                                        <img v-lazy="require('@/assets/img/hk/i-about10.png')" alt="business.png" class="v-img">
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div class="v-contact-box" id="contact">
                <div class="v-container">
                    <h2 class="v-h2-max" :style="{backgroundImage: 'url(' + contactBg + ')'}">
                        <span>联系我们</span>
                    </h2>
                    <div class="v-item-center">
                        <Row type="flex" justify="center" class="code-row-bg">
                            <Col :xs="24" :md="24" :lg="24" :xl="24">
                                <div class="v-text-box effect">
                                    <div class="v-img-box">
                                        <img src="@/assets/img/hk/i-contact01.png" alt="business.png" class="v-img">
                                    </div>
                                    <h2 class="v-h2">选择蓝鲸，拒绝走弯路</h2>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <h2 class="v-h2 wow bounceInUp" data-wow-delay="0.1s">恭迎上门洽谈</h2>
                    <div class="v-item-center">
                        <Row type="flex" justify="space-between" class="code-row-bg">
                            <Col :xs="24" :md="6" :lg="6" :xl="6">
                                <div class="v-text-list wow bounceInUp" data-wow-delay="0.1s">
                                    <div class="v-text-info">
                                        <div class="v-text-left">
                                            <p>黄总监</p>
                                            <p>138 2748 8184</p>
                                            <p>恭迎上门洽谈</p>
                                        </div>
                                        <div class="v-text-right">
                                            <div class="v-img-box">
                                                <img src="@/assets/img/hk/icon-wx01.png" alt="business.png" class="v-img">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col :xs="24" :md="6" :lg="6" :xl="6">
                                <div class="v-text-list wow bounceInUp" data-wow-delay="0.13s">
                                    <div class="v-text-info">
                                        <div class="v-text-left">
                                            <p>黄总监</p>
                                            <p>138 2748 8184</p>
                                            <p>恭迎上门洽谈</p>
                                        </div>
                                        <div class="v-text-right">
                                            <div class="v-img-box">
                                                <img src="@/assets/img/hk/icon-wx01.png" alt="business.png" class="v-img">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col :xs="24" :md="6" :lg="6" :xl="6">
                                <div class="v-text-list wow bounceInUp" data-wow-delay="0.17s">
                                    <div class="v-text-info">
                                        <div class="v-text-left">
                                            <p>黄总监</p>
                                            <p>138 2748 8184</p>
                                            <p>恭迎上门洽谈</p>
                                        </div>
                                        <div class="v-text-right">
                                            <div class="v-img-box">
                                                <img src="@/assets/img/hk/icon-wx01.png" alt="business.png" class="v-img">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col :xs="24" :md="6" :lg="6" :xl="6">
                                <div class="v-text-list wow bounceInUp" data-wow-delay="0.2s">
                                    <div class="v-text-info">
                                        <div class="v-text-left">
                                            <p>黄总监</p>
                                            <p>138 2748 8184</p>
                                            <p>恭迎上门洽谈</p>
                                        </div>
                                        <div class="v-text-right">
                                            <div class="v-img-box">
                                                <img src="@/assets/img/hk/icon-wx01.png" alt="business.png" class="v-img">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        <div class="v-footer-box">
            <img src="@/assets/img/hk/logo-white.png" alt="banner.jpg" class="v-img">
            <h3 class="v-h3">粤ICP备16121820号</h3>
            <h3 class="v-h3">深圳蓝鲸网络信息有限公司</h3>
        </div>
    </div>
</template>

<script>
import { WOW } from 'wowjs';
import NavBar from "@/components/NavBar";
import videoPlayer from "@/components/videoPlayer/videoPlayer";
import vueAmap from "@/components/vueAmap/vueAmap";

import { sessionData } from '@/filters/storage';

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
					herf: "#business"
				},
				{
					name: this.$t('naviGation_003'),
					herf: "#advantage"
				},
				{
					name: this.$t('naviGation_004'),
					herf: "#about"
				},
				{
					name: this.$t('naviGation_005'),
					herf: "#contact"
				}
            ],
            bannerTop: require('@/assets/img/hk/i-banner-top.png'),
            serviceBg: require('@/assets/img/hk/i-service-bg.png'),
            businessBg: require('@/assets/img/hk/i-service-bg02.png'),
            advantageBg: require('@/assets/img/hk/i-service-bg03.png'),
            contactBg: require('@/assets/img/hk/i-service-bg04.png'),
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
            }
        }
    },
    components: {
		'v-nav': NavBar
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
			let _that = this;
			let name = sessionData('get', 'localeCut');
			if (name) {
				_that.valLocale = name;
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
    min-height: 1080px;
    .v-navbar {
        padding-bottom: 75px;
    }
    .v-footer-box {
        padding: 30px 15px;
        text-align: center;
        color: #fff;
        background-color: #060e34;
        .v-img {
            display: inline-block;
            max-width: 126px;
            padding-bottom: 20px;
        }
        .v-h3 {
            padding-top: 5px;
            font-size: 16px;
        }
    }
    .v-mian-box {
        min-height: 1000px;
        .v-banner-top {
            position: relative;
            .v-img-box {
                line-height: 0;
                .v-img {
                    min-height: 400px;
                }
            }
        }
        .v-h2-max {
            position: relative;
            min-height: 102px;
            padding: 40px 0;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            span {
                position: absolute;
                top: 15px;
                left: 145px;
                display: block;
                font-size: 24px;
                font-weight: bold;
                color: $color-body-c;
            }
        }
        .v-service-box {
            padding: 60px 0 0;
            .v-h3 {
                padding: 30px 0;
                font-size: 22px;
                line-height: 2;
                text-align: center;
                p:nth-child(1) {
                    font-size: 24px;
                    font-weight: bold;
                    color: $color-body-c;
                }
            }
            .v-icon-box {
                padding: 30px 0;
                font-size: 0;
                line-height: 0;
                text-align: center;
                .v-img {
                    display: inline-block;
                    width: 15%;
                    margin: 0 30px;
                    border-radius: 20px;
                    box-shadow: 0 4px 6px #ddd;
                    transition: all .3s linear;
                    &:hover {
                        transform: translateY(10px);
                    }
                }
            }
            .v-text-list {
                padding: 30px 0 60px;
                .v-img {
                    display: inline-block;
                    vertical-align: middle;
                    width: 28px;
                    margin-right: 20px;
                }
                .v-text {
                    padding: 15px 0;
                    font-size: 22px;
                    line-height: 1;
                    span {
                        display: inline-block;
                        font-size: 26px;
                        font-weight: bold;
                        color: $color-body-c;
                    }
                }
            }
            .v-text-ft {
                padding: 60px 0;
                text-align: center;
                color: #fff;
                background-color: #060e34;
                .v-h2-ft {
                    padding: 10px 15px;
                    font-size: 26px;
                    font-weight: bold;
                    span {
                        display: inline-block;
                        font-size: 28px;
                    }
                }
            }
        }
        .v-business-box {
            padding: 60px 0 0;
            .v-h3 {
                padding: 30px 0;
                font-size: 22px;
                line-height: 1.75;
                text-align: center;
                p:nth-child(1) {
                    padding-bottom: 40px;
                    font-size: 24px;
                    font-weight: bold;
                    color: $color-body-c;
                }
                &:nth-child(2) {
                    padding-bottom: 40px;
                    font-size: 28px;
                    font-weight: bold;
                }
            }
            .v-business-list {
                padding: 30px;
                .v-item {
                    padding: 30px;
                    text-align: center;
                    box-shadow: 0 -4px 14px rgba(238, 238, 238, 0.8);
                    background-color: #f5f9fc;
                    .v-img {
                        display: inline-block;
                        width: 60px;
                        box-sizing: border-box;
                        padding-bottom: 10px;
                    }
                    p {
                        padding-top: 30px;
                        font-size: 18px;
                    }
                }
            }
            .v-text-ft {
                padding: 60px 0 30px;
                background-color: #060e34;
                .v-img {height: auto;}
            }
            /deep/.code-row-bg {padding: 30px 0 60px;}
        }
        .v-advantage-box {
            padding: 60px 0;
            .v-img-box {
                padding: 30px 0;
                .v-img {height: auto;}
            }
            .v-h2-max {margin: 60px 0;}
            .v-title {
                padding: 10px 0 50px;
                font-size: 32px;
                font-weight: bold;
                text-align: center;
                &:last-child {
                    padding: 50px 0 10px;
                }
            }
            .v-advantage-list {
                padding: 30px;
                transition: all .3s linear;
                .v-img {
                    display: block;
                    width: 100%;
                    height: auto;
                    line-height: 0;
                }
                p {
                    padding-top: 15px;
                    font-size: 20px;
                    font-weight: bold;
                    text-align: center;
                    color: $color-body-c;
                }
                &:hover {
                    box-shadow: 0 4px 10px #eee;
                    transform: translateY(10px);
                }
            }
            .v-text-list {
                padding: 40px 30px 0;
                .v-h3 {
                    z-index: 9;
                    position: relative;
                    padding: 10px 0;
                    font-size: 24px;
                    font-weight: bold;
                    &::before {
                        content: ' ';
                        z-index: -1;
                        position: absolute;
                        left: 0;
                        bottom: 8px;
                        width: 35px;
                        height: 15px;
                        background-color: $color-body-c;
                    }
                }
                p {
                    font-size: 18px;
                }
            }
        }
        .v-about-box {
            padding: 60px 0;
            .v-img {height: auto;}
            .v-item-center {
                padding: 60px 0 30px;
                font-size: 0;
                .v-img-right {
                    display: inline-block;
                    width: 50%;
                    box-sizing: border-box;
                    vertical-align: middle;
                    padding: 5px;
                    font-size: 14px;
                    &:nth-child(1) {
                        .v-info {
                            min-height: 273px;
                            padding: 20px;
                            color: #fff;
                            background-color: $color-body-c;
                        }
                    }
                    .v-h3 {
                        padding-bottom: 30px;
                        font-size: 18px;
                    }
                }
            }
            .v-img-left {
                padding: 15px 5px;
                line-height: 0;
            }
            .v-img-ft {
                position: relative;
                padding: 20px 5px 0;
                .v-img {transition: all .3s linear;}
                .v-info {
                    max-height: 356px;
                    overflow: hidden;
                    &:hover {
                        .v-img {
                            transform: scale(1.1);
                        }
                    }
                }
                .v-text {
                    min-height: 142px;
                    padding: 20px;
                    font-size: 24px;
                    color: #fff;
                    background-color: $color-body-c;
                    p:last-child {
                        font-size: 14px;
                    }
                }
            }
        }
        .v-contact-box {
            padding: 60px 0;
            .v-item-center {
                padding: 80px 0 30px;
            }
            .v-text-box {
                padding: 40px 15px;
                text-align: center;
                color: #fff;
                background-color: #060e34;
                .v-img-box {
                    display: inline-block;
                    max-width: 800px;
                }
                .v-img {height: auto;}
            }
            .v-h2 {
                padding-top: 30px;
                font-size: 32px;
                font-weight: bold;
                text-align: center;
            }
            .effect:before, .effect:after {bottom: 40px;}
            .v-text-list {
                padding: 15px 20px;
                .v-text-info {
                    position: relative;
                    padding: 15px;
                    border-radius: 15px;
                    box-shadow: 0 6px 14px #eee;
                    background-color: #fff;
                    transition: all .3s linear;
                    &:hover {transform: translateY(10px);}
                    .v-text-left {
                        p:nth-child(1) {
                            padding-bottom: 5px;
                            font-size: 18px;
                            font-weight: bold;
                            color:$color-body-c;
                        }
                        p:last-child {
                            display: inline-block;
                            padding: 5px 15px;
                            margin-top: 25px;
                            font-size: 12px;
                            border-radius: 50px;
                            color: #fff;
                            background-color: #FFAA23;
                        }
                    }
                    .v-text-right {
                        @include tb;
                        right: 15px;
                    }
                }
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
            }
        }
    }
}
@media only screen and (max-width: 414px) {
    .page {
        .v-mian-box {
            .v-banner-top {
                .v-text-box {
                    top: 12%;
                    .v-h2 {font-size: 18px;}
                }
            }
            .v-h2-max {
                background-size: contain;
                span {
                    left: 45px;
                }
            }
            .v-service-box {
                padding: 40px 0 0;
                .v-icon-box {
                    .v-img {
                        margin: 0 10px;
                        border-radius: 10px;
                    }
                }
                .v-text-list {
                    .v-img {
                        width: 20px;
                        margin-right: 5px;
                    }
                    .v-text {
                        padding: 10px 0;
                        font-size: 16px;
                        span {
                            font-size: 18px;
                        }
                    }
                }
            }
            .v-about-box {
                .v-item-center {
                    .v-img-right {
                        &:nth-child(1), &:nth-child(2) {
                            width: 100%;
                        }
                    }
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
            }
        }
    }
}
</style>