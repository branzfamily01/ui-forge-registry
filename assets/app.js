const components = window.UI_FORGE_COMPONENTS || [];
const grid = document.querySelector('#componentGrid');
const filters = document.querySelector('#filters');
const searchInput = document.querySelector('#searchInput');
const ownerInput = document.querySelector('#ownerInput');
const heroCli = document.querySelector('#heroCli');
const dialog = document.querySelector('#componentDialog');
const toast = document.querySelector('#toast');
let activeCategory = 'All';
let current = null;

const previewHtml = (type) => ({
  'spotlight':'<div class="pv-spot"><b>Focus on what matters</b><span>Pointer-driven spotlight</span></div>',
  'dock':'<div class="pv-dock"><i>⌂</i><i>⌕</i><i>✦</i><i>▣</i><i>⚙</i></div>',
  'gradient-button':'<button class="pv-grad">Start building →</button>',
  'counter':'<div class="pv-count" data-counter>2,480</div>',
  'text-reveal':'<div class="pv-text">'+[...'Make it feel alive'].map((x,i)=>`<span style="--i:${i}">${x===' '?'&nbsp;':x}</span>`).join('')+'</div>',
  'success':'<div class="pv-success"><strong>✓ できた！</strong>'+Array.from({length:8},(_,i)=>`<i style="--i:${i}"></i>`).join('')+'</div>',
  'xp':'<div class="pv-xp"><div><span>LEVEL 7</span><b>376 XP</b></div><div class="bar"></div></div>',
  'level':'<div class="pv-level"><small>LEVEL UP</small><strong>8</strong><span>Next stage unlocked</span></div>',
  'fab':'<div class="pv-fab">+</div>',
  'tabs':'<div class="pv-tabs"><span>Today</span><span>Week</span><span>All</span></div>',
  'ring':'<div class="pv-ring"></div>',
  'badge':'<div class="pv-badge">✦ NEW UNLOCK</div>'
}[type] || '<div>Preview</div>');

function owner(){ return (ownerInput.value.trim() || 'branzfamily01').replace(/^@/,''); }
function cli(name){ return `npx shadcn@latest add ${owner()}/ui-forge-registry/${name}`; }
function updateOwner(){ localStorage.setItem('uiForgeOwner', ownerInput.value.trim()); heroCli.textContent=cli('spotlight-card'); if(current) document.querySelector('#installCode').textContent=cli(current.name); }
const savedOwner = localStorage.getItem('uiForgeOwner'); if(savedOwner) ownerInput.value=savedOwner; updateOwner(); ownerInput.addEventListener('input',updateOwner);

function renderFilters(){ const cats=['All',...new Set(components.map(x=>x.category))]; filters.innerHTML=cats.map(c=>`<button class="${c===activeCategory?'active':''}" data-cat="${c}">${c}</button>`).join(''); filters.querySelectorAll('button').forEach(b=>b.onclick=()=>{activeCategory=b.dataset.cat;renderFilters();render();}); }
function render(){ const q=searchInput.value.trim().toLowerCase(); const list=components.filter(c=>(activeCategory==='All'||c.category===activeCategory)&&(!q||[c.name,c.title,c.summary,c.category,...c.tags,...c.useFor].join(' ').toLowerCase().includes(q))); grid.innerHTML=list.map(c=>`<article class="component-card"><div class="preview">${previewHtml(c.preview)}</div><div class="card-body"><div class="card-row"><h3>${c.title}</h3><span class="category">${c.category}</span></div><p>${c.summary}</p><div class="card-actions"><button data-open="${c.name}">Open</button><button data-copy="${c.name}">Copy CLI</button></div></div></article>`).join(''); document.querySelector('#emptyState').hidden=!!list.length; grid.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>openComponent(b.dataset.open)); grid.querySelectorAll('[data-copy]').forEach(b=>b.onclick=()=>copy(cli(b.dataset.copy))); }
searchInput.addEventListener('input',render); renderFilters(); render();

