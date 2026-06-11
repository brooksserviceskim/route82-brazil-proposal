/* =====================================================================
 ROUTE82 × Andrea Jikal's Corporation — K-Beauty Distribution Proposal
 data.js — all trilingual content (KO / EN / pt-BR)
 No external dependencies. UTF-8.
 Confidence tags inside copy: / /
 Source markers map to sources.md (e.g. S01, S12).
 ===================================================================== */

const PROPOSAL = {

 meta: {
 company: "ROUTE82",
 legalName: { ko: "주식회사 루트82", en: "Route82 Corp.", pt: "Route82 Corp." },
 bizId: "191-86-00770",
 rep: { ko: "손창희 (단독대표)", en: "Son Chang Hee (Sole Representative)", pt: "Son Chang Hee (Representante Único)" },
 address: { ko: "서울특별시 강남구 학동로33길 15, 2층", en: "15 Hakdong-ro 33-gil, Gangnam-gu, Seoul, Korea", pt: "15 Hakdong-ro 33-gil, Gangnam-gu, Seul, Coreia do Sul" },
 web: "www.route82.co.kr",
 email: "route82_business@route82.co.kr",
 meeting: {
 date: { ko: "2026년 6월 10일 (수) 오전 10:00–12:00", en: "Wed, June 10, 2026, 10:00–12:00", pt: "Qua, 10 de junho de 2026, 10:00–12:00" },
 place: { ko: "ROUTE82 사무실", en: "ROUTE82 Office", pt: "Escritório da ROUTE82" }
 }
 },

 /* ---------- WELCOME (first screen) ---------- */
 welcome: {
 greeting: { ko: "ROUTE82에 오신 것을 환영합니다", en: "Welcome to ROUTE82", pt: "Bem-vindo à ROUTE82" },
 sub: {
 ko: "브라질 파트너를 위한 K-Beauty 유통 파트너십 제안",
 en: "K-Beauty Distribution Partnership Proposal — for Andrea Jikal's Corporation",
 pt: "Proposta de Parceria de Distribuição de K-Beauty — para nosso Andrea Jikal's Corporation"
 },
 cta: { ko: "스크롤하여 시작", en: "Scroll to begin", pt: "Role para começar" }
 },

 /* ---------- COMPANY INTRODUCTION ---------- */
 company: {
 title: { ko: "회사 소개 — ROUTE82", en: "About ROUTE82", pt: "Sobre a ROUTE82" },
 tagline: {
 ko: "한국 브랜드의 엔드투엔드(End-to-End) 시장 안착 파트너",
 en: "Your end-to-end Korea-brand commercialization partner",
 pt: "Seu parceiro de ponta a ponta para comercializar marcas coreanas"
 },
 intro: {
 ko: "ROUTE82는 단순 소싱을 넘어, 한국 브랜드를 해외 시장에 '안착'시키는 한국 기반 커머스 그룹입니다. '좋은 브랜드입니다'에서 끝나지 않고 — 어떤 채널에 맞는지, 어떻게 포지셔닝하고, 어떤 콘텐츠·캠페인으로 고객과 연결하며, 채널 안에서 어떻게 성장시킬지까지 함께 설계합니다. 즉 단순 입점(sell-in)이 아니라 실제 판매 성과(sell-through)를 만드는 것을 목표로 합니다.",
 en: "ROUTE82 is a Korea-based commerce group that does more than sourcing — we help Korean brands actually succeed in your market. We don't stop at 'here is a good brand'; we design how it fits your channel, how it is positioned, what content and campaigns connect it to customers, and how it grows inside your channel. In short, we build sell-through, not just sell-in.",
 pt: "A ROUTE82 é um grupo de comércio coreano que vai além do sourcing — ajudamos marcas coreanas a de fato terem sucesso no seu mercado. Não paramos em 'aqui está uma boa marca'; desenhamos como ela se encaixa no seu canal, como é posicionada, quais conteúdos e campanhas a conectam aos clientes e como ela cresce dentro do seu canal. Ou seja, construímos sell-through, não apenas sell-in."
 },
 stats: [
 { value: 250, suffix: "+", decimals: 0, tag: "S22",
 label: { ko: "연결된 한국 브랜드 생태계 (협회 MOU)", en: "Korean brands in ecosystem (assoc. MOU)", pt: "marcas coreanas no ecossistema (MOU)" } },
 { value: 3, suffix: "", decimals: 0, tag: "S22",
 label: { ko: "전문 계열사 (리테일·마케팅·콘텐츠)", en: "specialist affiliates (retail·marketing·content)", pt: "afiliadas especializadas (varejo·marketing·conteúdo)" } },
 { value: 9, suffix: "+", decimals: 0, tag: "S22",
 label: { ko: "협업·관계 글로벌 리테일 채널", en: "global retail channels engaged", pt: "canais de varejo globais com relação" } }
 ],
 groupTitle: { ko: "그룹 구조 — 3개 전문 계열사", en: "Group Structure — 3 Specialist Affiliates", pt: "Estrutura do Grupo — 3 Afiliadas Especializadas" },
 group: [
 { name: "Kalon Inc.", region: { ko: "미국 리테일", en: "US Retail", pt: "Varejo nos EUA" },
 desc: { ko: "미국 현지 기반으로 Amazon Vendor Central·Walmart·Target 등 대형 리테일 바잉 채널과 직접 협업합니다.", en: "US-based; works directly with major retail buying channels — Amazon Vendor Central, Walmart, Target.", pt: "Sediada nos EUA; atua diretamente com grandes canais de compra — Amazon Vendor Central, Walmart, Target." } },
 { name: "PLANEAR", region: { ko: "브랜딩·퍼포먼스 마케팅", en: "Branding & Performance", pt: "Marca & Performance" },
 desc: { ko: "한국 기반 브랜딩·퍼포먼스 마케팅사로 LOTTE GRS 등 대기업 프로젝트를 수행했습니다.", en: "Korea-based branding & performance marketing; has led projects for major clients including LOTTE GRS.", pt: "Marca e performance, sediada na Coreia; já liderou projetos para grandes clientes, incluindo a LOTTE GRS." } },
 { name: "THE ALMIGHTY", region: { ko: "콘텐츠 스튜디오", en: "Content Studio", pt: "Estúdio de Conteúdo" },
 desc: { ko: "비주얼·영상·SNS 콘텐츠 제작 스튜디오로 브랜드 스토리와 캠페인을 구현합니다.", en: "A content studio producing visual, video and social content to bring brand stories and campaigns to life.", pt: "Estúdio de conteúdo que produz peças visuais, vídeo e redes sociais para dar vida a histórias e campanhas de marca." } }
 ],
 ecosystem: {
 title: { ko: "브랜드 생태계 & 파트너 브랜드", en: "Brand Ecosystem & Partner Brands", pt: "Ecossistema e Marcas Parceiras" },
 mou: {
 ko: "한국화장품수출협회(약 250개 회원 브랜드)와 MOU를 체결해, 단일 회사가 아니라 폭넓은 한국 브랜드 생태계에 연결되어 있습니다.",
 en: "An MOU with the Korea Cosmetic Export Association (~250 member brands) connects partners to a wide Korean brand ecosystem — not just one company.",
 pt: "Um MOU com a Korea Cosmetic Export Association (~250 marcas associadas) conecta parceiros a um amplo ecossistema de marcas coreanas — não apenas uma empresa."
 },
 assoc: {
 logo: "assets/kcea_logo.png",
 url: "http://koreacea.or.kr/",
 name: "Korea Cosmetic Export Association",
 caption: { ko: "한국화장품수출협회 — 공식 홈페이지 보기", en: "Korea Cosmetic Export Association — visit official site", pt: "Korea Cosmetic Export Association — visitar site oficial" }
 },
 mouPhoto: {
 src: "assets/kcea_mou.jpg",
 caption: { ko: "MOU 체결식 — 한국화장품수출협회 이경민 회장과 ROUTE82 정원하 대표", en: "MOU signing ceremony — Lee Kyung-min (Chairman, Korea Cosmetic Export Association) & Jung Won-ha (CEO, ROUTE82)", pt: "Cerimônia de assinatura do MOU — Lee Kyung-min (Presidente da Korea Cosmetic Export Association) e Jung Won-ha (CEO da ROUTE82)" }
 },
 brands: ["numbuzin", "HANSKIN", "JUMISO", "AXIS-Y", "TOUN28", "LAUNDRYOU"]
 },
 networkTitle: { ko: "글로벌 리테일 네트워크 (참고)", en: "Global Retail Network (reference)", pt: "Rede de Varejo Global (referência)" },
 networkNote: {
 ko: "그룹 차원에서 다음과 같은 글로벌 채널과 관계를 맺어 왔습니다.",
 en: "At group level, ROUTE82 has engaged with global channels such as:",
 pt: "No nível do grupo, a ROUTE82 tem relação com canais globais como:"
 },
 network: [
 { name: "Amazon", logo: "assets/usnetwork/amazon.png" },
 { name: "Walmart", logo: "assets/usnetwork/walmart.png" },
 { name: "Target", logo: "assets/usnetwork/target.png" },
 { name: "Costco", logo: "assets/usnetwork/costco.png" },
 { name: "TikTok", logo: "assets/usnetwork/tiktok.png" },
 { name: "Sephora", logo: "assets/usnetwork/sephora.png" },
 { name: "Ulta Beauty", logo: "assets/usnetwork/ulta.png" },
 { name: "Nordstrom", logo: "assets/usnetwork/nordstrom.png" },
 { name: "Macy's", logo: "assets/usnetwork/macys.png" },
 { name: "Old Navy", logo: "assets/usnetwork/oldnavy.png" },
 { name: "Gap", logo: "assets/usnetwork/gap.png" },
 { name: "SHEIN", logo: "assets/usnetwork/shein.png" },
 { name: "Amazon Vendor Central", logo: "assets/usnetwork/amazon_vc.png" }
 ],
 factsLine: {
 ko: "주식회사 루트82 · 사업자등록번호 191-86-00770 · 대표 손창희 · 서울 강남구 · www.route82.co.kr",
 en: "Route82 Corp. · Biz Reg. 191-86-00770 · Rep. Son Chang Hee · Gangnam-gu, Seoul · www.route82.co.kr",
 pt: "Route82 Corp. · Reg. 191-86-00770 · Rep. Son Chang Hee · Gangnam-gu, Seul · www.route82.co.kr"
 }
 },

 /* ---------- PARTNER BRANDS ---------- */
 partners: {
 title: { ko: "ROUTE82 파트너 브랜드", en: "ROUTE82 Partner Brands", pt: "Marcas Parceiras da ROUTE82" },
 tagline: { ko: "K-Beauty / K-Inner Beauty (이너뷰티·건강기능식품)", en: "K-Beauty / K-Inner Beauty (Dietary Supplements)", pt: "K-Beauty / K-Inner Beauty (Suplementos Alimentares)" },
 note: {
 ko: "ROUTE82가 협업·소싱 가능한 한국 파트너 브랜드 생태계입니다. 로고는 참고용이며, 브라질 유통권·독점권은 별도 협의 대상입니다.",
 en: "The Korean partner-brand ecosystem ROUTE82 can work with and source from. Logos are shown for reference; Brazil distribution/exclusivity rights are subject to separate negotiation.",
 pt: "O ecossistema de marcas parceiras coreanas com que a ROUTE82 pode trabalhar e fazer sourcing. Os logos são apenas para referência; direitos de distribuição/exclusividade no Brasil estão sujeitos a negociação separada."
 },
 logos: [
   { src: "assets/brands/2an.png", name: "2aN" },
   { src: "assets/brands/aou.png", name: "aou" },
   { src: "assets/brands/axis_y.png", name: "AXIS-Y" },
   { src: "assets/brands/bia_ifekt.png", name: "bia ifekt" },
   { src: "assets/brands/bonajour.png", name: "bonajour" },
   { src: "assets/brands/brand_70.png", name: "닥터모스레시피" },
   { src: "assets/brands/brand_72.png", name: "미스드래곤" },
   { src: "assets/brands/brand_73.png", name: "베르티" },
   { src: "assets/brands/brand_74.png", name: "에포나" },
   { src: "assets/brands/brand_75.png", name: "엘딘" },
   { src: "assets/brands/brand_76.png", name: "오알라" },
   { src: "assets/brands/brand_77.png", name: "오클리앙" },
   { src: "assets/brands/brand_78.png", name: "이너타이드" },
   { src: "assets/brands/brand_79.png", name: "이지템" },
   { src: "assets/brands/ccambbak.png", name: "ccambbak" },
   { src: "assets/brands/chwi.png", name: "chwi" },
   { src: "assets/brands/coralhaze.png", name: "coralhaze" },
   { src: "assets/brands/dinsee.png", name: "dinsee" },
   { src: "assets/brands/dosie.png", name: "dosie" },
   { src: "assets/brands/drbio.png", name: "Dr.BIO" },
   { src: "assets/brands/entropy.jpg", name: "entropy" },
   { src: "assets/brands/fivevibe.png", name: "fivevibe" },
   { src: "assets/brands/frankly.png", name: "frankly" },
   { src: "assets/brands/fromrier.jpg", name: "fromrier" },
   { src: "assets/brands/fussidyne.png", name: "fussidyne" },
   { src: "assets/brands/g.png", name: "G" },
   { src: "assets/brands/graymelin.png", name: "graymelin" },
   { src: "assets/brands/grn.png", name: "GRN+" },
   { src: "assets/brands/hanskin.png", name: "hanskin" },
   { src: "assets/brands/hatherine.png", name: "hatherine" },
   { src: "assets/brands/headspa7.png", name: "headspa7" },
   { src: "assets/brands/heart_percent.png", name: "Heart Percent" },
   { src: "assets/brands/hetras.png", name: "hetras" },
   { src: "assets/brands/heveblue.png", name: "heveblue" },
   { src: "assets/brands/house_of_b.png", name: "House of B" },
   { src: "assets/brands/imo.png", name: "imO" },
   { src: "assets/brands/iroiro.png", name: "iroiro" },
   { src: "assets/brands/jumiso.png", name: "jumiso" },
   { src: "assets/brands/kahi.png", name: "kahi" },
   { src: "assets/brands/laundryou.png", name: "laundryou" },
   { src: "assets/brands/lilybyred.png", name: "lilybyred" },
   { src: "assets/brands/lilyeve.png", name: "lilyeve" },
   { src: "assets/brands/logo_vivora.png", name: "VIVORA" },
   { src: "assets/brands/mauvning.png", name: "mauvning" },
   { src: "assets/brands/medianswer.png", name: "medianswer" },
   { src: "assets/brands/menokin.png", name: "menokin" },
   { src: "assets/brands/mglab.jpg", name: "MGLAB" },
   { src: "assets/brands/mildlab.png", name: "mildlab" },
   { src: "assets/brands/mude.png", name: "mude" },
   { src: "assets/brands/mumchit.png", name: "mumchit" },
   { src: "assets/brands/needly.png", name: "needly" },
   { src: "assets/brands/ngt_logo.png", name: "NGT" },
   { src: "assets/brands/nonoer.png", name: "nonoer" },
   { src: "assets/brands/numbuzin.png", name: "numbuzin" },
   { src: "assets/brands/nutseline.png", name: "nutseline" },
   { src: "assets/brands/ongredients.png", name: "ongredients" },
   { src: "assets/brands/performax.png", name: "performax" },
   { src: "assets/brands/portre.png", name: "Portré" },
   { src: "assets/brands/rebrush.png", name: "rebrush" },
   { src: "assets/brands/resear.png", name: "RESEAR" },
   { src: "assets/brands/rooton.png", name: "rooton" },
   { src: "assets/brands/sister_ann.png", name: "SISTER ANN" },
   { src: "assets/brands/snow2plus.png", name: "snow2plus" },
   { src: "assets/brands/snp.png", name: "SNP" },
   { src: "assets/brands/srb.png", name: "SRB" },
   { src: "assets/brands/teabless.png", name: "teabless" },
   { src: "assets/brands/tfit.png", name: "tfit" },
   { src: "assets/brands/thankyou_farmer.png", name: "THANK YOU FARMER" },
   { src: "assets/brands/tooq.png", name: "TOOQ" },
   { src: "assets/brands/toun28.png", name: "toun28" },
   { src: "assets/brands/troubless.png", name: "troubless" },
   { src: "assets/brands/uiq.png", name: "UIQ" },
   { src: "assets/brands/unleashia.png", name: "unleashia" },
   { src: "assets/brands/veganifect.png", name: "veganifect" },
   { src: "assets/brands/whipped.png", name: "whipped" },
      { name: "JMsolution", src: "assets/gnb_brands/g01.png" },
      { name: "What For Skin", src: "assets/gnb_brands/g02.png" },
      { name: "TENZERO", src: "assets/gnb_brands/g03.png" },
      { name: "Rou:me", src: "assets/gnb_brands/g04.png" },
      { name: "Allyoufi", src: "assets/gnb_brands/g05.png" },
      { name: "Bonihill", src: "assets/gnb_brands/g06.png" },
      { name: "I'm Una U", src: "assets/gnb_brands/g07.png" },
      { name: "Jmella", src: "assets/gnb_brands/g08.png" },
      { name: "GASTON", src: "assets/gnb_brands/g09.png" },
      { name: "Choseconds", src: "assets/gnb_brands/g10.png" },
      { name: "Leaders", src: "assets/gnb_brands/g11.png" },
      { name: "Zerocipe", src: "assets/gnb_brands/g12.png" },
      { name: "NAAP", src: "assets/gnb_brands/g13.png" },
      { name: "FRAIJOUR", src: "assets/gnb_brands/g14.png" },
      { name: "Jaminkyung", src: "assets/gnb_brands/g15.png" },
      { name: "SELEVE", src: "assets/gnb_brands/g16.png" },
      { name: "TUMBLZ", src: "assets/gnb_brands/g17.png" },
      { name: "Haraz", src: "assets/gnb_brands/g18.png" },
      { name: "Reply Me", src: "assets/gnb_brands/g19.png" },
      { name: "Toolip", src: "assets/gnb_brands/g21.png" },
      { name: "Temporary", src: "assets/gnb_brands/g22.png" },
      { name: "Paul Medison", src: "assets/gnb_brands/g23.png" },
      { name: "Allneeds", src: "assets/gnb_brands/g24.png" },
      { name: "BNBG", src: "assets/gnb_brands/g25.png" },
      { name: "Hanchobang", src: "assets/gnb_brands/g26.png" },
      { name: "Mogong Lab", src: "assets/gnb_brands/g27.png" },
      { name: "Dr.J Face", src: "assets/gnb_brands/g28.png" },
      { name: "3 Wishes", src: "assets/gnb_brands/g29.png" },
      { name: "Dr.345", src: "assets/gnb_brands/g30.png" },
      { name: "Badam", src: "assets/gnb_brands/g31.png" },
      { name: "Pororo", src: "assets/gnb_brands/g32.png" },
      { name: "Dr.Homtox", src: "assets/gnb_brands/g33.png" },
      { name: "Dear May", src: "assets/gnb_brands/g34.png" },
      { name: "La Ferme", src: "assets/gnb_brands/g35.png" },
      { name: "Baeknyeon Yakbang", src: "assets/gnb_brands/g36.png" },
      { name: "ShionLe", src: "assets/gnb_brands/g37.png" },
      { name: "Skin52", src: "assets/gnb_brands/g38.png" },
      { name: "Wismin", src: "assets/gnb_brands/g39.png" },
      { name: "youlief", src: "assets/gnb_brands/g40.png" },
      { name: "Kitsch Catch", src: "assets/gnb_brands/g41.png" },
      { name: "Farmstay", src: "assets/gnb_brands/g42.png" },
      { name: "Peach C", src: "assets/gnb_brands/g43.png" },
      { name: "MACQUEEN NEW YORK", src: "assets/gnb_brands/g44.png" },
      { name: "Cellpull", src: "assets/gnb_brands/g45.png" },
      { name: "Pamona", src: "assets/gnb_brands/g46.png" },
      { name: "Princess Maker", src: "assets/gnb_brands/g47.png" },
      { name: "YQUEEN", src: "assets/gnb_brands/g49.png" },
      { name: "LOAR", src: "assets/gnb_brands/g50.png" },
      { name: "Chahong", src: "assets/gnb_brands/g51.png" },
      { name: "Orion", src: "assets/gnb_brands/g52.png" },
      { name: "Rosyd", src: "assets/gnb_brands/g53.png" }
 ]
 },

 /* ---------- Navigation labels ---------- */
 nav: [
 { id: "company", ko: "회사 소개", en: "About", pt: "Empresa" },
 { id: "partners", ko: "파트너 브랜드", en: "Brands", pt: "Marcas" },
 { id: "hero", ko: "개요", en: "Overview", pt: "Visão Geral" },
 { id: "summary", ko: "요약", en: "Summary", pt: "Resumo" },
 { id: "market", ko: "시장", en: "Market", pt: "Mercado" },
 { id: "retail", ko: "리테일·포지셔닝", en: "Retail", pt: "Varejo" },
 { id: "regulatory", ko: "인증/ANVISA", en: "Regulatory", pt: "Regulatório" },
 { id: "credentials", ko: "인증 리더십", en: "Expertise", pt: "Expertise" },
 { id: "logistics", ko: "물류", en: "Logistics", pt: "Logística" },
 { id: "curation", ko: "큐레이션", en: "Curation", pt: "Curadoria" },
 { id: "model", ko: "비즈니스 모델", en: "Model", pt: "Modelo" },
    { id: "turnkey", ko: "매장 구축", en: "Store Build", pt: "Loja" },
 { id: "roadmap", ko: "로드맵", en: "Roadmap", pt: "Roteiro" },
 { id: "brandlist", ko: "브랜드 리스트", en: "Brand List", pt: "Marcas" },
 { id: "sources", ko: "출처", en: "Sources", pt: "Fontes" }
 ],

 /* ---------- HERO ---------- */
 hero: {
 eyebrow: { ko: "파트너십 논의 자료 · 파일럿 제안", en: "Partnership Discussion · Pilot Proposal", pt: "Discussão de Parceria · Proposta Piloto" },
 title: { ko: "브라질 K-Beauty 유통 파트너십", en: "Brazil K-Beauty Distribution Partnership", pt: "Parceria de Distribuição de K-Beauty no Brasil" },
 subtitle: {
 ko: "한국 브랜드 소싱 · 인증 준비 · 수출 물류 · 현지 유통 전략",
 en: "Korean Beauty Sourcing · Regulatory Setup · Export Logistics · Local Distribution Strategy",
 pt: "Curadoria de Marcas Coreanas · Preparação Regulatória · Logística de Exportação · Estratégia de Distribuição Local"
 },
 keyMessage: {
 ko: "ROUTE82는 브라질 K-Beauty 유통 사업을 위해 한국 브랜드 소싱, 상품 큐레이션, 인증 준비, 수출 물류, 운영 세팅을 연결하는 한국 측 종합 실행 파트너가 될 수 있습니다.",
 en: "ROUTE82 can serve as the Korea-side operating partner for a Brazil K-Beauty distribution business — connecting brand sourcing, product curation, regulatory preparation, export logistics, and operational setup.",
 pt: "A ROUTE82 pode atuar como parceira operacional no lado coreano para um negócio de distribuição de K-Beauty no Brasil, conectando curadoria de marcas, seleção de produtos, preparação regulatória, logística de exportação e estruturação operacional."
 },
 points: [
 { ko: "단순 수출이 아니라 브랜드 발굴부터 운영까지 연결", en: "Not just export — brand discovery through operations", pt: "Não apenas exportação — da descoberta de marcas à operação" },
 { ko: "한국 측 실행 / 브라질 측 자본·현지 유통의 명확한 역할 분리", en: "Clear split: Korea-side execution / Brazil-side capital & local distribution", pt: "Divisão clara: execução na Coreia / capital e distribuição local no Brasil" },
 { ko: "매장 컨셉·큐레이션부터 브랜드 모집·인증까지 단계별 실행", en: "Phased build: store concept & curation → brand recruitment → regulatory", pt: "Execução por fases: conceito e curadoria → recrutamento de marcas → regulatório" }
 ]
 },

 /* ---------- EXECUTIVE SUMMARY ---------- */
 summary: {
 title: { ko: "핵심 요약", en: "Executive Summary", pt: "Resumo Executivo" },
 cards: [
 {
 icon: "M3 13h2l2 6 4-12 2 6h6",
 ko: "브라질은 세계 4~5위권의 대형 뷰티 시장이며, K-Beauty에 대한 잠재 수요가 빠르게 커지고 있습니다.",
 en: "Brazil is one of the world's top 4–5 beauty markets, with fast-rising K-Beauty demand.",
 pt: "O Brasil é um dos 4–5 maiores mercados de beleza do mundo, com demanda por K-Beauty em rápido crescimento."
 },
 {
 icon: "M12 2l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z",
 ko: "한국 화장품은 제품력·트렌드·스킨케어 중심의 카테고리 확장성이 강하고, 브라질의 고온다습 기후에 맞는 경량 포뮬러가 많습니다.",
 en: "Korean cosmetics bring product power, trend speed and skincare-led range — with lightweight formulas suited to Brazil's hot, humid climate.",
 pt: "Os cosméticos coreanos trazem qualidade, velocidade de tendência e foco em skincare — com fórmulas leves adequadas ao clima quente e úmido do Brasil."
 },
 {
 icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
 ko: "단, 진출에는 ANVISA 신고/등록, 포르투갈어 라벨링, 현지 수입자 구조, 통관·세금, 유통망 세팅이 필요합니다.",
 en: "But entry requires ANVISA notification/registration, Portuguese labeling, a local importer structure, customs/taxes and a distribution setup.",
 pt: "Mas a entrada exige notificação/registro na ANVISA, rotulagem em português, estrutura de importador local, desembaraço/impostos e montagem da distribuição."
 },
 {
 icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
 ko: "ROUTE82는 한국 브랜드 소싱, 제조사 커뮤니케이션, 수출 서류, 라벨·성분 검토, 인증 준비 지원, 물류 세팅을 담당할 수 있습니다.",
 en: "ROUTE82 can handle Korean brand sourcing, manufacturer communication, export documents, label/ingredient review, regulatory-prep support and logistics setup.",
 pt: "A ROUTE82 pode cuidar da curadoria de marcas coreanas, comunicação com fabricantes, documentos de exportação, revisão de rótulo/ingredientes, apoio à preparação regulatória e montagem logística."
 },
 {
 icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0 0 M23 21v-2a4 4 0 0 0-3-3.87",
 ko: "Andrea Jikal's Corporation이 현지 법인, 수입자, 유통망, 판매 채널, 투자·운영 자본을 담당합니다.",
 en: "Andrea Jikal's Corporation brings the local entity, importer, distribution network, sales channels and investment/operating capital.",
 pt: "A Andrea Jikal's Corporation traz a entidade local, o importador, a rede de distribuição, os canais de venda e o capital de investimento/operação."
 },
 {
 icon: "M13 2L3 14h9l-1 8 10-12h-9z",
 ko: "역할이 분리되면 매장 컨셉부터 큐레이션·브랜드 모집·(선택)PB·인증·파일럿까지 단계별로 실행할 수 있습니다.",
 en: "With roles split, the business can be built step by step — store concept, curation, brand recruitment, optional PB, regulatory, then pilot.",
 pt: "Com os papéis divididos, o negócio pode ser construído passo a passo — conceito, curadoria, recrutamento de marcas, PB opcional, regulatório e, então, piloto."
 },
 {
 icon: "M3 21h18 M5 21V8l7-5 7 5v13 M9 21v-6h6v6",
 ko: "나아가 ROUTE82는 상품 소싱을 넘어 매장 자체를 턴키로 구축합니다 — 계열사 PLANEAR·THE ALMIGHTY와 함께 컨셉·디자인·브랜딩·슬로건·운영까지.",
 en: "Beyond sourcing, ROUTE82 builds the store itself turnkey — concept, design, branding, slogan and operations, with affiliates PLANEAR & THE ALMIGHTY.",
 pt: "Além do sourcing, a ROUTE82 constrói a própria loja turnkey — conceito, design, marca, slogan e operação, com as afiliadas PLANEAR e THE ALMIGHTY."
 }
 ]
 },

 /* ---------- MARKET ---------- */
 market: {
 title: { ko: "브라질 뷰티 시장", en: "Brazil Beauty Market", pt: "Mercado de Beleza do Brasil" },
 intro: {
 ko: "아래 수치는 공개된 자료 기반의 추정치입니다. 리서치 기관마다 범위가 다르므로 방향성 참고용이며, 계약 수치로 사용하지 않습니다.",
 en: "Figures below are publicly available estimates. Ranges differ by research house — use directionally, not as contract figures.",
 pt: "Os números abaixo são estimativas disponíveis publicamente. Os intervalos variam por instituto de pesquisa — use como direção, não como valores contratuais."
 },
 stats: [
      { value: 33, suffix: " bn", prefix: "$", decimals: 0,
        label: { ko: "브라질 뷰티 시장 규모 (추정 범위 $30–37bn)", en: "Brazil beauty market size (est. range $30–37 bn)", pt: "Tamanho do mercado (faixa est. $30–37 bi)" }, tag: "S01", conf: "est" },
      { value: 4, prefix: "#", suffix: "–5", decimals: 0,
        label: { ko: "세계 뷰티 시장 순위 (추정)", en: "World beauty market rank (est.)", pt: "Posição mundial (est.)" }, tag: "S02", conf: "est" },
      { value: 12.7, suffix: "%", decimals: 1,
        label: { ko: "2024년 가치 기준 성장률", en: "2024 value-sales growth", pt: "Crescimento em valor 2024" }, tag: "S03", conf: "est" },
      { value: 7.4, suffix: "%", decimals: 1,
        label: { ko: "브라질 K-Beauty 시장 추정 CAGR", en: "Brazil K-Beauty est. CAGR", pt: "CAGR estimado de K-Beauty" }, tag: "S08", conf: "est" }
    ],
 kbeautyNote: {
 ko: "브라질 K-Beauty 시장은 약 USD 3.98억(2023) → USD 7.55억(2032)으로 추정되며, 라틴아메리카는 K-Beauty의 가장 빠른 성장 지역으로 브라질+멕시코가 역내 60% 이상을 차지합니다.",
 en: "Brazil's K-Beauty market is estimated at ~USD 398 M (2023) → ~USD 755 M (2032); Latin America is the fastest-growing K-beauty region, with Brazil + Mexico over 60% of it.",
 pt: "O mercado de K-Beauty do Brasil é estimado em ~USD 398 mi (2023) → ~USD 755 mi (2032); a América Latina é a região de maior crescimento, com Brasil + México acima de 60% dela."
 },
 categories: {
 title: { ko: "주요 카테고리", en: "Key Categories", pt: "Categorias Principais" },
 note: { ko: "막대는 상대적 시장 관심도(추정)이며 정확한 점유율이 아닙니다.", en: "Bars show relative interest (estimate), not exact share.", pt: "As barras mostram interesse relativo (estimativa), não participação exata." },
 items: [
 { ko: "스킨케어", en: "Skincare", pt: "Cuidados com a pele", weight: 95 },
 { ko: "선케어/자외선차단", en: "Sun care", pt: "Proteção solar", weight: 82 },
 { ko: "헤어케어", en: "Hair care", pt: "Cuidados capilares", weight: 78 },
 { ko: "바디케어", en: "Body care", pt: "Cuidados corporais", weight: 64 },
 { ko: "메이크업", en: "Makeup", pt: "Maquiagem", weight: 70 },
 { ko: "향수", en: "Fragrance", pt: "Perfumaria", weight: 88 }
 ]
 },
 consumer: {
 title: { ko: "브라질 소비자 특징", en: "Brazilian Consumer Traits", pt: "Perfil do Consumidor Brasileiro" },
 items: [
 { ko: "뷰티 지출 비중이 높은 문화, 향수·바디케어 강세", en: "High beauty-spend culture; strong fragrance & body care", pt: "Cultura de alto gasto em beleza; perfumaria e corpo fortes" },
 { ko: "고온다습 기후 → 경량·산뜻·보습 포뮬러 선호", en: "Hot, humid climate → lightweight, non-sticky, hydrating formulas", pt: "Clima quente/úmido → fórmulas leves, não pegajosas e hidratantes" },
 { ko: "SNS·인플루언서·틱톡 중심의 트렌드 확산", en: "Trends driven by social media, influencers, TikTok", pt: "Tendências impulsionadas por redes sociais, influenciadores e TikTok" },
 { ko: "수입 화장품은 높은 세금으로 가격대가 상승", en: "Imported cosmetics priced up by high taxes", pt: "Cosméticos importados encarecem por impostos altos" }
 ]
 },
 channels: {
 title: { ko: "유통 채널 & 경쟁/참고사", en: "Channels & Players to Benchmark", pt: "Canais e Players de Referência" },
 offline: { ko: "오프라인 — 전문점 약 38% 비중", en: "Offline — specialty stores ~38%", pt: "Offline — lojas especializadas ~38%" },
 offlineList: [
 { name: "Natura", pron: "나뚜라", logo: "assets/retailers/natura.png" },
 { name: "O Boticário", sub: "Grupo Boticário", pron: "오 보치카리우", logo: "assets/retailers/boticario.png" },
 { name: "Sephora Brazil", pron: "세포라", logo: "assets/retailers/sephora.png" },
 { name: "Drogasil", pron: "드로가지우", logo: "assets/retailers/drogasil.png" },
 { name: "Droga Raia", pron: "드로가 하이아", logo: "assets/retailers/drogaraia.png" }
 ],
 online: { ko: "온라인 — 가장 빠른 성장 채널", en: "Online — fastest-growing channel", pt: "Online — canal de crescimento mais rápido" },
 onlineList: [
 { name: "Beleza na Web", sub: "Grupo Boticário", pron: "벨레자 나 웨비", logo: "assets/retailers/belezanaweb.png" },
 { name: "Época Cosméticos", pron: "에뽀까 코스메치쿠스", logo: "assets/retailers/epoca.png" },
 { name: "Mercado Livre", pron: "메르카두 리브리", logo: "assets/retailers/mercadolivre.png" },
 { name: "Amazon Brazil", pron: "아마존", logo: "assets/retailers/amazon.png" },
 { name: "Shopee Brazil", pron: "쇼피", logo: "assets/retailers/shopee.png" }
 ],
 leaders: { ko: "Natura + Grupo Boticário 합산 약 25% 점유", en: "Natura + Grupo Boticário ≈ 25% combined", pt: "Natura + Grupo Boticário ≈ 25% combinados" }
 },
 kbeautyPresence: {
 title: { ko: "이미 브라질에서 판매 중인 K-Beauty (예시)", en: "K-Beauty already selling in Brazil (examples)", pt: "K-Beauty já vendendo no Brasil (exemplos)" },
 note: { ko: "공개 채널에서 확인된 브랜드들이며, ROUTE82의 소싱·유통권과는 별개입니다.", en: "Publicly visible on retail channels; independent of ROUTE82 sourcing/distribution rights.", pt: "Visíveis em canais de varejo; independente de direitos de sourcing/distribuição da ROUTE82." },
 brands: ["COSRX", "ANUA", "SKIN1004", "BioDance", "D'Alba", "AHC", "Missha"]
 }
 },

 /* ---------- RETAIL LANDSCAPE & POSITIONING ---------- */
 retail: {
 title: { ko: "오프라인 리테일 분석 & 포지셔닝", en: "Offline Retail Landscape & Positioning", pt: "Análise do Varejo Físico e Posicionamento" },
 intro: {
 ko: "브라질 오프라인 뷰티 채널을 매출·포맷·경쟁사 관점에서 분석했습니다. 결론부터 말씀드리면, 브라질에는 '창고형(아타카레조) 소비 문화'는 매우 강하지만, 큐레이션형 K-뷰티 창고형·체험형 전문 매장은 아직 비어 있는 공간(white space)입니다. 수치는 공개 추정치이며 방향성 참고용입니다.",
 en: "We analyzed Brazil's offline beauty channels by sales, format and competitor. The bottom line: Brazil has a very strong warehouse (atacarejo) shopping culture, yet a curated, experiential, warehouse-format K-Beauty store is still an open white space. Figures are public estimates, for direction only.",
 pt: "Analisamos os canais físicos de beleza do Brasil por vendas, formato e concorrente. A conclusão: o Brasil tem uma cultura de compra de atacarejo (formato de armazém) muito forte, mas uma loja de K-Beauty com curadoria, experiência e formato de armazém ainda é um espaço em aberto (white space). Os números são estimativas públicas, apenas como direção."
 },
 stats: [
 { value: 34, suffix: "%", decimals: 0,
 label: { ko: "전문점·향수점 채널 비중 (최대 오프라인 채널)", en: "Specialty/perfumery share (largest offline channel)", pt: "Lojas especializadas/perfumarias (maior canal físico)" }, tag: "S23", conf: "est" },
 { value: 70, suffix: "%", decimals: 0,
 label: { ko: "아타카레조(창고형)에서 쇼핑하는 브라질 소비자", en: "Brazilians who shop at atacarejo (warehouse format)", pt: "Brasileiros que compram em atacarejo (formato armazém)" }, tag: "S28", conf: "conf" },
 { value: 2000, suffix: "+", decimals: 0,
 label: { ko: "브라질 아타카레조 매장 수 (가장 빠르게 성장)", en: "Atacarejo stores in Brazil (fastest-growing format)", pt: "Lojas de atacarejo no Brasil (formato que mais cresce)" }, tag: "S28", conf: "conf" },
 { value: 0, suffix: "", decimals: 0, hot: true,
 label: { ko: "큐레이션형 K-뷰티 창고형·체험형 전문 매장 (공개 조사 기준)", en: "Curated, large-format experiential K-Beauty stores (public scan)", pt: "Lojas de K-Beauty de grande formato e experiência (varredura pública)" }, tag: "S30", conf: "confirm" }
 ],
 whitespace: {
 title: { ko: "핵심 발견 — 비어 있는 공간", en: "Key Finding — The White Space", pt: "Descoberta-Chave — O Espaço em Aberto" },
 body: {
 ko: "브라질 K-뷰티는 대부분 온라인(Shopee·Mercado Livre·kollab·LabKo 등)과 세포라의 일부 'K-뷰티 월', 소규모 편집숍으로만 판매됩니다. 공개 조사 기준, 대형·큐레이션·체험형 K-뷰티 전문 매장(강남뷰티 같은 포맷)은 확인되지 않았습니다. 바로 이 지점이 ROUTE82가 제안하는 메인 모델입니다.",
 en: "Brazil's K-beauty is sold mostly online (Shopee, Mercado Livre, kollab, LabKo, etc.), via a limited 'K-beauty wall' in Sephora, and through small multi-brand shops. In our public scan, no large-format, curated, experiential K-beauty specialty store (a format like GANGNAM BEAUTY) was identified. That gap is exactly the main model ROUTE82 proposes.",
 pt: "O K-beauty do Brasil é vendido principalmente online (Shopee, Mercado Livre, kollab, LabKo etc.), por um 'mural de K-beauty' limitado na Sephora e por pequenas lojas multimarcas. Em nossa varredura pública, não identificamos uma loja especializada de K-beauty de grande formato, com curadoria e experiência (um formato como a GANGNAM BEAUTY). Essa lacuna é justamente o modelo principal que a ROUTE82 propõe."
 },
 note: { ko: "공개 조사 기반 평가이며, 현지 실사로 함께 검증할 것을 제안합니다.", en: "An assessment from public desk research — we suggest validating it together with local field checks.", pt: "Avaliação baseada em pesquisa pública — sugerimos validar em conjunto com checagens locais." }
 },
 players: {
 title: { ko: "주요 오프라인 플레이어 지형", en: "Major Offline Players", pt: "Principais Players do Varejo Físico" },
 note: { ko: "공개 자료 기준 요약이며, 포지셔닝 비교를 위한 참고입니다.", en: "Summary from public sources, for positioning comparison.", pt: "Resumo de fontes públicas, para comparação de posicionamento." },
 headers: {
 player: { ko: "플레이어", en: "Player", pt: "Player" },
 format: { ko: "포맷 / 규모", en: "Format / Scale", pt: "Formato / Escala" },
 kbeauty: { ko: "K-뷰티 포지션", en: "K-Beauty stance", pt: "Posição em K-Beauty" }
 },
 rows: [
 { name: "Grupo Boticário · The Beauty Box",
 format: { ko: "멀티브랜드 전문점·자사몰 (그룹 ~4,000 매장)", en: "Multibrand specialty & DTC (group ~4,000 stores)", pt: "Especializada multimarca e DTC (grupo ~4.000 lojas)" },
 kb: { ko: "자국 브랜드 중심, K-뷰티 비중 낮음", en: "Brazilian-brand led, low K-beauty share", pt: "Foco em marcas brasileiras, baixa presença de K-beauty" }, tag: "S24" },
 { name: "Sephora Brasil",
 format: { ko: "프리미엄 몰 '목적지' 체험 (42개 매장·13개주)", en: "Premium mall 'destination' experience (42 stores, 13 states)", pt: "Experiência 'destino' premium em shoppings (42 lojas, 13 estados)" },
 kb: { ko: "일부 K-브랜드 '월' 운영, 구색 좁고 프리미엄", en: "Limited K-brand 'wall', narrow & premium", pt: "'Mural' de K-marcas limitado, sortimento estreito e premium" }, tag: "S25" },
 { name: "Ikesaki",
 format: { ko: "뷰티 메가스토어 (상파울루 Liberdade, 15,000+ SKU)", en: "Beauty megastore (Liberdade, São Paulo, 15,000+ SKUs)", pt: "Megaloja de beleza (Liberdade, São Paulo, 15.000+ SKUs)" },
 kb: { ko: "전문가·잡화 혼합, K-뷰티 비전문", en: "Pro + general mix, not K-beauty focused", pt: "Mix profissional e geral, sem foco em K-beauty" }, tag: "S26" },
 { name: { ko: "약국 체인 (Raia Drogasil 등)", en: "Drugstore chains (Raia Drogasil, etc.)", pt: "Redes de farmácia (Raia Drogasil etc.)" },
 format: { ko: "더모코스메틱 채널 (점유 16.1%, 3,100+ 매장)", en: "Dermocosmetics channel (16.1% share, 3,100+ stores)", pt: "Canal de dermocosméticos (16,1% de share, 3.100+ lojas)" },
 kb: { ko: "더마 위주, K-뷰티 비전문", en: "Derma-led, not K-beauty focused", pt: "Foco em derma, sem foco em K-beauty" }, tag: "S27" },
 { name: { ko: "온라인 K-뷰티 (kollab·LabKo·Shopee 등)", en: "Online K-beauty (kollab, LabKo, Shopee, etc.)", pt: "K-beauty online (kollab, LabKo, Shopee etc.)" },
 format: { ko: "온라인 중심·소형 매장", en: "Online-led, tiny physical footprint", pt: "Foco online, presença física mínima" },
 kb: { ko: "K-뷰티 특화하나 소규모·무체험·무스케일", en: "K-focused but small, no experience, no scale", pt: "Foco em K, mas pequeno, sem experiência nem escala" }, tag: "S30" }
 ]
 },
 atacarejo: {
 title: { ko: "순풍 — 브라질의 창고형(아타카레조) 문화", en: "Tailwind — Brazil's Warehouse (Atacarejo) Culture", pt: "Vento a Favor — A Cultura de Atacarejo do Brasil" },
 body: {
 ko: "아타카레조(창고형 셀프서비스)는 브라질에서 가장 빠르게 성장하는 리테일 포맷으로, 매장 2,000개 이상·국민 10명 중 7명이 이용하며 GDP의 약 2%를 차지합니다. O Boticário조차 2020년부터 아타카레조 포맷으로 확장 중입니다. 즉 '창고형'은 브라질 소비자에게 이미 검증된 행동 양식이며, 여기에 K-뷰티 큐레이션과 체험을 얹는 것이 우리의 차별점입니다.",
 en: "Atacarejo (warehouse-style self-service) is Brazil's fastest-growing retail format — 2,000+ stores, 7 in 10 Brazilians shop it, ~2% of GDP. Even O Boticário has been expanding an atacarejo format since 2020. So 'warehouse' is already proven consumer behavior in Brazil; our edge is layering K-beauty curation and experience on top of it.",
 pt: "O atacarejo (autosserviço em formato de armazém) é o formato de varejo que mais cresce no Brasil — 2.000+ lojas, 7 em cada 10 brasileiros compram nele, ~2% do PIB. Até a O Boticário expande um formato de atacarejo desde 2020. Ou seja, 'armazém' já é um comportamento de consumo comprovado no Brasil; nosso diferencial é somar curadoria e experiência de K-beauty a isso."
 }
 },
 positioning: {
 title: { ko: "포지셔닝 제안 — K-뷰티 창고형 체험 매장", en: "Positioning Proposal — K-Beauty Warehouse Experience", pt: "Proposta de Posicionamento — Loja-Armazém de Experiência K-Beauty" },
 lead: {
 ko: "아래 맵의 가로축은 가격(가치·대중 ↔ 프리미엄), 세로축은 전문성(종합·일반 ↔ K-뷰티 특화·체험)입니다. 좌상단 — '가치 가격 × K-뷰티 특화 × 대형 체험' 영역이 비어 있으며, 이곳이 우리가 선점할 포지션입니다.",
 en: "On the map below, the X-axis is price (value/accessible ↔ premium) and the Y-axis is focus (generalist ↔ K-beauty specialized & experiential). The upper-left — 'value price × K-beauty specialized × large experiential' — is empty, and that is the position we can own.",
 pt: "No mapa abaixo, o eixo X é preço (valor/acessível ↔ premium) e o eixo Y é foco (generalista ↔ especializado em K-beauty e experiência). O canto superior esquerdo — 'preço acessível × especializado em K-beauty × grande experiência' — está vazio, e é essa a posição que podemos ocupar."
 },
 axis: {
 xlo: { ko: "가치 · 대중 접근성", en: "Value · Accessible", pt: "Valor · Acessível" },
 xhi: { ko: "프리미엄", en: "Premium", pt: "Premium" },
 ylo: { ko: "종합 · 일반", en: "Generalist", pt: "Generalista" },
 yhi: { ko: "K-뷰티 특화 · 체험", en: "K-Beauty specialized · experiential", pt: "Especializado em K-Beauty · experiência" }
 },
 points: [
 { label: "Sephora", x: 82, y: 62 },
 { label: { ko: "Boticário·Beauty Box", en: "Boticário·Beauty Box", pt: "Boticário·Beauty Box" }, x: 48, y: 30 },
 { label: "Ikesaki", x: 30, y: 42 },
 { label: { ko: "약국·더마", en: "Drugstore", pt: "Farmácia" }, x: 22, y: 22 },
 { label: { ko: "온라인 K-뷰티", en: "Online K-beauty", pt: "K-beauty online" }, x: 56, y: 72 },
 { label: "Atacarejo", x: 12, y: 12 },
 { label: { ko: "★ 제안: K-뷰티 창고형 매장", en: "★ Proposed: K-Beauty Warehouse", pt: "★ Proposto: Loja-Armazém K-Beauty" }, x: 30, y: 90, us: true }
 ],
 diffTitle: { ko: "경쟁사 대비 차별점", en: "Differentiation vs Competitors", pt: "Diferenciação vs Concorrentes" },
 diff: [
 { vs: "Sephora", point: { ko: "프리미엄·몰·좁은 K 구색 → 우리는 K-뷰티 특화 + 가치 가격 + 대형 체험 + 깊은 구색", en: "Premium, mall, narrow K range → we are K-focused + value price + large experience + deep range", pt: "Premium, shopping, K estreito → somos foco em K + preço acessível + grande experiência + sortimento profundo" } },
 { vs: { ko: "Boticário·Beauty Box", en: "Boticário·Beauty Box", pt: "Boticário·Beauty Box" }, point: { ko: "자국 브랜드 중심 → 우리는 100% 큐레이션 K-뷰티", en: "Brazilian-brand led → we are 100% curated K-beauty", pt: "Foco em marcas brasileiras → somos 100% K-beauty com curadoria" } },
 { vs: "Ikesaki", point: { ko: "전문가·잡화 혼합·올드 포맷 → 우리는 트렌드 K-뷰티 큐레이션·현대적 체험형", en: "Pro + general, dated format → we are trend K-beauty curation, modern experiential", pt: "Profissional + geral, formato datado → somos curadoria de K-beauty atual e experiência moderna" } },
 { vs: { ko: "온라인 K-뷰티", en: "Online K-beauty", pt: "K-beauty online" }, point: { ko: "소규모·온라인·무체험 → 우리는 물리적 플래그십 + 창고형 스케일 + 옴니채널", en: "Small, online, no experience → we are a physical flagship + warehouse scale + omnichannel", pt: "Pequeno, online, sem experiência → somos flagship físico + escala de armazém + omnichannel" } },
 { vs: "Atacarejo", point: { ko: "식품·잡화 중심·무큐레이션 → 우리는 뷰티 체험형 + K-뷰티 큐레이션", en: "Grocery/general, no curation → we are beauty-experiential + K-beauty curation", pt: "Mercearia/geral, sem curadoria → somos experiência de beleza + curadoria de K-beauty" } }
 ]
 },
 location: {
 title: { ko: "입지 분석 & 단계적 확장", en: "Location Analysis & Phased Expansion", pt: "Análise de Localização e Expansão por Fases" },
 lead: {
 ko: "플래그십으로 정통성과 화제를 만들고, 검증된 대중 포맷으로 확장하는 2단계 입지 전략을 제안합니다.",
 en: "We propose a two-step location strategy: build authenticity and buzz with a flagship, then scale through proven mass formats.",
 pt: "Propomos uma estratégia de localização em duas etapas: criar autenticidade e buzz com um flagship e, depois, escalar por formatos de massa comprovados."
 },
 cards: [
 { badge: { ko: "1단계 · 플래그십", en: "Step 1 · Flagship", pt: "Etapa 1 · Flagship" },
 name: { ko: "봉헤치루 (Bom Retiro) — 상파울루 'Korea Town'", en: "Bom Retiro — São Paulo 'Korea Town'", pt: "Bom Retiro — 'Korea Town' de São Paulo" },
 body: { ko: "상파울루시가 공식 인정한 한인 상권으로 'Korea Town' 프로젝트(Rua Prates–Coreia)가 진행 중입니다. 정통 한류 후광, 한식·관광 유동, 전국에서 모이는 도매·쇼핑 DNA를 갖춰 K-뷰티 플래그십의 최적 앵커입니다.", en: "São Paulo's officially recognized Korean district, with a 'Korea Town' project under way (Rua Prates–Coreia). Authentic Korean halo, Korean food & tourism footfall, and a nationwide wholesale-shopping DNA make it the ideal anchor for a K-beauty flagship.", pt: "Bairro coreano oficialmente reconhecido por São Paulo, com projeto 'Korea Town' em andamento (Rua Prates–Coreia). Halo coreano autêntico, gastronomia e turismo, e um DNA de compras/atacado que atrai todo o país — o âncora ideal para um flagship de K-beauty." }, tag: "S29" },
 { badge: { ko: "2단계 · 목적지 몰", en: "Step 2 · Destination Malls", pt: "Etapa 2 · Shoppings Destino" },
 name: { ko: "상파울루 주요 쇼핑몰", en: "Major São Paulo shopping malls", pt: "Principais shoppings de São Paulo" },
 body: { ko: "세포라식 '목적지' 체험 매장으로 고객 유동과 프리미엄 노출을 확보합니다. 플래그십에서 만든 브랜드 자산을 고소비 상권으로 확장하는 단계입니다.", en: "Sephora-style 'destination' experience stores to capture footfall and premium exposure — extending the brand equity built at the flagship into high-spend catchments.", pt: "Lojas de experiência 'destino' no estilo Sephora para capturar fluxo e exposição premium — levando o valor de marca do flagship a regiões de alto consumo." } },
 { badge: { ko: "3단계 · 스케일", en: "Step 3 · Scale", pt: "Etapa 3 · Escala" },
 name: { ko: "아타카레조 회랑 + 프랜차이즈", en: "Atacarejo corridors + franchise", pt: "Corredores de atacarejo + franquia" },
 body: { ko: "검증된 대중 창고형 포맷과 프랜차이즈로 전국 확장합니다. '창고형'이라는 익숙한 행동에 K-뷰티 큐레이션을 얹어 규모를 만듭니다.", en: "Scale nationwide via the proven mass warehouse format and franchising — layering K-beauty curation onto a familiar 'warehouse' behavior.", pt: "Escalar nacionalmente pelo formato de armazém de massa comprovado e por franquias — somando curadoria de K-beauty a um comportamento de 'armazém' já familiar." }, tag: "S28" }
 ],
 mapLink: "https://www.google.com/maps?q=Bom+Retiro,+S%C3%A3o+Paulo",
 mapEmbed: "https://www.google.com/maps?q=Bom%20Retiro%2C%20S%C3%A3o%20Paulo&output=embed",
 mapLabel: { ko: "Bom Retiro 지도 보기", en: "View Bom Retiro on Maps", pt: "Ver Bom Retiro no Maps" },
 mapCaption: { ko: "Bom Retiro · 상파울루 'Korea Town' (한인 상권)", en: "Bom Retiro · São Paulo 'Korea Town' (Korean district)", pt: "Bom Retiro · 'Korea Town' de São Paulo (bairro coreano)" }
 }
 },

 /* ---------- REGULATORY ---------- */
 regulatory: {
 title: { ko: "브라질 인증 / ANVISA 프로세스", en: "Brazil Regulatory / ANVISA Process", pt: "Regulatório do Brasil / Processo ANVISA" },
 disclaimer: {
 ko: "미국 FDA나 캐나다 Health Canada처럼 브라질에도 화장품 관련 규제기관과 절차가 있으며, 브라질은 ANVISA 기준을 따라야 합니다. 아래 내용은 공개·컨설팅 자료 기반이며, 모든 세부 사항은 ANVISA 공식 자료와 브라질 측 규제 파트너를 통해 확인해야 합니다. 소요 기간·비용은 확정하지 않습니다.",
 en: "Like the U.S. FDA or Health Canada, Brazil has a cosmetics regulator and process — and Brazil must follow ANVISA's rules. The notes below are based on public/consulting sources; every detail must be confirmed with official ANVISA materials and a Brazil-side regulatory partner. Timelines and costs are intentionally not fixed.",
 pt: "Assim como a FDA dos EUA ou a Health Canada, o Brasil tem um órgão regulador e um processo para cosméticos — e o Brasil segue as regras da ANVISA. As notas abaixo baseiam-se em fontes públicas/consultorias; cada detalhe deve ser confirmado com materiais oficiais da ANVISA e um parceiro regulatório no Brasil. Prazos e custos não são fixados de propósito."
 },
 delivery: {
 title: { ko: "ROUTE82 인증·라벨링 대행 모델", en: "ROUTE82 Regulatory & Labeling Delivery Model", pt: "Modelo de Execução Regulatória e de Rotulagem da ROUTE82" },
 headline: {
 ko: "브라질 측은 'AFE 보유 현지 법인 + 시스템 계정 접근'만 준비해 주시면 됩니다. 가장 까다로운 ANVISA 신고·등록과 포르투갈어 라벨링은 ROUTE82가 실무를 대행합니다.",
 en: "The Brazil side only needs to provide an AFE-holding local entity and system account access. The hardest parts — ANVISA notification/registration and Portuguese labeling — are executed by ROUTE82 on your behalf.",
 pt: "O lado brasileiro precisa fornecer apenas uma entidade local com AFE e acesso à conta do sistema. As partes mais difíceis — notificação/registro na ANVISA e rotulagem em português — são executadas pela ROUTE82 em seu nome."
 },
 brazil: {
 label: { ko: "브라질 측이 준비 — 1회성 인프라", en: "Brazil side provides — one-time infrastructure", pt: "O lado brasileiro fornece — infraestrutura única" },
 items: [
 { ko: "AFE 보유 현지 법인 (화장품·향수 '수입' 활동 등록)", en: "AFE-holding local entity (with cosmetics/perfume 'import' activity)", pt: "Entidade local com AFE (com atividade de 'importação' de cosméticos/perfumes)" },
 { ko: "지자체 보건감시국 운영 라이선스 (licença sanitária)", en: "Local health-surveillance operating license (licença sanitária)", pt: "Licença sanitária de funcionamento (vigilância local)" },
 { ko: "ANVISA 시스템 계정 접근 권한 (위임)", en: "ANVISA system account access (delegated)", pt: "Acesso à conta do sistema ANVISA (delegado)" }
 ]
 },
 route82: {
 label: { ko: "ROUTE82가 대행 — 반복 실무", en: "ROUTE82 executes — recurring work", pt: "A ROUTE82 executa — trabalho recorrente" },
 items: [
 { ko: "계정 기반 ANVISA Grade 1 신고 / Grade 2 등록 실무", en: "Account-based ANVISA Grade 1 notification / Grade 2 registration", pt: "Notificação Grau 1 / registro Grau 2 na ANVISA via conta" },
 { ko: "포르투갈어 라벨 제작·검수 (AFE번호·INCI·경고문)", en: "Portuguese label creation & QC (AFE no., INCI, warnings)", pt: "Criação e QC de rótulo em português (nº AFE, INCI, advertências)" },
 { ko: "성분·클레임 사전 검토 & 등록 도시에(dossiê) 준비", en: "Ingredient/claim pre-review & registration dossier prep", pt: "Pré-revisão de ingredientes/alegações e preparo do dossiê" },
 { ko: "제품별 진행 관리 & 일정 추적", en: "Per-product progress management & tracking", pt: "Gestão de progresso por produto e acompanhamento" }
 ]
 },
 note: {
 ko: "법적 명의자·책임 주체(responsible party)는 브라질 현지 법인이 유지하며, ROUTE82는 위임받은 계정·프로세스 실무를 수행합니다. 세부 절차·요건은 규정 개정에 따라 브라질 규제 파트너와 최종 확인합니다.",
 en: "The Brazilian local entity remains the legal holder/responsible party; ROUTE82 performs the delegated account and process work. Exact steps/requirements are finalized with a Brazil-side regulatory partner as rules evolve.",
 pt: "A entidade local brasileira permanece como titular legal/responsável; a ROUTE82 executa o trabalho delegado de conta e processo. Etapas/requisitos exatos são finalizados com um parceiro regulatório no Brasil conforme as regras evoluem."
 }
 },
 cards: [
 {
 title: { ko: "법적 카테고리 & ANVISA 역할", en: "Legal Category & ANVISA's Role", pt: "Categoria Legal e Papel da ANVISA" },
 body: {
 ko: "화장품은 'Produtos de Higiene Pessoal, Cosméticos e Perfumes(HPPC)'로 관리되며, 보건부 산하 ANVISA가 감독합니다.",
 en: "Cosmetics are managed as 'Produtos de Higiene Pessoal, Cosméticos e Perfumes (HPPC)', overseen by ANVISA under the Ministry of Health.",
 pt: "Cosméticos são tratados como 'Produtos de Higiene Pessoal, Cosméticos e Perfumes (HPPC)', supervisionados pela ANVISA, sob o Ministério da Saúde."
 }, conf: "confirm"
 },
 {
 title: { ko: "Grade 1 / Grade 2 분류", en: "Grade 1 / Grade 2 Classification", pt: "Classificação Grau 1 / Grau 2" },
 body: {
 ko: "위험도에 따라 Grade 1(저위험 → 신고/Notification, GGCOS)과 Grade 2(고위험 → 등록/Registration, 안정성·안전성·유효성 도시에 제출)로 나뉩니다.",
 en: "By risk: Grade 1 (lower risk → notification to GGCOS) and Grade 2 (higher risk → registration with a full safety/stability/efficacy dossier).",
 pt: "Por risco: Grau 1 (menor risco → notificação à GGCOS) e Grau 2 (maior risco → registro com dossiê de segurança/estabilidade/eficácia)."
 }, conf: "confirm"
 },
 {
 title: { ko: "현행 규정 (확인 필요)", en: "Current Resolutions (verify)", pt: "Resoluções Atuais (verificar)" },
 body: {
 ko: "컨설팅 자료상 RDC 752/2022(분류, 일부 대체), RDC 907/2024(라벨링), RDC 949/2024(위험 분류)가 언급됩니다. 정확한 현행 번호는 ANVISA/gov.br에서 확인해야 합니다.",
 en: "Consultancies cite RDC 752/2022 (categorization, partly superseded), RDC 907/2024 (labeling), RDC 949/2024 (risk classification). Exact current numbers must be checked on ANVISA/gov.br.",
 pt: "Consultorias citam RDC 752/2022 (categorização, parcialmente substituída), RDC 907/2024 (rotulagem), RDC 949/2024 (classificação de risco). Os números atuais devem ser verificados na ANVISA/gov.br."
 }, conf: "confirm"
 },
 {
 title: { ko: "수입자 / Responsible Company", en: "Importer / Responsible Company", pt: "Importador / Empresa Responsável" },
 body: {
 ko: "외국 기업은 직접 등록할 수 없습니다. AFE(영업허가), 운영 라이선스(현지 Vigilância Sanitária), GMP 근거를 보유한 브라질 수입자/법적대리인을 지정해야 합니다.",
 en: "Foreign companies cannot register directly. A Brazilian importer/legal representative holding AFE (company authorization), an operating license (local health surveillance) and GMP evidence must be appointed.",
 pt: "Empresas estrangeiras não podem registrar diretamente. É necessário nomear um importador/representante legal brasileiro com AFE, licença de funcionamento (vigilância sanitária local) e evidência de BPF/GMP."
 }, conf: "confirm"
 },
 {
 title: { ko: "포르투갈어 라벨링 필수 항목", en: "Portuguese Labeling Essentials", pt: "Itens Essenciais de Rotulagem" },
 body: {
 ko: "제품명, 브랜드, AFE 번호, 로트, 유효기간, 원산지, 수입자/제조사 정보, 성분(INCI), 카테고리별 경고문이 포르투갈어로 필요합니다.",
 en: "Product name, brand, AFE number, lot, expiry, country of origin, importer/manufacturer, ingredients (INCI) and category warnings — in Portuguese.",
 pt: "Nome do produto, marca, número AFE, lote, validade, país de origem, importador/fabricante, ingredientes (INCI) e advertências da categoria — em português."
 }, conf: "confirm"
 },
 {
 title: { ko: "성분·클레임 & INCI", en: "Ingredients, Claims & INCI", pt: "Ingredientes, Alegações e INCI" },
 body: {
 ko: "성분은 ANVISA의 제한/금지 목록과 대조해야 하고, INCI 성분명 사용이 일반적입니다. 기능성 클레임은 사전 검토가 필요합니다.",
 en: "Ingredients must be checked against ANVISA restricted/prohibited lists; INCI naming is standard. Functional claims need pre-review.",
 pt: "Os ingredientes devem ser checados nas listas de restrição/proibição da ANVISA; a nomenclatura INCI é padrão. Alegações funcionais exigem revisão prévia."
 }, conf: "confirm"
 }
 ],
 riskLegend: {
 title: { ko: "카테고리별 규제 민감도 (참고용)", en: "Regulatory Sensitivity by Category (indicative)", pt: "Sensibilidade Regulatória por Categoria (indicativo)" },
 note: { ko: "선스크린·미백·여드름·탈모·기능성 표현은 더 까다로울 수 있어 'regulatory-sensitive'로 표시합니다. 실제 분류는 제품·클레임별로 확인해야 합니다.", en: "Sunscreen, brightening, acne, anti-hair-loss and functional claims may be stricter — flagged 'regulatory-sensitive'. Actual class is per-product/claim.", pt: "Protetor solar, clareamento, acne, antiqueda e alegações funcionais podem ser mais rígidos — marcados como 'sensíveis'. A classe real é por produto/alegação." }
 },
 docs: {
 title: { ko: "수입 전 준비 문서 (예시)", en: "Pre-Import Document Checklist (example)", pt: "Checklist de Documentos Pré-Importação (exemplo)" },
 items: [
        { ko: "제품 정보·성분표 (INCI)", en: "Product info & ingredient list (INCI)", pt: "Informações do produto e lista de ingredientes (INCI)" },
        { ko: "안전성/안정성 자료 (Grade 2 시)", en: "Safety/stability data (if Grade 2)", pt: "Dados de segurança/estabilidade (se Grau 2)" },
        { ko: "GMP / 제조소 증빙", en: "GMP / manufacturing evidence", pt: "Evidência de BPF/GMP / fabricação" },
        { ko: "포르투갈어 라벨 시안", en: "Portuguese label artwork", pt: "Arte do rótulo em português" },
        { ko: "Free Sale Certificate 등 (확인 필요)", en: "Free Sale Certificate, etc. (confirm)", pt: "Certificado de Livre Venda etc. (confirmar)" }
      ]
    }
 },

 /* ---------- SPECIALIST / CREDENTIALS ---------- */
 specialist: {
 title: { ko: "인증 리더십 & 실적", en: "Regulatory Leadership & Track Record", pt: "Liderança Regulatória e Histórico" },
 lead: {
 ko: "브라질 인증을 어렵게 느끼실 필요가 없습니다. ROUTE82의 인증·인허가 본부장이 직접 실무를 주도하기 때문입니다.",
 en: "You don't need to find Brazil's regulation intimidating — ROUTE82's Head of Certification leads the work directly.",
 pt: "Você não precisa achar a regulação do Brasil intimidadora — o Diretor de Certificação da ROUTE82 lidera o trabalho diretamente."
 },
 person: {
 name: { ko: "김현우 (Brooks)", en: "Kim Hyun-woo (Brooks)", pt: "Kim Hyun-woo (Brooks)" },
 role: { ko: "ROUTE82 인증·인허가 본부장", en: "Head of Certification & Regulatory Affairs, ROUTE82", pt: "Diretor de Certificação e Assuntos Regulatórios, ROUTE82" },
 bio: {
 ko: "FDA(미국), Health Canada(캐나다), CPNP(유럽), 베트남 등 주요국 화장품·식품 인증·인허가를 다뤄온 스페셜리스트입니다. 브라질 ANVISA 역시 'AFE(회사 허가) + 제품 신고/등록 + 라벨링'이라는 동일한 규제 프레임으로 이해하고 있으며, 문제가 발생하지 않도록 인증·라벨링 실무를 주도·대행할 수 있습니다.",
 en: "A specialist who has handled cosmetics & food certification/licensing across major markets — FDA (US), Health Canada (CA), CPNP (EU) and Vietnam. He reads Brazil's ANVISA through the same framework (company AFE + product notification/registration + labeling) and can lead and execute the work so issues do not arise.",
 pt: "Um especialista que conduziu certificação/licenciamento de cosméticos e alimentos em mercados importantes — FDA (EUA), Health Canada (CA), CPNP (UE) e Vietnã. Ele lê a ANVISA do Brasil pelo mesmo quadro (AFE da empresa + notificação/registro do produto + rotulagem) e pode liderar e executar o trabalho para que problemas não ocorram."
 }
 },
 certsTitle: { ko: "다뤄온 인증 체계", en: "Certification systems handled", pt: "Sistemas de certificação atendidos" },
 certs: [
 { code: "FDA", region: { ko: "미국", en: "USA", pt: "EUA" }, state: "done" },
 { code: "Health Canada", region: { ko: "캐나다", en: "Canada", pt: "Canadá" }, state: "done" },
 { code: "CPNP", region: { ko: "유럽(EU)", en: "EU", pt: "UE" }, state: "done" },
 { code: "Vietnam", region: { ko: "베트남", en: "Vietnam", pt: "Vietnã" }, state: "done" },
 { code: "ANVISA", region: { ko: "브라질 — 동일 프레임 적용", en: "Brazil — same framework", pt: "Brasil — mesmo quadro" }, state: "ready" }
 ],
 proofTitle: { ko: "연사 초청 실적", en: "Invited-speaker record", pt: "Histórico como palestrante convidado" },
 proof: [
 {
 ko: "Amazon × pingpong × ROUTE82 글로벌 진출 웨비나 — '미국 화장품 FDA 등록·라벨링 실무' 연사 (2026.5.28)",
 en: "Amazon × pingpong × ROUTE82 global-expansion webinar — speaker on 'US cosmetics FDA registration & labeling' (May 28, 2026)",
 pt: "Webinar de expansão global Amazon × pingpong × ROUTE82 — palestrante sobre 'registro e rotulagem FDA de cosméticos nos EUA' (28/05/2026)"
 },
 {
 ko: "월마트(Walmart) 온보딩 K-Beauty 웨비나 — 'FDA 인증·라벨링 실무' 연사 (2026.6.18 예정)",
 en: "Walmart onboarding K-Beauty webinar — speaker on 'FDA certification & labeling' (scheduled Jun 18, 2026)",
 pt: "Webinar de onboarding de K-Beauty da Walmart — palestrante sobre 'certificação e rotulagem FDA' (previsto 18/06/2026)"
 }
 ],
 banner: {
 partners: ["amazon", "pingpong", "ROUTE 82"],
 kicker: { ko: "2026 K-뷰티 글로벌 진출 전략", en: "2026 K-Beauty Global Expansion Strategy", pt: "Estratégia de Expansão Global de K-Beauty 2026" },
 big: ["아마존", "FDA", "정산"],
 date: { ko: "5.28 (THU) 13:00 ~", en: "May 28 (THU) 13:00 ~", pt: "28/05 (QUI) 13:00 ~" },
 sessions: [
 { who: "ROUTE82", topic: { ko: "미국 화장품 FDA 등록 및 라벨링 실무", en: "US cosmetics FDA registration & labeling", pt: "Registro e rotulagem FDA (EUA)" }, speaker: { ko: "김현우 본부장", en: "Kim Hyun-woo", pt: "Kim Hyun-woo" }, time: "14:00–16:00" }
 ],
 imageNote: { ko: "Amazon × pingpong × ROUTE82 공동 웨비나 (2026.5.28) — 김현우 본부장 'FDA 등록·라벨링 실무' 연사.", en: "Amazon × pingpong × ROUTE82 joint webinar (May 28, 2026) — Kim Hyun-woo, speaker on 'FDA registration & labeling'.", pt: "Webinar conjunto Amazon × pingpong × ROUTE82 (28/05/2026) — Kim Hyun-woo, palestrante sobre 'registro e rotulagem FDA'." }
 },
 closing: {
 ko: "결론: 브라질 측은 'AFE 보유 법인 + 계정'만 열어주시면 됩니다. 인증과 라벨링이라는 가장 어려운 부분은 ROUTE82가 책임지고 대행합니다.",
 en: "Bottom line: the Brazil side only opens up 'an AFE-holding entity + account'. The hardest parts — certification and labeling — are owned and executed by ROUTE82.",
 pt: "Conclusão: o lado brasileiro só abre 'uma entidade com AFE + conta'. As partes mais difíceis — certificação e rotulagem — são de responsabilidade e execução da ROUTE82."
 }
 },

 /* ---------- LOGISTICS ---------- */
 logistics: {
 title: { ko: "물류 & 수입 운영 모델", en: "Logistics & Import Operation Model", pt: "Logística e Modelo de Importação" },
 flow: {
 title: { ko: "공급 흐름", en: "Supply Flow", pt: "Fluxo de Suprimento" },
 steps: [
 { ko: "한국 브랜드 / 제조사", en: "Korean Brand / Maker", pt: "Marca / Fabricante Coreano" },
 { ko: "ROUTE82 (소싱·통합)", en: "ROUTE82 (sourcing/consolidation)", pt: "ROUTE82 (sourcing/consolidação)" },
 { ko: "포워더", en: "Freight Forwarder", pt: "Agente de Carga" },
 { ko: "브라질 수입자", en: "Brazil Importer", pt: "Importador no Brasil" },
 { ko: "현지 창고 / 3PL", en: "Local Warehouse / 3PL", pt: "Armazém Local / 3PL" },
 { ko: "B2B / B2C 채널", en: "B2B / B2C Channels", pt: "Canais B2B / B2C" }
 ]
 },
 modes: {
 title: { ko: "항공 vs 해상", en: "Air vs Sea", pt: "Aéreo vs Marítimo" },
 air: {
 label: { ko: "항공 (파일럿 단계)", en: "Air (pilot stage)", pt: "Aéreo (fase piloto)" },
 items: [
 { ko: "소량·빠른 리드타임, 초기 테스트에 적합", en: "Small volume, fast lead time — good for first tests", pt: "Pouco volume, prazo rápido — bom para os primeiros testes" },
 { ko: "단가 부담이 큼 → 고단가/소형 제품 위주", en: "Higher unit cost → favor high-value/compact SKUs", pt: "Custo unitário maior → preferir SKUs de alto valor/compactos" }
 ]
 },
 sea: {
 label: { ko: "해상 (스케일업 단계)", en: "Sea (scale-up stage)", pt: "Marítimo (fase de expansão)" },
 items: [
 { ko: "팔레트·컨테이너 단위, 규모의 경제", en: "Pallet/container units, economies of scale", pt: "Unidades de palete/contêiner, economia de escala" },
 { ko: "리드타임이 길어 수요예측·안전재고 필요", en: "Longer lead time → needs forecasting & safety stock", pt: "Prazo maior → exige previsão e estoque de segurança" }
 ]
 }
 },
 docs: {
 title: { ko: "통관 기본 서류", en: "Core Customs Documents", pt: "Documentos Aduaneiros Principais" },
 items: ["Commercial Invoice", "Packing List", "Bill of Lading / AWB", "Certificate of Origin", "ANVISA 승인·신고 자료 / ANVISA docs", "제품 라벨·성분표 / Labels & ingredients"]
 },
 taxes: {
 title: { ko: "세금 구조 (확정 금지)", en: "Tax Structure (not to be fixed)", pt: "Estrutura Tributária (não fixar)" },
 note: {
 ko: "화장품은 NCM 33류이며, 정확한 세율은 NCM 코드와 주(州)별 ICMS에 따라 달라집니다. 또한 EC 132/2023·LC 214/2025에 따른 세제개혁(CBS/IBS)이 2026년부터 단계 시행 중입니다.",
 en: "Cosmetics sit in NCM Ch.33; exact rates depend on the NCM code and state ICMS. A tax reform (CBS/IBS, EC 132/2023 & LC 214/2025) is phasing in from 2026.",
 pt: "Cosméticos estão no Cap.33 da NCM; as alíquotas exatas dependem do código NCM e do ICMS estadual. Uma reforma tributária (CBS/IBS, EC 132/2023 e LC 214/2025) está em transição desde 2026."
 },
 rows: [
 { tax: "II (Import Duty)", range: "0–35%", note: { ko: "NCM별", en: "by NCM", pt: "por NCM" } },
 { tax: "IPI", range: "0–30%", note: { ko: "화장품은 높을 수 있음", en: "can be higher for cosmetics", pt: "pode ser maior p/ cosméticos" } },
 { tax: "ICMS", range: "17–25%", note: { ko: "주(州)별 상이", en: "varies by state", pt: "varia por estado" } },
 { tax: "PIS/COFINS", range: "~11.75%+", note: { ko: "화장품·향수는 상향 가능", en: "higher for cosmetics/perfume", pt: "maior p/ cosméticos/perfume" } }
 ]
 },
 incoterms: {
 title: { ko: "Incoterms 제안", en: "Incoterms Proposal", pt: "Proposta de Incoterms" },
      ddpNote: { ko: "DDP 진행 시 물류비·관세·세금·핸들링 비용은 모두 '실비(cost pass-through)'로 청구하며, ROUTE82는 물류비에서 마진을 취하지 않습니다. ROUTE82는 한국 최저가·최고 수준의 글로벌 물류사와 계약되어 있어 글로벌 물류 지식이 풍부하며, 실비 인보이스를 투명하게 공개합니다.", en: "Under DDP, freight, duties, taxes and handling are all billed at actual cost (pass-through); ROUTE82 takes no margin on logistics. ROUTE82 is contracted with a top-tier, lowest-cost global forwarder in Korea, brings deep global logistics expertise, and discloses the itemized cost invoice transparently.", pt: "No DDP, frete, impostos, tributos e handling são cobrados pelo custo real (pass-through); a ROUTE82 não tem margem na logística. A ROUTE82 tem contrato com um agente logístico global de primeira linha e menor custo na Coreia, traz forte conhecimento logístico global e divulga a fatura detalhada de forma transparente." },
 items: [
 { term: "FOB Korea", ko: "한국 항구까지 ROUTE82, 이후 브라질 측 — 권장 출발점", en: "ROUTE82 to Korea port, Brazil onward — recommended start", pt: "ROUTE82 até o porto coreano, Brasil em diante — início recomendado" },
 { term: "DDP", ko: "ROUTE82가 브라질 문전까지 책임 — 물류비·관세·세금·핸들링은 '실비'로 청구 (물류 마진 0)", en: "ROUTE82 delivers to the door in Brazil — freight, duties, taxes & handling billed at actual cost (zero logistics margin)", pt: "A ROUTE82 entrega na porta no Brasil — frete, impostos, tributos e handling pelo custo real (margem logística zero)" }
 ]
 }
 },

 /* ---------- CURATION ---------- */
 curation: {
 title: { ko: "브랜드 소싱 & 상품 큐레이션", en: "Brand Sourcing & Product Curation", pt: "Curadoria de Marcas e Produtos" },
 intro: {
 ko: "아래는 카테고리 전략과 큐레이션 예시입니다. 규제 민감도 배지를 함께 표시했으며, 실명 브랜드는 'potential sourcing target / benchmark'로만 표현합니다. 브라질 독점·유통권은 ROUTE82가 별도 협의해야 하며 본 자료에서 확정하지 않습니다.",
 en: "Below: category strategy and example curation, each tagged with a regulatory-sensitivity badge. Named brands appear only as 'potential sourcing target / benchmark'. Brazil exclusivity/distribution rights require separate ROUTE82 negotiation and are not asserted here.",
 pt: "Abaixo: estratégia de categorias e curadoria de exemplo, cada uma com selo de sensibilidade regulatória. Marcas citadas aparecem apenas como 'alvo potencial / benchmark'. Direitos de exclusividade/distribuição no Brasil exigem negociação separada da ROUTE82 e não são afirmados aqui."
 },
 filterLabels: {
 all: { ko: "전체", en: "All", pt: "Todas" },
 low: { ko: "낮음", en: "Low", pt: "Baixo" },
 medium: { ko: "보통", en: "Medium", pt: "Médio" },
 high: { ko: "높음", en: "High", pt: "Alto" },
 anvisa: { ko: "ANVISA 확인", en: "ANVISA confirm", pt: "Confirmar ANVISA" }
 },
 categories: [
      { name: { ko: "선케어 / 자외선차단", en: "Sun care", pt: "Proteção solar" }, risk: "high",
        why: { ko: "브라질 기후에 최적 수요, 단 기능성 규제 까다로움", en: "Top climate fit, but strict functional regulation", pt: "Ótima aderência ao clima, mas regulação rígida" } },
      { name: { ko: "경량 보습 스킨케어", en: "Lightweight skincare", pt: "Skincare leve" }, risk: "low",
        why: { ko: "고온다습 기후에 적합, 진입 장벽 낮음", en: "Suits humid climate, lower barrier", pt: "Adequado ao clima úmido, menor barreira" } },
      { name: { ko: "여드름 / 트러블 케어", en: "Acne / trouble care", pt: "Cuidado anti-acne" }, risk: "high",
        why: { ko: "기능성 클레임 → 규제 민감", en: "Functional claims → sensitive", pt: "Alegações funcionais → sensível" } },
      { name: { ko: "토너 / 세럼 / 크림", en: "Toner / serum / cream", pt: "Tônico / sérum / creme" }, risk: "low",
        why: { ko: "코어 스킨케어, 라인업 구성 용이", en: "Core skincare, easy to range", pt: "Skincare central, fácil de compor" } },
      { name: { ko: "미백 / 브라이트닝", en: "Brightening", pt: "Clareamento" }, risk: "high",
        why: { ko: "미백 표현은 규제 민감 카테고리", en: "Whitening claims are sensitive", pt: "Alegações de clareamento são sensíveis" } },
      { name: { ko: "장벽 강화 / 시카", en: "Barrier repair / cica", pt: "Reparo de barreira" }, risk: "medium",
        why: { ko: "더마 포지셔닝, 클레임 검토 필요", en: "Derma positioning, claim review", pt: "Posicionamento derma, revisar alegações" } },
      { name: { ko: "마스크팩", en: "Sheet / wash-off mask", pt: "Máscaras" }, risk: "low",
        why: { ko: "체험형·선물용으로 강한 카테고리", en: "Strong trial & gifting category", pt: "Forte para experimentação e presente" } },
      { name: { ko: "바디케어", en: "Body care", pt: "Cuidados corporais" }, risk: "low",
        why: { ko: "대중적, 가격 접근성 좋음", en: "Mass-friendly, accessible price", pt: "Popular, preço acessível" } },
      { name: { ko: "헤어케어", en: "Hair care", pt: "Cuidados capilares" }, risk: "medium",
        why: { ko: "브라질 강세 카테고리, 일부 클레임 주의", en: "Strong in Brazil; mind some claims", pt: "Forte no Brasil; atenção a alegações" } },
      { name: { ko: "메이크업 베이스 / 쿠션 / 립틴트", en: "Makeup base / cushion / lip tint", pt: "Base / cushion / lip tint" }, risk: "low",
        why: { ko: "K-Beauty 시그니처, SNS 친화", en: "K-beauty signature, social-friendly", pt: "Assinatura K-beauty, viral nas redes" } },
      { name: { ko: "남성 그루밍", en: "Men's grooming", pt: "Cuidados masculinos" }, risk: "low",
        why: { ko: "성장 잠재 세그먼트", en: "Growing segment", pt: "Segmento em crescimento" } },
      { name: { ko: "탈모 케어", en: "Anti-hair-loss", pt: "Antiqueda" }, risk: "anvisa",
        why: { ko: "기능성 → ANVISA 분류 확인 필수", en: "Functional → ANVISA class must be confirmed", pt: "Funcional → confirmar classe na ANVISA" } },
      { name: { ko: "프리미엄 더마 스킨케어", en: "Premium derma skincare", pt: "Skincare derma premium" }, risk: "medium",
        why: { ko: "고마진, 클레임·성분 검토 필요", en: "High margin, needs claim/ingredient review", pt: "Alta margem, revisar alegações/ingredientes" } }
    ],
 sets: {
 title: { ko: "상품 큐레이션 세트 (예시)", en: "Product Curation Sets (example)", pt: "Conjuntos de Curadoria (exemplo)" },
 items: [
 { name: { ko: "Entry K-Beauty 세트", en: "Entry K-Beauty Set", pt: "Kit K-Beauty Inicial" },
 skus: ["Cleanser", "Toner", "Serum", "Moisturizer", "Sunscreen"], risk: "medium" },
 { name: { ko: "브라질 기후 스킨케어 세트", en: "Brazil Climate Skincare Set", pt: "Kit Skincare Clima Brasil" },
 skus: ["Lightweight toner", "Non-sticky serum", "Gel cream", "Sebum-control sunscreen"], risk: "high" },
 { name: { ko: "프리미엄 더마 세트", en: "Premium Derma Set", pt: "Kit Derma Premium" },
 skus: ["Barrier cream", "Cica serum", "Ampoule", "Mild cleanser"], risk: "medium" },
 { name: { ko: "틴 / 영 컨슈머 세트", en: "Teen / Young Consumer Set", pt: "Kit Jovem / Teen" },
 skus: ["Acne care cleanser", "Trouble patch", "Light moisturizer", "Lip tint"], risk: "high" },
 { name: { ko: "리테일 히어로 SKU 세트", en: "Retail Hero SKU Set", pt: "Kit Hero de Varejo" },
 skus: ["20–30 pilot SKUs", "→ 100 SKUs", "→ 300 SKUs (data-led)"], risk: "low" }
 ]
 },
 benchmarks: {
 title: { ko: "참고 브랜드 (benchmark only)", en: "Benchmark Brands (reference only)", pt: "Marcas de Referência (apenas benchmark)" },
 note: { ko: "공개적으로 확인 가능한 브랜드 예시이며, 유통권·독점권 확정과 무관합니다. ROUTE82 파트너 브랜드 포함.", en: "Publicly known examples; not a claim of distribution/exclusivity rights. Includes ROUTE82 partner brands.", pt: "Exemplos publicamente conhecidos; não é afirmação de direitos de distribuição/exclusividade. Inclui marcas parceiras da ROUTE82." },
 list: ["numbuzin", "AXIS-Y", "JUMISO", "TOUN28", "HANSKIN", "COSRX", "ANUA", "SKIN1004"]
 }
 },

 /* ---------- BUSINESS MODEL ---------- */
 model: {
 title: { ko: "비즈니스 모델 제안", en: "Business Model Proposal", pt: "Proposta de Modelo de Negócio" },
 roles: {
 route82: {
 label: { ko: "ROUTE82 — 한국 측 실행 파트너", en: "ROUTE82 — Korea-side Operating Partner", pt: "ROUTE82 — Parceira Operacional (Coreia)" },
 items: [
 { ko: "한국 브랜드 발굴 & 소싱", en: "Korean brand discovery & sourcing", pt: "Descoberta e curadoria de marcas coreanas" },
 { ko: "제조사/브랜드 커뮤니케이션 & MOQ 협상 지원", en: "Manufacturer/brand comms & MOQ negotiation support", pt: "Comunicação com fabricantes e apoio à negociação de MOQ" },
 { ko: "수출 서류 지원", en: "Export documentation support", pt: "Apoio à documentação de exportação" },
 { ko: "성분·라벨 검토 지원", en: "Ingredient & label review support", pt: "Apoio à revisão de ingredientes e rótulos" },
 { ko: "브라질 규제 파트너와 협업한 ANVISA 등록 준비 지원", en: "ANVISA registration-prep support, with a Brazil-side regulatory partner", pt: "Apoio à preparação de registro na ANVISA, com parceiro regulatório no Brasil" },
 { ko: "한국 측 창고 통합 & 포워딩 조율", en: "Korea-side warehouse consolidation & forwarding coordination", pt: "Consolidação em armazém na Coreia e coordenação de frete" },
 { ko: "SKU 마스터 데이터 & 카탈로그 제작", en: "SKU master data & catalog creation", pt: "Dados mestres de SKU e criação de catálogo" },
 { ko: "영어/포르투갈어 제품 정보 준비 & B2B 커뮤니케이션", en: "EN/PT product info & B2B buyer communication", pt: "Informações de produto EN/PT e comunicação B2B" },
 { ko: "매장 프리런칭 제안서(브랜드 유치용) 제작", en: "Store pre-launch deck to recruit Korean brands", pt: "Deck de pré-lançamento da loja para recrutar marcas coreanas" },
      { ko: "OEM/ODM 기반 PB(자체 브랜드) 상품 개발 지원", en: "Private-label (PB) development support via OEM/ODM", pt: "Apoio ao desenvolvimento de marca própria (PB) via OEM/ODM" },
      { ko: "매장 턴키 구축 — 컨셉·디자인·BX·BI·슬로건·운영 (PLANEAR·THE ALMIGHTY 협업)", en: "Turnkey store build — concept, design, BX, BI, slogan, ops (with PLANEAR & THE ALMIGHTY)", pt: "Construção de loja turnkey — conceito, design, BX, BI, slogan, operação (com PLANEAR e THE ALMIGHTY)" },
      { ko: "런칭 로드맵 관리", en: "Launch roadmap management", pt: "Gestão do roteiro de lançamento" }
 ]
 },
 brazil: {
 label: { ko: "Andrea Jikal's Corporation — 현지 운영", en: "Andrea Jikal's Corporation — Local Operation", pt: "Andrea Jikal's Corporation — Operação Local" },
 items: [
 { ko: "브라질 현지 수입자 / 법인", en: "Brazil local importer / entity", pt: "Importador / entidade local no Brasil" },
 { ko: "ANVISA 신청자 또는 Responsible Company 구성", en: "ANVISA applicant or responsible-company arrangement", pt: "Requerente ANVISA ou empresa responsável" },
 { ko: "현지 창고 / 3PL", en: "Local warehouse / 3PL", pt: "Armazém local / 3PL" },
 { ko: "세무·통관 브로커", en: "Tax & customs broker", pt: "Despachante fiscal e aduaneiro" },
 { ko: "오프라인 리테일 운영", en: "Offline retail operation", pt: "Operação de varejo offline" },
 { ko: "온라인 마켓플레이스 운영", en: "Online marketplace operation", pt: "Operação de marketplace online" },
 { ko: "현지 마케팅 & 인플루언서", en: "Local marketing & influencers", pt: "Marketing local e influenciadores" },
 { ko: "고객 서비스 & 최종 소비자 판매", en: "Customer service & final consumer sales", pt: "Atendimento e venda ao consumidor final" }
 ]
 }
 },
 revenue: {
 title: { ko: "수익 모델 후보", en: "Revenue Model Options", pt: "Opções de Modelo de Receita" },
 headers: { model: { ko: "모델", en: "Model", pt: "Modelo" }, pros: { ko: "장점", en: "Pros", pt: "Prós" } },
      typicalNote: { ko: "이러한 프로젝트의 일반적인 계약 모델은 ① 마진 기반 도매 — ROUTE82가 상품을 소싱·제안하고, 브라질 파트너가 승인하면 ROUTE82가 파트너에게 도매로 공급 — 와 ② 장기 독점 운영 파트너(최소 3년 단위)의 조합입니다.", en: "The typical contract model for this kind of project combines ① margin-based wholesale — ROUTE82 sources and proposes products and, once the Brazil partner approves, wholesales them to the partner — and ② a long-term exclusive operating partnership (minimum 3-year terms).", pt: "O modelo de contrato típico para este tipo de projeto combina ① atacado por margem — a ROUTE82 faz o sourcing e propõe os produtos e, com a aprovação do parceiro no Brasil, os vende no atacado ao parceiro — e ② uma parceria operacional exclusiva de longo prazo (mínimo de 3 anos).", reckicker: { ko: "권장 계약 모델", en: "Recommended contract model", pt: "Modelo recomendado" } },
 rows: [
 { model: { ko: "소싱 커미션", en: "Sourcing commission", pt: "Comissão de sourcing" },
 pros: { ko: "초기 부담 적음, 빠른 시작", en: "Low upfront, fast start", pt: "Baixo custo inicial, início rápido" },
 cons: { ko: "거래량 의존, 안정성 낮음", en: "Volume-dependent, less stable", pt: "Depende de volume, menos estável" } },
 { model: { ko: "프로젝트 셋업 피", en: "Project setup fee", pt: "Taxa de setup do projeto" },
 pros: { ko: "초기 실행비 회수", en: "Recovers initial work", pt: "Recupera o trabalho inicial" },
 cons: { ko: "1회성 성격", en: "One-off in nature", pt: "Natureza pontual" } },
 { model: { ko: "월 리테이너", en: "Monthly retainer", pt: "Retentor mensal" },
 pros: { ko: "예측 가능한 운영, 지속 지원", en: "Predictable, ongoing support", pt: "Previsível, suporte contínuo" },
 cons: { ko: "성과와 직접 연동 약함", en: "Loosely tied to outcomes", pt: "Pouco ligado a resultados" } },
 { model: { ko: "마진 기반 도매", en: "Margin-based wholesale", pt: "Atacado por margem" },
 pros: { ko: "성장 시 업사이드 큼", en: "Strong upside as it scales", pt: "Bom potencial ao escalar" },
 cons: { ko: "재고·가격 협상 복잡", en: "Inventory/pricing complexity", pt: "Complexidade de estoque/preço" }, rec: true },
 { model: { ko: "규제 PM 피", en: "Regulatory PM fee", pt: "Taxa de gestão regulatória" },
 pros: { ko: "전문 영역 가치 반영", en: "Captures specialist value", pt: "Reflete valor especializado" },
 cons: { ko: "범위 정의 필요", en: "Needs clear scope", pt: "Exige escopo claro" } },
 { model: { ko: "물류 조율 피", en: "Logistics coordination fee", pt: "Taxa de coordenação logística" },
 pros: { ko: "통합 운영 단순화", en: "Simplifies consolidated ops", pt: "Simplifica a operação consolidada" },
 cons: { ko: "포워더 비용과 구분 필요", en: "Must separate from forwarder cost", pt: "Separar do custo do agente" } },
 { model: { ko: "장기 독점 운영 파트너", en: "Long-term exclusive partner", pt: "Parceiro exclusivo de longo prazo" },
 pros: { ko: "깊은 협력·전략적 정렬", en: "Deep alignment & commitment", pt: "Alinhamento e compromisso profundos" },
 cons: { ko: "초기에 신중한 합의 필요", en: "Needs careful early agreement", pt: "Exige acordo cuidadoso no início" }, rec: true }
 ]
 }
 },

   /* ---------- TURNKEY STORE BUILD ---------- */
  turnkey: {
    proofTitle: { ko: "실제 운영 레퍼런스 — 강남뷰티 (제주)", en: "Real operating reference — GANGNAM BEAUTY (Jeju, Korea)", pt: "Referência real em operação — GANGNAM BEAUTY (Jeju, Coreia)" },
    proofLead: { ko: "강남뷰티는 ROUTE82 그룹사가 직접 운영하는 K-뷰티 리테일 매장입니다. 컨셉·VMD·머천다이징·운영을 실제로 구현해 본 팀이 브라질 매장을 함께 설계합니다.", en: "GANGNAM BEAUTY is a K-beauty retail store operated by a ROUTE82 group company. The same team that built and runs it will help design your Brazil store.", pt: "A GANGNAM BEAUTY é uma loja de varejo de K-beauty operada por uma empresa do grupo ROUTE82. A mesma equipe que a construiu e opera vai ajudar a projetar sua loja no Brasil." },
    gallery: [
      { src: "assets/gangnam/hi_02.jpg", cap: { ko: "강남뷰티 매장 외관 (제주)", en: "GANGNAM BEAUTY storefront (Jeju)", pt: "Fachada da GANGNAM BEAUTY (Jeju)" } },
      { src: "assets/gangnam/hi_01.jpg", cap: { ko: "시그니처 사이니지 & 립스틱 조형물", en: "Signature signage & lipstick sculptures", pt: "Sinalização e esculturas de batom" } },
      { src: "assets/gangnam/hi_03.jpg", cap: { ko: "세일존 & 크레이트 머천다이징", en: "Sale zone & crate merchandising", pt: "Zona de promoção e merchandising em caixas" } },
      { src: "assets/gangnam/hi_04.jpg", cap: { ko: "컬러별 큐레이션 진열 (VMD)", en: "Color-organized curation (VMD)", pt: "Curadoria organizada por cor (VMD)" } },
      { src: "assets/gangnam/hi_05.jpg", cap: { ko: "센터 디스플레이 타워", en: "Center display tower", pt: "Torre de display central" } },
      { src: "assets/gangnam/hi_06.jpg", cap: { ko: "브랜드 포토존", en: "Brand photo zone", pt: "Espaço de marca (photo zone)" } }
    ],

    map: {
      embed: "https://www.google.com/maps?q=GANGNAM%20BEAUTY%20%EC%A0%9C%EC%A3%BC&output=embed",
      link: "https://share.google/WG5f0MgImRnCsUtyS",
      instagram: "https://www.instagram.com/gangnam.beauty.kr/",
      addr: { ko: "강남뷰티 · 제주 연동 (ROUTE82 그룹사 운영)", en: "GANGNAM BEAUTY · Yeon-dong, Jeju (a ROUTE82 group company)", pt: "GANGNAM BEAUTY · Yeon-dong, Jeju (empresa do grupo ROUTE82)" },
      openLabel: { ko: "Google 지도에서 보기", en: "View on Google Maps", pt: "Ver no Google Maps" },
      igLabel: { ko: "인스타그램", en: "Instagram", pt: "Instagram" },
      newNote: { ko: "오픈 3개월 미만의 신규 매장이라 SNS 게시물은 아직 많지 않습니다.", en: "Recently opened (under 3 months) — limited social posts as a new store.", pt: "Inaugurada há menos de 3 meses — ainda com poucas publicações por ser uma loja nova." }
    },
    oneStop: { ko: "매장 설계 → 상품 큐레이션 → 인증·인허가 → 수출 물류 → 운영까지, ROUTE82가 한 번에(원큐) 연결합니다. 그래서 ROUTE82는 당신의 한국 측 파트너로 적합합니다.", en: "From store design → product curation → regulatory → export logistics → operations, ROUTE82 connects it all in one. That is why ROUTE82 is the right Korea-side partner for you.", pt: "Do design da loja → curadoria de produtos → regulatório → logística de exportação → operação, a ROUTE82 conecta tudo de uma vez. Por isso a ROUTE82 é a parceira certa do lado coreano para você." },
    title: { ko: "매장 턴키 구축 — 컨셉·디자인·브랜딩·운영", en: "Turnkey Store Build — Concept · Design · Branding · Operations", pt: "Construção de Loja Turnkey — Conceito · Design · Marca · Operação" },
    lead: {
      ko: "ROUTE82는 상품 소싱을 넘어, 매장 자체를 처음부터 함께 설계할 수 있습니다. 브랜딩·퍼포먼스 마케팅 계열사 PLANEAR와 BX·BI·콘텐츠 제작 스튜디오 THE ALMIGHTY와 함께, 매장 컨셉부터 디자인·브랜딩·슬로건·운영 구조까지 턴키로 잡아드립니다.",
      en: "Beyond product sourcing, ROUTE82 can design the store itself from scratch. With our affiliates PLANEAR (branding & performance marketing) and THE ALMIGHTY (BX/BI & content studio), we deliver everything from store concept to design, branding, slogan and operating structure — turnkey.",
      pt: "Além do sourcing de produtos, a ROUTE82 pode projetar a própria loja do zero. Com as afiliadas PLANEAR (marca e performance) e THE ALMIGHTY (estúdio de BX/BI e conteúdo), entregamos do conceito da loja ao design, marca, slogan e estrutura operacional — turnkey."
    },
    items: [
      { icon: "M3 21h18 M5 21V8l7-5 7 5v13 M9 21v-6h6v6", ko: "매장 컨셉 & 공간 기획 — K-Beauty 큐레이션 리테일 포맷", en: "Store concept & space planning — curated K-beauty retail format", pt: "Conceito e planejamento de espaço — varejo de K-beauty com curadoria" },
      { icon: "M3 7l4-4 14 14-4 4z M7 7l3 3 M11 11l3 3", ko: "인테리어·공간 디자인 설계 (존 구성·동선·VMD)", en: "Interior & space design (zoning, flow, VMD)", pt: "Design de interior e espaço (zoneamento, fluxo, VMD)" },
      { icon: "M12 2l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z", ko: "BI (Brand Identity) — 로고·컬러·타이포·디자인 시스템", en: "BI (Brand Identity) — logo, color, type, design system", pt: "BI (Identidade da Marca) — logotipo, cores, tipografia, sistema de design" },
      { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", ko: "BX (Brand Experience) — 고객 경험·체험 동선 설계", en: "BX (Brand Experience) — customer experience & journey design", pt: "BX (Experiência da Marca) — experiência do cliente e jornada" },
      { icon: "M4 5h16v10H7l-3 3z M7 9h10 M7 12h6", ko: "네이밍 & 슬로건 — 매장/PB 브랜드 네이밍, 캠페인 슬로건", en: "Naming & slogan — store/PB naming, campaign slogans", pt: "Naming e slogan — nome da loja/PB, slogans de campanha" },
      { icon: "M20 11l-8-8-9 9 8 8 9-9z M7 7h.01", ko: "사이니지·유니폼·패키지 등 브랜드 애플리케이션", en: "Signage, uniforms, packaging & brand applications", pt: "Sinalização, uniformes, embalagem e aplicações da marca" },
      { icon: "M4 4h6v6H4z M14 14h6v6h-6z M10 7h4 M17 10v4", ko: "운영 구조 & 플레이북 — 매대·인력·프로모션·재고 룰", en: "Operating structure & playbook — merchandising, staffing, promo, stock rules", pt: "Estrutura operacional e playbook — merchandising, equipe, promoção, estoque" },
      { icon: "M5 3v18l15-9z", ko: "콘텐츠·캠페인 제작 (비주얼·영상·SNS 자산)", en: "Content & campaign production (visuals, video, social assets)", pt: "Produção de conteúdo e campanha (visuais, vídeo, redes sociais)" }
    ],
    note: {
      ko: "ROUTE82/Brooks는 타 시장에서도 매장 컨셉·BX/BI·매장 비주얼(외관·인테리어·사이니지·유니폼)을 포함한 K-뷰티 턴키 리테일 제안을 수행한 경험이 있습니다.",
      en: "ROUTE82/Brooks has delivered turnkey K-beauty retail proposals in other markets — including store concept, BX/BI and full store visuals (exterior, interior, signage, uniforms).",
      pt: "A ROUTE82/Brooks já entregou propostas de varejo K-beauty turnkey em outros mercados — incluindo conceito, BX/BI e visuais completos da loja (fachada, interior, sinalização, uniformes)."
    }
  },

/* ---------- ROADMAP ---------- */
  roadmap: {
    title: { ko: "시장 진입 & 매장 런칭 로드맵 (단계별)", en: "Market-Entry & Store-Launch Roadmap (Phased)", pt: "Roteiro de Entrada e Lançamento da Loja (por Fases)" },
    note: { ko: "매장을 새로 만드는 과정을 전제로 한 단계별 실행 계획입니다. 매장 컨셉 → 큐레이션·브랜드 모집 → (선택) PB → 인증·수입 → 매장 임대·시공 → 1차 입고·오픈까지 진행하며, 기간은 예시이고 단계는 병행될 수 있습니다.", en: "A phased execution plan for building a new store: store concept → curation & brand recruitment → (optional) PB → regulatory & import → lease & fit-out → first stock-in & opening. Durations are illustrative and phases can overlap.", pt: "Um plano de execução por fases para criar uma nova loja: conceito → curadoria e recrutamento de marcas → (opcional) PB → regulatório e importação → locação e obra → primeiro estoque e inauguração. As durações são ilustrativas e as fases podem se sobrepor." },
    phases: [
      { day: "Phase 1 · Months 1–2", name: { ko: "매장 컨셉 & 사업 정렬", en: "Store Concept & Business Alignment", pt: "Conceito da Loja e Alinhamento" },
        items: [
          { ko: "타깃 고객·매장 컨셉·포맷 정의 (K-Beauty 큐레이션 전문점)", en: "Target customer, store concept & format (curated K-beauty store)", pt: "Cliente-alvo, conceito e formato da loja (varejo de K-beauty)" },
          { ko: "입지 후보 & 상권 분석", en: "Location candidates & catchment analysis", pt: "Locais candidatos e análise de público" },
          { ko: "투자 예산 범위 & 가격대 포지셔닝", en: "Investment budget & price positioning", pt: "Orçamento de investimento e posicionamento de preço" },
          { ko: "초기 규제 리스크 스크리닝", en: "Initial regulatory risk screening", pt: "Triagem inicial de risco regulatório" }
        ] },
      { day: "Phase 2 · Months 2–4", name: { ko: "상품 큐레이션 & 브랜드 모집", en: "Curation & Brand Recruitment", pt: "Curadoria e Recrutamento de Marcas" },
        items: [
          { ko: "카테고리 우선순위 & 구색(SKU) 기획", en: "Category priorities & assortment (SKU) plan", pt: "Prioridades de categoria e plano de sortimento (SKU)" },
          { ko: "큐레이션 브랜드·SKU 롱리스트 구성", en: "Build curated brand & SKU longlist", pt: "Montar longlist de marcas e SKUs com curadoria" },
          { ko: "ROUTE82 프리런칭 제안서로 한국 브랜드 모집·소싱", en: "Recruit & source Korean brands via ROUTE82 pre-launch deck", pt: "Recrutar e fazer sourcing de marcas coreanas via deck de pré-lançamento da ROUTE82" },
          { ko: "입점 조건·MOQ·공급 단가 협의", en: "Vendor terms, MOQ & supply-price negotiation", pt: "Termos de fornecimento, MOQ e preço" }
        ] },
      { day: "Phase 3 · Months 3–6 (선택/optional)", name: { ko: "PB 상품 — OEM/ODM (선택)", en: "Private Label — OEM/ODM (optional)", pt: "Marca Própria — OEM/ODM (opcional)" },
        items: [
          { ko: "자체 PB(자체 브랜드) 방향 결정", en: "Decide on a private-label (PB) direction", pt: "Definir a direção de marca própria (PB)" },
          { ko: "한국 OEM/ODM 제조사 매칭", en: "Korean OEM/ODM manufacturer matching", pt: "Matching de fabricantes OEM/ODM na Coreia" },
          { ko: "PB 컨셉·포뮬러·패키지·MOQ 기획", en: "PB concept, formula, packaging & MOQ", pt: "Conceito, fórmula, embalagem e MOQ da PB" },
          { ko: "PB 규제·라벨 사전 검토", en: "PB regulatory & label pre-check", pt: "Pré-checagem regulatória e de rótulo da PB" }
        ] },
      { day: "Phase 4 · Months 4–8", name: { ko: "인증 & 수입 구조 세팅", en: "Regulatory & Import Setup", pt: "Estruturação Regulatória e de Importação" },
        items: [
          { ko: "브라질 수입자 / AFE 보유 법인 세팅 (브라질 측)", en: "Brazil importer / AFE entity setup (Brazil side)", pt: "Estruturação de importador / AFE (lado Brasil)" },
          { ko: "ANVISA 신고·등록 준비 (ROUTE82 대행)", en: "ANVISA notification/registration prep (ROUTE82)", pt: "Preparação de notificação/registro ANVISA (ROUTE82)" },
          { ko: "포르투갈어 라벨링 & 성분 검토", en: "Portuguese labeling & ingredient review", pt: "Rotulagem em português e revisão de ingredientes" },
          { ko: "물류·통관·세무 구조 설계", en: "Logistics, customs & tax structure", pt: "Estrutura de logística, desembaraço e tributos" }
        ] },
      { day: "Phase 5 · Months 5–9", name: { ko: "매장 임대·구축·인테리어", en: "Lease, Build-out & Interior", pt: "Locação, Obra e Interiores" },
        items: [
          { ko: "매장 임대 계약 & 인허가 (영업·소방 등)", en: "Store lease & permits (business, fire safety, etc.)", pt: "Locação da loja e alvarás (funcionamento, bombeiros, etc.)" },
          { ko: "인테리어·공간 디자인 시공 (존·동선·VMD)", en: "Interior fit-out (zones, flow, VMD)", pt: "Obra de interiores (zonas, fluxo, VMD)" },
          { ko: "사이니지·집기·디스플레이 설치", en: "Signage, fixtures & display installation", pt: "Instalação de sinalização, mobiliário e displays" },
          { ko: "인력 채용·교육 & 운영 매뉴얼", en: "Hiring, training & operations manual", pt: "Contratação, treinamento e manual de operação" }
        ] },
      { day: "Phase 6 · Months 8–12", name: { ko: "1차 입고 & 매장 오픈", en: "First Stock-in & Store Launch", pt: "Primeiro Estoque e Inauguração" },
        items: [
          { ko: "1차 발주·수출·선적·통관", en: "First PO, export, shipment & customs clearance", pt: "Primeiro pedido, exportação, embarque e desembaraço" },
          { ko: "입고·진열·가격 세팅", en: "Stock-in, merchandising & pricing", pt: "Recebimento, exposição e precificação" },
          { ko: "프리런칭 / 소프트 오픈", en: "Pre-launch / soft opening", pt: "Pré-lançamento / soft opening" },
          { ko: "마케팅·인플루언서 킥오프 → 그랜드 오픈", en: "Marketing & influencer kickoff → grand opening", pt: "Marketing e influenciadores → grande inauguração" }
        ] }
    ]
  },

  /* ---------- PARTNER BRAND LIST (merged, EN/PT) ---------- */
  brandlist: {
    title: { ko: "K-Beauty 브랜드 리스트", en: "K-Beauty Brand List", pt: "Lista de Marcas K-Beauty" },
    note: { ko: "ROUTE82 파트너 브랜드 + 그룹사 운영 강남뷰티(제주) 취급 브랜드. 매출은 운영사 공개 수치(연도 기준), 소비자가는 대표 제품가. 미확인 항목은 비워뒀습니다. 올리브영=온라인 입점.", en: "ROUTE82 partner brands + brands carried at GANGNAM BEAUTY (Jeju), operated by a ROUTE82 group company. Revenue = operating company's public figure (by year); MSRP = representative product price. Unconfirmed left blank. Olive Young = online listing.", pt: "Marcas parceiras da ROUTE82 + marcas vendidas na GANGNAM BEAUTY (Jeju), operada por empresa do grupo. Receita = valor público da operadora (por ano); MSRP = preço representativo. Não confirmado em branco. Olive Young = listagem online." },
    promo: { ko: "강남뷰티(제주) 입점 브랜드(✓)는 ROUTE82가 매우 경쟁력 있는 가격으로 공급 가능한 상품으로, Andrea Jikal's Corporation의 매출 볼륨화에 큰 도움이 됩니다.", en: "Brands marked ✓ in-store at GANGNAM BEAUTY (Jeju) can be supplied by ROUTE82 at highly competitive prices — a strong lever for scaling the sales volume of Andrea Jikal's Corporation.", pt: "As marcas com ✓ na loja GANGNAM BEAUTY (Jeju) podem ser fornecidas pela ROUTE82 a preços altamente competitivos — uma alavanca importante para escalar o volume de vendas da Andrea Jikal's Corporation." },
    h: {
      brand: { ko: "브랜드", en: "Brand", pt: "Marca" },
      kr: { ko: "한국 홈페이지", en: "KR Site", pt: "Site KR" },
      en: { ko: "영문/글로벌", en: "EN / Global", pt: "EN / Global" },
      oy: { ko: "올리브영", en: "Olive Young", pt: "Olive Young" },
      msrp: { ko: "소비자가(₩)", en: "MSRP (₩)", pt: "Preço (₩)" },
      rev: { ko: "매출", en: "Revenue", pt: "Receita" },
      gnb: { ko: "강남뷰티", en: "Gangnam", pt: "Gangnam" }
    },
    rows: [
      { logo: "assets/brands/2an.png", name: "2aN", kr: "https://www.2an.co.kr/", en: "https://en.2an.co.kr/", oy: "O", msrp: "₩18,000~23,000", rev: "approx. ₩20B (2025)", gnb: false },
      { logo: "assets/brands/aou.png", name: "AOU", kr: "https://aoucosmetics.com/", en: "https://aoucosmetics.com/", oy: "O", msrp: "₩15,400~18,500", rev: "₩3.1B (2023)", gnb: false },
      { logo: "assets/brands/axis_y.png", name: "AXIS-Y", kr: "https://axis-y.co.kr/", en: "https://www.axis-y.com/", oy: "O", msrp: "₩25,000", rev: "approx. ₩30B", gnb: false },
      { logo: "assets/brands/bia_ifekt.png", name: "BIA Effect", kr: "https://beautyinasia.co.kr/", en: "", oy: "", msrp: "₩39,900", rev: "₩20.1B (2024)", gnb: false },
      { logo: "assets/brands/bonajour.png", name: "BONAJOUR", kr: "https://bonajour.com/", en: "https://en.bonajour.com/", oy: "O", msrp: "", rev: "Private / Privado", gnb: false },
      { logo: "assets/brands/brand_70.png", name: "Moh's Recipe", kr: "https://mohsrecipe.com/", en: "", oy: "", msrp: "", rev: "", gnb: false },
      { logo: "assets/brands/brand_72.png", name: "Miss Dragon", kr: "https://missdragon.co.kr/", en: "", oy: "", msrp: "₩19,800~40,000", rev: "₩1.8B (2024)", gnb: false },
      { logo: "assets/brands/brand_73.png", name: "Vertty", kr: "https://vertty.co.kr/", en: "", oy: "", msrp: "₩9,900~25,000", rev: "₩1.1B (2024)", gnb: false },
      { logo: "assets/brands/brand_74.png", name: "EPONA", kr: "https://epona.co.kr/", en: "", oy: "", msrp: "₩38,000~99,000", rev: "₩1.1B (2024)", gnb: false },
      { logo: "assets/brands/brand_75.png", name: "Eldeen", kr: "https://eldeenshop.co.kr/", en: "", oy: "", msrp: "approx. ₩25,000", rev: "approx. ₩1.3B", gnb: false },
      { logo: "assets/brands/brand_76.png", name: "O'ala", kr: "https://smartstore.naver.com/oala", en: "", oy: "", msrp: "", rev: "", gnb: false },
      { logo: "assets/brands/brand_77.png", name: "Oclearien", kr: "https://oclearien.co.kr/", en: "", oy: "", msrp: "approx. ₩40,000~95,000", rev: "Private / Privado", gnb: false },
      { logo: "assets/brands/brand_78.png", name: "Innertide", kr: "https://smartstore.naver.com/innertide", en: "", oy: "", msrp: "approx. ₩25,000~", rev: "", gnb: false },
      { logo: "assets/brands/brand_79.png", name: "Easytem", kr: "https://easytem.co.kr/", en: "https://easytem.co.kr/?lang=en", oy: "", msrp: "", rev: "₩35.8B (2023)", gnb: false },
      { logo: "assets/brands/ccambbak.png", name: "ccambbak", kr: "https://ccambbak.com/", en: "", oy: "O", msrp: "₩8,500~16,400", rev: "approx. ₩5B (2025)", gnb: false },
      { logo: "assets/brands/chwi.png", name: "chwi", kr: "https://chwi.co.kr/", en: "http://eng-chi.com/", oy: "", msrp: "₩29,000~85,000", rev: "₩950M (2024)", gnb: false },
      { logo: "assets/brands/coralhaze.png", name: "coralhaze", kr: "https://coralhaze.co.kr/", en: "", oy: "O", msrp: "₩15,000~36,000", rev: "approx. ₩5B (2025)", gnb: false },
      { logo: "assets/brands/dinsee.png", name: "dinsee", kr: "https://dinsee.kr/", en: "", oy: "O", msrp: "₩34,000", rev: "Private / Privado", gnb: false },
      { logo: "assets/brands/dosie.png", name: "dosie", kr: "", en: "", oy: "", msrp: "", rev: "", gnb: false },
      { logo: "assets/brands/drbio.png", name: "Dr.BIO", kr: "https://doctorbio.kr/", en: "https://en.doctorbio.kr/", oy: "O", msrp: "₩30,000~53,000", rev: "Private / Privado", gnb: false },
      { logo: "assets/brands/entropy.jpg", name: "entropy", kr: "https://entropymakeup.com/", en: "https://entropy-global.com/", oy: "O", msrp: "₩10,000~38,000", rev: "", gnb: false },
      { logo: "assets/brands/fivevibe.png", name: "fivevibe", kr: "https://fivevibe.co.kr/", en: "", oy: "O", msrp: "₩7,000~30,000", rev: "", gnb: false },
      { logo: "assets/brands/frankly.png", name: "frankly", kr: "https://frankly.co.kr/", en: "", oy: "O", msrp: "₩35,000~105,000", rev: "₩7.7B (2025)", gnb: false },
      { logo: "assets/brands/fromrier.jpg", name: "fromrier", kr: "https://fromrier.com/", en: "", oy: "O", msrp: "₩19,800~28,000", rev: "", gnb: false },
      { logo: "assets/brands/fussidyne.png", name: "fussidyne", kr: "https://fusidyne.com/", en: "", oy: "O", msrp: "₩15,000~29,000", rev: "approx. ₩464.9B (2024)", gnb: false },
      { logo: "assets/brands/g.png", name: "107", kr: "https://107beauty.co.kr/", en: "https://107beauty.com/", oy: "", msrp: "", rev: "₩10B", gnb: false },
      { logo: "assets/brands/graymelin.png", name: "graymelin", kr: "https://graymelin.com/", en: "", oy: "O", msrp: "₩19,800~25,000", rev: "approx. ₩5B", gnb: false },
      { logo: "assets/brands/grn.png", name: "GRN+", kr: "https://grnplus.co.kr/", en: "", oy: "O", msrp: "", rev: "₩10.8B (2024)", gnb: false },
      { logo: "assets/brands/hanskin.png", name: "hanskin", kr: "https://www.celltrionmall.com/brand/hanskin", en: "global.oliveyoung.com (B00104)", oy: "O", msrp: "₩20,000~26,000", rev: "₩32.7B (2024)", gnb: false },
      { logo: "assets/brands/hatherine.png", name: "HATHERINE", kr: "https://hatherine.com/", en: "", oy: "O", msrp: "₩11,900~12,000", rev: "Private / Privado", gnb: false },
      { logo: "assets/brands/headspa7.png", name: "headspa7", kr: "https://headspa7.com/", en: "", oy: "O", msrp: "₩14,000~39,000", rev: "₩25.6B (2024)", gnb: false },
      { logo: "assets/brands/heart_percent.png", name: "Heart Percent", kr: "https://www.heartpercent.co.kr/", en: "https://en.heartpercent.co.kr/", oy: "O", msrp: "₩12,600~21,600", rev: "₩17B (2025)", gnb: false },
      { logo: "assets/brands/hetras.png", name: "hetras", kr: "https://hetras.co.kr/", en: "global.oliveyoung.com (B01227)", oy: "O", msrp: "₩6,900~16,000", rev: "₩84.6B (2025)", gnb: false },
      { logo: "assets/brands/heveblue.png", name: "heveblue", kr: "https://heveblue.co.kr/", en: "https://heveblueglobal.com/", oy: "O", msrp: "₩16,500~48,900", rev: "₩7.3B (2024)", gnb: false },
      { logo: "assets/brands/house_of_b.png", name: "House of B", kr: "https://houseofb.co.kr/", en: "global.oliveyoung.com (B01456)", oy: "O", msrp: "₩10,000~45,000", rev: "", gnb: false },
      { logo: "assets/brands/imo.png", name: "imO", kr: "", en: "", oy: "", msrp: "", rev: "", gnb: false },
      { logo: "assets/brands/iroiro.png", name: "iroiro", kr: "https://iroirocolors.co.kr/", en: "", oy: "", msrp: "₩15,000~32,000", rev: "Private / Privado", gnb: false },
      { logo: "assets/brands/jumiso.png", name: "jumiso", kr: "https://www.jumiso.co.kr/", en: "https://jumiso.us/", oy: "O", msrp: "₩14,000~22,000", rev: "₩14B (2025)", gnb: false },
      { logo: "assets/brands/kahi.png", name: "KAHI", kr: "https://kahi.co.kr/", en: "https://kahicosmetics.com/", oy: "O", msrp: "₩29,000~49,000", rev: "₩74.3B (2024)", gnb: false },
      { logo: "assets/brands/laundryou.png", name: "LAUNDRYOU", kr: "https://skinlaundryshop.com/", en: "https://laundryou.us/", oy: "O", msrp: "₩32,000", rev: "", gnb: false },
      { logo: "assets/brands/lilybyred.png", name: "lilybyred", kr: "https://lilybyred.co.kr/", en: "global.oliveyoung.com (Global)", oy: "O", msrp: "₩8,900~15,000", rev: "₩37.4B (2024)", gnb: false },
      { logo: "assets/brands/lilyeve.png", name: "lilyeve", kr: "https://lilyeve.kr/", en: "global.oliveyoung.com (B01566)", oy: "O", msrp: "₩27,800~43,800", rev: "approx. ₩38B (2024)", gnb: false },
      { logo: "assets/brands/logo_vivora.png", name: "VIVORA", kr: "https://vivora.co.kr/", en: "https://b2bvivora.com", oy: "", msrp: "₩35,000~80,000", rev: "", gnb: false },
      { logo: "assets/brands/mauvning.png", name: "mauvning", kr: "https://mauvning.co.kr/", en: "", oy: "O", msrp: "₩9,900~27,900", rev: "₩7.3B (2024)", gnb: false },
      { logo: "assets/brands/medianswer.png", name: "medianswer", kr: "https://www.aboutmeshop.com/medianswer/", en: "", oy: "O", msrp: "₩30,000~60,000", rev: "Private / Privado", gnb: false },
      { logo: "assets/brands/menokin.png", name: "menokin", kr: "https://menokin.co.kr/", en: "", oy: "O", msrp: "₩22,000~28,500", rev: "₩28B (2024)", gnb: false },
      { logo: "assets/brands/mglab.jpg", name: "MGLAB", kr: "", en: "", oy: "", msrp: "", rev: "", gnb: false },
      { logo: "assets/brands/mildlab.png", name: "mildlab", kr: "https://mildlab.co.kr/", en: "https://mildlab.us/", oy: "O", msrp: "₩27,600~34,000", rev: "₩15B (2023)", gnb: false },
      { logo: "assets/brands/mude.png", name: "mude", kr: "https://mude.co.kr/", en: "https://en.mude.co.kr/", oy: "O", msrp: "₩14,000~14,400", rev: "₩8.4B (2024)", gnb: false },
      { logo: "assets/brands/mumchit.png", name: "mumchit", kr: "https://mumchit.com/", en: "", oy: "O", msrp: "₩12,900~20,000", rev: "approx. ₩4.1B", gnb: false },
      { logo: "assets/brands/needly.png", name: "needly", kr: "https://needly.co.kr/", en: "https://en.needly.co.kr/", oy: "O", msrp: "₩20,900~24,900", rev: "₩22.3B (2024)", gnb: false },
      { logo: "assets/brands/ngt_logo.png", name: "NGT (Natural Good Things)", kr: "https://naturalgoodthings.com/", en: "", oy: "", msrp: "₩29,000~69,000", rev: "₩13.5B (2023)", gnb: false },
      { logo: "assets/brands/nonoer.png", name: "nonoer", kr: "https://nonoer.com/", en: "", oy: "O", msrp: "₩16,000~27,000", rev: "", gnb: false },
      { logo: "assets/brands/numbuzin.png", name: "numbuzin", kr: "https://numbuzin.com/", en: "https://us.numbuzin.com/", oy: "O", msrp: "₩30,000~46,000", rev: "₩316.6B (2025)", gnb: false },
      { logo: "assets/brands/nutseline.png", name: "nutseline", kr: "https://nutseline.com/", en: "global.oliveyoung.com (B01305)", oy: "O", msrp: "₩15,000~32,000", rev: "approx. ₩36B (2024)", gnb: false },
      { logo: "assets/brands/ongredients.png", name: "ongredients", kr: "https://ongredients.com/", en: "https://ongredientsus.com/", oy: "O", msrp: "₩19,000~22,000", rev: "approx. ₩20B (2024)", gnb: false },
      { logo: "assets/brands/performax.png", name: "Perfomax", kr: "https://perfomax.co.kr/", en: "", oy: "", msrp: "", rev: "", gnb: false },
      { logo: "assets/brands/portre.png", name: "Portré", kr: "https://portre.co.kr/", en: "", oy: "O", msrp: "₩15,000~32,000", rev: "", gnb: false },
      { logo: "assets/brands/rebrush.png", name: "rebrush", kr: "https://rebrush.co.kr/", en: "", oy: "O", msrp: "₩12,000", rev: "", gnb: false },
      { logo: "assets/brands/resear.png", name: "RESEAR", kr: "https://resear.co.kr/", en: "", oy: "", msrp: "₩57,500 (10 pcs)", rev: "", gnb: false },
      { logo: "assets/brands/rooton.png", name: "rooton", kr: "https://rootonclinic.com/", en: "", oy: "O", msrp: "₩34,000~49,000", rev: "approx. ₩9B (2024)", gnb: false },
      { logo: "assets/brands/sister_ann.png", name: "SISTER ANN", kr: "https://sister-ann.com/", en: "https://www.sister-ann.hk/", oy: "O", msrp: "₩8,900~30,000", rev: "approx. ₩40B (2021)", gnb: false },
      { logo: "assets/brands/snow2plus.png", name: "snow2plus", kr: "https://snow2plus.com/", en: "", oy: "O", msrp: "₩21,000", rev: "₩2.5B (2023)", gnb: false },
      { logo: "assets/brands/snp.png", name: "SNP", kr: "https://snpbeauty.com/", en: "https://snpcos.us/", oy: "O", msrp: "₩15,000~25,000", rev: "approx. ₩46.9B (2023)", gnb: false },
      { logo: "assets/brands/srb.png", name: "SRB", kr: "", en: "https://www.srbskincare.com/", oy: "", msrp: "₩10,000~26,000", rev: "", gnb: false },
      { logo: "assets/brands/teabless.png", name: "teabless", kr: "https://teabless.co.kr/", en: "https://teabless.co.kr/", oy: "", msrp: "₩24,000", rev: "₩11.1B (2023)", gnb: false },
      { logo: "assets/brands/tfit.png", name: "tfit", kr: "https://tfit.co.kr/", en: "https://tfitbeauty.com/", oy: "O", msrp: "₩13,000~17,000", rev: "₩35.5B (2025)", gnb: false },
      { logo: "assets/brands/thankyou_farmer.png", name: "THANK YOU FARMER", kr: "https://www.thankyoufarmer.co.kr/", en: "https://www.thankyoufarmer.us/", oy: "", msrp: "₩24,000~32,000", rev: "₩6.4B (2025)", gnb: false },
      { logo: "assets/brands/tooq.png", name: "TOOQ", kr: "https://tooq.co.kr/", en: "global.oliveyoung.com (B00997)", oy: "O", msrp: "₩19,900", rev: "", gnb: false },
      { logo: "assets/brands/toun28.png", name: "TOUN28", kr: "https://toun28.com/", en: "https://www.toun28.com/en", oy: "O", msrp: "₩9,900~33,000", rev: "₩14.4B (2023)", gnb: false },
      { logo: "assets/brands/troubless.png", name: "troubless", kr: "https://troubless.kr/", en: "", oy: "O", msrp: "₩13,900~29,900", rev: "", gnb: false },
      { logo: "assets/brands/uiq.png", name: "UIQ", kr: "https://theuiq.com/", en: "https://theuiq.us/", oy: "O", msrp: "₩12,750~38,000", rev: "approx. ₩8B (2024)", gnb: false },
      { logo: "assets/brands/unleashia.png", name: "unleashia", kr: "https://unleashiacosmetics.com/", en: "https://unleashiacosmetics.com/", oy: "", msrp: "₩14,000~34,000", rev: "", gnb: false },
      { logo: "assets/brands/veganifect.png", name: "veganifect", kr: "https://veganifect.com/", en: "https://veganifect.com/", oy: "O", msrp: "₩28,000~32,000", rev: "", gnb: false },
      { logo: "assets/brands/whipped.png", name: "whipped", kr: "https://whipped.co.kr/", en: "https://whipped.co.kr/", oy: "O", msrp: "₩26,000~27,000", rev: "₩17.3B (2024)", gnb: false },
      { logo: "assets/gnb_brands/gnb_01.png", name: "JMsolution", kr: "https://jmsolution.com/", en: "https://jmsolution.co/", oy: "O", msrp: "₩2,000~38,000", rev: "₩165.5B (2024)", gnb: true },
      { logo: "assets/gnb_brands/gnb_02.png", name: "What For Skin", kr: "https://watiforskin.co.kr/", en: "", oy: "", msrp: "₩3,000~29,800", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_03.png", name: "TENZERO", kr: "https://tenzero.co.kr/", en: "", oy: "O", msrp: "₩1,000~38,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_04.png", name: "Rou:me", kr: "https://roume.co.kr/", en: "", oy: "", msrp: "₩20,000~27,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_05.png", name: "Allyoufi", kr: "", en: "", oy: "", msrp: "₩20,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_06.png", name: "Bonihill", kr: "", en: "", oy: "", msrp: "₩10,000~33,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_07.png", name: "I'm Una U", kr: "https://www.imunau.com/ko/", en: "https://www.imunau.com/", oy: "", msrp: "₩15,000~30,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_08.png", name: "Jmella", kr: "https://jmella.com/", en: "", oy: "O", msrp: "₩15,000~18,000", rev: "₩165.5B (2024)", gnb: true },
      { logo: "assets/gnb_brands/gnb_09.png", name: "GASTON", kr: "https://gaston.kr/", en: "", oy: "", msrp: "₩21,000~34,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_10.png", name: "Choseconds", kr: "", en: "", oy: "", msrp: "₩2,000~20,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_11.png", name: "Leaders", kr: "https://leaderscosmetics.com/", en: "https://en.leaderscosmetics.com/", oy: "", msrp: "₩3,000~30,000", rev: "₩72.8B (2024)", gnb: true },
      { logo: "assets/gnb_brands/gnb_12.png", name: "Zerocipe", kr: "https://zerocipe.com/", en: "", oy: "", msrp: "₩34,000~38,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_13.png", name: "NAAP", kr: "https://naap.co.kr/", en: "", oy: "", msrp: "₩10,000~25,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_14.png", name: "FRAIJOUR", kr: "https://fraijour.co.kr/", en: "https://www.evascosmetic.com/fraijour", oy: "", msrp: "₩14,900", rev: "₩9.8B (2024)", gnb: true },
      { logo: "assets/gnb_brands/gnb_15.png", name: "Jaminkyung", kr: "https://jaminkyung.kr/", en: "https://en.jaminkyung.com/", oy: "", msrp: "₩10,500~28,350", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_16.png", name: "SELEVE", kr: "https://seleve.co.kr/", en: "", oy: "", msrp: "₩24,500~36,400", rev: "approx. ₩11.1B (2025)", gnb: true },
      { logo: "assets/gnb_brands/gnb_17.png", name: "TUMBLZ", kr: "https://tumblz.co.kr/", en: "https://beauty.tumblz.co.kr/", oy: "", msrp: "₩48,000~61,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_18.png", name: "Haraz", kr: "https://haaraz.com/", en: "", oy: "", msrp: "₩14,000~32,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_19.png", name: "Reply Me", kr: "https://esncos.com/", en: "", oy: "O", msrp: "₩3,000~25,800", rev: "", gnb: true },
      { logo: "", name: "Bubble Talk", kr: "", en: "", oy: "", msrp: "₩5,000~113,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_21.png", name: "Toolip", kr: "https://www.toolif.co.kr/", en: "", oy: "O", msrp: "₩3,700~34,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_22.png", name: "Temporary", kr: "https://temporary-scent.kr/", en: "", oy: "", msrp: "₩10,900~26,850", rev: "₩48.3B (2024)", gnb: true },
      { logo: "assets/gnb_brands/gnb_23.png", name: "Paul Medison", kr: "https://paulmedison.co.kr/", en: "", oy: "", msrp: "₩11,000~40,000", rev: "₩48.3B (2024)", gnb: true },
      { logo: "assets/gnb_brands/gnb_24.png", name: "Allneeds", kr: "", en: "", oy: "", msrp: "₩12,000~15,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_25.png", name: "BNBG (BNBG)", kr: "https://bnbgcosmetic.com/", en: "https://en.bnbgcosmetic.com/", oy: "", msrp: "₩1,000~40,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_26.png", name: "Hanchobang", kr: "", en: "", oy: "", msrp: "₩2,000~20,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_27.png", name: "Mogong Lab", kr: "https://mogonglab.com/", en: "https://en.mogonglab.com/", oy: "", msrp: "₩21,000~31,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_28.png", name: "Dr.J Face", kr: "", en: "", oy: "", msrp: "₩3,000~15,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_29.png", name: "3 Wishes", kr: "", en: "", oy: "", msrp: "₩20,000~26,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_30.png", name: "Dr.345", kr: "", en: "", oy: "", msrp: "₩1,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_31.png", name: "Badam", kr: "https://jejubadam.com/", en: "", oy: "", msrp: "₩5,000~30,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_32.png", name: "Pororo", kr: "https://pororomall.com/", en: "http://www.pororopark.com/eng/", oy: "", msrp: "₩8,900~32,000", rev: "₩173.2B (2024)", gnb: true },
      { logo: "assets/gnb_brands/gnb_33.png", name: "Dr.Homtox", kr: "", en: "", oy: "", msrp: "₩20,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_34.png", name: "Dear May", kr: "https://dearmay.co.kr/", en: "https://en.dearmay.co.kr/", oy: "", msrp: "₩10,000~15,000", rev: "₩12.2B (2024)", gnb: true },
      { logo: "assets/gnb_brands/gnb_35.png", name: "La Ferme", kr: "https://laferme.kr/", en: "", oy: "", msrp: "₩16,000", rev: "₩27.6B (2024)", gnb: true },
      { logo: "assets/gnb_brands/gnb_36.png", name: "Baeknyeon Yakbang", kr: "https://centuryrecipes.co.kr/", en: "", oy: "", msrp: "₩28,000~39,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_37.png", name: "ShionLe", kr: "https://www.shionle.com/", en: "https://en.shionle.com/", oy: "O", msrp: "₩3,000~32,000", rev: "₩19.3B (2024)", gnb: true },
      { logo: "assets/gnb_brands/gnb_38.png", name: "Skin52", kr: "https://skin52lab.co.kr/", en: "https://www.skin52.com/", oy: "", msrp: "₩18,000~30,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_39.png", name: "Wismin", kr: "https://wismin.co.kr/", en: "", oy: "", msrp: "₩3,000~55,000", rev: "₩3.9B (2022)", gnb: true },
      { logo: "assets/gnb_brands/gnb_40.png", name: "youlief", kr: "https://youlief.com/", en: "", oy: "", msrp: "₩19,000~55,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_41.png", name: "Kitsch Catch", kr: "https://kitschcatch.co.kr/", en: "", oy: "O", msrp: "₩10,000~20,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_42.png", name: "Farmstay", kr: "https://www.farmstay.co.kr/", en: "https://en.fscos.com/", oy: "", msrp: "₩1,200~25,000", rev: "₩27.6B (2024)", gnb: true },
      { logo: "assets/gnb_brands/gnb_43.png", name: "Peach C", kr: "https://peachc.kr/", en: "", oy: "", msrp: "₩30,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_44.png", name: "MACQUEEN NEW YORK", kr: "https://macqueenmall.co.kr/", en: "", oy: "", msrp: "₩12,900~14,900", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_45.png", name: "Cellpull", kr: "", en: "", oy: "", msrp: "₩90,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_46.png", name: "Pamona", kr: "", en: "", oy: "", msrp: "₩45,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_47.png", name: "Princess Maker", kr: "", en: "", oy: "", msrp: "₩19,000", rev: "", gnb: true },
      { logo: "", name: "Skin Technology", kr: "", en: "", oy: "", msrp: "₩190,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_49.png", name: "YQUEEN", kr: "https://yqueen.net/", en: "", oy: "", msrp: "₩34,000", rev: "₩245M (2022)", gnb: true },
      { logo: "assets/gnb_brands/gnb_50.png", name: "LOAR", kr: "https://loar.co.kr/", en: "", oy: "", msrp: "₩32,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_51.png", name: "Chahong", kr: "https://chahong.com/", en: "https://eng.chahong.com/", oy: "", msrp: "₩59,000~69,000", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_52.png", name: "Orion", kr: "", en: "", oy: "", msrp: "₩1,500~8,600", rev: "", gnb: true },
      { logo: "assets/gnb_brands/gnb_53.png", name: "Rosyd", kr: "https://rosyd.co.kr/", en: "", oy: "", msrp: "₩16,000", rev: "", gnb: true }
    ]
  },
  /* ---------- AGENDA ---------- */
 agenda: {
 title: { ko: "미팅 아젠다 — 6월 10일", en: "Meeting Agenda — June 10", pt: "Agenda da Reunião — 10 de junho" },
 items: [
 { ko: "인사 및 소개", en: "Introductions", pt: "Apresentações" },
 { ko: "브라질 사업 비전", en: "Brazil business vision", pt: "Visão do negócio no Brasil" },
 { ko: "타깃 고객 & 판매 채널", en: "Target customer & sales channel", pt: "Cliente-alvo e canal de vendas" },
 { ko: "제품 카테고리 우선순위", en: "Product category priorities", pt: "Prioridades de categoria de produto" },
 { ko: "한국 브랜드 소싱 접근법", en: "Korean brand sourcing approach", pt: "Abordagem de sourcing de marcas coreanas" },
 { ko: "브라질 규제 & 수입 구조", en: "Brazil regulatory & import structure", pt: "Estrutura regulatória e de importação" },
 { ko: "물류 & 창고 모델", en: "Logistics & warehouse model", pt: "Modelo de logística e armazém" },
 { ko: "파일럿 런칭 계획", en: "Pilot launch plan", pt: "Plano de lançamento piloto" },
 { ko: "역할 분리 (Brazil-side / ROUTE82)", en: "Role division (Brazil-side / ROUTE82)", pt: "Divisão de papéis (Brasil / ROUTE82)" },
 { ko: "다음 단계", en: "Next steps", pt: "Próximos passos" }
 ]
 },

 /* ---------- QUESTIONS ---------- */
 questions: {
 title: { ko: "Andrea Jikal's Corporation에게 물어볼 질문", en: "Questions for the Andrea Jikal's Corporation", pt: "Perguntas ao Andrea Jikal's Corporation" },
 items: [
 { ko: "브라질 내 법인 또는 수입자 회사가 이미 있는지?", en: "Is there an existing local entity or importer company?", pt: "Já existe entidade local ou empresa importadora?" },
 { ko: "화장품 수입 경험이 있는지?", en: "Any prior cosmetics import experience?", pt: "Há experiência anterior em importação de cosméticos?" },
 { ko: "ANVISA 등록 경험이 있는 파트너가 있는지?", en: "Access to a partner experienced with ANVISA?", pt: "Têm parceiro com experiência em ANVISA?" },
 { ko: "오프라인 매장 중심인지, 온라인 중심인지?", en: "Offline-store-led or online-led?", pt: "Foco em loja física ou online?" },
 { ko: "초기 투자 예산 범위는?", en: "Initial investment budget range?", pt: "Faixa de orçamento de investimento inicial?" },
 { ko: "희망 카테고리 / 가격대 / 타깃 소비자는?", en: "Preferred categories / price tiers / target consumer?", pt: "Categorias / faixas de preço / consumidor-alvo preferidos?" },
 { ko: "상파울루 중심인지, 전국 유통인지?", en: "São Paulo-focused or nationwide distribution?", pt: "Foco em São Paulo ou distribuição nacional?" },
 { ko: "한국 브랜드 독점권을 원하는지?", en: "Do you want exclusivity on Korean brands?", pt: "Deseja exclusividade sobre marcas coreanas?" },
 { ko: "자체 매장 / 편집숍 / 도매 / 온라인몰 중 어느 모델인지?", en: "Own stores / multi-brand / wholesale / online mall?", pt: "Lojas próprias / multimarcas / atacado / loja online?" },
 { ko: "첫 수입 목표 시점은?", en: "Target timing for the first import?", pt: "Prazo-alvo para a primeira importação?" },
 { ko: "창고 / 3PL 보유 여부는?", en: "Do you have warehouse / 3PL capacity?", pt: "Possuem armazém / 3PL?" },
 { ko: "현지 인플루언서 / 마케팅 역량은?", en: "Local influencer / marketing capability?", pt: "Capacidade local de influenciadores / marketing?" }
 ]
 },

 /* ---------- INTERPRETER ---------- */
 interpreter: {
 title: { ko: "통역사 사전 안내", en: "Interpreter Briefing", pt: "Briefing do Intérprete" },
 background: {
 ko: "이 미팅은 ROUTE82(한국 측 실행 파트너)와 Andrea Jikal's Corporation(브라질 측 사업가 가족)가 브라질 K-Beauty 유통 사업을 논의하는 첫 미팅입니다. 한국어 중심으로 진행되며 필요 시 브라질 포르투갈어로 순차통역됩니다. 본 자료는 계약서가 아니라 'partnership discussion / pilot proposal'입니다.",
 en: "This is a first meeting between ROUTE82 (Korea-side operating partner) and the Andrea Jikal's Corporation (the Brazilian businessperson's family) to discuss a Brazil K-Beauty distribution business. Conducted mainly in Korean with consecutive interpretation into Brazilian Portuguese. This is a partnership discussion / pilot proposal, not a contract.",
 pt: "Esta é uma primeira reunião entre a ROUTE82 (parceira operacional na Coreia) e o Andrea Jikal's Corporation (a família do empresário brasileiro) para discutir um negócio de distribuição de K-Beauty no Brasil. Conduzida principalmente em coreano, com interpretação consecutiva para o português do Brasil. Trata-se de uma discussão de parceria / proposta piloto, não de um contrato."
 },
 namesTitle: { ko: "주요 회사명 / 인명", en: "Key Companies / Names", pt: "Empresas / Nomes-Chave" },
 names: [
 { term: "ROUTE82 (주식회사 루트82)", note: { ko: "한국 측 실행 파트너", en: "Korea-side operating partner", pt: "Parceira operacional (Coreia)" } },
 { term: "Andrea Jikal's Corporation", note: { ko: "브라질 측 사업가 가족 (익명 표기)", en: "Brazilian businessperson's family (anonymized)", pt: "Família do empresário brasileiro (anonimizado)" } },
 { term: "ANVISA", note: { ko: "브라질 보건규제기관", en: "Brazil health regulator", pt: "Agência reguladora de saúde do Brasil" } },
 { term: "Kalon / PLANEAR / THE ALMIGHTY", note: { ko: "ROUTE82 계열사", en: "ROUTE82 affiliates", pt: "Afiliadas da ROUTE82" } }
 ],
 cautionTitle: { ko: "통역 시 주의 표현", en: "Phrasing Cautions", pt: "Cuidados de Fraseado" },
 cautions: [
      { ko: "'올리브영 같은 사업'은 상표 오해를 피하기 위해 'K-Beauty 전문 큐레이션 리테일 플랫폼'으로 설명", en: "Describe 'a business like Olive Young' as 'a K-Beauty specialty retail platform similar in concept to a curated beauty retailer' to avoid trademark confusion", pt: "Descrever 'um negócio como a Olive Young' como 'uma plataforma de varejo especializada em K-Beauty, semelhante em conceito a um varejista de beleza com curadoria', para evitar confusão de marca" },
      { ko: "인증·세율·기간은 확정형이 아니라 '확인 필요/추정'으로 통역", en: "Interpret regulatory, tax-rate and timeline points as 'to be confirmed / estimated', not as fixed facts", pt: "Interpretar pontos regulatórios, alíquotas e prazos como 'a confirmar / estimado', não como fatos fixos" },
      { ko: "독점권·유통권은 확정이 아니라 '별도 협의 대상'으로 통역", en: "Exclusivity/distribution rights are 'subject to separate negotiation', not granted", pt: "Direitos de exclusividade/distribuição são 'sujeitos a negociação separada', não concedidos" }
    ],
 glossaryTitle: { ko: "핵심 용어집 (검색 가능)", en: "Core Glossary (searchable)", pt: "Glossário Principal (pesquisável)" },
 glossary: [
 { ko: "화장품 유통", en: "cosmetics distribution", pt: "distribuição de cosméticos" },
 { ko: "K-뷰티 (한국 화장품)", en: "K-Beauty", pt: "K-Beauty (cosméticos coreanos)" },
 { ko: "소싱", en: "sourcing", pt: "sourcing / curadoria de fornecimento" },
 { ko: "인증/승인", en: "regulatory approval", pt: "aprovação regulatória" },
 { ko: "ANVISA(브라질 보건규제기관)", en: "ANVISA", pt: "ANVISA" },
 { ko: "수입자", en: "importer", pt: "importador" },
 { ko: "책임 주체/책임 회사", en: "responsible party", pt: "responsável / empresa responsável" },
 { ko: "라벨링", en: "labeling", pt: "rotulagem" },
 { ko: "INCI 성분명", en: "INCI", pt: "INCI (nomenclatura de ingredientes)" },
 { ko: "물류", en: "logistics", pt: "logística" },
 { ko: "통관", en: "customs clearance", pt: "desembaraço aduaneiro" },
 { ko: "창고", en: "warehouse", pt: "armazém" },
 { ko: "도매", en: "wholesale", pt: "atacado" },
 { ko: "소매", en: "retail", pt: "varejo" },
 { ko: "마켓플레이스", en: "marketplace", pt: "marketplace" },
 { ko: "파일럿 런칭", en: "pilot launch", pt: "lançamento piloto" },
 { ko: "최소발주수량", en: "MOQ (minimum order quantity)", pt: "MOQ (quantidade mínima de pedido)" },
 { ko: "독점 유통", en: "exclusive distribution", pt: "distribuição exclusiva" },
 { ko: "AFE (회사 단위 영업허가)", en: "AFE (company operating authorization)", pt: "AFE (Autorização de Funcionamento de Empresa)" },
 { ko: "위생 운영 라이선스", en: "operating/sanitary license", pt: "licença sanitária" }
 ]
 },

 /* ---------- NEXT STEPS ---------- */
 nextSteps: {
 title: { ko: "Next Step 체크리스트", en: "Next Step Checklist", pt: "Checklist de Próximos Passos" },
 items: [
 { ko: "타깃 고객·채널·예산 범위 정렬", en: "Align target customer, channel & budget range", pt: "Alinhar cliente-alvo, canal e faixa de orçamento" },
 { ko: "우선 카테고리 2–3개 합의", en: "Agree on 2–3 priority categories", pt: "Acordar 2–3 categorias prioritárias" },
 { ko: "브라질 측 수입자/규제 파트너 현황 공유", en: "Share Brazil-side importer/regulatory partner status", pt: "Compartilhar status de importador/parceiro regulatório no Brasil" },
 { ko: "파일럿 SKU 규모(20–30) & 일정 합의", en: "Agree pilot SKU count (20–30) & timeline", pt: "Acordar nº de SKUs piloto (20–30) e cronograma" },
 { ko: "NDA / 협력 범위 초안 검토", en: "Review NDA / scope-of-collaboration draft", pt: "Revisar minuta de NDA / escopo de colaboração" }
 ]
 },

 /* ---------- SOURCES (for modal) ---------- */
 sourcesNote: {
 ko: "모든 핵심 수치는 출처와 신뢰도 표시(확인/추정/확인 필요)를 함께 기재했습니다. 상세 목록은 sources.md를 참조하세요.",
 en: "Every key figure carries a source and confidence tag (Confirmed/Estimate/Confirm). See sources.md for the full list.",
 pt: "Cada número-chave traz fonte e selo de confiança (Confirmado/Estimativa/Confirmar). Veja sources.md para a lista completa."
 }
};
