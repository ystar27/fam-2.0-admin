/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.scss';


const dashboard = <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.523438 4.28516H4.52344V0.285156H0.523438V4.28516ZM6.52344 16.2852H10.5234V12.2852H6.52344V16.2852ZM4.52344 16.2852H0.523438V12.2852H4.52344V16.2852ZM0.523438 10.2852H4.52344V6.28516H0.523438V10.2852ZM10.5234 10.2852H6.52344V6.28516H10.5234V10.2852ZM12.5234 0.285156V4.28516H16.5234V0.285156H12.5234ZM10.5234 4.28516H6.52344V0.285156H10.5234V4.28516ZM12.5234 10.2852H16.5234V6.28516H12.5234V10.2852ZM16.5234 16.2852H12.5234V12.2852H16.5234V16.2852Z" fill="white"/>
</svg>

const userMgt = <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.54" fillRule="evenodd" clipRule="evenodd" d="M10.0859 0.390625C4.56594 0.390625 0.0859375 4.87063 0.0859375 10.3906C0.0859375 15.9106 4.56594 20.3906 10.0859 20.3906C15.6059 20.3906 20.0859 15.9106 20.0859 10.3906C20.0859 4.87063 15.6059 0.390625 10.0859 0.390625ZM5.15594 16.6706C5.58594 15.7706 8.20594 14.8906 10.0859 14.8906C11.9659 14.8906 14.5959 15.7706 15.0159 16.6706C13.6559 17.7506 11.9459 18.3906 10.0859 18.3906C8.22594 18.3906 6.51594 17.7506 5.15594 16.6706ZM10.0859 12.8906C11.5459 12.8906 15.0159 13.4806 16.4459 15.2206C17.4659 13.8806 18.0859 12.2106 18.0859 10.3906C18.0859 5.98063 14.4959 2.39062 10.0859 2.39062C5.67594 2.39062 2.08594 5.98063 2.08594 10.3906C2.08594 12.2106 2.70594 13.8806 3.72594 15.2206C5.15594 13.4806 8.62594 12.8906 10.0859 12.8906ZM10.0859 4.39062C8.14594 4.39062 6.58594 5.95062 6.58594 7.89062C6.58594 9.83063 8.14594 11.3906 10.0859 11.3906C12.0259 11.3906 13.5859 9.83063 13.5859 7.89062C13.5859 5.95062 12.0259 4.39062 10.0859 4.39062ZM8.58594 7.89062C8.58594 8.72062 9.25594 9.39062 10.0859 9.39062C10.9159 9.39062 11.5859 8.72062 11.5859 7.89062C11.5859 7.06063 10.9159 6.39062 10.0859 6.39062C9.25594 6.39062 8.58594 7.06063 8.58594 7.89062Z" fill="#363740"/>
</svg>

const FamModule = <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.54" fillRule="evenodd" clipRule="evenodd" d="M14.0859 0.648438H1.08594C0.535937 0.648438 0.0859375 1.09844 0.0859375 1.64844V15.6484L4.08594 11.6484H14.0859C14.6359 11.6484 15.0859 11.1984 15.0859 10.6484V1.64844C15.0859 1.09844 14.6359 0.648438 14.0859 0.648438ZM13.0859 2.64844V9.64844H3.25594L2.66594 10.2384L2.08594 10.8184V2.64844H13.0859ZM17.0859 4.64844H19.0859C19.6359 4.64844 20.0859 5.09844 20.0859 5.64844V20.6484L16.0859 16.6484H5.08594C4.53594 16.6484 4.08594 16.1984 4.08594 15.6484V13.6484H17.0859V4.64844Z" fill="#363740"/>
</svg>

const storyBank = <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M8.42594 13.7947C8.81594 14.1847 9.44594 14.1847 9.83594 13.7947L16.1959 7.4347C16.5859 7.0447 16.5859 6.4147 16.1959 6.0247L11.2459 1.0747C10.8659 0.674699 10.2359 0.674699 9.84594 1.0647L3.47594 7.4347C3.08594 7.8247 3.08594 8.4547 3.47594 8.8447L8.42594 13.7947ZM14.4059 11.7747H15.0859L18.0859 14.7747V18.7747C18.0859 19.8847 17.1859 20.7747 16.0859 20.7747H2.07594C0.975937 20.7747 0.0859375 19.8747 0.0859375 18.7747V14.7747L3.08594 11.7747H3.91594L5.91594 13.7747H3.86594L2.08594 15.7747H16.0859L14.3159 13.7747H12.4059L14.4059 11.7747ZM2.08594 18.7747H16.0859V17.7747H2.08594V18.7747ZM14.0859 6.72472L10.5459 3.18472L5.59594 8.13472L9.13594 11.6747L14.0859 6.72472Z" fill="black" fillOpacity="0.54"/>
</svg>

const collaboration = <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M17.0659 6.47158L14.2359 9.54721L8.57594 3.39595L11.4059 0.320312L17.0659 6.47158ZM7.15594 4.92831L4.32594 8.00395L18.4659 23.3712L21.2959 20.2956L7.15594 4.92831ZM12.0859 22.0562H0.0859375V24.2298H12.0859V22.0562ZM8.57594 15.6877L2.91594 9.53644L0.0859375 12.6121L5.74594 18.7633L8.57594 15.6877Z" fill="black" fillOpacity="0.54"/>
</svg>

