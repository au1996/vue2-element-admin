import{a4 as e,a5 as s,a6 as a,b as l,f as o,X as r,V as u,c as n,a as t,$ as d,M as i,y as p,I as c,a7 as m,K as f}from"./vue.8cbfb56d.js";import{I as v}from"./element-plus.6e88cc1a.js";import{s as g,a as y}from"./index.e456f7b5.js";import{u as b}from"./user.f3311df0.js";const w=m();e("data-v-746f209e");const _={class:"login-wrap"},k={class:"login-content"},V=t("div",{class:"login-title"},"系统登录",-1),h=t("i",{class:"el-icon-s-custom"},null,-1),j={class:"login-btn"},x=f("登录"),C=t("p",{class:"login-tips"},"用户名: admin 密码: 123",-1),I=t("p",{class:"login-tips"},"用户名: editor 密码: 456",-1);s();const K={expose:[],setup(e){const s=a(),m=l(!1),f=l(null),K=l(!0),q=l("password"),U=o({username:"",password:""}),M=o({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),X=()=>{K.value?q.value="text":q.value="password",K.value=!K.value},$=async()=>{f.value.validate((e=>{e?(m.value=!0,b(U).then((e=>{e.token?(g(e.token),y(e.role),s.push("/"),v({type:"success",message:e.message})):v.error(e.message)})).finally((()=>{m.value=!1}))):v.error("请输入用户名和密码")}))};return w(((e,s)=>{const a=r("el-input"),l=r("el-form-item"),o=r("el-button"),v=r("el-form");return u(),n("div",_,[t("div",k,[V,t(v,{ref:f,class:"login-form",model:d(U),rules:d(M),"status-icon":""},{default:w((()=>[t(l,{prop:"username"},{default:w((()=>[t(a,{modelValue:d(U).username,"onUpdate:modelValue":s[1]||(s[1]=e=>d(U).username=e),placeholder:"用户名"},{prepend:w((()=>[h])),_:1},8,["modelValue"])])),_:1}),t(l,{prop:"password"},{default:w((()=>[t(a,{modelValue:d(U).password,"onUpdate:modelValue":s[2]||(s[2]=e=>d(U).password=e),placeholder:"密码",type:q.value,onKeyup:i($,["enter"])},{prepend:w((()=>[p(t("i",{class:"el-icon-lock",onClick:X},null,512),[[c,K.value]]),p(t("i",{class:"el-icon-unlock",onClick:X},null,512),[[c,!K.value]])])),_:1},8,["modelValue","type","onKeyup"])])),_:1}),t("div",j,[t(o,{type:"primary",loading:m.value,onClick:$},{default:w((()=>[x])),_:1},8,["loading"])]),C,I])),_:1},8,["model","rules"])])])}))},__scopeId:"data-v-746f209e"};export default K;