const translations={
en:{
navHome:"Home",navAbout:"About",navServices:"Services",navProducts:"Products",navProcess:"Our Process",navContact:"Contact",
heroEyebrow:"Integrated pest management solutions",heroTitle:'Beyond Pest Control.<br><em>Complete Protection.</em>',heroText:"Professional pest management solutions for homes and businesses, combining scientific understanding, prevention, treatment and follow-up.",request:"Request an Inspection",explore:'Explore Our Services <span>↙</span>',proofTitle:"Years of manufacturing experience",proofSub:"Through AGRO SAFE",visualTitle:"Integrated Pest Management",visualSub:"Inspect • Assess • Treat • Monitor",noteTitle:"Scientific approach",noteSub:"Solutions shaped around each site",heroBottom:"Manufacturing knowledge. Professional protection.",
trust1:"Pesticide manufacturing background",trust2:"Integrated Pest Management",trust3:"From inspection to follow-up",
aboutEyebrow:"Who we are",aboutTitle:'Manufacturing experience,<br><em>a broader vision.</em>',aboutText:"SAFE CHEM is a professional pest management company operating as part of AGRO SAFE. Building on over 20 years of pesticide manufacturing experience, we are extending that foundation into a more integrated approach focused on understanding the problem, selecting suitable solutions, prevention and follow-up.",point1:"Scientific understanding of pests and sites",point2:"Treatment plans tailored to each situation",point3:"Prevention, monitoring and follow-up",
servicesEyebrow:"Our services",servicesTitle:'Protection for <em>every space.</em>',servicesDesc:"Clear solutions for homes and facilities, starting with understanding the problem and ending with a suitable plan and follow-up.",resTitle:"Residential Pest Control",resText:"Solutions for houses, apartments, residential compounds, gardens and outdoor spaces, shaped around the site and its needs.",comTitle:"Commercial Pest Management",comText:"Programs for restaurants, cafes, hotels, offices, factories, warehouses, retail stores and other facilities.",cockroach:"Cockroaches",ants:"Ants",bedbugs:"Bed bugs",mosquito:"Mosquitoes",rodents:"Rodents",termites:"Termites",restaurants:"Restaurants & cafes",hotels:"Hotels",factories:"Factories & warehouses",offices:"Offices & retail",requestVisit:"Request a visit",
productsEyebrow:"Featured products",productsTitle:'AGRO SAFE <em>products.</em>',productsDesc:"A selection of products available for enquiry. Technical details and use must follow each product's approved label.",productPublic:"Public health pesticides",ghostDesc:"Dust formulation — Deltamethrin 0.05%.",flyDesc:"Deltamethrin 0.025% — use details subject to approved label.",ratoDesc:"Bromadiolone 0.005% — rodent control product.",productDetails:"Product details ↙",productDisclaimer:"* Packaging visuals are temporary illustrative mockups, not photographs of the original packs. Always refer to the approved label and technical documentation before use.",
processEyebrow:"Our approach",processTitle:'Five steps to a <em>considered solution.</em>',processDesc:"We do not start with a pesticide; we start by understanding the problem and selecting an appropriate response.",step1:"Inspection & identification",step1d:"Inspect the site and identify the pest and activity areas.",step2:"Assessment & diagnosis",step2d:"Understand the causes and conditions supporting the infestation.",step3:"Customized plan",step3d:"Select measures suited to the site and situation.",step4:"Professional application",step4d:"Carry out treatment according to safety procedures and product instructions.",step5:"Monitoring & follow-up",step5d:"Evaluate outcomes and determine whether follow-up is needed.",
whyEyebrow:"Why SAFE CHEM?",whyTitle:'Manufacturing knowledge.<br><em>Professional protection.</em>',why1:"Pesticide manufacturing background through AGRO SAFE",why2:"Integrated Pest Management approach",why3:"Solutions tailored to each site",why4:"Focus on prevention, monitoring and follow-up",
contactEyebrow:"Get in touch",contactTitle:'Let’s start with <em>the right solution.</em>',contactText:"Tell us about the issue or service you need. Our team can respond once official contact details are configured.",contactNote:"Phone, email and social links will be added before the final launch.",formName:"Name",formPhone:"Phone number",formType:"Request type",optResidential:"Residential service",optCommercial:"Commercial service",optProduct:"Product enquiry",formPest:"Pest problem / product",optChoose:"Choose an option",formLocation:"Location",formMessage:"Additional details",formSubmit:'Send enquiry <span>↙</span>',formHint:"Presentation demo form — connect a submission service before using it for real enquiries.",footerText:"Professional pest management — from inspection to follow-up.",rights:"All rights reserved.",productInfo:"Product information",modalWarning:"Refer to the approved product label and official technical documentation for permitted uses, application rates and safety precautions.",productEnquire:"Enquire about this product"
},
ar:{}
};
const ar={};document.querySelectorAll("[data-i18n]").forEach(el=>{ar[el.dataset.i18n]=el.innerHTML});translations.ar=ar;
let current="ar";
function setLang(lang){current=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";document.body.dir=document.documentElement.dir;document.querySelectorAll("[data-i18n]").forEach(el=>{const value=translations[lang][el.dataset.i18n];if(value!==undefined)el.innerHTML=value});document.getElementById("langToggle").textContent=lang==="ar"?"EN":"عربي";document.title=lang==="ar"?"SAFE CHEM | Part of AGRO SAFE":"SAFE CHEM | Part of AGRO SAFE"}
document.getElementById("langToggle").addEventListener("click",()=>setLang(current==="ar"?"en":"ar"));
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const products={
ghost:{title:"GHOST POWDER 0.05% DP",ar:"جوست بودر 0.05% DP",desc:"Deltamethrin 0.05%. Dust formulation. Refer to the approved product label and technical documentation for permitted uses and instructions.",ardesc:"دلتا مثرين 0.05% — مستحضر بودرة. يُرجى الرجوع إلى ملصق المنتج المعتمد والبيانات الفنية لمعرفة الاستخدامات والتعليمات."},
fly:{title:"FLY DEAD 0.025%",ar:"فلاي ديد 0.025%",desc:"Deltamethrin 0.025%. Refer to the approved product label and technical documentation for permitted uses and instructions.",ardesc:"دلتا مثرين 0.025%. يُرجى الرجوع إلى ملصق المنتج المعتمد والبيانات الفنية لمعرفة الاستخدامات والتعليمات."},
rato:{title:"RATO MAT 0.005%",ar:"راتو مات 0.005%",desc:"Bromadiolone 0.005%. Rodent control product. Use only according to the approved label and applicable safety requirements.",ardesc:"بروماديولون 0.005% — منتج لمكافحة القوارض. يُستخدم وفق الملصق المعتمد ومتطلبات السلامة ذات الصلة."}
};
const modal=document.getElementById("productModal");
document.querySelectorAll("[data-product]").forEach(btn=>btn.addEventListener("click",()=>{const p=products[btn.dataset.product];document.getElementById("modalTitle").textContent=current==="ar"?p.ar:p.title;document.getElementById("modalDescription").textContent=current==="ar"?p.ardesc:p.desc;modal.classList.add("open");modal.setAttribute("aria-hidden","false")}));
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}));
document.getElementById("modalEnquire").addEventListener("click",()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true")});
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();const msg=document.getElementById("formMessage");msg.textContent=current==="ar"?"تم تسجيل البيانات داخل هذا العرض التجريبي فقط. لبدء استقبال طلبات حقيقية، يجب ربط النموذج بخدمة إرسال أو Backend.":"This demo captured the form interaction only. Connect an email service or backend to receive real enquiries.";e.target.reset()});
setLang("ar");