const season = <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.0859375 2.02344H2.08594V0.0234375H0.0859375V2.02344ZM2.08594 6.02344H0.0859375V4.02344H2.08594V6.02344ZM2.08594 10.0234H0.0859375V8.02344H2.08594V10.0234ZM16.0859 14.0234H18.0859V12.0234H16.0859V14.0234ZM16.0859 16.0234H18.0859V18.0234H16.0859V16.0234ZM0.0859375 14.0234H2.08594V12.0234H0.0859375V14.0234ZM6.08594 2.02344H4.08594V0.0234375H6.08594V2.02344ZM10.0859 18.0234H8.08594V16.0234H10.0859V18.0234ZM6.08594 18.0234H4.08594V16.0234H6.08594V18.0234ZM0.0859375 18.0234H2.08594V16.0234H0.0859375V18.0234ZM13.0859 0.0234375C15.8459 0.0234375 18.0859 2.26344 18.0859 5.02344V10.0234H16.0859V5.02344C16.0859 3.37344 14.7359 2.02344 13.0859 2.02344H8.08594V0.0234375H13.0859Z" fill="black" fillOpacity="0.54"/>
</svg>


const certificate = <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2.08594 0.820312H20.0859C21.1859 0.820312 22.0859 1.72031 22.0859 2.82031V16.8203C22.0859 17.9203 21.1859 18.8203 20.0859 18.8203H13.0859V16.8203H20.0859V2.82031H2.08594V5.82031H0.0859375V2.82031C0.0859375 1.72031 0.985937 0.820312 2.08594 0.820312ZM0.0859375 18.8203V15.8203C1.74594 15.8203 3.08594 17.1603 3.08594 18.8203H0.0859375ZM0.0859375 11.8203V13.8203C2.84594 13.8203 5.08594 16.0603 5.08594 18.8203H7.08594C7.08594 14.9503 3.95594 11.8203 0.0859375 11.8203ZM0.0859375 9.82031V7.82031C6.15594 7.82031 11.0859 12.7403 11.0859 18.8203H9.08594C9.08594 13.8503 5.05594 9.82031 0.0859375 9.82031ZM10.0859 8.91031V10.9103L13.5859 12.8203L17.0859 10.9103V8.91031L13.5859 10.8203L10.0859 8.91031ZM8.08594 6.82031L13.5859 3.82031L19.0859 6.82031L13.5859 9.82031L8.08594 6.82031Z" fill="black" fillOpacity="0.54"/>
</svg>

const forum = <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M7.08594 2.94922H2.08594C0.985937 2.94922 0.0859375 3.84922 0.0859375 4.94922V18.9492C0.0859375 20.0492 0.985937 20.9492 2.08594 20.9492H7.08594V22.9492H9.08594V0.949219H7.08594V2.94922ZM7.08594 17.9492H2.08594L7.08594 11.9492V17.9492ZM11.0859 2.94922H16.0859C17.1859 2.94922 18.0859 3.84922 18.0859 4.94922V18.9492C18.0859 20.0492 17.1859 20.9492 16.0859 20.9492H11.0859V11.9492L16.0859 17.9492V4.94922H11.0859V2.94922Z" fill="black" fillOpacity="0.54"/>
</svg>

const leaderboard = <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M11.0859 0.222656C9.98594 0.222656 9.08594 1.12266 9.08594 2.22266C9.08594 3.32266 9.98594 4.22266 11.0859 4.22266C12.1859 4.22266 13.0859 3.32266 13.0859 2.22266C13.0859 1.12266 12.1859 0.222656 11.0859 0.222656ZM4.58594 13.7227L0.0859375 18.2227L1.58594 19.7227L5.08594 16.2227H7.08594L4.58594 13.7227ZM14.0859 23.2227L17.0859 20.2327L14.0859 17.2227H12.5859L6.29594 10.9327C7.15594 10.5627 7.95594 10.0627 8.58594 9.54266V11.8127L12.1659 15.3927C12.7359 14.8427 13.0859 14.0727 13.0859 13.2327V7.48266C13.0859 6.24266 12.0759 5.23266 10.8359 5.22266H10.8059C10.4659 5.22266 10.1359 5.31266 9.84594 5.45266C9.58594 5.57266 9.34594 5.74266 9.15594 5.95266L7.75594 7.50266C6.69594 8.67266 4.74594 9.57266 3.08594 9.54266V11.7027C3.38594 11.7027 3.68594 11.6827 3.99594 11.6327L11.0959 18.7227V20.2127L14.0859 23.2227Z" fill="black" fillOpacity="0.54"/>
</svg>

