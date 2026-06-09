/* =====================================================================
   ROUTE82 × Brazil — K-Beauty Distribution Proposal
   script.js — rendering + interactions. No external dependencies.
   ===================================================================== */
(function(){
  "use strict";
  const D = PROPOSAL;
  const $  = (s,c=document)=>c.querySelector(s);
  const $$ = (s,c=document)=>Array.from(c.querySelectorAll(s));

  /* ---------- trilingual helpers ---------- */
  function tri(o){
    if(!o) return "";
    return `<span class="tri"><span class="ko">${o.ko||""}</span>`+
           `<span class="en">${o.en||""}</span>`+
           `<span class="pt">${o.pt||""}</span></span>`;
  }
  function triIn(o){
    if(!o) return "";
    return `<span class="tri-inline"><span class="ko">${o.ko||""}</span>`+
           `<span class="en">${o.en||""}</span>`+
           `<span class="pt">${o.pt||""}</span></span>`;
  }
  function pick(o){
    const l = document.body.getAttribute("data-show");
    if(!o) return "";
    if(l==="all"||l==="koen"||l==="kopt") return o.ko;
    return o[l]||o.ko;
  }

  function sec(id, kicker, title, lead, inner){
    return `<section id="${id}"><div class="wrap">
      <div class="reveal">
        <span class="sec-kicker">${triIn(kicker)}</span>
        <h2 class="sec-title">${triIn(title)}</h2>
        ${lead?`<p class="sec-lead">${triIn(lead)}</p>`:""}
      </div>
      ${inner}
    </div></section>`;
  }
  const K = (ko,en,pt)=>({ko,en,pt});

  /* ===================================================================
     RENDER
     =================================================================== */
  function render(){
    let h = "";

    /* ---- WELCOME (first screen) ---- */
    h += `<section id="welcome" class="welcome">
      <div class="welcome-flag" style="background-image:url('assets/brazil_flag.png')"></div>
      <div class="welcome-veil"></div>
      <div class="wrap welcome-inner">
        <img class="welcome-logo" src="assets/route82_logo_white.png" alt="ROUTE82"
             onerror="this.src='assets/route82_logo.png'">
        <h1 class="welcome-title reveal">${triIn(D.welcome.greeting)}</h1>
        <p class="welcome-sub reveal">${triIn(D.welcome.sub)}</p>
        <div class="welcome-meta reveal">
          <span>🤝 ROUTE82 × Brazil-side Partner</span>
          <span>📅 ${pickStatic(D.meta.meeting.date)}</span>
        </div>
        <a class="welcome-scroll reveal" href="#company">${triIn(D.welcome.cta)} ↓</a>
      </div></section>`;

    /* ---- COMPANY INTRODUCTION ---- */
    const co = D.company;
    const coStats = co.stats.map(s=>`
      <div class="stat reveal" data-count="${s.value}" data-dec="${s.decimals}" data-pre="${s.prefix||''}" data-suf="${s.suffix||''}">
        <div class="num">0</div><div class="lab">${triIn(s.label)}</div>
        <span class="src" data-src="${s.tag}">${s.tag}</span></div>`).join("");
    const coGroup = co.group.map(g=>`
      <div class="card reveal">
        <div class="co-grp-name">${g.name}<span class="co-grp-region">${triIn(g.region)}</span></div>
        ${tri(g.desc)}
      </div>`).join("");
    const coBrands = co.ecosystem.brands.map(b=>`<span class="pill brand">${b}</span>`).join("");
    const coNet = co.network.map(n=>`<div class="brandtile reveal" title="${n.name}"><img loading="lazy" src="${n.logo}" alt="${n.name}"
        onerror="this.closest('.brandtile').style.display='none'"></div>`).join("");
    h += sec("company",K("회사 소개","About ROUTE82","Sobre a ROUTE82"),co.title,co.tagline,`
      <div class="panel reveal" style="margin-top:24px">${tri(co.intro)}</div>
      <div class="stats reveal" style="margin-top:22px;grid-template-columns:repeat(3,1fr)">${coStats}</div>
      <div class="reveal" style="margin-top:26px">
        <div class="subhead">${triIn(co.groupTitle)}</div>
        <div class="grid g3" style="margin-top:12px">${coGroup}</div>
      </div>
      <div class="grid g2 reveal" style="margin-top:22px">
        <div class="panel">
          <div class="subhead">${triIn(co.ecosystem.title)}</div>
          <a class="kcea-badge" href="${co.ecosystem.assoc.url}" target="_blank" rel="noopener"
             title="${co.ecosystem.assoc.name}">
            <img src="${co.ecosystem.assoc.logo}" alt="${co.ecosystem.assoc.name}"
                 onerror="this.closest('.kcea-badge').style.display='none'">
            <span class="kcea-cap">${triIn(co.ecosystem.assoc.caption)} ↗</span>
          </a>
          <p style="margin:4px 0 12px">${tri(co.ecosystem.mou)}</p>
          <figure class="mou-photo">
            <img loading="lazy" src="${co.ecosystem.mouPhoto.src}" alt="KCEA × ROUTE82 MOU"
                 onerror="this.closest('.mou-photo').style.display='none'">
            <figcaption>${triIn(co.ecosystem.mouPhoto.caption)}</figcaption>
          </figure>
          <div class="pillrow">${coBrands}</div>
        </div>
        <div class="panel">
          <div class="subhead">${triIn(co.networkTitle)}</div>
          <p style="margin:4px 0 12px">${triIn(co.networkNote)}</p>
          <div class="netwall">${coNet}</div>
        </div>
      </div>
      <p class="wb-note reveal" style="margin-top:16px">${triIn(co.factsLine)}</p>`);

    /* ---- PARTNER BRANDS (logo wall) ---- */
    const pb = D.partners;
    const pbLogos = pb.logos.map(l=>`
      <div class="brandtile reveal"><img loading="lazy" src="${l.src}" alt="${l.name}"
        onerror="this.closest('.brandtile').style.display='none'"></div>`).join("");
    h += sec("partners",K("파트너 브랜드","Partner Brands","Marcas Parceiras"),pb.title,pb.tagline,`
      <p class="sec-lead reveal" style="margin-top:-4px">${triIn(pb.note)}</p>
      <div class="brandwall reveal" style="margin-top:22px">${pbLogos}</div>
      <p class="wb-note reveal" style="margin-top:14px">${pb.logos.length} ${triIn({ko:"개 파트너 브랜드 (예시)",en:"partner brands (selection)",pt:"marcas parceiras (seleção)"})}</p>`);

    /* ---- HERO ---- */
    const hp = D.hero.points.map(p=>`<span class="chip">${triIn(p)}</span>`).join("");
    h += `<section id="hero" class="hero">
      <div class="hero-orbs"><span class="orb o1"></span><span class="orb o2"></span><span class="orb o3"></span></div>
      <div class="wrap">
        <span class="eyebrow">${triIn(D.hero.eyebrow)}</span>
        <h1 class="reveal">${triIn(D.hero.title)}</h1>
        <p class="subtitle reveal">${triIn(D.hero.subtitle)}</p>
        <div class="hero-key reveal">${tri(D.hero.keyMessage)}</div>
        <div class="hero-points reveal">${hp}</div>
        <div class="hero-meta reveal">
          <span>📅 <b>${pickStatic(D.meta.meeting.date)}</b></span>
          <span>📍 <b>${pickStatic(D.meta.meeting.place)}</b></span>
          <span>🤝 ROUTE82 × Brazil-side Partner</span>
        </div>
      </div></section>`;

    /* ---- SUMMARY ---- */
    const sc = D.summary.cards.map((c,i)=>`
      <div class="card reveal ${i%2?'alt':''}">
        <div class="ic"><svg viewBox="0 0 24 24"><path d="${c.icon}"/></svg></div>
        ${tri({ko:c.ko,en:c.en,pt:c.pt})}
      </div>`).join("");
    h += sec("summary",K("핵심 요약","Executive Summary","Resumo"),D.summary.title,null,
      `<div class="grid g3" style="margin-top:28px">${sc}</div>`);

    /* ---- MARKET ---- */
    const stats = D.market.stats.map(s=>{
      const cls = s.conf==="est" ? (s.tag==="S08"?"green":"") : "";
      return `<div class="stat ${cls} reveal" data-count="${s.value}" data-dec="${s.decimals}" data-pre="${s.prefix||''}" data-suf="${s.suffix||''}">
        <div class="num">0</div><div class="lab">${triIn(s.label)}</div>
        <span class="src" data-src="${s.tag}">${s.tag}</span></div>`;
    }).join("");
    const bars = D.market.categories.items.map(c=>`
      <div class="barrow"><span class="blab">${triIn(c)}</span>
      <div class="bartrack"><div class="barfill" data-w="${c.weight}" data-v="${c.weight}"></div></div></div>`).join("");
    const consumer = D.market.consumer.items.map(i=>`<li>${triIn(i)}</li>`).join("");
    const rcard = r=>`<div class="rcard reveal">
        <div class="rlogo-wrap"><img class="rlogo" loading="lazy" src="${r.logo}" alt="${r.name}"
          onerror="this.closest('.rlogo-wrap').classList.add('noimg')"></div>
        <div class="rname">${r.name}${r.sub?`<span class="rsub">${r.sub}</span>`:""}</div>
        <div class="rpron">🔊 ${r.pron}</div>
      </div>`;
    const offline = D.market.channels.offlineList.map(rcard).join("");
    const online  = D.market.channels.onlineList.map(rcard).join("");
    const kb      = D.market.kbeautyPresence.brands.map(x=>`<span class="pill brand">${x}</span>`).join("");
    h += sec("market",K("시장 기회","Market Opportunity","Oportunidade"),D.market.title,D.market.intro,`
      <div class="stats reveal" style="margin-top:28px">${stats}</div>
      <div class="reveal" style="margin-top:14px"><p class="sec-lead">${triIn(D.market.kbeautyNote)}</p></div>
      <div class="grid g2 reveal" style="margin-top:26px">
        <div class="panel">
          <div class="subhead">${triIn(D.market.categories.title)}</div>
          <div class="barchart">${bars}</div>
          <p style="font-size:.78rem;color:var(--ink-soft);margin-top:12px">${triIn(D.market.categories.note)}</p>
        </div>
        <div class="panel">
          <div class="subhead">${triIn(D.market.consumer.title)}</div>
          <ul class="ticklist">${consumer}</ul>
        </div>
      </div>
      <div class="grid g2 reveal" style="margin-top:20px">
        <div class="panel">
          <div class="subhead">${triIn(D.market.channels.title)}</div>
          <p style="font-weight:700;margin:6px 0">${triIn(D.market.channels.offline)}</p>
          <div class="rcardrow">${offline}</div>
          <p style="font-weight:700;margin:16px 0 6px">${triIn(D.market.channels.online)}</p>
          <div class="rcardrow">${online}</div>
          <p style="font-size:.82rem;color:var(--ink-soft);margin-top:14px">${triIn(D.market.channels.leaders)}</p>
        </div>
        <div class="panel">
          <div class="subhead">${triIn(D.market.kbeautyPresence.title)}</div>
          <div class="pillrow" style="margin-bottom:12px">${kb}</div>
          <p style="font-size:.82rem;color:var(--ink-soft)">${triIn(D.market.kbeautyPresence.note)}</p>
        </div>
      </div>`);

    /* ---- RETAIL LANDSCAPE & POSITIONING ---- */
    const rt = D.retail;
    const n3 = n => (typeof n==='string') ? n : triIn(n);
    const rtStats = rt.stats.map(s=>`
      <div class="stat ${s.hot?'hot':''} reveal" data-count="${s.value}" data-dec="${s.decimals}" data-pre="${s.prefix||''}" data-suf="${s.suffix||''}">
        <div class="num">0</div><div class="lab">${triIn(s.label)}</div>
        <span class="src" data-src="${s.tag}">${s.tag}</span></div>`).join("");
    const rtRows = rt.players.rows.map(p=>`
      <tr><td><b>${n3(p.name)}</b></td><td>${triIn(p.format)}</td>
      <td>${triIn(p.kb)} <span class="src" data-src="${p.tag}">${p.tag}</span></td></tr>`).join("");
    const rtPts = rt.positioning.points.map(p=>`
      <span class="pmpt ${p.us?'us':''}" style="left:${p.x}%;top:${100-p.y}%"><i></i><em>${n3(p.label)}</em></span>`).join("");
    const matrix = `
      <div class="posmatrix reveal">
        <span class="pm-axis pm-y-hi">▲ ${triIn(rt.positioning.axis.yhi)}</span>
        <span class="pm-axis pm-y-lo">${triIn(rt.positioning.axis.ylo)} ▼</span>
        <span class="pm-axis pm-x-lo">◀ ${triIn(rt.positioning.axis.xlo)}</span>
        <span class="pm-axis pm-x-hi">${triIn(rt.positioning.axis.xhi)} ▶</span>
        <div class="pm-grid"><span class="pm-vline"></span><span class="pm-hline"></span>${rtPts}</div>
      </div>`;
    const rtDiff = rt.positioning.diff.map(d=>`
      <div class="diffrow reveal"><span class="diffvs">${n3(d.vs)}</span><div>${triIn(d.point)}</div></div>`).join("");
    const rtLoc = rt.location.cards.map(c=>`
      <div class="panel loc-card reveal">
        <span class="loc-badge">${triIn(c.badge)}</span>
        <h4 style="margin:10px 0 6px">${n3(c.name)}${c.tag?` <span class="src" data-src="${c.tag}">${c.tag}</span>`:''}</h4>
        ${tri(c.body)}
      </div>`).join("");
    h += sec("retail",K("리테일 분석","Retail & Positioning","Varejo & Posicionamento"),rt.title,rt.intro,`
      <div class="stats reveal" style="margin-top:28px">${rtStats}</div>
      <div class="alert green reveal" style="margin-top:20px">
        <strong>${triIn(rt.whitespace.title)}</strong><br>${tri(rt.whitespace.body)}
        <p class="wb-note" style="margin-top:10px">${triIn(rt.whitespace.note)}</p>
      </div>
      <div class="reveal" style="margin-top:26px">
        <div class="subhead">${triIn(rt.players.title)}</div>
        <table class="ttable"><thead><tr>
          <th>${triIn(rt.players.headers.player)}</th>
          <th>${triIn(rt.players.headers.format)}</th>
          <th>${triIn(rt.players.headers.kbeauty)}</th></tr></thead>
          <tbody>${rtRows}</tbody></table>
        <p style="font-size:.8rem;color:var(--ink-soft);margin-top:10px">${triIn(rt.players.note)}</p>
      </div>
      <div class="alert reveal" style="margin-top:22px"><strong>${triIn(rt.atacarejo.title)}</strong><br>${tri(rt.atacarejo.body)}</div>
      <div class="reveal" style="margin-top:30px">
        <div class="subhead">${triIn(rt.positioning.title)}</div>
        <p class="sec-lead" style="margin:6px 0 16px">${triIn(rt.positioning.lead)}</p>
        ${matrix}
        <div class="subhead" style="margin-top:28px">${triIn(rt.positioning.diffTitle)}</div>
        <div class="difflist" style="margin-top:10px">${rtDiff}</div>
      </div>
      <div class="reveal" style="margin-top:30px">
        <div class="subhead">${triIn(rt.location.title)}</div>
        <p class="sec-lead" style="margin:6px 0 16px">${triIn(rt.location.lead)}</p>
        <div class="grid g3">${rtLoc}</div>
        <div class="store-map reveal" style="margin-top:18px">
          <iframe loading="lazy" src="${rt.location.mapEmbed}" title="Bom Retiro, São Paulo"></iframe>
          <div class="store-map-bar">
            <span class="smb-addr">📍 ${triIn(rt.location.mapCaption)}</span>
            <span class="smb-links"><a href="${rt.location.mapLink}" target="_blank" rel="noopener">${triIn(rt.location.mapLabel)} ↗</a></span>
          </div>
        </div>
      </div>`);

    /* ---- REGULATORY ---- */
    const rcards = D.regulatory.cards.map(c=>`
      <div class="card reveal">
        <h4>${triIn(c.title)} ${confBadge(c.conf)}</h4>
        ${tri(c.body)}
      </div>`).join("");
    const rdocs = D.regulatory.docs.items.map(i=>`<li>${triIn(i)}</li>`).join("");
    const dv = D.regulatory.delivery;
    const dvBrazil = dv.brazil.items.map(i=>`<li>${triIn(i)}</li>`).join("");
    const dvR82 = dv.route82.items.map(i=>`<li>${triIn(i)}</li>`).join("");
    const deliveryHTML = `
      <div class="delivery reveal">
        <div class="delivery-head"><span class="sec-kicker" style="background:rgba(255,255,255,.14);color:#fff;border-color:rgba(255,255,255,.25)">${triIn(dv.title)}</span>
          <p class="delivery-headline">${tri(dv.headline)}</p></div>
        <div class="delivery-cols">
          <div class="delivery-col brazil"><div class="dlabel">${triIn(dv.brazil.label)}</div><ul class="ticklist">${dvBrazil}</ul></div>
          <div class="delivery-arrow">→</div>
          <div class="delivery-col r82"><div class="dlabel">${triIn(dv.route82.label)}</div><ul class="ticklist">${dvR82}</ul></div>
        </div>
        <p class="delivery-note">${triIn(dv.note)}</p>
      </div>`;
    h += sec("regulatory",K("인증 / ANVISA","Regulatory / ANVISA","Regulatório / ANVISA"),D.regulatory.title,null,`
      <div class="alert reveal" style="margin:18px 0 22px">${tri(D.regulatory.disclaimer)}</div>
      ${deliveryHTML}
      <div class="grid g3" style="margin-top:24px">${rcards}</div>
      <div class="grid g2 reveal" style="margin-top:22px">
        <div class="panel">
          <div class="subhead">${triIn(D.regulatory.riskLegend.title)}</div>
          <div class="pillrow" style="margin:6px 0 12px">
            <span class="rbadge r-low">Low</span>
            <span class="rbadge r-medium">Medium</span>
            <span class="rbadge r-high">High</span>
            <span class="rbadge r-anvisa">ANVISA confirm</span>
          </div>
          <p style="font-size:.85rem;color:var(--ink-soft)">${triIn(D.regulatory.riskLegend.note)}</p>
        </div>
        <div class="panel">
          <div class="subhead">${triIn(D.regulatory.docs.title)}</div>
          <ul class="ticklist">${rdocs}</ul>
        </div>
      </div>`);

    /* ---- CREDENTIALS / SPECIALIST ---- */
    const sp = D.specialist;
    const certs = sp.certs.map(c=>`
      <div class="certchip ${c.state==='ready'?'ready':''}">
        <span class="cc-code">${c.code}</span><span class="cc-region">${triIn(c.region)}</span>
        <span class="cc-mark">${c.state==='ready'?'◆':'✓'}</span>
      </div>`).join("");
    const proof = sp.proof.map(p=>`<li>${triIn(p)}</li>`).join("");
    const b = sp.banner;
    const bSessions = b.sessions.map(s=>`
      <div class="bn-row"><span class="bn-who">${s.who}</span>
        <span class="bn-topic">${triIn(s.topic)}</span>
        <span class="bn-spk">${triIn(s.speaker)}</span><span class="bn-time">${s.time}</span></div>`).join("");
    const bigWords = b.big.map(w=>`<span>${w}</span>`).join("<i>·</i>");
    const bannerHTML = `
      <div class="webinar-banner">
        <div class="wb-glow"></div>
        <div class="wb-top">
          <div class="wb-partners">${b.partners.map(p=>`<span class="wb-pt">${p}</span>`).join('<i>×</i>')}</div>
          <div class="wb-live">WEBINAR<br><b>LIVE</b></div>
        </div>
        <div class="wb-kicker">${triIn(b.kicker)}</div>
        <div class="wb-big">${bigWords}</div>
        <div class="wb-sessions">${bSessions}</div>
        <div class="wb-date">${triIn(b.date)}</div>
      </div>
      <img class="webinar-img" src="assets/webinar_amazon.jpg" alt="Amazon × pingpong × ROUTE82 webinar" onload="this.previousElementSibling.style.display='none';this.style.display='block'" onerror="this.remove()">
      <p class="wb-note">${triIn(b.imageNote)}</p>`;
    h += sec("credentials",K("인증 리더십","Expertise","Expertise"),sp.title,sp.lead,`
      <div class="grid g2 reveal" style="margin-top:24px;align-items:stretch">
        <div class="panel person-card">
          <div class="person-top">
            <div class="person-avatar">KHW</div>
            <div><h3 style="margin:0">${triIn(sp.person.name)}</h3>
              <div class="person-role">${triIn(sp.person.role)}</div></div>
          </div>
          <p style="margin-top:14px">${tri(sp.person.bio)}</p>
          <div class="subhead" style="margin-top:16px">${triIn(sp.certsTitle)}</div>
          <div class="certgrid">${certs}</div>
        </div>
        <div class="panel">
          <div class="subhead">${triIn(sp.proofTitle)}</div>
          <ul class="ticklist" style="margin-bottom:18px">${proof}</ul>
          ${bannerHTML}
        </div>
      </div>
      <div class="alert green reveal" style="margin-top:22px;font-size:1rem">${tri(sp.closing)}</div>`);

    /* ---- LOGISTICS ---- */
    const nodes = D.logistics.flow.steps.map((s,i)=>{
      const arrow = i<D.logistics.flow.steps.length-1 ? `<div class="arrow">→</div>`:"";
      return `<div class="node"><div class="n">${i+1}</div><span>${triIn(s)}</span></div>${arrow}`;
    }).join("");
    const air = D.logistics.modes.air.items.map(i=>`<li>${triIn(i)}</li>`).join("");
    const sea = D.logistics.modes.sea.items.map(i=>`<li>${triIn(i)}</li>`).join("");
    const ldocs = D.logistics.docs.items.map(x=>`<span class="pill">${x}</span>`).join("");
    const trows = D.logistics.taxes.rows.map(r=>`
      <tr><td>${r.tax}</td><td>${r.range}</td><td>${triIn(r.note)}</td></tr>`).join("");
    const inco = D.logistics.incoterms.items.map(i=>`
      <div class="inco"><span class="term">${i.term}</span><div>${triIn({ko:i.ko,en:i.en,pt:i.pt})}</div></div>`).join("");
    h += sec("logistics",K("물류 & 수입","Logistics & Import","Logística"),D.logistics.title,null,`
      <div class="reveal"><div class="subhead" style="margin-top:18px">${triIn(D.logistics.flow.title)}</div>
        <div class="flow" id="flow">${nodes}</div></div>
      <div class="grid g2 reveal">
        <div class="modecol air"><h4>${triIn(D.logistics.modes.air.label)}</h4><ul class="ticklist">${air}</ul></div>
        <div class="modecol sea"><h4>${triIn(D.logistics.modes.sea.label)}</h4><ul class="ticklist">${sea}</ul></div>
      </div>
      <div class="grid g2 reveal" style="margin-top:22px">
        <div class="panel"><div class="subhead">${triIn(D.logistics.docs.title)}</div>
          <div class="pillrow">${ldocs}</div></div>
        <div class="panel"><div class="subhead">${triIn(D.logistics.incoterms.title)}</div>
          <div class="incoterms">${inco}</div></div>
      </div>
      <div class="alert green reveal" style="margin-top:14px">${tri(D.logistics.incoterms.ddpNote)}</div>
      <div class="reveal" style="margin-top:22px">
        <div class="subhead">${triIn(D.logistics.taxes.title)}</div>
        <div class="alert" style="margin:8px 0 14px">${triIn(D.logistics.taxes.note)}</div>
        <table class="ttable"><thead><tr><th>Tax</th><th>Range</th><th>Note</th></tr></thead><tbody>${trows}</tbody></table>
      </div>`);

    /* ---- CURATION ---- */
    const fl = D.curation.filterLabels;
    const filters = `
      <div class="filterbar" id="catFilter">
        <button data-f="all" class="active">${triIn(fl.all)}</button>
        <button data-f="low"><span class="rbadge r-low">${triIn(fl.low)}</span></button>
        <button data-f="medium"><span class="rbadge r-medium">${triIn(fl.medium)}</span></button>
        <button data-f="high"><span class="rbadge r-high">${triIn(fl.high)}</span></button>
        <button data-f="anvisa"><span class="rbadge r-anvisa">${triIn(fl.anvisa)}</span></button>
      </div>`;
    const cats = D.curation.categories.map(c=>`
      <div class="catcard" data-risk="${c.risk}">
        <div class="cattop"><h4>${triIn(c.name)}</h4>${riskBadge(c.risk)}</div>
        <div class="why">${triIn(c.why)}</div>
      </div>`).join("");
    const sets = D.curation.sets.items.map(s=>`
      <div class="setcard reveal">
        <div class="sethead"><h4>${triIn(s.name)}</h4>${riskBadge(s.risk)}</div>
        <ul>${s.skus.map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>`).join("");
    const bench = D.curation.benchmarks.list.map(x=>`<span class="pill brand">${x}</span>`).join("");
    h += sec("curation",K("큐레이션","Curation","Curadoria"),D.curation.title,D.curation.intro,`
      <div class="reveal" style="margin-top:22px">${filters}<div class="catgrid" id="catGrid">${cats}</div></div>
      <div class="reveal" style="margin-top:30px"><div class="subhead">${triIn(D.curation.sets.title)}</div>
        <div class="grid g3" style="margin-top:12px">${sets}</div></div>
      <div class="panel reveal" style="margin-top:24px">
        <div class="subhead">${triIn(D.curation.benchmarks.title)}</div>
        <div class="pillrow" style="margin:6px 0 12px">${bench}</div>
        <p style="font-size:.82rem;color:var(--ink-soft)">${triIn(D.curation.benchmarks.note)}</p>
      </div>`);

    /* ---- BUSINESS MODEL ---- */
    const r82 = D.model.roles.route82.items.map(i=>`<li>${triIn(i)}</li>`).join("");
    const br  = D.model.roles.brazil.items.map(i=>`<li>${triIn(i)}</li>`).join("");
    const rev = D.model.revenue.rows.map(r=>`
      <tr class="${r.rec?'rec':''}"><td>${triIn(r.model)}${r.rec?' <span class="recbadge">\u2605</span>':''}</td><td>${triIn(r.pros)}</td></tr>`).join("");
    h += sec("model",K("비즈니스 모델","Business Model","Modelo de Negócio"),D.model.title,null,`
      <div class="roletoggle reveal" id="roleToggle">
        <button class="r82 active" data-r="r82">${triIn(D.model.roles.route82.label)}</button>
        <button class="br" data-r="br">${triIn(D.model.roles.brazil.label)}</button>
      </div>
      <div class="rolepanel show" data-rp="r82">
        <div class="panel"><div class="subhead">${triIn(D.model.roles.route82.label)}</div>
          <ul class="ticklist" style="grid-template-columns:1fr 1fr;display:grid">${r82}</ul></div>
      </div>
      <div class="rolepanel" data-rp="br">
        <div class="panel"><div class="subhead">${triIn(D.model.roles.brazil.label)}</div>
          <ul class="ticklist" style="grid-template-columns:1fr 1fr;display:grid">${br}</ul></div>
      </div>
      <div class="reveal" style="margin-top:26px"><div class="subhead">${triIn(D.model.revenue.title)}</div>
        <table class="revtable" style="margin-top:10px"><thead><tr>
          <th>${triIn(D.model.revenue.headers.model)}</th>
          <th>${triIn(D.model.revenue.headers.pros)}</th></tr></thead>
        <tbody>${rev}</tbody></table>
        <div class="alert green" style="margin-top:16px"><strong>\u2605 ${triIn(D.model.revenue.reckicker)}</strong><br>${tri(D.model.revenue.typicalNote)}</div></div>`);

    /* ---- TURNKEY STORE BUILD ---- */
    const tk = D.turnkey;
    const tkItems = tk.items.map((i,n)=>`
      <div class="card reveal ${n%2?'alt':''}">
        <div class="ic"><svg viewBox="0 0 24 24"><path d="${i.icon}"/></svg></div>
        ${tri({ko:i.ko,en:i.en,pt:i.pt})}
      </div>`).join("");
    const tkGal = tk.gallery.map(g=>`
      <figure class="storeshot"><img loading="lazy" src="${g.src}" alt="GANGNAM BEAUTY"><figcaption>${triIn(g.cap)}</figcaption></figure>`).join("");
    h += sec("turnkey",K("매장 턴키 구축","Turnkey Store Build","Loja Turnkey"),tk.title,tk.lead,`
      <div class="grid g4" style="margin-top:24px">${tkItems}</div>
      <div class="alert green reveal" style="margin-top:18px">${tri(tk.note)}</div>
      <div class="reveal" style="margin-top:34px">
        <div class="subhead">${triIn(tk.proofTitle)}</div>
        <p class="sec-lead" style="margin:6px 0 16px">${triIn(tk.proofLead)}</p>
        <div class="store-gallery">${tkGal}</div>
        <div class="store-map reveal">
          <iframe loading="lazy" src="${tk.map.embed}" title="GANGNAM BEAUTY location"></iframe>
          <div class="store-map-bar">
            <span class="smb-addr">📍 ${triIn(tk.map.addr)}</span>
            <span class="smb-links">
              <a href="${tk.map.link}" target="_blank" rel="noopener">${triIn(tk.map.openLabel)} ↗</a>
              <a href="${tk.map.instagram}" target="_blank" rel="noopener">${triIn(tk.map.igLabel)} ↗</a>
            </span>
          </div>
        </div>
        <p class="wb-note" style="margin-top:10px">${triIn(tk.map.newNote)}</p>
      </div>
      <div class="onestop reveal">${tri(tk.oneStop)}</div>`);

    /* ---- ROADMAP ---- */
    const phases = D.roadmap.phases.map((p,i)=>`
      <div class="tphase reveal"><div class="dot">${i+1}</div>
        <div class="day">${p.day}</div><h4>${triIn(p.name)}</h4>
        <div class="tbody"><ul class="ticklist">${p.items.map(x=>`<li>${triIn(x)}</li>`).join("")}</ul></div>
      </div>`).join("");
    h += sec("roadmap",K("실행 로드맵","Execution Roadmap","Roteiro"),D.roadmap.title,D.roadmap.note,
      `<div class="timeline" style="margin-top:22px">${phases}</div>`);

    /* ---- AGENDA ---- */
    const ag = D.agenda.items.map((a,i)=>`
      <div class="acc-item"><div class="acc-head"><span class="anum">${i+1}</span>${triIn(a)}<span class="caret">▾</span></div>
        <div class="acc-body"><p style="padding-top:12px;color:var(--ink-soft);font-size:.88rem">${agendaNote(i)}</p></div></div>`).join("");
    h += sec("agenda",K("미팅 아젠다","Meeting Agenda","Agenda"),D.agenda.title,null,
      `<div class="acc reveal" id="agendaAcc" style="margin-top:22px">${ag}</div>`);

    /* ---- QUESTIONS ---- */
    const qs = D.questions.items.map((q,i)=>`
      <div class="qitem reveal"><span class="qn">${String(i+1).padStart(2,'0')}</span><div>${triIn(q)}</div></div>`).join("");
    h += sec("questions",K("질문 리스트","Questions","Perguntas"),D.questions.title,null,
      `<div class="qgrid" style="margin-top:22px">${qs}</div>`);

    /* ---- NEXT STEPS ---- */
    const ns = D.nextSteps.items.map(i=>`
      <div class="checkitem"><span class="checkbox"></span><span class="ctext">${triIn(i)}</span></div>`).join("");
    h += sec("nextsteps",K("다음 단계","Next Steps","Próximos Passos"),D.nextSteps.title,null,
      `<div class="checks reveal" id="checks" style="margin-top:22px">${ns}</div>`);

    /* ---- INTERPRETER ---- */
    const names = D.interpreter.names.map(n=>`
      <tr><td>${n.term}</td><td>${triIn(n.note)}</td></tr>`).join("");
    const cautions = D.interpreter.cautions.map(c=>`<li>${triIn(c)}</li>`).join("");
    const gloss = D.interpreter.glossary.map(g=>`
      <tr><td>${g.ko}</td><td>${g.en}</td><td>${g.pt}</td></tr>`).join("");
    h += sec("interpreter",K("통역사 사전 안내","Interpreter Briefing","Briefing do Intérprete"),D.interpreter.title,null,`
      <div class="panel reveal" style="margin-top:20px"><div class="subhead">Background</div>${tri(D.interpreter.background)}</div>
      <div class="grid g2 reveal" style="margin-top:20px">
        <div class="panel"><div class="subhead">${triIn(D.interpreter.namesTitle)}</div>
          <table class="gtable"><tbody>${names}</tbody></table></div>
        <div class="panel"><div class="subhead">${triIn(D.interpreter.cautionTitle)}</div>
          <ul class="ticklist">${cautions}</ul></div>
      </div>
      <div class="reveal" style="margin-top:24px"><div class="subhead">${triIn(D.interpreter.glossaryTitle)}</div>
        <div class="searchbox" style="margin-top:10px">🔎<input id="glossSearch" type="text" placeholder="검색 / search / pesquisar…"></div>
        <table class="gtable" id="glossTable"><thead><tr><th>한국어</th><th>English</th><th>Português (BR)</th></tr></thead>
        <tbody>${gloss}</tbody></table></div>`);

    /* ---- SOURCES ---- */
    h += sec("sources",K("출처 & 신뢰도","Sources & Confidence","Fontes"),
      {ko:"출처 및 신뢰도 표시",en:"Sources & Confidence Tags",pt:"Fontes e Selos de Confiança"},D.sourcesNote,`
      <div class="grid g3 reveal" style="margin-top:22px">
        <div class="card"><h4>${confBadge("conf")} Confirmed</h4>${tri({ko:"여러 신뢰 가능한 출처에서 일관됨.",en:"Consistent across multiple credible sources.",pt:"Consistente em múltiplas fontes confiáveis."})}</div>
        <div class="card alt"><h4>${confBadge("est")} Estimate</h4>${tri({ko:"공개 추정치, 기관별 범위 상이.",en:"Publicly available estimate; ranges vary.",pt:"Estimativa pública; intervalos variam."})}</div>
        <div class="card"><h4>${confBadge("confirm")} Confirm</h4>${tri({ko:"공식 자료/현지 파트너로 재확인 필요.",en:"Re-verify via official source / local partner.",pt:"Reverificar via fonte oficial / parceiro local."})}</div>
      </div>
      <div class="reveal" style="margin-top:24px;text-align:center">
        <button class="icon-btn" id="openSources" style="width:auto;height:auto;min-height:44px;padding:12px 22px;font-weight:800;border-radius:999px;line-height:1.45">${triIn({ko:"전체 출처 목록 보기",en:"View full source list",pt:"Ver lista completa de fontes"})}</button>
        <p style="font-size:.8rem;color:var(--ink-soft);margin-top:12px">${triIn({ko:"상세 출처는 sources.md 파일을 참고하세요.",en:"See sources.md for the detailed list.",pt:"Veja sources.md para a lista detalhada."})}</p>
      </div>`);

    $("#app").innerHTML = h;
  }

  function pickStatic(o){ var m=document.body.getAttribute("data-show"); if(m==="koen") return o.ko+" / "+o.en; if(m==="kopt") return o.ko+" / "+o.pt; return o.ko; }

  function riskBadge(r){
    const m = {low:["r-low","Low"],medium:["r-medium","Medium"],high:["r-high","High"],anvisa:["r-anvisa","ANVISA"]};
    const x = m[r]||m.low; return `<span class="rbadge ${x[0]}">${x[1]}</span>`;
  }
  function confBadge(c){
    if(c==="conf")    return `<span class="rbadge r-low">Confirmed</span>`;
    if(c==="est")     return `<span class="rbadge r-medium">Estimate</span>`;
    if(c==="confirm") return `<span class="rbadge r-anvisa">Confirm</span>`;
    return "";
  }
  function agendaNote(i){
    const notes = [
      "ROUTE82 · Brazil-side Partner · interpreter",
      "Brazil-side vision: scale, store concept, timeline",
      "Who buys, where, online vs offline mix",
      "Which categories first (see Curation section)",
      "How ROUTE82 sources & curates Korean brands",
      "ANVISA classification, importer, labeling (see Regulatory)",
      "Air vs sea, warehouse, 3PL (see Logistics)",
      "20–30 SKU pilot, 90-day plan (see Roadmap)",
      "Korea-side execution vs Brazil-side capital/distribution",
      "Owners, timeline, NDA, next meeting"
    ];
    return notes[i]||"";
  }

  /* ===================================================================
     INTERACTIONS
     =================================================================== */
  function buildNav(){
    const nav = D.nav.map(n=>`<a href="#${n.id}" data-nav="${n.id}">${triIn(n)}</a>`).join("");
    $("#mainnav").innerHTML = nav;
    $$("#mainnav a").forEach(a=>a.addEventListener("click",()=>$("#mainnav").classList.remove("open")));
  }

  function setLang(l){
    document.body.setAttribute("data-show",l);
    document.documentElement.lang = (l==="koen"||l==="kopt")?"ko":l;
    $$("#langToggle button").forEach(b=>b.classList.toggle("active",b.dataset.lang===l));
    try{localStorage.setItem("r82lang",l);}catch(e){}
  }

  function footer(){
    $("#footLegal").textContent = D.meta.legalName.en+" · "+D.meta.bizId;
    $("#footAddr").textContent  = D.meta.address.en;
    const w=$("#footWeb"); w.textContent=D.meta.web; w.href="https://"+D.meta.web;
    const m=$("#footMail"); m.textContent=D.meta.email; m.href="mailto:"+D.meta.email;
    $('[data-i="foot.disc"]').textContent = "Partnership discussion / pilot proposal — not a contract.";
  }

  function wire(){
    $$("#langToggle button").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));

    $("#themeBtn").addEventListener("click",()=>{
      const t = document.body.getAttribute("data-theme")==="dark"?"light":"dark";
      document.body.setAttribute("data-theme",t);
      try{localStorage.setItem("r82theme",t);}catch(e){}
    });

    $("#presentBtn").addEventListener("click",()=>{
      document.body.classList.toggle("present");
      if(document.body.classList.contains("present") && document.documentElement.requestFullscreen)
        document.documentElement.requestFullscreen().catch(()=>{});
      else if(document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(()=>{});
    });

    $("#printBtn").addEventListener("click",()=>window.print());
    $("#menuBtn").addEventListener("click",()=>$("#mainnav").classList.toggle("open"));

    const modal=$("#sourcesModal");
    function openModal(){ modal.classList.add("show"); buildSources(); modal.setAttribute("aria-hidden","false"); }
    function closeModal(){ modal.classList.remove("show"); modal.setAttribute("aria-hidden","true"); }
    $("#closeModal").addEventListener("click",closeModal);
    modal.addEventListener("click",e=>{if(e.target===modal)closeModal();});
    document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
    $("#openSources")?.addEventListener("click",openModal);
    $$(".stat .src,[data-src]").forEach(el=>el.addEventListener("click",openModal));

    $("#catFilter")?.addEventListener("click",e=>{
      const btn=e.target.closest("button"); if(!btn)return;
      $$("#catFilter button").forEach(b=>b.classList.remove("active")); btn.classList.add("active");
      const f=btn.dataset.f;
      $$("#catGrid .catcard").forEach(c=>c.classList.toggle("hide", f!=="all" && c.dataset.risk!==f));
    });

    $("#roleToggle")?.addEventListener("click",e=>{
      const btn=e.target.closest("button"); if(!btn)return;
      $$("#roleToggle button").forEach(b=>b.classList.remove("active")); btn.classList.add("active");
      $$('[data-rp]').forEach(p=>p.classList.toggle("show",p.dataset.rp===btn.dataset.r));
    });

    $("#agendaAcc")?.addEventListener("click",e=>{
      const head=e.target.closest(".acc-head"); if(!head)return;
      head.parentElement.classList.toggle("open");
    });

    $("#glossSearch")?.addEventListener("input",e=>{
      const q=e.target.value.trim().toLowerCase();
      $$("#glossTable tbody tr").forEach(tr=>{
        tr.classList.toggle("hide", q && !tr.textContent.toLowerCase().includes(q));
      });
    });

    $("#checks")?.addEventListener("click",e=>{
      const it=e.target.closest(".checkitem"); if(it)it.classList.toggle("done");
    });

    /* store image lightbox (click to enlarge, like Amazon) */
    (function(){
      const shots = $$(".store-gallery .storeshot img");
      if(!shots.length) return;
      const lb=document.createElement("div"); lb.className="lightbox";
      lb.innerHTML='<button class="lb-close" aria-label="Close">\u2715</button>'+
        '<button class="lb-nav lb-prev" aria-label="Previous">\u2039</button>'+
        '<img alt=""><div class="lb-cap"></div>'+
        '<button class="lb-nav lb-next" aria-label="Next">\u203A</button>';
      document.body.appendChild(lb);
      const lbImg=lb.querySelector("img"), lbCap=lb.querySelector(".lb-cap");
      const srcs=shots.map(im=>im.getAttribute("src"));
      const caps=shots.map(im=>{const f=im.closest(".storeshot").querySelector("figcaption"); return f?f.innerHTML:"";});
      let idx=0;
      function show(i){ idx=(i+srcs.length)%srcs.length; lbImg.src=srcs[idx]; lbCap.innerHTML=caps[idx]; lb.classList.add("open"); }
      function close(){ lb.classList.remove("open"); lbImg.removeAttribute("src"); }
      shots.forEach((im,i)=>{ im.style.cursor="zoom-in"; im.addEventListener("click",()=>show(i)); });
      lb.querySelector(".lb-close").addEventListener("click",close);
      lb.querySelector(".lb-prev").addEventListener("click",e=>{e.stopPropagation();show(idx-1);});
      lb.querySelector(".lb-next").addEventListener("click",e=>{e.stopPropagation();show(idx+1);});
      lb.addEventListener("click",e=>{ if(e.target===lb) close(); });
      document.addEventListener("keydown",e=>{ if(!lb.classList.contains("open"))return;
        if(e.key==="Escape")close(); else if(e.key==="ArrowLeft")show(idx-1); else if(e.key==="ArrowRight")show(idx+1); });
    })();
    $("#toTop").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  }

  function buildSources(){
    const body=$("#sourcesBody");
    if(body.dataset.built) return;
    const items=[
      ["S01","Estimate","Brazil beauty market ~$30–37bn — Mordor Intelligence"],
      ["S02","Estimate","Brazil = 4th–5th largest beauty market — Chameleon / Playbook of Beauty"],
      ["S03","Estimate","+12.7% value growth 2024; lightweight formats favored — NielsenIQ"],
      ["S04","Confirm","ABIHPEC sector panorama; CT&F exports $927.3M (2024) — ABIHPEC"],
      ["S05","Estimate","Color cosmetics $2.44bn(2025)→$3.41bn(2032) — Mordor/Vyansa"],
      ["S06","Estimate","Specialty stores ~38%; online fastest-growing — Mordor"],
      ["S07","Confirmed","Natura+Grupo Boticário ≈25%; Boticário owns Beleza na Web — Statista"],
      ["S08","Estimate","Brazil K-Beauty $398M(2023)→$755M(2032) — Credence Research"],
      ["S09","Estimate","Brazil among fastest-growing K-beauty markets — Market Data Forecast"],
      ["S10","Estimate","LatAm fastest K-beauty region; BR+MX >60% — knok Global"],
      ["S11","Confirmed","K-beauty on Shopee/Sephora BR: COSRX, ANUA, SKIN1004… — Care to Beauty"],
      ["S12","Confirm","ANVISA Grade 1 (notify) vs Grade 2 (register) — Global Regulatory Partners"],
      ["S13","Confirm","RDC 752/2022, 907/2024, 949/2024 (verify on gov.br) — GRP / GPC Gateway"],
      ["S14","Confirm","Local importer w/ AFE, operating license, GMP — Nova Trade Brasil"],
      ["S15","Confirm","Portuguese labeling: AFE#, INCI, warnings — Kasey Beauty / CGM Law"],
      ["S16","Confirm","Import clearance via PAFCO / Portal Único — Nova Trade Brasil"],
      ["S17","Confirm","NCM Ch.33; II 0–35/IPI 0–30/ICMS 17–25/PIS-COFINS — trade.gov / PwC"],
      ["S18","Confirm","Tax reform CBS/IBS phasing from 2026 — Nova Trade Brasil"],
      ["S19","Confirmed","SISCOMEX/Portal Único; DUIMP replacing legacy — trade.gov"],
      ["S20","Confirmed","Docs: invoice, packing list, B/L-AWB, CoO — trade.gov"],
      ["S21","Confirmed","ROUTE82 legal data — Business Registration Certificate"],
      ["S22","Confirmed","ROUTE82 group/ecosystem/brands — Company Deck (EN)"],
      ["S23","Estimate","Specialty/perfumery ~34% (largest channel); online fastest-growing — Mordor Intelligence"],
      ["S24","Confirmed","Grupo Boticário = world's largest beauty retailer (~4,000 stores); owns The Beauty Box — Statista / Brazil Beauty News"],
      ["S25","Confirmed","Sephora Brazil reached 42 stores (2025), 13 states, 130+ brands — Mercado&Consumo / Giro News"],
      ["S26","Confirmed","Ikesaki beauty megastore, Liberdade SP, founded 1964, 15,000+ products — Ikesaki / press"],
      ["S27","Confirmed","Raia Drogasil = pharmacy leader 16.1% share (2023), 3,100+ stores — Consumidor Moderno / Exame"],
      ["S28","Confirmed","Atacarejo = fastest-growing format; 2,000+ stores, ~2% GDP, 7-in-10 shop it; O Boticário expanding since 2020 — Brazil Beauty News / SA Varejo"],
      ["S29","Confirmed","Bom Retiro = São Paulo's Korean district ('Korea Town' project, Rua Prates–Coreia) — Agência Brasil / Korea.net"],
      ["S30","Assessment","K-beauty in Brazil sold mainly online + Sephora wall + small shops; no large-format experiential K-beauty store found in public scan — ROUTE82 desk research (Jun 2026)"]
    ];
    body.innerHTML = `<p style="color:var(--ink-soft);margin-bottom:10px">${pick(D.sourcesNote)}</p>`+
      items.map(s=>`<div class="src-item"><b>${s[0]}</b> · <span class="rbadge ${s[1]==='Confirmed'?'r-low':s[1]==='Estimate'?'r-medium':'r-anvisa'}">${s[1]}</span><br>${s[2]}</div>`).join("");
    body.dataset.built="1";
  }

  /* ---------- scroll behaviours ---------- */
  function scrollFx(){
    const prog=$("#scrollProgress"), top=$("#toTop");
    const sections=$$("section"); const links=$$("#mainnav a");
    function onScroll(){
      const st=window.scrollY, dh=document.body.scrollHeight-window.innerHeight;
      prog.style.width=(dh>0?(st/dh*100):0)+"%";
      top.classList.toggle("show",st>500);
      let cur="";
      sections.forEach(s=>{ if(st>=s.offsetTop-120) cur=s.id; });
      links.forEach(a=>a.classList.toggle("active",a.dataset.nav===cur));
    }
    window.addEventListener("scroll",onScroll,{passive:true}); onScroll();
  }

  function observers(){
    const io=new IntersectionObserver((es)=>{
      es.forEach(e=>{
        if(!e.isIntersecting) return;
        const el=e.target;
        el.classList.add("in");
        if(el.classList.contains("stat")) countUp(el);
        if(el.id==="flow") el.classList.add("in");
        io.unobserve(el);
      });
    },{threshold:.18});
    $$(".reveal,.stat,#flow").forEach(el=>io.observe(el));

    const bo=new IntersectionObserver((es)=>{
      es.forEach(e=>{ if(e.isIntersecting){ e.target.style.width=e.target.dataset.w+"%"; bo.unobserve(e.target);} });
    },{threshold:.4});
    $$(".barfill").forEach(b=>bo.observe(b));
  }

  function countUp(stat){
    const numEl=stat.querySelector(".num");
    const target=parseFloat(stat.dataset.count), dec=parseInt(stat.dataset.dec||"0");
    const pre=stat.dataset.pre||"", suf=stat.dataset.suf||"";
    let start=null, dur=1300;
    function step(ts){
      if(!start)start=ts; const p=Math.min((ts-start)/dur,1);
      const ease=1-Math.pow(1-p,3);
      const val=(target*ease).toFixed(dec);
      numEl.textContent=pre+val+suf;
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ===================================================================
     INIT
     =================================================================== */
  function init(){
    let lang="kopt",theme="light";
    try{lang=localStorage.getItem("r82lang")||"kopt";theme=localStorage.getItem("r82theme")||"light";}catch(e){}
    if(["ko","en","pt","koen","kopt"].indexOf(lang)<0) lang="kopt"; // default = Korean + Portuguese
    document.body.setAttribute("data-show",lang);
    document.body.setAttribute("data-theme",theme);

    render();
    buildNav();
    setLang(lang);
    footer();
    wire();
    scrollFx();
    observers();
  }
  if(document.readyState!=="loading") init();
  else document.addEventListener("DOMContentLoaded",init);
})();
