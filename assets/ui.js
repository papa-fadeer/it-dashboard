function applyReadOnlyUI(){
  document.querySelectorAll(
    '#add-system-btn, .edit-btn, .delete-btn'
  ).forEach(el => el.remove());
}

function showToast(msg, type='success'){
  // ใช้โค้ด toast เดิมของคุณ
}
