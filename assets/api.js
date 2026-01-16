async function apiGet(action){
  return fetch(`${API_URL}?action=${action}`)
    .then(r => r.json());
}

async function apiPost(payload){
  return fetch(API_URL,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(payload)
  }).then(r=>r.json());
}