const project = <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M20.0859 4.49609V6.49609H18.0859V8.49609H20.0859V10.4961H18.0859V12.4961H20.0859V14.4961H18.0859V16.4961C18.0859 17.5961 17.1859 18.4961 16.0859 18.4961H2.08594C0.985937 18.4961 0.0859375 17.5961 0.0859375 16.4961V2.49609C0.0859375 1.39609 0.985937 0.496094 2.08594 0.496094H16.0859C17.1859 0.496094 18.0859 1.39609 18.0859 2.49609V4.49609H20.0859ZM2.08594 16.4961H16.0859V2.49609H2.08594V16.4961ZM4.08594 10.4961H9.08594V14.4961H4.08594V10.4961ZM14.0859 4.49609H10.0859V7.49609H14.0859V4.49609ZM4.08594 4.49609H9.08594V9.49609H4.08594V4.49609ZM14.0859 8.49609H10.0859V14.4961H14.0859V8.49609Z" fill="black" fillOpacity="0.54"/>
</svg>

const lesson = <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16.5859 0.9375C17.7559 0.9375 18.9759 1.0875 20.0859 1.4375C20.8359 1.6875 21.4859 1.9875 22.0859 2.4375V17.0375C22.0859 17.2875 21.8359 17.5375 21.5859 17.5375C21.4859 17.5375 21.4359 17.5375 21.3359 17.4875C19.9359 16.7375 18.2359 16.4375 16.5859 16.4375C14.8859 16.4375 12.4359 17.0875 11.0859 17.9375C9.63594 16.8375 7.53594 16.4375 5.58594 16.4375C4.13594 16.4375 2.18594 16.8875 0.835938 17.5375C0.785937 17.5375 0.748438 17.55 0.710938 17.5625C0.673437 17.575 0.635938 17.5875 0.585938 17.5875C0.335938 17.5875 0.0859375 17.3375 0.0859375 17.0875V2.4375C1.53594 1.3375 3.63594 0.9375 5.58594 0.9375C7.53594 0.9375 9.63594 1.3375 11.0859 2.4375C12.5359 1.3375 14.6359 0.9375 16.5859 0.9375ZM16.5859 14.4375C17.7859 14.4375 18.9859 14.5875 20.0859 14.9375V3.4375C18.9859 3.0875 17.7859 2.9375 16.5859 2.9375C14.8859 2.9375 12.4359 3.5875 11.0859 4.4375V15.9375C12.4359 15.0875 14.8859 14.4375 16.5859 14.4375Z" fill="black" fillOpacity="0.54"/>
</svg>

const personalIssue = <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16.0859 0.878906H6.08594C4.97594 0.878906 4.08594 1.77891 4.08594 2.87891V12.8789C4.08594 13.9789 4.97594 14.8789 6.08594 14.8789H16.0859C17.1859 14.8789 18.0859 13.9789 18.0859 12.8789V2.87891C18.0859 1.77891 17.1859 0.878906 16.0859 0.878906ZM0.0859375 6.87891H2.08594V4.87891H0.0859375V6.87891ZM0.0859375 10.8789H2.08594V8.87891H0.0859375V10.8789ZM0.0859375 14.8789H2.08594V12.8789H0.0859375V14.8789ZM2.08594 16.8789V18.8789C0.975937 18.8789 0.0859375 17.9789 0.0859375 16.8789H2.08594ZM14.0859 18.8789H12.0859V16.8789H14.0859V18.8789ZM6.08594 12.8789H16.0859V2.87891H6.08594V12.8789ZM8.08594 18.8789H10.0859V16.8789H8.08594V18.8789ZM6.08594 18.8789H4.08594V16.8789H6.08594V18.8789Z" fill="black" fillOpacity="0.54"/>
</svg>

const coach = <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.88594 0.988281H14.2859C15.2759 0.988281 16.0859 1.79828 16.0859 2.78828V17.1883C16.0859 18.1783 15.2759 18.9883 14.2859 18.9883L5.88594 18.9783C4.89594 18.9783 4.08594 18.1783 4.08594 17.1883V2.78828C4.08594 1.79828 4.89594 0.988281 5.88594 0.988281ZM14.0859 16.9883V2.98828H6.08594V16.9783L14.0859 16.9883ZM10.0859 7.98828C11.1859 7.98828 12.0859 7.09828 12.0859 5.98828C12.0859 4.87828 11.1859 3.98828 10.0859 3.98828C8.98594 3.98828 8.08594 4.87828 8.08594 5.98828C8.08594 7.09828 8.98594 7.98828 10.0859 7.98828ZM13.5859 12.4883C13.5859 14.4183 12.0159 15.9883 10.0859 15.9883C8.15594 15.9883 6.58594 14.4183 6.58594 12.4883C6.58594 10.5583 8.15594 8.98828 10.0859 8.98828C12.0159 8.98828 13.5859 10.5583 13.5859 12.4883ZM10.0859 10.9883C10.9159 10.9883 11.5859 11.6583 11.5859 12.4883C11.5859 13.3183 10.9159 13.9883 10.0859 13.9883C9.25594 13.9883 8.58594 13.3183 8.58594 12.4883C8.58594 11.6583 9.25594 10.9883 10.0859 10.9883ZM0.0859375 4.98828H2.08594V20.9883H12.0859V22.9883H2.08594C0.975937 22.9883 0.0859375 22.0883 0.0859375 20.9883V4.98828Z" fill="black" fillOpacity="0.54"/>
</svg>

