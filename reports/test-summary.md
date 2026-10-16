# Software Testing Final Exam

## Repository Structure
- \	ests/unit/\: UT-01, UT-02
- \	ests/integration/\: IT-01, IT-02
- \	ests/system/\: ST-01, ST-02

## Integration Testing Explanation
### IT-01 (Top-Down with Stub)
- **Real Part:** กระบวนการ Login จริงผ่านหน้าเว็บ SauceDemo
- **Stub Part:** ใช้ \page.setContent()\ จำลององค์ประกอบ DOM ของหน้า Inventory เพื่อทดสอบส่วนประมวลผล

### IT-02 (Bottom-Up with Driver)
- **Driver Part:** ใช้ \driverOpenInventory()\ และ \ddCookies\ เซ็ตค่า \session-username\ เพื่อข้ามฟอร์ม Login
- **Real Part:** หน้า Inventory และ Shopping Cart จริงของ SauceDemo

## How to Run Tests
\\\ash
npm install
npx playwright test
npx playwright show-report
\\\
"@ | Out-File -FilePath "README.md" -Encoding utf8

@"
# Test Execution Summary

## Test Results
- **UT-01 (Login Form Validation):** PASSED (3 Test Cases)
- **UT-02 (Product Button State Validation):** PASSED (1 Test Case)
- **IT-01 (Top-Down with Stub):** PASSED (1 Test Case)
- **IT-02 (Bottom-Up with Driver):** PASSED (1 Test Case)
- **ST-01 (Complete Purchase Flow):** PASSED (1 Test Case)
- **ST-02 (Checkout Validation and Recovery):** PASSED (1 Test Case)

**Total Test Cases:** 8 Passed / 0 Failed
