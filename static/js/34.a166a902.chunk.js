"use strict";(self.webpackChunksozset=self.webpackChunksozset||[]).push([[34],{2034:function(s,e,t){t.r(e),t.d(e,{default:function(){return L}});var r=t(1413),i=t(2791),n=t(8687),u=t(7781),o="ProfileInfo_descriptionBlock__gYLFC",a=t(1026),c=t(9439),l=t(184),d=function(s){var e=(0,i.useState)(!1),t=(0,c.Z)(e,2),r=t[0],n=t[1],u=(0,i.useState)(s.status),o=(0,c.Z)(u,2),a=o[0],d=o[1];(0,i.useEffect)((function(){d(s.status)}),[s.status]);return(0,l.jsxs)("div",{children:[!r&&(0,l.jsx)("div",{children:(0,l.jsx)("span",{onDoubleClick:function(){n(!0)},children:s.status||"--------"})}),r&&(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:"\u0421\u0422\u0410\u0422\u0423\u0421"}),(0,l.jsx)("input",{onChange:function(s){d(s.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),s.updateStatus(a)},value:a})]})]})},f=t(5671),h=t(3144),j=t(136),x=t(516),p=(i.Component,function(s){return s.userProfile?(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)("div",{children:s.userProfile.userId}),(0,l.jsx)("img",{src:s.userProfile.photos.large,alt:"logo"}),(0,l.jsx)(d,{status:s.status,updateStatus:s.updateStatus}),(0,l.jsx)("div",{children:s.userProfile.aboutMe})," aboutMe",(0,l.jsx)("div",{children:s.userProfile.contacts.facebook}),(0,l.jsx)("div",{children:s.userProfile.contacts.website}),(0,l.jsx)("div",{children:s.userProfile.contacts.vk}),(0,l.jsx)("div",{children:s.userProfile.contacts.twitter}),(0,l.jsx)("div",{children:s.userProfile.contacts.instagram}),(0,l.jsx)("div",{children:s.userProfile.contacts.youtube}),(0,l.jsx)("div",{children:s.userProfile.contacts.github}),(0,l.jsx)("div",{children:s.userProfile.contacts.mainLink}),(0,l.jsx)("div",{children:s.userProfile.lookingForAJob}),(0,l.jsx)("div",{children:s.userProfile.lookingForAJobDescription}),(0,l.jsx)("div",{children:s.userProfile.fullName})]})}):(0,l.jsx)(a.Z,{})}),v=t(6070),P=t(3433),g="MyPosts_postsBlock__OFhjg",m="MyPosts_posts__LV+RI",b="Post_item__EsrbM",k=function(s){return(0,l.jsxs)("div",{className:b,children:[(0,l.jsx)("img",{src:"https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg"}),s.message,(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:" Like"})," ",s.like]})]})},S=t(6139),_=t(704),Z=t(5304),C=t(3976),w=(0,Z.e)(10),I=(0,_.Z)({form:"posts"})((function(s){return(0,l.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,l.jsx)(S.Z,{placeholder:"Enter your post",name:"newPostText",component:C.gx,validate:[Z.C,w]}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{children:"Add post"})})]})})),M=(0,i.memo)((function(s){var e=(0,P.Z)(s.posts).reverse().map((function(s){return(0,l.jsx)(k,{message:s.message,like:s.like})}));return(0,l.jsxs)("div",{className:g,children:[(0,l.jsx)("h3",{children:"My posts"}),(0,l.jsxs)("div",{children:["\u041f\u0440\u0438\u0432\u0435\u0442!",(0,l.jsx)(I,{onSubmit:function(e){s.addPost(e.newPostText)}})]}),(0,l.jsx)("div",{className:m,children:e})]})})),N=(t(8482),(0,n.$j)((function(s){return{posts:s.profilePage.posts}}),(function(s){return{addPost:function(e){s((0,v.t2)(e))}}}))(M)),y=function(s){return(0,l.jsxs)("div",{children:[(0,l.jsx)(p,{userProfile:s.userProfile,status:s.status,updateStatus:s.updateStatus}),(0,l.jsx)(N,{})]})},A=t(9860),F=(t(6797),t(7689)),E=t(1548);var L=(0,u.qC)((0,n.$j)((function(s){return{userProfile:s.profilePage.userProfile,status:s.profilePage.status,autorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:v.et,getStatus:v.lR,updateStatus:v.Nf}),A.Z,E.D)((function(s){var e=(0,F.UO)().userId;return e||(e=2),(0,i.useEffect)((function(){s.getUserProfile(e),s.getStatus(e)}),[e]),(0,l.jsx)("div",{children:(0,l.jsx)(y,(0,r.Z)((0,r.Z)({},s),{},{userProfile:s.userProfile,status:s.status,updateStatus:s.updateStatus}))})}))}}]);
//# sourceMappingURL=34.a166a902.chunk.js.map