const mentor = <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M22.0859 0.09375H2.08594C0.985937 0.09375 0.0859375 0.99375 0.0859375 2.09375V16.0938C0.0859375 17.1938 0.985937 18.0938 2.08594 18.0938H22.0859C23.1859 18.0938 24.0759 17.1938 24.0759 16.0938L24.0859 2.09375C24.0859 0.99375 23.1859 0.09375 22.0859 0.09375ZM2.08594 16.0938V2.09375H22.0859V16.0938H2.08594ZM21.0859 13.0938L19.0959 15.0837C17.7859 14.1037 16.8159 12.7037 16.3659 11.0938C16.1859 10.4537 16.0859 9.78375 16.0859 9.09375C16.0859 8.40375 16.1859 7.73375 16.3659 7.09375C16.8159 5.47375 17.7859 4.08375 19.0959 3.10375L21.0859 5.09375L19.5759 7.09375H17.9359C17.7159 7.72375 17.5859 8.39375 17.5859 9.09375C17.5859 9.79375 17.7159 10.4637 17.9359 11.0938H19.5759L21.0859 13.0938ZM9.08594 9.09375C10.7359 9.09375 12.0859 7.74375 12.0859 6.09375C12.0859 4.44375 10.7359 3.09375 9.08594 3.09375C7.43594 3.09375 6.08594 4.44375 6.08594 6.09375C6.08594 7.74375 7.43594 9.09375 9.08594 9.09375ZM10.0859 6.09375C10.0859 5.54375 9.63594 5.09375 9.08594 5.09375C8.53594 5.09375 8.08594 5.54375 8.08594 6.09375C8.08594 6.64375 8.53594 7.09375 9.08594 7.09375C9.63594 7.09375 10.0859 6.64375 10.0859 6.09375ZM15.0859 13.6838C15.0859 11.1838 11.1159 10.1038 9.08594 10.1038C7.05594 10.1038 3.08594 11.1838 3.08594 13.6838V15.0938H15.0859V13.6838ZM9.08594 12.0938C7.78594 12.0938 6.30594 12.5938 5.56594 13.0938H12.6059C11.8559 12.5837 10.3859 12.0938 9.08594 12.0938Z" fill="black" fillOpacity="0.54"/>
</svg>

const announcement = <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10.0859 9.70312C10.0859 11.3631 8.74594 12.7031 7.08594 12.7031C5.42594 12.7031 4.08594 11.3631 4.08594 9.70312V3.70312C4.08594 2.04313 5.42594 0.703125 7.08594 0.703125C8.74594 0.703125 10.0859 2.04313 10.0859 3.70312V9.70312ZM4.08594 21.7031H2.08594V23.7031H4.08594V21.7031ZM6.08594 3.70312C6.08594 3.15313 6.53594 2.70312 7.08594 2.70312C7.63594 2.70312 8.08594 3.15313 8.08594 3.70312V9.70312C8.08594 10.2631 7.64594 10.7031 7.08594 10.7031C6.53594 10.7031 6.08594 10.2531 6.08594 9.70312V3.70312ZM8.08594 23.7031V21.7031H6.08594V23.7031H8.08594ZM10.0859 21.7031H12.0859V23.7031H10.0859V21.7031ZM12.3859 9.70312H14.0859C14.0859 13.1131 11.3659 15.9331 8.08594 16.4231V19.7031H6.08594V16.4231C2.80594 15.9331 0.0859375 13.1131 0.0859375 9.70312H1.78594C1.78594 12.7031 4.32594 14.8031 7.08594 14.8031C9.84594 14.8031 12.3859 12.7031 12.3859 9.70312Z" fill="black" fillOpacity="0.54"/>
</svg>

const adMgt = <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.19594 2.15219L2.74594 3.71219C2.33594 4.08219 2.08594 4.60219 2.08594 5.19219V15.1722C2.08594 16.2722 2.98594 17.1722 4.09594 17.1722H0.0859375V19.1722H18.2159L20.9259 21.8822L22.3359 20.4722L2.60594 0.742188L1.19594 2.15219ZM21.8759 17.1722L23.8759 19.1722H24.0859V17.1722H21.8759ZM4.21594 5.19219H4.08594V15.1922H14.2159L10.7559 11.7122C9.21594 12.0922 8.04594 12.8822 7.08594 14.1722C7.39594 12.6922 8.02594 11.2422 9.16594 10.1222L4.21594 5.19219ZM20.0859 5.19219V15.3822L21.3859 16.6822C21.8059 16.3122 22.0859 15.7922 22.0859 15.1922V5.19219C22.0859 4.08219 21.1859 3.19219 20.0859 3.19219H7.88594L9.88594 5.19219H20.0859ZM15.8059 11.1022L13.0159 8.32219L13.0859 8.30219V6.17219L17.0859 9.90219L15.8059 11.1022Z" fill="black" fillOpacity="0.54"/>
</svg>

