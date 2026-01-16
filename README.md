# it-dashboard
/it-dashboard/
│
├─ index.html                # หน้าเดียวหลัก (UI + Layout)
│
├─ assets/
│   ├─ css/
│   │   └─ main.css           # CSS ทั้งหมด (ย้ายจาก <style>)
│   │
│   ├─ js/
│   │   ├─ config.js          # ค่า config กลาง (API_URL, App name)
│   │   ├─ auth.js            # Login / Token / Role / Permission
│   │   ├─ api.js             # ติดต่อ Google Sheets (CRUD)
│   │   ├─ data.js            # loadAllData, KPI logic
│   │   └─ ui.js              # render, modal, toast, filter
│   │
│   └─ fonts/ (optional)
│
└─ README.md                  # วิธี deploy / ใช้งาน (องค์กร)


https://script.google.com/a/macros/thaimooc.ac.th/s/AKfycbzzFk1wqm1dXjyG-4HarXv5T9tEbDJkHzPUfuh857DfWhGM9WxvouBZRMXtxch42s5xAw/exec