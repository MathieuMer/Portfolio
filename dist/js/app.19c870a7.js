(function(e){function t(t){for(var a,n,i=t[0],r=t[1],o=t[2],u=0,g=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&g.push(s[n][0]),s[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);b&&b(t);while(g.length)g.shift()();return l.push.apply(l,o||[]),c()}function c(){for(var e,t=0;t<l.length;t++){for(var c=l[t],a=!0,i=1;i<c.length;i++){var r=c[i];0!==s[r]&&(a=!1)}a&&(l.splice(t--,1),e=n(n.s=c[0]))}return e}var a={},s={app:0},l=[];function n(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=a,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(c,a,function(t){return e[t]}.bind(null,a));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var b=r;l.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},1086:function(e,t,c){e.exports=c.p+"img/rea1-tables.ef6d967a.jpg"},"2ce6":function(e,t,c){"use strict";c("9d1c")},"3df1":function(e,t,c){e.exports=c.p+"img/rea1-icon-left-font-monochrome-white2.f50ef7e6.png"},"41f7":function(e,t,c){e.exports=c.p+"img/royaume-uni.e5564902.svg"},5695:function(e,t,c){e.exports=c.p+"img/rea1-login.f1389bd9.jpg"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23"),s={id:"bloc-page"},l={id:"main"};function n(e,t,c,n,i,r){var o=Object(a["t"])("ASide"),b=Object(a["t"])("router-view");return Object(a["p"])(),Object(a["c"])("div",s,[Object(a["g"])(o),Object(a["g"])("main",l,[Object(a["g"])(b)])])}var i=c("ecba"),r=c.n(i),o={id:"sideNavigation"},b=Object(a["g"])("h1",{class:"title__name"},[Object(a["f"])(" Mathieu "),Object(a["g"])("span",{class:"title__name--color"},"MERCIER")],-1),u=Object(a["g"])("p",{class:"title__description"},"développeur web",-1),g=Object(a["g"])("img",{class:"portrait",src:r.a,alt:"Mathieu MERCIER"},null,-1),j={class:"nav__links"},_=Object(a["f"])("Accueil"),d=Object(a["f"])("Réalisations"),O=Object(a["f"])("Contact"),p=Object(a["f"])("CV"),v=Object(a["g"])("div",{class:"nav__socials"},[Object(a["g"])("a",{href:"https://github.com/MathieuMer"},[Object(a["g"])("i",{class:"fab fa-github"})]),Object(a["g"])("a",{href:"https://www.linkedin.com/in/m-mercier-dev"},[Object(a["g"])("i",{class:"fab fa-linkedin-in"})])],-1);function m(e,t,c,s,l,n){var i=Object(a["t"])("router-link");return Object(a["p"])(),Object(a["c"])("aside",o,[Object(a["g"])(i,{to:"/",class:"title"},{default:Object(a["y"])((function(){return[b,u]})),_:1}),g,Object(a["g"])("nav",null,[Object(a["g"])("ul",j,[Object(a["g"])("li",null,[Object(a["g"])(i,{to:"/",class:"/"===e.$route.path?"active":"",onClick:n.showSideNavigation},{default:Object(a["y"])((function(){return[_]})),_:1},8,["class","onClick"])]),Object(a["g"])("li",null,[Object(a["g"])(i,{to:"/realisations",class:"/realisations"===e.$route.path?"active":"",onClick:n.showSideNavigation},{default:Object(a["y"])((function(){return[d]})),_:1},8,["class","onClick"])]),Object(a["g"])("li",null,[Object(a["g"])(i,{to:"/contact",class:"/contact"===e.$route.path?"active":"",onClick:n.showSideNavigation},{default:Object(a["y"])((function(){return[O]})),_:1},8,["class","onClick"])]),Object(a["g"])("li",null,[Object(a["g"])(i,{to:"/CV",class:"/CV"===e.$route.path?"active":"",onClick:n.showSideNavigation},{default:Object(a["y"])((function(){return[p]})),_:1},8,["class","onClick"])])])]),v])}var f={name:"ASide",components:{},methods:{showSideNavigation:function(e){e.preventDefault(),this.$store.state.visibleAside&&(document.getElementById("sideNavigation").style.marginLeft="-100vw",document.getElementById("main").style.marginTop="0",document.getElementById("main").style.opacity="1",this.$store.dispatch("toggleAside").then((function(){console.log("toggle menu")})).catch((function(e){console.log(e)})))}}};f.render=m;var h=f,S={components:{ASide:h},data:function(){return{}},methods:{}};c("2ce6");S.render=n;var y=S,x=c("6c02"),C={class:"bloc-accueil"},w=Object(a["g"])("div",{class:"bloc-accueil__titre"},[Object(a["g"])("p",null,[Object(a["g"])("span",{class:"bloc-accueil__titre--span1"},"Bonjour,"),Object(a["g"])("br"),Object(a["g"])("span",{class:"bloc-accueil__titre--span2"},"je suis Mathieu,")]),Object(a["g"])("h2",null,"développeur web junior, freelance")],-1),k={class:"bloc-accueil__bouttons"},E=Object(a["f"])("REALISATIONS"),A=Object(a["f"])("CONTACT");function M(e,t,c,s,l,n){var i=Object(a["t"])("router-link");return Object(a["p"])(),Object(a["c"])("div",C,[w,Object(a["g"])("div",k,[Object(a["g"])(i,{class:"bloc-accueil__bouttons__item",to:"/realisations"},{default:Object(a["y"])((function(){return[E]})),_:1}),Object(a["g"])(i,{class:"bloc-accueil__bouttons__item",to:"/contact"},{default:Object(a["y"])((function(){return[A]})),_:1})])])}var R={name:"Accueil",components:{}};R.render=M;var P=R,T={class:"rea__container"},q=Object(a["g"])("div",{class:"rea__entete rea__bloc"},[Object(a["g"])("h2",null,"Réalisations")],-1),L={class:"rea__bloc rea__container__miniatures"},V=Object(a["g"])("h3",null,"Groupomania",-1),N=Object(a["g"])("h3",null,"Portfolio",-1),J=Object(a["g"])("h3",null,"OhMyfood",-1),G=Object(a["g"])("h3",null,"So Peckoko",-1);function B(e,t,c,s,l,n){var i=Object(a["t"])("rea1"),r=Object(a["t"])("rea2"),o=Object(a["t"])("rea3"),b=Object(a["t"])("rea4");return Object(a["p"])(),Object(a["c"])("div",T,[q,Object(a["g"])("div",L,[Object(a["g"])("div",{class:["rea__miniature rea1__miniature",1==l.showRea?"active":""],onClick:t[1]||(t[1]=function(e){return l.showRea=1})},[V],2),Object(a["g"])("div",{class:["rea__miniature rea2__miniature",2==l.showRea?"active":""],onClick:t[2]||(t[2]=function(e){return l.showRea=2})},[N],2),Object(a["g"])("div",{class:["rea__miniature rea3__miniature",3==l.showRea?"active":""],onClick:t[3]||(t[3]=function(e){return l.showRea=3})},[J],2),Object(a["g"])("div",{class:["rea__miniature rea4__miniature",4==l.showRea?"active":""],onClick:t[4]||(t[4]=function(e){return l.showRea=4})},[G],2)]),1===l.showRea?(Object(a["p"])(),Object(a["c"])(i,{key:0})):Object(a["d"])("",!0),2===l.showRea?(Object(a["p"])(),Object(a["c"])(r,{key:1})):Object(a["d"])("",!0),3===l.showRea?(Object(a["p"])(),Object(a["c"])(o,{key:2})):Object(a["d"])("",!0),4===l.showRea?(Object(a["p"])(),Object(a["c"])(b,{key:3})):Object(a["d"])("",!0)])}var I=c("3df1"),D=c.n(I),U=c("5695"),F=c.n(U),z=c("6410"),$=c.n(z),W=c("1086"),H=c.n(W),Q={class:"rea1__container rea__bloc"},X=Object(a["g"])("h3",{class:"rea1__titre"},"Réseau Social d'entreprise: Groupomania",-1),K=Object(a["g"])("h4",{class:"rea1__sous-titre"},"Conception Front-end et Back-end",-1),Y=Object(a["g"])("img",{class:"rea1__logo",src:D.a,alt:"logo groupomania"},null,-1),Z=Object(a["g"])("div",{class:"rea1__technos"},[Object(a["g"])("ul",{class:"rea1__technos__container"},[Object(a["g"])("li",null,"HTML"),Object(a["g"])("li",null,"SCSS"),Object(a["g"])("li",null,"VueJS"),Object(a["g"])("li",null,"NodeJS"),Object(a["g"])("li",null,"MySQL"),Object(a["g"])("li",null,"BootstrapVue")])],-1),ee=Object(a["g"])("div",{class:"rea1__description"},[Object(a["g"])("p",null,[Object(a["f"])(" Dernier projet du parcours Développeur Web d'Openclassrooms, consistant à développer entièrement la MVP d'un réseau social d'entreprise. A partir d'un cahier des charges, il a fallu respecter les besoins du client, dont le but était principalement d'améliorer l'ambiance et les relations entres tous les employés de l'entreprise. "),Object(a["g"])("br"),Object(a["g"])("br"),Object(a["f"])(" Fonctionnalitées implémentées : "),Object(a["g"])("br"),Object(a["g"])("br")]),Object(a["g"])("div",{class:"rea1__description__listes"},[Object(a["g"])("ul",null,[Object(a["g"])("li",null,"Création de compte / Login"),Object(a["g"])("li",null,"Poster un message texte et/ou image"),Object(a["g"])("li",null,"Preview du post avant envoi"),Object(a["g"])("li",null,"Edition et suppression du message par son auteur")]),Object(a["g"])("ul",null,[Object(a["g"])("li",null,"Système de commentaires"),Object(a["g"])("li",null,"Système de signalements des messages et commentaires"),Object(a["g"])("li",null,"Panneau de modération pour les utilisateurs ayant les droits"),Object(a["g"])("li",null,"Possibilité de supprimer son compte")])]),Object(a["g"])("p",null,[Object(a["g"])("br"),Object(a["f"])(" Technologies utilisées :"),Object(a["g"])("br"),Object(a["g"])("br"),Object(a["f"])(" La partie backend du projet est conçu avec NodeJS / Express."),Object(a["g"])("br"),Object(a["f"])(" Pour le frontend, j'ai utilisé le framework VueJS, avec VueX et Vue router."),Object(a["g"])("br"),Object(a["f"])(" La base de données MySQL a été créée en utilisant l'ORM Sequelize."),Object(a["g"])("br"),Object(a["f"])(" Utilisation de la bibliothèque Axios pour les appels API. ")])],-1),te=Object(a["g"])("div",{class:"rea1__caroussel"},[Object(a["g"])("div",{id:"carouselRea1",class:"carousel slide","data-bs-ride":"carousel"},[Object(a["g"])("div",{class:"carousel-indicators"},[Object(a["g"])("button",{type:"button","data-bs-target":"#carouselRea1","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),Object(a["g"])("button",{type:"button","data-bs-target":"#carouselRea1","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(a["g"])("button",{type:"button","data-bs-target":"#carouselRea1","data-bs-slide-to":"2","aria-label":"Slide 3"})]),Object(a["g"])("div",{class:"carousel-inner"},[Object(a["g"])("div",{class:"carousel-item active"},[Object(a["g"])("img",{src:F.a,class:"d-block",alt:"page login groupomania"}),Object(a["g"])("div",{class:"carousel-caption d-none d-md-block"},[Object(a["g"])("h5",null,"Page d'accueil")])]),Object(a["g"])("div",{class:"carousel-item"},[Object(a["g"])("img",{src:$.a,class:"d-block",alt:"timeline groupomania"}),Object(a["g"])("div",{class:"carousel-caption d-none d-md-block"},[Object(a["g"])("h5",{class:"black-color"},"Timeline")])]),Object(a["g"])("div",{class:"carousel-item"},[Object(a["g"])("img",{src:H.a,class:"d-block",alt:"tables mySQL"}),Object(a["g"])("div",{class:"carousel-caption d-none d-md-block"},[Object(a["g"])("h5",null,"Base de données mySQL")])])]),Object(a["g"])("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselRea1","data-bs-slide":"prev"},[Object(a["g"])("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(a["g"])("span",{class:"visually-hidden"},"Previous")]),Object(a["g"])("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselRea1","data-bs-slide":"next"},[Object(a["g"])("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(a["g"])("span",{class:"visually-hidden"},"Next")])])],-1),ce=Object(a["g"])("div",{class:"rea1__repo"},[Object(a["g"])("a",{href:"https://github.com/MathieuMer/Projet_7_Groupomania"},[Object(a["g"])("p",null,"Voir le repository sur Github"),Object(a["g"])("i",{class:"fab fa-github"})])],-1);function ae(e,t,c,s,l,n){return Object(a["p"])(),Object(a["c"])("div",Q,[X,K,Y,Z,ee,te,ce])}var se={name:"rea1",components:{}};se.render=ae;var le=se,ne={class:"rea2__container rea__bloc"},ie=Object(a["e"])('<h3 class="rea2__titre">Portfolio</h3><h4 class="rea2__sous-titre">Réalisation de ce portfolio avec le framework Vue JS</h4><div class="rea2__technos"><ul class="rea2__technos__container"><li>HTML</li><li>SCSS</li><li>VueJS</li><li>JavaScript</li></ul></div><div class="rea2__description"><p> Dès la fin de la formation de Développeur Web avec Openclassrooms, j&#39;ai décidé de construire ce portfolio.<br> Ce site a été conçu en utilisant le framework javascript VUE. En plus d&#39;afficher mes réalisations, j&#39;y ai aussi ajouté un formulaire de contact avec emailJS, et une page dédiée à mon CV.<br> Utilisation de SCSS et SASS pour la gestion du style et des @media-querries.<br><br></p></div><div class="rea2__repo"><a href="https://github.com/MathieuMer/Portfolio"><p>Voir le repository sur Github</p><i class="fab fa-github"></i></a></div>',5);function re(e,t,c,s,l,n){return Object(a["p"])(),Object(a["c"])("div",ne,[ie])}var oe={name:"rea2",components:{}};oe.render=re;var be=oe,ue=c("73c2"),ge=c.n(ue),je={class:"rea3__container rea__bloc"},_e=Object(a["g"])("h3",{class:"rea3__titre"},"Application de restauration: Ohmyfood",-1),de=Object(a["g"])("h4",{class:"rea3__sous-titre"},"Création du Front-end à partir de maquettes",-1),Oe=Object(a["g"])("div",{class:"rea3__technos"},[Object(a["g"])("ul",{class:"rea3__technos__container"},[Object(a["g"])("li",null,"HTML"),Object(a["g"])("li",null,"SCSS"),Object(a["g"])("li",null,"Animations CSS")])],-1),pe=Object(a["g"])("div",{class:"rea3__description"},[Object(a["g"])("p",null,[Object(a["f"])(" Troisième projet du parcours Développeur Web d'Openclassrooms : Transformer une maquette en site web."),Object(a["g"])("br"),Object(a["f"])(" Ce projet m'a permit de découvrir et d'apprendre à utiliser SASS (variables, boucles, mixins, extend...), gérer et organiser le code SCSS, et créer mes premières animations CSS."),Object(a["g"])("br"),Object(a["g"])("br"),Object(a["g"])("br"),Object(a["g"])("img",{class:"rea4__image",src:ge.a,alt:"ohmyfood"})])],-1),ve=Object(a["g"])("div",{class:"rea3__repo"},[Object(a["g"])("a",{href:"https://mathieumer.github.io/MathieuMercier_3_22012021/"},[Object(a["g"])("p",null,"Voir le site Ohmyfood"),Object(a["g"])("i",{class:"fab fa-github"})])],-1);function me(e,t,c,s,l,n){return Object(a["p"])(),Object(a["c"])("div",je,[_e,de,Oe,pe,ve])}var fe={name:"rea3",components:{}};fe.render=me;var he=fe,Se=c("8ea1"),ye=c.n(Se),xe={class:"rea4__container rea__bloc"},Ce=Object(a["g"])("h3",{class:"rea4__titre"},"So Pekocko",-1),we=Object(a["g"])("h4",{class:"rea4__sous-titre"},"Développement backend-end",-1),ke=Object(a["g"])("div",{class:"rea4__technos"},[Object(a["g"])("ul",{class:"rea4__technos__container"},[Object(a["g"])("li",null,"NodeJS"),Object(a["g"])("li",null,"Express"),Object(a["g"])("li",null,"MongoDB")])],-1),Ee=Object(a["g"])("div",{class:"rea4__description"},[Object(a["g"])("p",null,[Object(a["f"])(" Développement backend d'une application d'avis gastronomiques concernant des sauces piquantes. "),Object(a["g"])("br"),Object(a["g"])("br")]),Object(a["g"])("div",{class:"rea4__description__listes"},[Object(a["g"])("ul",null,[Object(a["g"])("li",null,"Architecture serveur NodeJS/Express"),Object(a["g"])("li",null,"Création des routes et tests via l'outil Postman"),Object(a["g"])("li",null,"Base de données MongoDB Atlas")])]),Object(a["g"])("img",{class:"rea4__image",src:ye.a,alt:"routes soPekocko"}),Object(a["g"])("div",{class:"rea4__repo"},[Object(a["g"])("a",{href:"https://github.com/MathieuMer/P6_Mathieu_MERCIER"},[Object(a["g"])("p",null,"Voir le repository sur Github"),Object(a["g"])("i",{class:"fab fa-github"})])])],-1);function Ae(e,t,c,s,l,n){return Object(a["p"])(),Object(a["c"])("div",xe,[Ce,we,ke,Ee])}var Me={name:"rea4",components:{}};Me.render=Ae;var Re=Me,Pe={name:"Realisations",components:{rea1:le,rea2:be,rea3:he,rea4:Re},data:function(){return{showRea:0,isActive:!1}},methods:{}};Pe.render=B;var Te=Pe,qe=(c("b0c0"),Object(a["g"])("div",{class:"cv__entete div__bloc"},[Object(a["g"])("h2",null,"Contact")],-1)),Le=Object(a["g"])("div",{class:"div__bloc"},[Object(a["f"])(" Bonjour,"),Object(a["g"])("br"),Object(a["g"])("br"),Object(a["f"])(" Vous pouvez me contacter via ce petit formulaire, je vous répondrai par email le plus rapidement possible. Je peux aussi répondre par téléphone, dans ce cas laissez moi votre numéro dans le corps du message. Merci !"),Object(a["g"])("br"),Object(a["g"])("br"),Object(a["g"])("span",{class:"contact-texte--prenom"},"Mathieu")],-1),Ve=Object(a["g"])("label",null,"Nom",-1),Ne=Object(a["g"])("label",null,"Email",-1),Je=Object(a["g"])("label",null,"Message",-1),Ge=Object(a["g"])("input",{class:"submit-button",type:"submit",value:"Envoyer"},null,-1),Be={key:0,class:"contact__success"};function Ie(e,t,c,s,l,n){return Object(a["p"])(),Object(a["c"])("div",null,[qe,Le,Object(a["g"])("form",{class:"contact-form",onSubmit:t[4]||(t[4]=Object(a["A"])((function(){return n.sendEmail&&n.sendEmail.apply(n,arguments)}),["prevent"]))},[Ve,Object(a["z"])(Object(a["g"])("input",{class:"input-style","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.name=e}),type:"text",name:"user_name",required:""},null,512),[[a["w"],l.name]]),Ne,Object(a["z"])(Object(a["g"])("input",{class:"input-style","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.email=e}),type:"email",name:"user_email",required:""},null,512),[[a["w"],l.email]]),Je,Object(a["z"])(Object(a["g"])("textarea",{name:"message","onUpdate:modelValue":t[3]||(t[3]=function(e){return l.message=e}),rows:"8",required:""},null,512),[[a["w"],l.message]]),Ge],32),l.emailSent?(Object(a["p"])(),Object(a["c"])("p",Be," Merci pour votre message. Je vous répondrai dès des possible. ")):Object(a["d"])("",!0)])}var De=c("f8c5"),Ue={name:"Contact",data:function(){return{name:"",email:"",message:"",emailSent:!1}},methods:{sendEmail:function(e){var t=this;De["a"].sendForm("service_hci0lwc","template_zzcminq",e.target,"user_FpGnVlCs4brXMucs0Xs5q",{user_name:this.name,user_email:this.email,message:this.message}).then((function(e){console.log("SUCCESS!",e.status,e.text),t.emailSent=!0,t.name="",t.email="",t.message=""})).catch((function(e){console.log({error:e})}))}}};Ue.render=Ie;var Fe=Ue,ze=c("a261"),$e=c.n(ze),We=c("41f7"),He=c.n(We),Qe=c("ff95"),Xe=c.n(Qe),Ke={class:"cv__container"},Ye=Object(a["g"])("div",{class:"cv__entete div__bloc"},[Object(a["g"])("h2",null,"Curriculum Vitæ")],-1),Ze=Object(a["g"])("div",{class:"div__bloc cv__profil"},[Object(a["g"])("h3",null,"Profil"),Object(a["g"])("div",{class:"cv__bloc__item"},[Object(a["g"])("div",{class:"bloc__interne"},[Object(a["g"])("p",null,[Object(a["g"])("br"),Object(a["f"])(" Je mappelle Mathieu MERCIER, je suis né le 7 mars 1988 et je vis dans la Région pays de Loire."),Object(a["g"])("br"),Object(a["g"])("br"),Object(a["f"])(" J'ai été pendant quelques années technicien en électronique et télécommunications. Ayant travaillé dans plusieurs entreprises, avec des missions variées, j'ai appris à être rigoureux, minutieux dans mon travail, que ce ce soit en équipe ou en solo."),Object(a["g"])("br"),Object(a["g"])("br"),Object(a["f"])(" En 2020, j'ai décidé de quitter mon travail de pour me lancer dans une nouvelle aventure, et concrétiser une idée que j'avais depuis quelques années: Apprendre le développement web, et en faire mon métier."),Object(a["g"])("br"),Object(a["g"])("br"),Object(a["f"])(" Openclassrooms m'a permis de me former en ligne au métier de développeur web, et d'obtenir le titre \"Développeur web\" en juin 2021."),Object(a["g"])("br"),Object(a["g"])("br"),Object(a["f"])(" Je cherche donc activement un poste de développeur web junior, plutôt orienté front-end. En parallèle, j'ai aussi créé ma micro-entreprise, et je continue à me former et à apprendre chaque jour."),Object(a["g"])("br"),Object(a["g"])("br")])])])],-1),et=Object(a["g"])("div",{class:"cv__experiences div__bloc"},[Object(a["g"])("h3",null,"Expériences professionelles"),Object(a["g"])("div",{class:"cv__bloc__item"},[Object(a["g"])("div",{class:"bloc__interne"},[Object(a["g"])("div",{class:"cv__experience"},[Object(a["g"])("p",{class:"cv__date"},"2016-2020"),Object(a["g"])("p",{class:"cv__experience__poste"},"Technicien en téléphonie mobile."),Object(a["g"])("ul",null,[Object(a["g"])("li",null,"Réparation et remise à neuf de téléphone mobiles (Apple, Samsung)"),Object(a["g"])("li",null,"Gestion du service SWAP Apple")]),Object(a["g"])("p",{class:"cv__lieu"},"Telstore. Le Loroux Bottereau (44)")]),Object(a["g"])("div",{class:"cv__experience"},[Object(a["g"])("p",{class:"cv__date"},"2015-2016"),Object(a["g"])("p",{class:"cv__experience__poste"},"Technicien codification en électronique."),Object(a["g"])("ul",null,[Object(a["g"])("li",null,"Gestion de la base de composants SAP"),Object(a["g"])("li",null,"Codifications des nouveaux produits clients"),Object(a["g"])("li",null,"Traitement des PCN (Product Change Notification)")]),Object(a["g"])("p",{class:"cv__lieu"},"Lacroix Electronics. St Pierre Monlimart (49)")]),Object(a["g"])("div",{class:"cv__experience"},[Object(a["g"])("p",{class:"cv__date"},"2012-2015"),Object(a["g"])("p",{class:"cv__experience__poste"},"Technicien en Télécommunications."),Object(a["g"])("ul",null,[Object(a["g"])("li",null,"Déploiement et maintenance de sites GSM, TNT et FM"),Object(a["g"])("li",null,"Maintenance pylônes"),Object(a["g"])("li",null,"Audits de sites, visites techniques")]),Object(a["g"])("p",{class:"cv__lieu"},"ITAS Ouest. Thouaré-sur-loire (44)."),Object(a["g"])("p",{class:"cv__lieu"},"Groupe SNEF télécom. Cuincy (59)."),Object(a["g"])("p",{class:"cv__lieu"},"Groupe CIRCET. Arras (62).")])])])],-1),tt=Object(a["g"])("div",{class:"cv__formation div__bloc"},[Object(a["g"])("h3",null,"Formation"),Object(a["g"])("div",{class:"cv__bloc__item"},[Object(a["g"])("div",{class:"bloc__interne"},[Object(a["g"])("div",{class:"cv__diplome"},[Object(a["g"])("p",{class:"cv__date"},"2021"),Object(a["g"])("p",{class:"cv__diplome__nom"},"Titre de développeur web"),Object(a["g"])("p",{class:"cv__lieu"},"Openclassrooms")]),Object(a["g"])("div",{class:"cv__diplome"},[Object(a["g"])("p",{class:"cv__date"},"2008-2009"),Object(a["g"])("p",{class:"cv__diplome__nom"},"Licence professionnelle Technologies Avancées de l'Electronique des Communications"),Object(a["g"])("p",{class:"cv__lieu"},"Université du Littoral. CALAIS (62)")]),Object(a["g"])("div",{class:"cv__diplome"},[Object(a["g"])("p",{class:"cv__date"},"2006-2008"),Object(a["g"])("p",{class:"cv__diplome__nom"},"Brevet de Technicien Supérieur Systèmes Electroniques."),Object(a["g"])("p",{class:"cv__lieu"},"Lycée Blaise Pascal. LONGUENESSE (62)")]),Object(a["g"])("div",{class:"cv__diplome"},[Object(a["g"])("p",{class:"cv__date"},"2005-2006"),Object(a["g"])("p",{class:"cv__diplome__nom"},"BAC Sciences et Techniques Industrielles Génie Electronique."),Object(a["g"])("p",{class:"cv__lieu"},"Lycée Blaise Pascal. LONGUENESSE (62)")])])])],-1),ct=Object(a["g"])("div",{class:"cv__competences div__bloc"},[Object(a["g"])("h3",null,"Compétences"),Object(a["g"])("div",{class:"cv__bloc__item"},[Object(a["g"])("div",{class:"bloc__interne bloc__competences"},[Object(a["g"])("div",{class:"cv__techno"},[Object(a["g"])("svg",{class:"competence__html"},[Object(a["g"])("circle",{cx:"35",cy:"35",r:"35"}),Object(a["g"])("circle",{cx:"35",cy:"35",r:"35"})]),Object(a["g"])("div",{class:"cv__techno__number"},[Object(a["f"])(" 90"),Object(a["g"])("span",null,"%")]),Object(a["g"])("p",null,"HTML")]),Object(a["g"])("div",{class:"cv__techno"},[Object(a["g"])("svg",{class:"competence__css"},[Object(a["g"])("circle",{cx:"35",cy:"35",r:"35"}),Object(a["g"])("circle",{cx:"35",cy:"35",r:"35"})]),Object(a["g"])("div",{class:"cv__techno__number"},[Object(a["f"])(" 80"),Object(a["g"])("span",null,"%")]),Object(a["g"])("p",null,"CSS")]),Object(a["g"])("div",{class:"cv__techno"},[Object(a["g"])("svg",{class:"competence__js"},[Object(a["g"])("circle",{cx:"35",cy:"35",r:"35"}),Object(a["g"])("circle",{cx:"35",cy:"35",r:"35"})]),Object(a["g"])("div",{class:"cv__techno__number"},[Object(a["f"])(" 60"),Object(a["g"])("span",null,"%")]),Object(a["g"])("p",null,"JavaScript")]),Object(a["g"])("div",{class:"cv__techno"},[Object(a["g"])("svg",{class:"competence__vue"},[Object(a["g"])("circle",{cx:"35",cy:"35",r:"35"}),Object(a["g"])("circle",{cx:"35",cy:"35",r:"35"})]),Object(a["g"])("div",{class:"cv__techno__number"},[Object(a["f"])(" 60"),Object(a["g"])("span",null,"%")]),Object(a["g"])("p",null,"Vue JS")]),Object(a["g"])("div",{class:"cv__techno"},[Object(a["g"])("svg",{class:"competence__nodejs"},[Object(a["g"])("circle",{cx:"35",cy:"35",r:"35"}),Object(a["g"])("circle",{cx:"35",cy:"35",r:"35"})]),Object(a["g"])("div",{class:"cv__techno__number"},[Object(a["f"])(" 60"),Object(a["g"])("span",null,"%")]),Object(a["g"])("p",null,"Node JS")]),Object(a["g"])("div",{class:"cv__techno"},[Object(a["g"])("svg",{class:"competence__wordpress"},[Object(a["g"])("circle",{cx:"35",cy:"35",r:"35"}),Object(a["g"])("circle",{cx:"35",cy:"35",r:"35"})]),Object(a["g"])("div",{class:"cv__techno__number"},[Object(a["f"])(" 50"),Object(a["g"])("span",null,"%")]),Object(a["g"])("p",null,"Wordpress")])])])],-1),at=Object(a["g"])("div",{class:"cv__langue div__bloc"},[Object(a["g"])("h3",null,"Langues"),Object(a["g"])("div",{class:"cv__bloc__item"},[Object(a["g"])("div",{class:"bloc__interne"},[Object(a["g"])("div",{class:"cv__language"},[Object(a["g"])("div",{class:"cv__language__haut"},[Object(a["g"])("img",{class:"cv__langue__flag",src:$e.a,alt:"drapeau-france"}),Object(a["g"])("p",{class:"cv__langue__francais"},"Français (langue maternelle)")]),Object(a["g"])("div",{class:"cv__langue__progressbar"},[Object(a["g"])("div",{class:"progress__out"},[Object(a["g"])("div",{class:"progress__in progress__in--fr"}," 100% ")])])]),Object(a["g"])("div",{class:"cv__language"},[Object(a["g"])("div",{class:"cv__language__haut"},[Object(a["g"])("img",{class:"cv__langue__flag",src:He.a,alt:"drapeau-royaume-uni"}),Object(a["g"])("p",{class:"cv__langue__anglais"},"Anglais professionnel")]),Object(a["g"])("div",{class:"cv__langue__progressbar"},[Object(a["g"])("div",{class:"progress__out"},[Object(a["g"])("div",{class:"progress__in progress__in--en"}," 70% ")])])]),Object(a["g"])("div",{class:"cv__language"},[Object(a["g"])("div",{class:"cv__language__haut"},[Object(a["g"])("img",{class:"cv__langue__flag",src:Xe.a,alt:"drapeau-espagne"}),Object(a["g"])("p",{class:"cv__langue__espagnol"},"Espagnol (autodidacte depuis janvier 2020)")]),Object(a["g"])("div",{class:"cv__langue__progressbar"},[Object(a["g"])("div",{class:"progress__out"},[Object(a["g"])("div",{class:"progress__in progress__in--es"}," 60% ")])])])])])],-1),st=Object(a["g"])("div",{class:"cv__softskills div__bloc"},[Object(a["g"])("h3",null,"Soft-skills"),Object(a["g"])("div",{class:"cv__bloc__item"},[Object(a["g"])("div",{class:"bloc__interne"},[Object(a["g"])("ul",null,[Object(a["g"])("li",null,"Rigueur"),Object(a["g"])("li",null,"Autonomie"),Object(a["g"])("li",null,"Travail d'équipe"),Object(a["g"])("li",null,"Polyvalence"),Object(a["g"])("li",null,"Adaptabilitée")])])])],-1);function lt(e,t,c,s,l,n){return Object(a["p"])(),Object(a["c"])("div",Ke,[Ye,Ze,et,tt,ct,at,st])}var nt={name:"CV",components:{}};nt.render=lt;var it=nt,rt=[{path:"/",name:"accueil",component:P},{path:"/realisations",name:"Realisations",component:Te},{path:"/contact",name:"Contact",component:Fe},{path:"/CV",name:"CV",component:it},{path:"",component:P}],ot=Object(x["a"])({history:Object(x["b"])(),routes:rt,scrollBehavior:function(e,t,c){var a={top:0,behavior:"smooth"};document.getElementById("main").scrollTo(a)}}),bt=ot,ut=c("5502"),gt=Object(ut["a"])({state:{visibleAside:!1},mutations:{TOGGLE_ASIDE:function(e){e.visibleAside=!e.visibleAside}},actions:{toggleAside:function(e){var t=e.commit;t("TOGGLE_ASIDE")}},modules:{}});Object(a["b"])(y).use(gt).use(bt).mount("#app")},6410:function(e,t,c){e.exports=c.p+"img/rea1-timeline.f0e10094.jpg"},"73c2":function(e,t,c){e.exports=c.p+"img/rea3-tablette.ded127f2.jpg"},"8ea1":function(e,t,c){e.exports=c.p+"img/rea2-fonctions.19c4263d.jpg"},"9d1c":function(e,t,c){},a261:function(e,t,c){e.exports=c.p+"img/france.684cc20f.svg"},ecba:function(e,t,c){e.exports=c.p+"img/portrait.7a640dad.jpg"},ff95:function(e,t,c){e.exports=c.p+"img/espagne.7b6d1881.svg"}});
//# sourceMappingURL=app.19c870a7.js.map