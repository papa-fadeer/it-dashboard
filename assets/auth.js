/* ===== Auth / Session ===== */

function createToken(user){
  return btoa(JSON.stringify({
    uid: user.rowId,
    role: user.role,
    ts: Date.now()
  }));
}

function getSession(){
  const t = sessionStorage.getItem('AUTH_TOKEN');
  return t ? JSON.parse(atob(t)) : null;
}

const PERMISSIONS = {
  admin: { create:true, update:true, delete:true },
  manager: { create:true, update:true, delete:false },
  executive: { create:false, update:false, delete:false }
};

function can(action){
  const s = getSession();
  return s && PERMISSIONS[s.role]?.[action];
}
