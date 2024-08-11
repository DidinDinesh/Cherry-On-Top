import logo from './other/logo.png'
import cart_icon from './icons/cart.svg'
import signin_icon from './icons/SignIn.svg'
import search_icon from './icons/search.svg'
import menu_icon from './icons/menu.svg'
import close_icon from './icons/close.svg'
import banne_cake from './banner/banner_cake.jpg'
import banner_gift from './banner/banner_gift.jpg'
import banner_flower from './banner/banner_flower.jpg'
import banner_cake_flower from './banner/banner_combo.jpg'
import play_store from './other/play_store.png'
import app_store from './other/app_store.png'
import facebook from './social icons/facebook-circle.svg'
import whatsapp from './social icons/whatsapp.svg'
import instagram from './social icons/instagram.svg'
import twitter from './social icons/x.svg'
import youtube from './social icons/youtube.svg'
import linkdin from './social icons/linkedin.svg'
import blog_cake from './blog/blog_cake.png'
import blog_gift from './blog/blog_gift.png'
import blog_flower from './blog/blog_flower.png'
import blog_combo from './blog/blog_combo.png'
import contact_img from './contact/contact.png'
import call_icon from './contact/call.png'
import email_icon from './contact/email.png'
import insta_icon from './contact/insta.png'
import arrow_right from './icons/arrow-right.svg'
import quality_img from './aboutus/icons8-quality-100.png'
import trust_img from './aboutus/icons8-trust-100.png'
import happy_img from './aboutus/icons8-happy-100.png'
import creativity_img from './aboutus/icons8-creativity-100.png'
import passion_img from './aboutus/icons8-passion-99.png'
import teamwork_img from './aboutus/icons8-teamwork-100.png'
import integrity_img from './aboutus/icons8-integrity-100.png'
import sustainability_img from './aboutus/icons8-sustainability-100.png'
import dedication_img from './aboutus/icons8-thinking-100.png'
import user_icon from './icons/icons8-user-32.png'
import order_icon from './icons/icons8-shopping-bag-32.png'
import logout_icon from './icons/icons8-logout-32.png'
import parcel_icon from './icons/icons8-parcel-96.png'
import down_icon from './icons/bx-chevron-down .svg'
import up_icon from './icons/bx-chevron-up.svg'


import cake from './category/cake.png'
import flowers from './category/flowers.png'
import gifts from './category/gifts.png'
import combo from './category/combo.png'

import cake_cat_1 from './cake_category/regular.png'
import cake_cat_2 from './cake_category/photocake.png'
import cake_cat_3 from './cake_category/eggless.png'
import cake_cat_4 from './cake_category/vanilla.png'
import cake_cat_5 from './cake_category/choclate.png'
import cake_cat_6 from './cake_category/butterscotch.png'

import gift_cat_1 from './gift_category/jewellary.png'
import gift_cat_2 from './gift_category/home decor.png'
import gift_cat_3 from './gift_category/dining and serving.png'
import gift_cat_4 from './gift_category/for her.png'
import gift_cat_5 from './gift_category/for him.png'
import gift_cat_6 from './gift_category/for kids.png'


import flower_cat_1 from './flower_category/roses.png'
import flower_cat_2 from './flower_category/lillies.png'
import flower_cat_3 from './flower_category/orchids.png'
import flower_cat_4 from './flower_category/white_fowers.png'
import flower_cat_5 from './flower_category/purple_flowers.png'
import flower_cat_6 from './flower_category/red_fowers.png'

import combo_cat_1 from './combo_category/cake & flower.png'
import combo_cat_2 from './combo_category/cak & gift.png'
import combo_cat_3 from './combo_category/cake & choclate.png'
import combo_cat_4 from './combo_category/flower & gift.png'
import combo_cat_5 from './combo_category/flower & choclate.png'
import combo_cat_6 from './combo_category/gift & choclate.png'

import occ_cat_1 from './occasion_category/birthday.png'
import occ_cat_2 from './occasion_category/anniversary.png'
import occ_cat_3 from './occasion_category/valentines day.png'
import occ_cat_4 from './occasion_category/christmas.png'
import occ_cat_5 from './occasion_category/new year.png'
import occ_cat_6 from './occasion_category/onam.png'

