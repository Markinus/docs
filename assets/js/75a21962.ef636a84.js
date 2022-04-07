"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[6968],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,h=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(87462),r=t(67294),i=t(72389),l=t(63725),s=t(86010),o="tabItem_LplD";function d(e){var n,t,i,d=e.lazy,c=e.block,u=e.defaultValue,p=e.values,m=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,l.lx)(v,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===u?u:null!=(n=null!=u?u:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=k[0])?void 0:i.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var z=(0,l.UB)(),y=z.tabGroupChoices,b=z.setTabGroupChoices,w=(0,r.useState)(f),N=w[0],O=w[1],B=[],W=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==N&&v.some((function(e){return e.value===E}))&&O(E)}var A=function(e){var n=e.currentTarget,t=B.indexOf(n),a=v[t].value;a!==N&&(W(n),O(a),null!=m&&b(m,a))},H=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=B.indexOf(e.currentTarget)+1;t=B[a]||B[0];break;case"ArrowLeft":var r=B.indexOf(e.currentTarget)-1;t=B[r]||B[B.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},h)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return B.push(e)},onKeyDown:H,onFocus:A,onClick:A},i,{className:(0,s.Z)("tabs__item",o,null==i?void 0:i.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),d?(0,r.cloneElement)(k.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function c(e){var n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},95059:function(e,n,t){t.d(n,{ZP:function(){return o}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],s={toc:[]};function o(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Sponsor-Token erforderlich")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Weitere Informationen zum \ud83d\udc9a evcc Sponsorship gibt es ",(0,i.kt)("a",{parentName:"p",href:"/docs/sponsorship"},"hier"),"."))))}o.isMDXComponent=!0},24529:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=(t(9877),t(58215),t(95059)),s=["components"],o={sidebar_position:3},d="Fahrzeuge",c={unversionedId:"devices/vehicles",id:"devices/vehicles",title:"Fahrzeuge",description:"Um die Ladung auf einen bestimmten Ladestand (SoC) zu begrenzen, und die meisten Wallboxen diesen nicht kennen, kann evcc direkt mit dem Fahrzeug \xfcber den Fahrzeughersteller kommunizieren.",source:"@site/docs/devices/vehicles.mdx",sourceDirName:"devices",slug:"/devices/vehicles",permalink:"/docs/devices/vehicles",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/devices/vehicles.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hausinstallation",permalink:"/docs/devices/meters"},next:{title:"\xdcbersicht",permalink:"/docs/reference/overview"}},u={},p=[{value:"Audi",id:"audi",level:2},{value:"andere",id:"andere",level:3},{value:"e-tron",id:"e-tron",level:3},{value:"BMW",id:"bmw",level:2},{value:"Citroen",id:"citroen",level:2},{value:"Dacia",id:"dacia",level:2},{value:"DS",id:"ds",level:2},{value:"Fiat",id:"fiat",level:2},{value:"Ford",id:"ford",level:2},{value:"Hyundai Bluelink",id:"hyundai-bluelink",level:2},{value:"Jaguar",id:"jaguar",level:2},{value:"Kia Bluelink",id:"kia-bluelink",level:2},{value:"Land Rover",id:"land-rover",level:2},{value:"Mini",id:"mini",level:2},{value:"Nissan",id:"nissan",level:2},{value:"Leaf",id:"leaf",level:3},{value:"Leaf (pre 2019)",id:"leaf-pre-2019",level:3},{value:"NIU E-Scooter",id:"niu-e-scooter",level:2},{value:"Opel",id:"opel",level:2},{value:"Peugeot",id:"peugeot",level:2},{value:"Porsche",id:"porsche",level:2},{value:"Renault",id:"renault",level:2},{value:"Seat",id:"seat",level:2},{value:"Cupra Born, My Cupra",id:"cupra-born-my-cupra",level:3},{value:"Cupra, Mii",id:"cupra-mii",level:3},{value:"Skoda",id:"skoda",level:2},{value:"Citigo",id:"citigo",level:3},{value:"Enyaq",id:"enyaq",level:3},{value:"Smart EQ",id:"smart-eq",level:2},{value:"Tesla",id:"tesla",level:2},{value:"Volkswagen",id:"volkswagen",level:2},{value:"We Connect (legacy)",id:"we-connect-legacy",level:3},{value:"We Connect ID",id:"we-connect-id",level:3},{value:"Volvo",id:"volvo",level:2},{value:"Generische Unterst\xfctzung",id:"generische-unterst\xfctzung",level:2},{value:"manuell",id:"manuell",level:3},{value:"evNotify",id:"evnotify",level:3},{value:"Open Vehicle Monitoring System",id:"open-vehicle-monitoring-system",level:3},{value:"Tronity  \ud83d\udc9a",id:"tronity--",level:3}],m={toc:p};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fahrzeuge"},"Fahrzeuge"),(0,i.kt)("p",null,"Um die Ladung auf einen bestimmten Ladestand (SoC) zu begrenzen, und die meisten Wallboxen diesen nicht kennen, kann evcc direkt mit dem Fahrzeug \xfcber den Fahrzeughersteller kommunizieren."),(0,i.kt)("p",null,"In der Konfigurationsdatei gibt es hierzu den folgenden Bereich:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicle:\n  - name: ev\n    type: ...\n")),(0,i.kt)("p",null,"Auf dieser Seite findest du die Konfigurationen f\xfcr alle von evcc unterst\xfctzten Fahrzeuge.\nNachdem du das Code-Beispiel f\xfcr dein Fahrzeug angepasst und in die ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," \xfcbernommen hast, kannst du die Verbindung mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc vehicle")," testen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./evcc vehicle\n\nSoC:           57%\nCharge status: B\nCharged:       4.7kWh\nCapacity:      77kWh\nRange:         280km\nOdometer:      4131km\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die Qualit\xe4t und Verf\xfcgbarkeit der Fahrzeugschnittstellen variiert von Hersteller zu Hersteller. Solltest du anhaltende Probleme mit dem aktualisieren deiner Fahrzeugdaten haben melde dich bitte in den ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/discussions"},"GitHub Discussions"),"."))),(0,i.kt)("h2",{id:"audi"},"Audi"),(0,i.kt)("h3",{id:"andere"},"andere"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: audi\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WAUZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 60 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"e-tron"},"e-tron"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: etron\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WAUZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 60 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"bmw"},"BMW"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: bmw\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WBMW... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 65 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"citroen"},"Citroen"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: citroen\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"dacia"},"Dacia"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: dacia\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 27.4 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"ds"},"DS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ds\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"fiat"},"Fiat"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: fiat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: ZFAE... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 42 # Akku-Kapazit\xe4t in kWh # Optional\n    pin: # Optional \n")),(0,i.kt)("h2",{id:"ford"},"Ford"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ford\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WF0FXX... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"hyundai-bluelink"},"Hyundai Bluelink"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: hyundai\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 64 # Akku-Kapazit\xe4t in kWh # Optional\n    language: en # 'de' f\xfcr Deutsch und 'en' f\xfcr Englisch # Optional \n")),(0,i.kt)("h2",{id:"jaguar"},"Jaguar"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: jaguar-landrover\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 41.5 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"kia-bluelink"},"Kia Bluelink"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: kia\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 64 # Akku-Kapazit\xe4t in kWh # Optional\n    language: en # 'de' f\xfcr Deutsch und 'en' f\xfcr Englisch # Optional \n")),(0,i.kt)("h2",{id:"land-rover"},"Land Rover"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: jaguar-landrover\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 41.5 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"mini"},"Mini"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: mini\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WBMW... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 32 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"nissan"},"Nissan"),(0,i.kt)("h3",{id:"leaf"},"Leaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: nissan\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 60 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"leaf-pre-2019"},"Leaf (pre 2019)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: carwings\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"niu-e-scooter"},"NIU E-Scooter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: niu-e-scooter\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    serial: \n")),(0,i.kt)("h2",{id:"opel"},"Opel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: opel\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WP0... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"peugeot"},"Peugeot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: peugeot\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"porsche"},"Porsche"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: porsche\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 83.4 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"renault"},"Renault"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: renault\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WREN... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 60 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"seat"},"Seat"),(0,i.kt)("h3",{id:"cupra-born-my-cupra"},"Cupra Born, My Cupra"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: cupra\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"cupra-mii"},"Cupra, Mii"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: seat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"skoda"},"Skoda"),(0,i.kt)("h3",{id:"citigo"},"Citigo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: skoda\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"enyaq"},"Enyaq"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: enyaq\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"smart-eq"},"Smart EQ"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: smart\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 17.6 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"tesla"},"Tesla"),(0,i.kt)("p",null,"Es wird ein ",(0,i.kt)("inlineCode",{parentName:"p"},"access")," und ein ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh")," Token f\xfcr die Kommunikation mit der Tesla API erstellt werden."),(0,i.kt)("p",null,"Folgende Apps erm\xf6glichen das Erstellen von den beiden Tokens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/auth-app-for-tesla/id1552058613#?platform=iphone"},"Auth app for Tesla (iOS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=net.leveugle.teslatokens"},"Tesla Tokens (Android)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/adriankumpf/tesla_auth"},"Tesla Auth (macOS, Linux)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: tesla\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    accessToken: # Siehe https://docs.evcc.io/docs/devices/vehicles#tesla\n    refreshToken: # Siehe https://docs.evcc.io/docs/devices/vehicles#tesla\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 90 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"volkswagen"},"Volkswagen"),(0,i.kt)("h3",{id:"we-connect-legacy"},"We Connect (legacy)"),(0,i.kt)("p",null,"\xe4ltere Modelle wie e-Up, e-Golf, etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: vw\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WVWZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"we-connect-id"},"We Connect ID"),(0,i.kt)("p",null,"ID.3, ID.4 (funktioniert auch f\xfcr e-Golf, e-Up)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: id\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WVWZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"volvo"},"Volvo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: volvo\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"generische-unterst\xfctzung"},"Generische Unterst\xfctzung"),(0,i.kt)("h3",{id:"manuell"},"manuell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: custom\n    title: Mein Auto # display name for UI\n    capacity: 50 # byttery capacity (kWh)\n    soc: # battery soc (%)\n      source: # plugin type\n      # ...\n    status: # optional charge status (A..F)\n      source: # plugin type\n      # ...\n    range: # optional electric range (km)\n      source: # plugin type\n      # ...\n")),(0,i.kt)("h3",{id:"evnotify"},"evNotify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: evnotify\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    akey:\n    token:\n    capacity: 64 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"open-vehicle-monitoring-system"},"Open Vehicle Monitoring System"),(0,i.kt)("p",null,"Unterst\xfctzung f\xfcr alle Fahrzeuge via ODB2 Adapter im Fahrzeug. Mehr Infos bei ",(0,i.kt)("a",{parentName:"p",href:"http://api.openvehicles.com/"},"Open Vehicle Monitoring System"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ovms\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vehicleid:\n    capacity: 12 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"tronity--"},"Tronity  \ud83d\udc9a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: tronity\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)(l.ZP,{mdxType:"SponsorshipRequired"}))}h.isMDXComponent=!0}}]);