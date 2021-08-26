(this["webpackJsonpmusic-player-webapp"]=this["webpackJsonpmusic-player-webapp"]||[]).push([[0],{18:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),r=a(12),s=a.n(r),i=a(4),o=a.n(i),l=a(6),u=a(3),p=a(8),d=(a(18),a(7)),b=a(5),j=a(0),h=function(e){var t=e.audioRef,a=e.currentSong,c=e.isPlaying,n=e.setIsPlaying,r=e.songs,s=e.setSongInfo,i=e.songInfo,p=e.setCurrentSong,h=e.setSongs,m=function(e){var t=r.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{active:!0}):Object(u.a)(Object(u.a)({},t),{},{active:!1})}));h(t)},f=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},g=function(){var e=Object(l.a)(o.a.mark((function e(n){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r.findIndex((function(e){return e.id===a.id})),"skip-forward"!==n){e.next=5;break}return e.next=4,p(r[(s+1)%r.length]);case 4:m(r[(s+1)%r.length]);case 5:if("skip-back"!==n){e.next=15;break}if((s-1)%r.length!==-1){e.next=12;break}return e.next=9,p(r[r.length-1]);case 9:return m(r[r.length-1]),c&&t.current.play(),e.abrupt("return");case 12:return e.next=14,p(r[(s-1)%r.length]);case 14:m(r[(s-1)%r.length]);case 15:c&&t.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(j.jsxs)("div",{className:"player",children:[Object(j.jsxs)("div",{className:"time-control",children:[Object(j.jsx)("p",{children:f(i.currentTime)}),Object(j.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(a.color[0],", ").concat(a.color[1],")")},className:"track",children:[Object(j.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,onChange:function(e){t.current.currentTime=e.target.value,s(Object(u.a)(Object(u.a)({},i),{},{currentTime:e.target.value}))},type:"range"}),Object(j.jsx)("div",{style:v,className:"animate-track"})]}),Object(j.jsx)("p",{children:i.duration?f(i.duration):"0:00"})]}),Object(j.jsxs)("div",{className:"play-control",children:[Object(j.jsx)(d.a,{size:"2x",onClick:function(){g("skip-back")},className:"skip-back",icon:b.a}),Object(j.jsx)(d.a,{size:"2x",onClick:function(){c?(t.current.pause(),n(!c)):(t.current.play(),n(!c))},className:"play",icon:c?b.d:b.e}),Object(j.jsx)(d.a,{size:"2x",onClick:function(){g("skip-forward")},className:"skip-forward",icon:b.b})]})]})},m=function(e){var t=e.currentSong;return Object(j.jsxs)("div",{className:"song-container",children:[Object(j.jsx)("img",{src:t.cover,alt:t.name}),Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("h3",{children:t.artist})]})},f=function(e){var t=e.song,a=e.songs,c=e.setCurrentSong,n=e.audioRef,r=e.isPlaying,s=e.setSongs,i=function(){var e=Object(l.a)(o.a.mark((function e(){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:i=a.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{active:!0}):Object(u.a)(Object(u.a)({},e),{},{active:!1})})),s(i),r&&n.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{onClick:i,className:"library-song ".concat(t.active?"selected":""),children:[Object(j.jsx)("img",{src:t.cover,alt:t.name}),Object(j.jsxs)("div",{className:"song-description",children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsx)("h4",{children:t.artist})]})]})},g=function(e){var t=e.audioRef,a=e.songs,c=e.setCurrentSong,n=e.isPlaying,r=e.setSongs,s=e.libraryStatus;return Object(j.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(j.jsx)("h2",{children:"Library"}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"library-songs",children:a.map((function(e){return Object(j.jsx)(f,{songs:a,setCurrentSong:c,song:e,audioRef:t,isPlaying:n,setSongs:r},e.id)}))})]})},v=function(e){var t=e.libraryStatus,a=e.setLibraryStatus;return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:"Waves"}),Object(j.jsxs)("button",{onClick:function(){a(!t)},children:["Library",Object(j.jsx)(d.a,{icon:b.c})]})]})},O=a(27);var x=function(){return[{name:"Caravan",cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",artist:"goosetaf, The Field Tapes, Makzo",audio:"https://mp3.chillhop.com/serve.php/?mp3=20122",color:["#C7AADA","#E6BDB3"],id:Object(O.a)(),active:!0},{name:"What If I Told You",cover:"https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",artist:"Juan Rios",audio:"https://mp3.chillhop.com/serve.php/?mp3=21649",color:["#3B1C3C","#FFE4B7"],id:Object(O.a)(),active:!1},{name:"Dreamstate",cover:"https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",artist:"Toonorth",audio:"https://mp3.chillhop.com/serve.php/?mp3=17947",color:["#9FA0FC","#384C69"],id:Object(O.a)(),active:!1},{name:"Travelbag",cover:"https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",artist:"mommy, Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=19058",color:["#5C8DCF","#393722"],id:Object(O.a)(),active:!1},{name:"Toddle",cover:"https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/60bdce340c4f5aea948e0b55_chillcards-p-500.png",artist:"oddfish",audio:"https://mp3.chillhop.com/serve.php/?mp3=16185",color:["#D74B4A","#157873"],id:Object(O.a)(),active:!1},{name:"Perspective",cover:"https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",artist:"fantompower",audio:"https://mp3.chillhop.com/serve.php/?mp3=22794",color:["#724176","#C8DBE1"],id:Object(O.a)(),active:!1},{name:"Wish",cover:"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",artist:"SwuM",audio:"https://mp3.chillhop.com/serve.php/?mp3=15230",color:["#D4A87F","#764635"],id:Object(O.a)(),active:!1},{name:"Cascade",cover:"https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",artist:"Knowmadic",audio:"https://mp3.chillhop.com/serve.php/?mp3=13092",color:["#82D3A9","#EDA04E"],id:Object(O.a)(),active:!1}]};var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(!1),a=Object(p.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(x()),i=Object(p.a)(s,2),d=i[0],b=i[1],f=Object(c.useState)(d[0]),O=Object(p.a)(f,2),y=O[0],S=O[1],k=Object(c.useState)(!1),w=Object(p.a)(k,2),C=w[0],N=w[1],T=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),P=Object(p.a)(T,2),I=P[0],A=P[1],D=function(e){var t=e.target.currentTime,a=e.target.duration,c=Math.round(t),n=Math.round(a),r=Math.round(c/n*100);A(Object(u.a)(Object(u.a)({},I),{},{currentTime:t,duration:a,animationPercentage:r}))},M=function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=d.findIndex((function(e){return e.id===y.id})),t.next=3,S(d[(a+1)%d.length]);case 3:C&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App ".concat(n?"library-active":""),children:[Object(j.jsx)(v,{libraryStatus:n,setLibraryStatus:r}),Object(j.jsx)(m,{currentSong:y}),Object(j.jsx)(h,{audioRef:e,isPlaying:C,setIsPlaying:N,currentSong:y,setCurrentSong:S,songInfo:I,setSongInfo:A,songs:d,setSongs:b}),Object(j.jsx)(g,{audioRef:e,songs:d,setCurrentSong:S,isPlaying:C,setSongs:b,libraryStatus:n}),Object(j.jsx)("audio",{onEnded:M,onTimeUpdate:D,onLoadedMetadata:D,ref:e,src:y.audio})]})};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.a854409a.chunk.js.map