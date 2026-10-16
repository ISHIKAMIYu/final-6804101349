# Software Testing Final Exam

## Repository Structure
- `tests/unit/`: UT-01, UT-02
- `tests/integration/`: IT-01, IT-02
- `tests/system/`: ST-01, ST-02

## Integration Testing Explanation
### IT-01 (Top-Down with Stub)
- **Real Part:** กระบวนการ Login จริงผ่านหน้าเว็บ SauceDemo
- **Stub Part:** ใช้ `page.setContent()` จำลององค์ประกอบ DOM ของหน้า Inventory เพื่อทดสอบส่วนประมวลผล

### IT-02 (Bottom-Up with Driver)
- **Driver Part:** ใช้ `driverOpenInventory()` และ `addCookies` เซ็ตค่า `session-username` เพื่อข้ามฟอร์ม Login
- **Real Part:** หน้า Inventory และ Shopping Cart จริงของ SauceDemo

## How to Run Tests
```bash
npm install
npx playwright test
npx playwright show-report