const scoring = <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M17.3153 10.0938C17.3153 10.4338 17.2853 10.7537 17.2453 11.0737L19.3553 12.7238C19.5453 12.8737 19.5953 13.1438 19.4753 13.3638L17.4753 16.8237C17.3853 16.9837 17.2153 17.0737 17.0453 17.0737C16.9853 17.0737 16.9253 17.0638 16.8653 17.0438L14.3753 16.0437C13.8553 16.4338 13.2953 16.7738 12.6853 17.0238L12.3053 19.6737C12.2753 19.9137 12.0653 20.0938 11.8153 20.0938H7.81527C7.56527 20.0938 7.35527 19.9137 7.32527 19.6737L6.94527 17.0238C6.33527 16.7738 5.77527 16.4438 5.25527 16.0437L2.76527 17.0438C2.71527 17.0638 2.65527 17.0737 2.59527 17.0737C2.41527 17.0737 2.24527 16.9837 2.15527 16.8237L0.155269 13.3638C0.0352691 13.1438 0.0852691 12.8737 0.275269 12.7238L2.38527 11.0737C2.34527 10.7537 2.31527 10.4237 2.31527 10.0938C2.31527 9.76375 2.34527 9.43375 2.38527 9.11375L0.275269 7.46375C0.0852691 7.31375 0.0252691 7.04375 0.155269 6.82375L2.15527 3.36375C2.24527 3.20375 2.41527 3.11375 2.58527 3.11375C2.64527 3.11375 2.70527 3.12375 2.76527 3.14375L5.25527 4.14375C5.77527 3.75375 6.33527 3.41375 6.94527 3.16375L7.32527 0.51375C7.35527 0.27375 7.56527 0.09375 7.81527 0.09375H11.8153C12.0653 0.09375 12.2753 0.27375 12.3053 0.51375L12.6853 3.16375C13.2953 3.41375 13.8553 3.74375 14.3753 4.14375L16.8653 3.14375C16.9153 3.12375 16.9753 3.11375 17.0353 3.11375C17.2153 3.11375 17.3853 3.20375 17.4753 3.36375L19.4753 6.82375C19.5953 7.04375 19.5453 7.31375 19.3553 7.46375L17.2453 9.11375C17.2853 9.43375 17.3153 9.75375 17.3153 10.0938ZM15.3153 10.0938C15.3153 9.88375 15.3053 9.67375 15.2653 9.36375L15.1253 8.23375L16.0153 7.53375L17.0853 6.68375L16.3853 5.47375L15.1153 5.98375L14.0553 6.41375L13.1453 5.71375C12.7453 5.41375 12.3453 5.18375 11.9153 5.00375L10.8553 4.57375L10.6953 3.44375L10.5053 2.09375H9.11527L8.91527 3.44375L8.75527 4.57375L7.69527 5.00375C7.28527 5.17375 6.87527 5.41375 6.44527 5.73375L5.54527 6.41375L4.50527 5.99375L3.23527 5.48375L2.53527 6.69375L3.61527 7.53375L4.50527 8.23375L4.36527 9.36375C4.33527 9.66375 4.31527 9.89375 4.31527 10.0938C4.31527 10.2937 4.33527 10.5237 4.36527 10.8337L4.50527 11.9637L3.61527 12.6637L2.53527 13.5037L3.23527 14.7137L4.50527 14.2037L5.56527 13.7738L6.47527 14.4738C6.87527 14.7738 7.27527 15.0037 7.70527 15.1838L8.76527 15.6138L8.92527 16.7437L9.11527 18.0938H10.5153L10.7153 16.7437L10.8753 15.6138L11.9353 15.1838C12.3453 15.0138 12.7553 14.7737 13.1853 14.4537L14.0853 13.7738L15.1253 14.1938L16.3953 14.7037L17.0953 13.4937L16.0153 12.6538L15.1253 11.9537L15.2653 10.8237C15.2953 10.5237 15.3153 10.3038 15.3153 10.0938ZM9.81527 6.09375C7.60527 6.09375 5.81527 7.88375 5.81527 10.0938C5.81527 12.3038 7.60527 14.0938 9.81527 14.0938C12.0253 14.0938 13.8153 12.3038 13.8153 10.0938C13.8153 7.88375 12.0253 6.09375 9.81527 6.09375ZM7.81527 10.0938C7.81527 11.1938 8.71527 12.0938 9.81527 12.0938C10.9153 12.0938 11.8153 11.1938 11.8153 10.0938C11.8153 8.99375 10.9153 8.09375 9.81527 8.09375C8.71527 8.09375 7.81527 8.99375 7.81527 10.0938Z" fill="black" fillOpacity="0.54"/>
</svg>