export const assets = {
    logo,
    cart_icon,
    signin_icon,
    search_icon,
    menu_icon,
    close_icon,
    banne_cake,
    banner_gift,
    banner_flower,
    banner_cake_flower,
    play_store,
    app_store,
    facebook,
    whatsapp,
    instagram,
    twitter,
    youtube,
    linkdin,
    cake,
    flowers,
    gifts,
    combo,
    cake_cat_1,
    cake_cat_2,
    cake_cat_3,
    cake_cat_4,
    cake_cat_5,
    cake_cat_6,
    flower_cat_1,
    flower_cat_2,
    flower_cat_3,
    flower_cat_4,
    flower_cat_5,
    flower_cat_6,
    gift_cat_1,
    gift_cat_2,
    gift_cat_3,
    gift_cat_4,
    gift_cat_5,
    gift_cat_6,
    combo_cat_1,
    combo_cat_2,
    combo_cat_3,
    combo_cat_4,
    combo_cat_5,
    combo_cat_6,
    occ_cat_1,
    occ_cat_2,
    occ_cat_3,
    occ_cat_4,
    occ_cat_5,
    occ_cat_6,
    blog_cake,
    blog_gift,
    blog_flower,
    blog_combo,
    contact_img,
    call_icon,
    email_icon,
    insta_icon,
    arrow_right,
    quality_img,
    trust_img,
    happy_img,
    creativity_img,
    passion_img,
    teamwork_img,
    integrity_img,
    sustainability_img,
    dedication_img,
    user_icon,
    order_icon,
    logout_icon,
    parcel_icon,
    down_icon,
    up_icon
}

export const banners = [
    { 
        id: 1, 
        image: banne_cake, 
        text: "Sweeten your moments with our cakes" 
    },
    { 
        id: 2, 
        image: banner_gift, 
        text: "Gifts that speak from the heart" 
    },
    { 
        id: 3, 
        image: banner_flower, 
        text: "Say it with flowers, say it with love" 
    },
    { 
        id: 4, 
        image: banner_cake_flower, 
        text: "Delightful combos to make your celebrations special" 
    },
  ];

export const menu_list = [
    {
        name: "Cakes",
        image: cake,
        path: "/cakes"
    },
    {
        name: "Gifts",
        image: gifts,
        path: "/gifts"
    },
    {
        name: "Flowers",
        image: flowers,
        path: "/flowers"
    },
    {
        name: "Combos",
        image: combo,
        path: "/combos"
    }
]

export const cake_cat_list = [
    {
        name: "Bestseller",
        image: cake_cat_1
    },
    {
        name: "Photo Cake",
        image: cake_cat_2
    },
    {
        name: "Eggless",
        image: cake_cat_3
    },
    {
        name: "Vanilla",
        image: cake_cat_4
    },
    {
        name: "Choclate",
        image: cake_cat_5
    },
    {
        name: "Butterscotch",
        image: cake_cat_6
    }
]

export const gift_cat_list = [
    {
        name: "Jewellery",
        image: gift_cat_1
    },
    {
        name: "Home Decor",
        image: gift_cat_2
    },
    {
        name: "Dining & Serving",
        image: gift_cat_3
    },
    {
        name: "For Her",
        image: gift_cat_4
    },
    {
        name: "For Him",
        image: gift_cat_5
    },
    {
        name: "For Kids",
        image: gift_cat_6
    }
]

export const flower_cat_list = [
    {
        name: "Rose",
        image: flower_cat_1
    },
    {
        name: "Lily",
        image: flower_cat_2
    },
    {
        name: "Orchid",
        image: flower_cat_3
    },
    {
        name: "White Flower",
        image: flower_cat_4
    },
    {
        name: "Purple Flower",
        image: flower_cat_5
    },
    {
        name: "Red Flower",
        image: flower_cat_6
    }
]

export const combo_cat_list = [
    {
        name: "Cake & Flower",
        image: combo_cat_1
    },
    {
        name: "Cake & Gift",
        image: combo_cat_2
    },
    {
        name: "Cake & Choclate",
        image: combo_cat_3
    },
    {
        name: "Flower & Gift",
        image: combo_cat_4
    },
    {
        name: "Flower & Choclate",
        image: combo_cat_5
    },
    {
        name: "Gift & Choclate",
        image: combo_cat_6
    }
]

export const occasion_cat_list = [
    {
        name: "Birthday",
        image: occ_cat_1
    },
    {
        name: "Anniversary",
        image: occ_cat_2
    },
    {
        name: "Valentines Day",
        image: occ_cat_3
    },
    {
        name: "Christmas",
        image: occ_cat_4
    },
    {
        name: "New Year",
        image: occ_cat_5
    },
    {
        name: "Onam",
        image: occ_cat_6
    }
]