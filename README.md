# SFC Exam & Eligibility Checker | 證監會考試及資格檢查器

A free online tool to help you determine which HKSI LE exams you need for your SFC license application.

免費網上工具，幫助你確定申請證監會牌照需要通過哪些HKSI LE考試。

🔗 **Live Demo:** [examlicencechecker.pages.dev](https://examlicencechecker.pages.dev)

---

## ✨ Features | 功能

### 🎯 Exam Requirements Calculator | 考試要求計算器
- Determines which HKSI LE papers you need to pass
- Identifies papers you may be exempt from
- Calculates CPT hours for returning practitioners
- Based on **SFC Guidelines on Competence (October 2024)**

### 📋 Comprehensive Coverage | 全面覆蓋
- All Regulated Activities (Types 1-13)
- Licensed Representative (LR) requirements
- Responsible Officer (RO) requirements
- Academic qualification exemptions
- Professional qualification exemptions (CFA, CIIA, CFP, etc.)
- Industry experience exemptions

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

1. Select your role (LR or RO)
2. Choose the Regulated Activity type
3. Enter your licensing history
4. Input your qualifications and experience
5. Select any papers you've already passed
6. Click "Calculate Results"

---

## 📁 Project Structure | 項目結構

```
examlicencechecker/
├── index.html          # Main application (all-in-one HTML/CSS/JS)
├── email-template.html # Marketing email template (EN + TC)
├── 2cexam_logo-272x300.png
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
npx wrangler pages deploy . --project-name=examlicencechecker --branch=main
```

### Important Notes
- **Production branch:** `main` (not master!)
- **Project name:** examlicencechecker
- **Production URL:** https://examlicencechecker.pages.dev

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

## 📄 License | 授權

MIT License

© 2024 2CExam. All rights reserved.