const Menu = () => {
    
    const [isFirstChild, setFirstChildColor] = useState(false);
    const [showSubMenu, toggleSubMenu] = useState(false);
    const [elementID, setElementID] = useState('');
    const [changeSubmenuColor, setSubMenuColor] = useState(false);
    const [idSubMenu, setIDSubMenu] = useState('');
    const [mainListID, setMainListID] = useState('');
    const [localStoreID, setLocalStoreID] = useState('');
    const [loacalSubMenuColor, setLocalSubMenuColor] = useState(false);
    
    
    const Router = useRouter();
    
    useEffect(() => {
        //localStorage.clear();
        let parent = document.getElementById('1_parent_active');
        
        //let parentID = parent?.id;
        
        const firstChild = parent?.firstChild;
        
        const store = localStorage.getItem("store");
        
        const parseStore = JSON.parse(`${store}`);
        
        const getSubMenuColor = parseStore?.changeSubmenuColor;
        const getSubMenuID = parseStore?.elemID;
        
        setLocalSubMenuColor(getSubMenuColor);
        setLocalStoreID(getSubMenuID);
        
        
        console.log(firstChild);
        console.log(getSubMenuColor, getSubMenuID);
        
        // if(store){
        //     if(getSubMenuColor && getSubMenuID){
        //         setFirstChildColor(false);
        //         return;
        //     }else{
        //         return;
        //     }
        // }else{
        //     if(firstChild){
        //         setFirstChildColor(true);
        //         setLocalSubMenuColor(false);
        //         setLocalStoreID("")
        //         setSubMenuColor(false);
        //         return;
        //     }
        // }
        
        if(changeSubmenuColor || loacalSubMenuColor){
            setFirstChildColor(false);
            return;
        }else{
            if(firstChild){
                setFirstChildColor(true);
                setSubMenuColor(false);
                return;
            }
        }
        
        console.log(isFirstChild);
    });
    
    
    
    const handleShowSubMenu = (e: any, id: String, liID: String) => {
        e.preventDefault();
        
        if(mainListID === ""){
            setMainListID(`${ liID }`);
            setElementID(`${id}`);
            toggleSubMenu(true);
        }else{
            if(showSubMenu){
                if(mainListID === liID){
                    toggleSubMenu(false);
                    return; 
                }else{
                    setElementID(`${ id }`);
                    setMainListID(`${ liID }`);
                }
            }else{
                toggleSubMenu(true);
                setMainListID(`${ liID }`);
                setElementID(`${id}`);
            }
            
        }
        
        // if(showSubMenu){
        //     setElementID(`${id}`);
        //     toggleSubMenu(false);
        // }else{
        //     setElementID(`${id}`);
        //     toggleSubMenu(true);
        // }
        
    }
    
    const handleSubMenuClick = (e: any, id: String, path: String) => {
        e.preventDefault();
        console.log(path);
        
        console.log(`Clicking submenu+++`);
        
        if(idSubMenu === ""){
            setIDSubMenu(`${ id }`);
            setSubMenuColor(true);
            setFirstChildColor(false);
            
            localStorage.setItem("store", `{"changeSubmenuColor":"${ true }", "elemID":"${id}"}`);
            
        }else{
            if(idSubMenu === id){
                return;
            }else{
                setIDSubMenu(`${ id }`);
            }
        }
        
        if(path === "participants" || path === "admin"){
            Router.push(`/adminUserMgt/${ path }`);
        }
        // if(path === "participants" || path === "admin"){
        //     Router.push(`/adminUserMgt/${ path }`);
        // }
        // if(path === "participants" || path === "admin"){
        //     Router.push(`/adminUserMgt/${ path }`);
        // }
        // if(path === "participants" || path === "admin"){
        //     Router.push(`/adminUserMgt/${ path }`);
        // }
        // if(path === "participants" || path === "admin"){
        //     Router.push(`/adminUserMgt/${ path }`);
        // }
        
        
                
    }
    
    
    
    const handleMainListClick = (e: any, path: String) => {
        
        e.preventDefault();
        
        if(isFirstChild){
            if(path){
                console.log(`I am getting here too....`);
                console.log('PATH::', `${path}`);
                
                if(path === "dashboard"){
                    Router.push(`/`);
                }
                if(path === "fam_module"){
                    Router.push(`/adminModules/famModule`);
                }
                if(path === "story_bank"){
                    Router.push(`/adminStoryBank/storyBank`);
                }
            }
            return;
        }else{
            console.log(`Clicking first child ....`);
            setIDSubMenu("");
            setFirstChildColor(true);
            setSubMenuColor(false);
            localStorage.clear();
            
            if(path === "dashboard"){
                Router.push(`/`);
            }
            if(path === "fam_module"){
                Router.push(`/adminModules/famModule`);
            }
            if(path === "story_bank"){
                Router.push(`/adminStoryBank/storyBank`);
            }
        }
        
        
    }
    
    
    
    return (
        <React.Fragment>
            <div className={ styles.list_item_div}>
                <ul id="1_parent_active" className={styles.unordered_list_item}>
                    <li 
                        onClick={(e) => handleMainListClick(e, "dashboard")}
                        className={ isFirstChild ? styles.list_item : styles.list_item_}>
                        <span className={ isFirstChild ? styles.list_span_img  : styles.list_span_img_ }>{ dashboard }</span>
                        <span className={ isFirstChild ? styles.list_span  : styles.list_span_ }>{`Dashboard`}</span>
                    </li>
                    <li className={ styles.list_item_sub }>
                        <div
                            id="main_menu_1" 
                            onClick={(e) => handleShowSubMenu(e, "sub_menu_1", "main_menu_1")}
                            className={ showSubMenu && elementID === "sub_menu_1" ? styles.menu_higlighed : styles.menu_not_higlighed }
                        >
                            <span className={styles.list_submenu_span_img}>{ userMgt }</span>
                            <span className={styles.list_submenu_span}>{ `User Management`}</span>
                            <span className={styles.list_submenu_arrow_1}><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.773437 1.68344L5.35344 6.27344L0.773437 10.8634L2.18344 12.2734L8.18344 6.27344L2.18344 0.273437L0.773437 1.68344Z" fill="black" fillOpacity="0.54"/>
                            </svg></span>
                        </div>
                        <div>
                            <ul 
                                id="sub_menu_1"
                                className={ showSubMenu && elementID === "sub_menu_1" ? styles.switch_submenu_on : styles.switch_submenu_off}
                            >
                                <li 
                                    className={styles.sub_list_item}
                                    >
                                    <div 
                                        id="sub_menu_list_1" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_1", "participants")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_1" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{ `Participants` }</span>
                                    </div>
                                </li>
                                <li className={styles.sub_list_item}>
                                    <div 
                                        id="sub_menu_list_2" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_2", "admin")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_2" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{ `Admin` }</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li 
                        onClick={(e) => handleMainListClick(e, "fam_module")}
                        className={ styles.list_item_ }
                    >
                        <span className={ styles.list_span_img_ }>{ FamModule }</span>
                        <span className={ styles.list_span_ }>{`FAM Module`}</span>
                    </li>
                    <li 
                        onClick={(e) => handleMainListClick(e, "story_bank")}
                        className={ styles.list_item_ }
                    >
                        <span className={ styles.list_span_img_ }>{ storyBank }</span>
                        <span className={ styles.list_span_ }>{`Story Bank`}</span>
                    </li>
                    <li className={ styles.list_item_ }>
                        <span className={ styles.list_span_img_ }>{ collaboration }</span>
                        <span className={ styles.list_span_ }>{`Collaboration`}</span>
                    </li>
                    <li className={ styles.list_item_ }>
                        <span className={ styles.list_span_img_ }>{ season }</span>
                        <span className={ styles.list_span_ }>{`Seasons`}</span>
                    </li>
                    <li className={ styles.list_item_sub }>
                        <div
                            id="main_menu_2"
                            onClick={(e) => handleShowSubMenu(e, "sub_menu_2", "main_menu_2")}
                            className={ showSubMenu && elementID === "sub_menu_2" ? styles.menu_higlighed : styles.menu_not_higlighed }
                        >
                            <span className={styles.list_submenu_span_img}>{ certificate }</span>
                            <span className={styles.list_submenu_span}>{`Certificates`}</span>
                            <span className={styles.list_submenu_arrow_2}><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.773437 1.68344L5.35344 6.27344L0.773437 10.8634L2.18344 12.2734L8.18344 6.27344L2.18344 0.273437L0.773437 1.68344Z" fill="black" fillOpacity="0.54"/>
                            </svg></span>
                        </div>
                        <div>
                            <ul 
                                id="sub_menu_2"
                                className={ showSubMenu && elementID === "sub_menu_2" ? styles.switch_submenu_on : styles.switch_submenu_off}
                            >
                                <li className={styles.sub_list_item}>
                                    <div
                                        id="sub_menu_list_3" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_3", "Certificates")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_3" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{`Certificates`}</span>
                                    </div>
                                </li>
                                <li className={styles.sub_list_item}>
                                    <div
                                        id="sub_menu_list_4" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_4", "Payments")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_4" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{`Payments`}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={ styles.list_item_sub }>
                        <div
                            id="main_menu_3"
                            onClick={(e) => handleShowSubMenu(e, "sub_menu_3", "main_menu_3")}
                            className={ showSubMenu && elementID === "sub_menu_3" ? styles.menu_higlighed : styles.menu_not_higlighed }
                        >
                            <span className={styles.list_submenu_span_img}>{ forum }</span>
                            <span className={styles.list_submenu_span}>{`Forums`}</span>
                            <span className={styles.list_submenu_arrow_3}><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.773437 1.68344L5.35344 6.27344L0.773437 10.8634L2.18344 12.2734L8.18344 6.27344L2.18344 0.273437L0.773437 1.68344Z" fill="black" fillOpacity="0.54"/>
                            </svg></span>
                        </div>
                        <div>
                            <ul 
                                id="sub_menu_3"
                                className={ showSubMenu && elementID === "sub_menu_3" ? styles.switch_submenu_on : styles.switch_submenu_off}
                            >
                                <li className={styles.sub_list_item}>
                                    <div
                                        id="sub_menu_list_5" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_5", "All Forums")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_5" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{`All Forums`}</span>
                                    </div>
                                </li>
                                <li className={styles.sub_list_item}>
                                    <div
                                        id="sub_menu_list_6" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_6", "Blog")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_6" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{`Blog`}</span>
                                    </div>
                                </li>
                                <li className={styles.sub_list_item}>
                                    <div
                                        id="sub_menu_list_7" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_7", "Opportunities")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_7" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{`Opportunities`}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={ styles.list_item_sub }>
                        <div
                            id="main_menu_4"
                            onClick={(e) => handleShowSubMenu(e, "sub_menu_4", "main_menu_4")}
                            className={ showSubMenu && elementID === "sub_menu_4" ? styles.menu_higlighed : styles.menu_not_higlighed }
                        >
                            <span className={styles.list_submenu_span_img}>{ leaderboard }</span>
                            <span className={styles.list_submenu_span}>{`LeaderBoard`}</span>
                            <span className={styles.list_submenu_arrow_4}><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.773437 1.68344L5.35344 6.27344L0.773437 10.8634L2.18344 12.2734L8.18344 6.27344L2.18344 0.273437L0.773437 1.68344Z" fill="black" fillOpacity="0.54"/>
                            </svg></span>
                        </div>
                        <div>
                            <ul 
                                id="sub_menu_4"
                                className={ showSubMenu && elementID === "sub_menu_4" ? styles.switch_submenu_on : styles.switch_submenu_off}>
                                <li className={styles.sub_list_item}>
                                    <div
                                        id="sub_menu_list_8" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_8", "General Ranking")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_8" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{`General Ranking`}</span>
                                    </div>
                                </li>
                                <li className={styles.sub_list_item}>
                                    <div
                                        id="sub_menu_list_9" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_9", "Referral Ranking")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_9" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{`Referral Ranking`}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                    </li>
                    <li className={ styles.list_item_sub }>
                        <div
                            id="main_menu_5"
                            onClick={(e) => handleShowSubMenu(e, "sub_menu_5", "main_menu_5")}
                            className={ showSubMenu && elementID === "sub_menu_5" ? styles.menu_higlighed : styles.menu_not_higlighed }
                        >
                            <span className={styles.list_submenu_span_img}>{ project }</span>
                            <span className={styles.list_submenu_span}>{`Projects`}</span>
                            <span className={styles.list_submenu_arrow_5}><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.773437 1.68344L5.35344 6.27344L0.773437 10.8634L2.18344 12.2734L8.18344 6.27344L2.18344 0.273437L0.773437 1.68344Z" fill="black" fillOpacity="0.54"/>
                            </svg></span>
                        </div>
                        <div>
                            <ul 
                                id="sub_menu_5"
                                className={ showSubMenu && elementID === "sub_menu_5" ? styles.switch_submenu_on : styles.switch_submenu_off}>
                                <li className={styles.sub_list_item}>
                                    <div
                                        id="sub_menu_list_10" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_10", "Project Idea")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_10" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{`Project Idea`}</span>
                                        </div>
                                    </li>
                                <li className={styles.sub_list_item}>
                                    <div
                                        id="sub_menu_list_11" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_11", "Project Report")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_11" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{`Project Report`}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={ styles.list_item_ }>
                        <span className={ styles.list_span_img_ }>{ personalIssue }</span>
                        <span className={ styles.list_span_ }>{`Personal Issues`}</span>
                    </li>
                    <li className={ styles.list_item_ }>
                        <span className={ styles.list_span_img_ }>{ coach }</span>
                        <span className={ styles.list_span_ }>{`Coaches`}</span>
                    </li>
                    <li className={ styles.list_item_sub }>
                        <div
                            id="main_menu_6"
                            onClick={(e) => handleShowSubMenu(e, "sub_menu_6", "main_menu_6")}
                            className={ showSubMenu && elementID === "sub_menu_6" ? styles.menu_higlighed : styles.menu_not_higlighed }    
                        >
                            <span className={styles.list_submenu_span_img}>{ lesson }</span>
                            <span className={styles.list_submenu_span}>{`Lessons`}</span>
                            <span className={styles.list_submenu_arrow_6}><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.773437 1.68344L5.35344 6.27344L0.773437 10.8634L2.18344 12.2734L8.18344 6.27344L2.18344 0.273437L0.773437 1.68344Z" fill="black" fillOpacity="0.54"/>
                            </svg></span>
                        </div>
                        <div>
                            <ul 
                                id="sub_menu_6"
                                className={ showSubMenu && elementID === "sub_menu_6" ? styles.switch_submenu_on : styles.switch_submenu_off}>
                                <li className={styles.sub_list_item}>
                                    <div
                                        id="sub_menu_list_12" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_12", "Lesson Bank")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_12" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{`Lesson Bank`}</span>
                                    </div>
                                </li>
                                <li className={styles.sub_list_item}>
                                    <div
                                        id="sub_menu_list_13" 
                                        onClick={(e) => handleSubMenuClick(e, "sub_menu_list_13", "Daily Lesson")}
                                        className={ changeSubmenuColor && idSubMenu === "sub_menu_list_13" ?  styles.change_submenu_color_on : styles.change_submenu_color_off}
                                    >
                                        <span>{`Daily Lesson`}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={ styles.list_item_ }>
                        <span className={ styles.list_span_img_ }>{ scoring }</span>
                        <span className={ styles.list_span_ }>{`Scoring`}</span>
                    </li>
                    <li className={ styles.list_item_ }>
                        <span className={ styles.list_span_img_ }>{ mentor }</span>
                        <span className={ styles.list_span_ }>{`Mentors`}</span>
                    </li>
                    <li className={ styles.list_item_ }>
                        <span className={ styles.list_span_img_ }>{ announcement }</span>
                        <span className={ styles.list_span_ }>{`Announcements`}</span>
                    </li>
                    <li className={ styles.list_item_ }>
                        <span className={ styles.list_span_img_ }>{ adMgt }</span>
                        <span className={ styles.list_span_ }>{`Ad Management`}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}


export default Menu;