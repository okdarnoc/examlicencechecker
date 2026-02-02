# SFC Exam & Eligibility Checker | 證監會考試及資格檢查器

A free online tool to help you determine which HKSI LE exams you need for your SFC license application.

免費網上工具，幫助你確定申請證監會牌照需要通過哪些HKSI LE考試。

🔗 **Live Demo:** [examlicencechecker.pages.dev](https://examlicencechecker.pages.dev)

---

## ✨ Features | 功能

### 🎯 Exam Requirements Calculator | 考試要求計算器
- Determines which HKSI LE papers you need to pass
- Identifies papers you may be exempt from (full, conditional, or re-entrant exemptions)
- Calculates CPT hours for returning practitioners
- Based on **SFC Guidelines on Competence (October 2024)**

### 📋 Comprehensive Exemption Logic | 全面豁免邏輯

Implements all exemption types from SFC Guidelines:

| Exemption Type | SFC Reference | Description |
|----------------|---------------|-------------|
| **RIQ Full Exemption** | 4.4.2.1 | Current/former licensee (<3 yrs), same RIQ requirements, same role |
| **RIQ Conditional Exemption** | 4.4.2.2 | Current licensee, 5+ yrs local experience, different RIQ requirements |
| **LRP Full Exemption** | 4.4.3.1 | Current/former licensee (<3 yrs), same LRP requirements, same role; OR temporary licence; OR 3+ yrs regulatory work |
| **LRP Conditional 1** | 4.4.3.2 | RO with substantial foreign experience (8 yrs Schedule 3 OR 6+2 yrs) |
| **LRP Conditional 2** | 4.4.3.3 | RO, 5+ yrs local experience, different LRP requirements |
| **LRP Conditional 3** | 4.4.3.4 | LR→RO upgrade with 3+ yrs licensed HK experience |
| **LRP Conditional 4** | 4.4.3.5 | RO, 8+ yrs foreign experience, serves PI only |
| **LRP Conditional 5** | 4.4.3.6 | LR itinerant professional (max 30 days/year in HK) |
| **LRP Conditional 6** | 4.4.3.7 | LR, current/former (<3 yrs), never attempted Paper 1 |
| **Re-entrant Exemption** | 4.4.4.1 | Former licensee 3-8 yrs absent, same requirements, same role |

### 🔄 Role-Based Tracking | 角色追蹤

**Key Feature:** Tracks LR vs RO role separately for each Regulated Activity

This fixes the common scenario where someone licensed as **LR for Type 1** applies to become **RO for Type 1**:
- Previously: Would incorrectly show Paper 2 as exempt
- Now: Correctly shows Paper 2 as required (or conditionally exempt with conditions)

### 📝 Exam Papers Explained | 試卷說明

**LRP (Local Regulatory Papers) - 本地監管架構試卷:**
- Paper 1: General Regulation (all LRs, except Types 3,7)
- Papers 2-6, 18: Specialized papers for ROs by RA type

**RIQ (Recognized Industry Qualification) - 認可行業資格試卷:**
- Paper 7: Financial Markets (general, most RAs)
- Papers 8-12, 19: Specialized product papers by RA type

### ✅ Eligibility Validation | 資格驗證

**Hard requirements for RO applicants:**
- ❌ Less than 3 years relevant experience in past 6 years → **NOT ELIGIBLE**
- ❌ Less than 2 years management experience → **NOT ELIGIBLE**

### 📋 Coverage | 覆蓋範圍
- All Regulated Activities (Types 1-13, including Type 13 added in 2024)
- Licensed Representative (LR) requirements
- Responsible Officer (RO) requirements
- Academic qualification exemptions
- Professional qualification exemptions (CFA, CIIA, CFP, FRM, CPA)
- Industry experience exemptions
- Temporary licence exemptions
- Itinerant professional exemptions

### 🌐 Multi-Language Support | 多語言支援
- English
- 繁體中文 (Traditional Chinese) - Default
- 简体中文 (Simplified Chinese)

### 📚 Study Materials Recommendations | 溫習材料推薦
- Links to relevant question banks and study bibles
- Pricing and delivery information
- Products from [2CExam](https://2cexam.com.hk)

### 📞 SFC Contact Information | 證監會聯絡資訊
- Direct link to Guidelines on Competence
- SFC Licensing Department contact details
- Online enquiry links

---

## 🚀 Quick Start | 快速開始

Simply visit: **https://examlicencechecker.pages.dev**

1. **Step 1:** Select your role (LR or RO) and Regulated Activity type
2. **Step 2:** Enter your licensing history
   - Current licenses (with LR/RO role for each)
   - Former licenses (with LR/RO role for each)
   - Years absent from industry
   - Additional fields for conditional exemptions
3. **Step 3:** Input your qualifications and experience
   - Academic qualifications
   - Professional qualifications
   - Industry experience
   - Management experience (for RO)
   - Conditional exemption criteria
4. **Step 4:** Select any papers you've already passed (within 3 years)
5. Click **"Calculate Results"**

---

## 📁 Project Structure | 項目結構

```
examlicencechecker/
├── index.html          # Main application (all-in-one HTML/CSS/JS)
├── email-template.html # Marketing email template (EN + TC)
├── 2cexam_logo-272x300.png
├── wrangler.toml       # Cloudflare Pages configuration
├── package.json
├── _headers            # Cloudflare security headers
├── _redirects          # Cloudflare redirects
├── DEPLOYMENT.md       # Deployment notes
└── README.md           # This file
```

---

## 🛠️ Deployment | 部署

### Cloudflare Pages

```bash
# Deploy to Cloudflare Pages
npx wrangler pages deploy . --project-name=examlicencechecker --commit-dirty=true
```

### GitHub

```bash
# Commit and push to GitHub
git add .
git commit -m "Your commit message"
git push origin main
```

### Important Notes
- **Production branch:** `main` (not master!)
- **Project name:** examlicencechecker
- **Production URL:** https://examlicencechecker.pages.dev
- **GitHub Repository:** https://github.com/okdarnoc/examlicencechecker

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

---

## 📧 Marketing Materials | 營銷材料

### Email Template
The `email-template.html` file contains a bilingual (EN + TC) HTML email template for promoting the tool.

### WhatsApp Message
See the repository wiki or contact 2CExam for pre-written WhatsApp marketing messages.

---

## 📖 Based On | 依據

This calculator is based on the **Securities and Futures Commission (SFC) Guidelines on Competence (October 2024)**.

- [English Guidelines](https://www.sfc.hk/en/rules-and-standards/codes-and-guidelines/guidelines/guidelines-on-competence)
- [中文指引](https://www.sfc.hk/TC/rules-and-standards/codes-and-guidelines/guidelines/guidelines-on-competence)

### Key SFC References Implemented:
- 4.4.2 RIQ Exemption
- 4.4.3 LRP Exemption
- 4.4.4 Re-entrant Exemption
- Schedule 3 Recognized Exchange Jurisdictions

---

## ⚠️ Disclaimer | 免責聲明

This calculator provides general guidance only. Individual circumstances may vary. For official requirements, please consult the SFC directly.

本計算器僅提供一般指引。個別情況可能有所不同。如需了解官方要求，請直接諮詢證監會。

---

## 📞 Contact | 聯繫我們

**2CExam**

- 📍 Room 301, 59 Des Voeux Road Central, Central, Hong Kong
- 📍 中環德輔道中59號中南行301室
- 🚇 Central MTR Exit B | 中環地鐵站B出口
- 📱 Tel: +852 2110 9644
- ✉️ Email: info@2cexam.com
- 💬 WhatsApp: +852 9347 2064
- 💚 WeChat: hk2cexam
- 🌐 Website: [2cexam.com.hk](https://2cexam.com.hk)

**Office Hours | 辦公時間**
- Monday - Friday: 9AM - 12PM, 1PM - 6PM
- (No service during lunch)

---

## 📝 Changelog | 更新日誌

### v3 - Enhanced Exemption Logic (2024)
- Added inline LR/RO role selection for each RA in license history
- Implemented all SFC exemption types (RIQ Full/Conditional, LRP Full/Conditional 1-6, Re-entrant)
- Added conditional exemption form fields (Schedule 3 experience, regulatory work, etc.)
- Fixed bug where Paper 2 was incorrectly exempted for LR→RO upgrades
- Added comprehensive help text explaining each field
- Added LRP/RIQ exam explanations with paper breakdowns
- Fixed RO eligibility to enforce hard requirements (3yr experience, 2yr management)

### v2 - Initial Release
- Basic exam calculator
- Multi-language support
- Product recommendations
- SFC contact information

---

## 📄 License | 授權

MIT License

© 2024 2CExam. All rights reserved.
