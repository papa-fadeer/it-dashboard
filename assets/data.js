let users = [];
let allData = [];
let allSystems = [];

async function loadAllData(){
  const u = await apiGet('users');
  const s = await apiGet('systems');

  users = u.data || [];
  allData = s.data || [];
}

function applyRoleData(){
  const session = getSession();

  if(session.role === 'executive'){
    allSystems = allData;
    applyReadOnlyUI();
  } else {
    allSystems = allData.filter(
      s => s.user_id === session.uid
    );
  }
}