// Premium scroll interactions: reveal-on-scroll, reading progress, and subtle header state.
(function(){
  const header=document.querySelector('.site-header');
  let progress=document.getElementById('scrollProgressBar');
  if(!progress){const track=document.createElement('div');track.className='scroll-progress';track.setAttribute('aria-hidden','true');progress=document.createElement('span');progress.id='scrollProgressBar';track.appendChild(progress);document.body.prepend(track)}
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets=[
    '.trust-inner>div','.about .section-intro','.about-copy','.about-points>div',
    '.section-heading','.service-card','.product-card','.process-step',
    '.why-inner>div','.contact-grid>div'
  ];
  const nodes=[...new Set(revealTargets.flatMap(selector=>Array.from(document.querySelectorAll(selector))))];
  nodes.forEach((el,index)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',`${(index%5)*85}ms`)});
  if('IntersectionObserver' in window && !reduceMotion){
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -35px 0px'});
    nodes.forEach(el=>observer.observe(el));
  }else{nodes.forEach(el=>el.classList.add('is-visible'))}
  let ticking=false;
  function updateScroll(){
    const max=document.documentElement.scrollHeight-window.innerHeight;
    const ratio=max>0?window.scrollY/max:0;
    if(progress)progress.style.width=`${Math.min(100,Math.max(0,ratio*100))}%`;
    if(header)header.classList.toggle('is-scrolled',window.scrollY>18);
    ticking=false;
  }
  window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(updateScroll);ticking=true}},{passive:true});
  updateScroll();
})();