function openComponent(name){ current=components.find(c=>c.name===name); if(!current)return; document.querySelector('#dialogCategory').textContent=current.category.toUpperCase(); document.querySelector('#dialogTitle').textContent=current.title; document.querySelector('#dialogSummary').textContent=current.summary; document.querySelector('#dialogPreview').innerHTML=previewHtml(current.preview); document.querySelector('#installCode').textContent=cli(current.name); document.querySelector('#sourceCode').textContent=current.source; document.querySelector('#metadataCode').textContent=JSON.stringify({name:current.name,category:current.category,tags:current.tags,useFor:current.useFor,motion:current.motion,dependency:current.dependency},null,2); dialog.showModal(); }
document.querySelector('#dialogClose').onclick=()=>dialog.close(); dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelectorAll('.tab').forEach(tab=>tab.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.tabpane').forEach(x=>x.classList.remove('active'));tab.classList.add('active');document.querySelector(`[data-pane="${tab.dataset.tab}"]`).classList.add('active');});

async function copy(text){ try{await navigator.clipboard.writeText(text)}catch{const t=document.createElement('textarea');t.value=text;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove()} showToast('コピーしました'); }
document.addEventListener('click',e=>{const b=e.target.closest('[data-copy-target]');if(b){const el=document.getElementById(b.dataset.copyTarget);copy(el.innerText||el.textContent)}});
function showToast(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>toast.classList.remove('show'),1500)}

const synonymMap={
 '子ども':'children','こども':'children','学習':'learning','勉強':'learning','完了':'completion','達成':'achievement','褒め':'success','成功':'success','経験値':'xp','成長':'progress','進捗':'progress','数字':'number','ダッシュボード':'dashboard','スマホ':'mobile','追加':'add','開始':'start','ナビ':'navigation','切替':'tabs','新着':'new','解除':'unlock','ボタン':'button','カード':'card','目標':'goal'
};
function normalizeIntent(input){let s=input.toLowerCase();Object.entries(synonymMap).forEach(([ja,en])=>{if(s.includes(ja))s+=' '+en});return s}
function score(c,q){const hay=[c.name,c.title,c.summary,c.category,...c.tags,...c.useFor].join(' ').toLowerCase();const words=normalizeIntent(q).split(/[\s、。,.!！?？]+/).filter(w=>w.length>1);return words.reduce((n,w)=>n+(hay.includes(w)?(c.tags.includes(w)||c.useFor.includes(w)?3:1):0),0)+(q.includes('子')&&c.useFor.includes('children')?4:0)}
function find(){const q=document.querySelector('#intentInput').value.trim();const out=document.querySelector('#finderResults');if(!q){out.innerHTML='<div class="result-card"><b>用途を書いてください</b><span>例のチップを押しても試せます。</span></div>';return}const ranked=components.map(c=>({c,s:score(c,q)})).sort((a,b)=>b.s-a.s).slice(0,3);out.innerHTML=ranked.map(({c,s},i)=>`<div class="result-card" data-result="${c.name}"><b>${i+1}. ${c.title}</b><span>${c.summary}<br>match score ${s}</span></div>`).join('');out.querySelectorAll('[data-result]').forEach(x=>x.onclick=()=>openComponent(x.dataset.result));}
document.querySelector('#findBtn').onclick=find;document.querySelectorAll('[data-example]').forEach(b=>b.onclick=()=>{document.querySelector('#intentInput').value=b.dataset.example;find()});document.querySelector('#openAiFinder').onclick=()=>{document.querySelector('#ai-finder').scrollIntoView({behavior:'smooth'});setTimeout(()=>document.querySelector('#intentInput').focus(),500)};

document.querySelector('#themeBtn').onclick=()=>{document.body.classList.toggle('light');localStorage.setItem('uiForgeTheme',document.body.classList.contains('light')?'light':'dark')};if(localStorage.getItem('uiForgeTheme')==='light')document.body.classList.add('light');

if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
