// SFC Exam Calculator - Translations
const translations = {
    en: {
        // Header
        title: "SFC Licensing Exam Calculator",
        subtitle: "Determine your examination requirements based on SFC Guidelines on Competence (October 2024)",

        // Progress Steps
        step1: "Role & Activity",
        step2: "License History",
        step3: "Qualifications",
        step4: "Exam History",
        step5: "Results",

        // Step 1
        s1_title: "Step 1: Role & Regulated Activity",
        s1_desc: "Select your intended role and the type of regulated activity you are applying for.",
        role_label: "What role are you applying for?",
        role_lr: "Licensed Representative (LR)",
        role_lr_desc: "Individual who carries on regulated activities on behalf of a licensed corporation",
        role_ro: "Responsible Officer (RO)",
        role_ro_desc: "Senior manager who supervises regulated activities and ensures compliance",
        role_info: "ROs require additional management experience (min. 2 years) and must pass more regulatory papers.",
        ra_label: "Which Regulated Activity (RA) are you applying for?",
        ra1: "Dealing in Securities",
        ra1_detail: "",
        ra2: "Dealing in Futures Contracts",
        ra2_detail: "",
        ra3: "Leveraged Foreign Exchange Trading",
        ra3_detail: "",
        ra4: "Advising on Securities",
        ra4_detail: "",
        ra5: "Advising on Futures Contracts",
        ra5_detail: "",
        ra6: "Advising on Corporate Finance",
        ra6_detail: "",
        ra7: "Providing Automated Trading Services",
        ra7_detail: "",
        ra8: "Securities Margin Financing",
        ra8_detail: "",
        ra9: "Asset Management",
        ra9_detail: "",
        ra10: "Providing Credit Rating Services",
        ra10_detail: "",
        ra13: "Depositary Services for CISs",
        ra13_detail: "",
        no_exam: "No Exam Required",
        new_oct2024: "New: Oct 2024",
        ra3_warning: "Type 3 (Leveraged Foreign Exchange Trading) is not covered by HKSI examinations. Please consult SFC directly for specific requirements.",
        type6_label: "Additional Type 6 Approvals Required:",
        sponsor_principal: "Sponsor (Principal)",
        sponsor_principal_desc: "For RO acting as sponsor principal in IPO transactions",
        sponsor_rep: "Sponsor (Representative)",
        sponsor_rep_desc: "For LR involved in sponsor work",
        takeovers: "Takeovers & Share Buy-backs",
        takeovers_desc: "For work involving the Codes on Takeovers and Share Buy-backs",

        // Step 2
        s2_title: "Step 2: Licensing History",
        s2_desc: "Your licensing history affects examination exemptions and CPT requirements.",
        current_license: "Are you currently licensed by the SFC?",
        yes: "Yes",
        no: "No",
        current_ra_label: "Which Regulated Activities are you currently licensed for?",
        former_license: "Have you been licensed by the SFC in the past?",
        years_absent: "How long have you been out of the industry?",
        years: "years",
        years_absent_help: "Enter years and months as decimal (e.g., 2 years 6 months = 2.5)",
        cpt_preview_title: "Estimated CPT Hours Required:",
        hours_per_ra: "hours per RA",
        cpt_note: "Must be completed BEFORE submitting your application",
        former_ra_label: "Which Regulated Activities were you previously licensed for?",
        grandfather_label: "Were you licensed before 1 January 2022?",
        grandfather_info: "Applicants licensed before 1 January 2022 under the previous Option 3 may be grandfathered under the revised Guidelines on Competence.",

        // Step 3
        s3_title: "Step 3: Qualifications & Experience",
        s3_desc: "Your academic qualifications, professional certifications, and industry experience determine examination exemptions.",
        academic_label: "Highest Academic Qualification",
        acad_none: "No formal qualification / Cannot provide proof",
        acad_secondary: "Secondary education (HKCEE/HKDSE or equivalent)",
        acad_degree_other: "Bachelor's degree (other fields)",
        acad_degree_relevant: "Bachelor's degree in Accounting/Business/Economics/Finance/Law",
        acad_degree_courses: "Bachelor's degree (other) with 2+ courses in relevant fields",
        acad_masters: "Master's degree in relevant field",
        acad_mba: "MBA",
        academic_info: "Relevant fields: Accounting, Business Administration, Economics, Finance, Financial Management, Law",
        prof_label: "Professional Qualifications (select all that apply)",
        riq_exempt: "RIQ Exempt",
        may_qualify: "May Qualify",
        exp_label: "Industry Experience",
        exp_8years: "Relevant experience in the past 8 years:",
        exp_8years_help: "5+ years qualifies for RIQ exemption",
        exp_6years: "Relevant experience in the past 6 years:",
        exp_6years_help: "RO requires 3+ years in past 6 years",
        exp_mgmt: "Management/supervisory experience:",
        exp_mgmt_help: "RO requires 2+ years managing at least 1 person",
        pi_label: "Will you serve professional investors only?",
        pi_info: "Private fund managers with 8+ years experience serving only professional investors may qualify for special exemptions under paragraph 4.4.3.5.",

        // Step 4
        s4_title: "Step 4: Examination History",
        s4_desc: "Select any HKSI LE papers you have passed within the past 3 years.",
        lrp_papers: "Local Regulatory Framework Papers (LRP)",
        riq_papers: "Recognised Industry Qualifications Papers (RIQ)",
        additional_papers: "Additional Competence Papers",
        paper1: "Fundamentals of Securities and Futures Regulation",
        paper2: "Regulation of Securities",
        paper3: "Regulation of Derivatives",
        paper4: "Regulation of Credit Rating Services",
        paper5: "Regulation of Corporate Finance",
        paper6: "Regulation of Asset Management",
        paper7: "Financial Markets",
        paper8: "Securities",
        paper9: "Derivatives",
        paper10: "Credit Rating Services",
        paper11: "Corporate Finance",
        paper12: "Asset Management",
        paper15: "Sponsors (Principals)",
        paper16: "Sponsors (Representatives)",
        paper17: "Takeovers and Share Buy-backs",
        paper18: "Regulation of Depositary Services",
        paper19: "Depositary Services for CISs",
        paper_validity: "Exam results are generally valid for 3 years. Results older than 3 years may be accepted if you have been licensed within the past 3 years.",

        // Buttons
        next: "Next Step",
        back: "Back",
        calculate: "Calculate Requirements",
        start_over: "Start Over",

        // Results
        result_eligible: "You appear to be eligible for licensing",
        result_conditional: "Conditional Eligibility",
        result_not_eligible: "Eligibility Concerns",
        result_no_exam: "No Examination Required",
        papers_required: "Papers You Need to Pass",
        papers_exempted: "Papers You Are Exempt From",
        required: "Required",
        exempted: "Exempted",
        summary: "Summary",
        papers_to_pass: "Papers to pass:",
        papers_exempt: "Papers exempt:",
        cpt_required: "CPT Hours Required (Re-entrant)",
        cpt_calculation: "Calculation: 5 CPT hours × years of absence (rounded up) per Regulated Activity",

        // Footer
        disclaimer_title: "Disclaimer",
        disclaimer_text: "This calculator provides general guidance based on the SFC Guidelines on Competence (October 2024). Individual circumstances may vary, and the SFC assesses each application on a case-by-case basis. For official requirements, please consult the SFC directly.",
        resources: "Resources",
        link_sfc: "SFC Guidelines on Competence",
        link_hksi: "HKSI Licensing Examination",
        powered_by: "Powered by"
    },

    tc: {
        // Header
        title: "證監會牌照考試計算器",
        subtitle: "根據證監會《勝任能力的指引》(2024年10月) 確定您的考試要求",

        // Progress Steps
        step1: "角色及活動",
        step2: "牌照紀錄",
        step3: "資歷",
        step4: "考試紀錄",
        step5: "結果",

        // Step 1
        s1_title: "第一步：角色及受規管活動",
        s1_desc: "選擇您申請的角色及受規管活動類型。",
        role_label: "您申請的是什麼角色？",
        role_lr: "持牌代表 (LR)",
        role_lr_desc: "代表持牌法團從事受規管活動的個人",
        role_ro: "負責人員 (RO)",
        role_ro_desc: "監督受規管活動並確保合規的高級管理人員",
        role_info: "負責人員需要額外的管理經驗（至少2年）並須通過更多監管考卷。",
        ra_label: "您申請哪種受規管活動 (RA)？",
        ra1: "證券交易",
        ra1_detail: "Dealing in Securities",
        ra2: "期貨合約交易",
        ra2_detail: "Dealing in Futures Contracts",
        ra3: "槓桿式外匯交易",
        ra3_detail: "Leveraged Foreign Exchange Trading",
        ra4: "就證券提供意見",
        ra4_detail: "Advising on Securities",
        ra5: "就期貨合約提供意見",
        ra5_detail: "Advising on Futures Contracts",
        ra6: "就機構融資提供意見",
        ra6_detail: "Advising on Corporate Finance",
        ra7: "提供自動化交易服務",
        ra7_detail: "Providing Automated Trading Services",
        ra8: "提供證券保證金融資",
        ra8_detail: "Securities Margin Financing",
        ra9: "資產管理",
        ra9_detail: "Asset Management",
        ra10: "提供信貸評級服務",
        ra10_detail: "Providing Credit Rating Services",
        ra13: "為集體投資計劃提供存管服務",
        ra13_detail: "Depositary Services for CISs",
        no_exam: "無須考試",
        new_oct2024: "新增：2024年10月",
        ra3_warning: "第3類（槓桿式外匯交易）不包括在香港證券及投資學會考試範圍內。請直接諮詢證監會了解具體要求。",
        type6_label: "額外第6類核准要求：",
        sponsor_principal: "保薦人（主事人）",
        sponsor_principal_desc: "適用於在首次公開招股交易中擔任保薦人主事人的負責人員",
        sponsor_rep: "保薦人（代表）",
        sponsor_rep_desc: "適用於參與保薦人工作的持牌代表",
        takeovers: "收購合併及股份回購",
        takeovers_desc: "適用於涉及《收購守則》及《股份回購守則》的工作",

        // Step 2
        s2_title: "第二步：牌照紀錄",
        s2_desc: "您的牌照紀錄會影響考試豁免及持續培訓要求。",
        current_license: "您目前是否持有證監會牌照？",
        yes: "是",
        no: "否",
        current_ra_label: "您目前持有哪些受規管活動的牌照？",
        former_license: "您過去是否曾持有證監會牌照？",
        years_absent: "您離開行業多長時間？",
        years: "年",
        years_absent_help: "以小數輸入年月（例如：2年6個月 = 2.5）",
        cpt_preview_title: "預計所需持續培訓時數：",
        hours_per_ra: "小時/每項受規管活動",
        cpt_note: "必須在提交申請前完成",
        former_ra_label: "您之前持有哪些受規管活動的牌照？",
        grandfather_label: "您是否在2022年1月1日之前持有牌照？",
        grandfather_info: "在2022年1月1日之前根據舊有選項三持牌的申請人，可根據經修訂的《勝任能力的指引》獲得過渡安排。",

        // Step 3
        s3_title: "第三步：資歷及經驗",
        s3_desc: "您的學歷、專業資格及行業經驗決定考試豁免。",
        academic_label: "最高學歷",
        acad_none: "沒有正式學歷 / 無法提供證明",
        acad_secondary: "中學教育（香港中學會考/文憑試或同等學歷）",
        acad_degree_other: "學士學位（其他領域）",
        acad_degree_relevant: "會計/工商管理/經濟/金融/法律學士學位",
        acad_degree_courses: "學士學位（其他）並修讀2門或以上相關課程",
        acad_masters: "相關領域碩士學位",
        acad_mba: "工商管理碩士 (MBA)",
        academic_info: "相關領域：會計、工商管理、經濟、金融、財務管理、法律",
        prof_label: "專業資格（選擇所有適用項目）",
        riq_exempt: "可豁免RIQ",
        may_qualify: "或可符合",
        exp_label: "行業經驗",
        exp_8years: "過去8年內的相關經驗：",
        exp_8years_help: "5年或以上可獲RIQ豁免",
        exp_6years: "過去6年內的相關經驗：",
        exp_6years_help: "負責人員需過去6年內有3年或以上經驗",
        exp_mgmt: "管理/監督經驗：",
        exp_mgmt_help: "負責人員需2年或以上管理至少1人的經驗",
        pi_label: "您是否只服務專業投資者？",
        pi_info: "擁有8年或以上經驗、只服務專業投資者的私募基金經理，可能符合第4.4.3.5段的特別豁免條件。",

        // Step 4
        s4_title: "第四步：考試紀錄",
        s4_desc: "選擇過去3年內已通過的香港證券及投資學會資格考試試卷。",
        lrp_papers: "本地監管架構試卷 (LRP)",
        riq_papers: "認可行業資格試卷 (RIQ)",
        additional_papers: "額外勝任能力試卷",
        paper1: "證券及期貨從業員資格考試基礎",
        paper2: "證券規例",
        paper3: "衍生工具規例",
        paper4: "信貸評級服務規例",
        paper5: "機構融資規例",
        paper6: "資產管理規例",
        paper7: "金融市場",
        paper8: "證券",
        paper9: "衍生工具",
        paper10: "信貸評級服務",
        paper11: "機構融資",
        paper12: "資產管理",
        paper15: "保薦人（主事人）",
        paper16: "保薦人（代表）",
        paper17: "收購合併及股份回購規例",
        paper18: "存管服務規例",
        paper19: "集體投資計劃存管服務",
        paper_validity: "考試成績一般有效期為3年。如您在過去3年內曾持牌，超過3年的成績仍可能獲接納。",

        // Buttons
        next: "下一步",
        back: "返回",
        calculate: "計算要求",
        start_over: "重新開始",

        // Results
        result_eligible: "您似乎符合申請牌照的資格",
        result_conditional: "有條件符合資格",
        result_not_eligible: "資格問題",
        result_no_exam: "無須考試",
        papers_required: "需要通過的試卷",
        papers_exempted: "獲豁免的試卷",
        required: "需要",
        exempted: "豁免",
        summary: "摘要",
        papers_to_pass: "需通過試卷：",
        papers_exempt: "豁免試卷：",
        cpt_required: "所需持續培訓時數（重新入行者）",
        cpt_calculation: "計算方式：5小時持續培訓 × 離開年數（進位）× 每項受規管活動",

        // Footer
        disclaimer_title: "免責聲明",
        disclaimer_text: "本計算器根據證監會《勝任能力的指引》(2024年10月) 提供一般指引。個別情況可能有所不同，證監會會按個案評估每項申請。如需了解正式要求，請直接諮詢證監會。",
        resources: "資源",
        link_sfc: "證監會《勝任能力的指引》",
        link_hksi: "香港證券及投資學會資格考試",
        powered_by: "技術支援"
    },

    sc: {
        // Header
        title: "证监会牌照考试计算器",
        subtitle: "根据证监会《胜任能力的指引》(2024年10月) 确定您的考试要求",

        // Progress Steps
        step1: "角色及活动",
        step2: "牌照记录",
        step3: "资历",
        step4: "考试记录",
        step5: "结果",

        // Step 1
        s1_title: "第一步：角色及受规管活动",
        s1_desc: "选择您申请的角色及受规管活动类型。",
        role_label: "您申请的是什么角色？",
        role_lr: "持牌代表 (LR)",
        role_lr_desc: "代表持牌法团从事受规管活动的个人",
        role_ro: "负责人员 (RO)",
        role_ro_desc: "监督受规管活动并确保合规的高级管理人员",
        role_info: "负责人员需要额外的管理经验（至少2年）并须通过更多监管考卷。",
        ra_label: "您申请哪种受规管活动 (RA)？",
        ra1: "证券交易",
        ra1_detail: "Dealing in Securities",
        ra2: "期货合约交易",
        ra2_detail: "Dealing in Futures Contracts",
        ra3: "杠杆式外汇交易",
        ra3_detail: "Leveraged Foreign Exchange Trading",
        ra4: "就证券提供意见",
        ra4_detail: "Advising on Securities",
        ra5: "就期货合约提供意见",
        ra5_detail: "Advising on Futures Contracts",
        ra6: "就机构融资提供意见",
        ra6_detail: "Advising on Corporate Finance",
        ra7: "提供自动化交易服务",
        ra7_detail: "Providing Automated Trading Services",
        ra8: "提供证券保证金融资",
        ra8_detail: "Securities Margin Financing",
        ra9: "资产管理",
        ra9_detail: "Asset Management",
        ra10: "提供信贷评级服务",
        ra10_detail: "Providing Credit Rating Services",
        ra13: "为集体投资计划提供存管服务",
        ra13_detail: "Depositary Services for CISs",
        no_exam: "无须考试",
        new_oct2024: "新增：2024年10月",
        ra3_warning: "第3类（杠杆式外汇交易）不包括在香港证券及投资学会考试范围内。请直接咨询证监会了解具体要求。",
        type6_label: "额外第6类核准要求：",
        sponsor_principal: "保荐人（主事人）",
        sponsor_principal_desc: "适用于在首次公开招股交易中担任保荐人主事人的负责人员",
        sponsor_rep: "保荐人（代表）",
        sponsor_rep_desc: "适用于参与保荐人工作的持牌代表",
        takeovers: "收购合并及股份回购",
        takeovers_desc: "适用于涉及《收购守则》及《股份回购守则》的工作",

        // Step 2
        s2_title: "第二步：牌照记录",
        s2_desc: "您的牌照记录会影响考试豁免及持续培训要求。",
        current_license: "您目前是否持有证监会牌照？",
        yes: "是",
        no: "否",
        current_ra_label: "您目前持有哪些受规管活动的牌照？",
        former_license: "您过去是否曾持有证监会牌照？",
        years_absent: "您离开行业多长时间？",
        years: "年",
        years_absent_help: "以小数输入年月（例如：2年6个月 = 2.5）",
        cpt_preview_title: "预计所需持续培训时数：",
        hours_per_ra: "小时/每项受规管活动",
        cpt_note: "必须在提交申请前完成",
        former_ra_label: "您之前持有哪些受规管活动的牌照？",
        grandfather_label: "您是否在2022年1月1日之前持有牌照？",
        grandfather_info: "在2022年1月1日之前根据旧有选项三持牌的申请人，可根据经修订的《胜任能力的指引》获得过渡安排。",

        // Step 3
        s3_title: "第三步：资历及经验",
        s3_desc: "您的学历、专业资格及行业经验决定考试豁免。",
        academic_label: "最高学历",
        acad_none: "没有正式学历 / 无法提供证明",
        acad_secondary: "中学教育（香港中学会考/文凭试或同等学历）",
        acad_degree_other: "学士学位（其他领域）",
        acad_degree_relevant: "会计/工商管理/经济/金融/法律学士学位",
        acad_degree_courses: "学士学位（其他）并修读2门或以上相关课程",
        acad_masters: "相关领域硕士学位",
        acad_mba: "工商管理硕士 (MBA)",
        academic_info: "相关领域：会计、工商管理、经济、金融、财务管理、法律",
        prof_label: "专业资格（选择所有适用项目）",
        riq_exempt: "可豁免RIQ",
        may_qualify: "或可符合",
        exp_label: "行业经验",
        exp_8years: "过去8年内的相关经验：",
        exp_8years_help: "5年或以上可获RIQ豁免",
        exp_6years: "过去6年内的相关经验：",
        exp_6years_help: "负责人员需过去6年内有3年或以上经验",
        exp_mgmt: "管理/监督经验：",
        exp_mgmt_help: "负责人员需2年或以上管理至少1人的经验",
        pi_label: "您是否只服务专业投资者？",
        pi_info: "拥有8年或以上经验、只服务专业投资者的私募基金经理，可能符合第4.4.3.5段的特别豁免条件。",

        // Step 4
        s4_title: "第四步：考试记录",
        s4_desc: "选择过去3年内已通过的香港证券及投资学会资格考试试卷。",
        lrp_papers: "本地监管架构试卷 (LRP)",
        riq_papers: "认可行业资格试卷 (RIQ)",
        additional_papers: "额外胜任能力试卷",
        paper1: "证券及期货从业员资格考试基础",
        paper2: "证券规例",
        paper3: "衍生工具规例",
        paper4: "信贷评级服务规例",
        paper5: "机构融资规例",
        paper6: "资产管理规例",
        paper7: "金融市场",
        paper8: "证券",
        paper9: "衍生工具",
        paper10: "信贷评级服务",
        paper11: "机构融资",
        paper12: "资产管理",
        paper15: "保荐人（主事人）",
        paper16: "保荐人（代表）",
        paper17: "收购合并及股份回购规例",
        paper18: "存管服务规例",
        paper19: "集体投资计划存管服务",
        paper_validity: "考试成绩一般有效期为3年。如您在过去3年内曾持牌，超过3年的成绩仍可能获接纳。",

        // Buttons
        next: "下一步",
        back: "返回",
        calculate: "计算要求",
        start_over: "重新开始",

        // Results
        result_eligible: "您似乎符合申请牌照的资格",
        result_conditional: "有条件符合资格",
        result_not_eligible: "资格问题",
        result_no_exam: "无须考试",
        papers_required: "需要通过的试卷",
        papers_exempted: "获豁免的试卷",
        required: "需要",
        exempted: "豁免",
        summary: "摘要",
        papers_to_pass: "需通过试卷：",
        papers_exempt: "豁免试卷：",
        cpt_required: "所需持续培训时数（重新入行者）",
        cpt_calculation: "计算方式：5小时持续培训 × 离开年数（进位）× 每项受规管活动",

        // Footer
        disclaimer_title: "免责声明",
        disclaimer_text: "本计算器根据证监会《胜任能力的指引》(2024年10月) 提供一般指引。个别情况可能有所不同，证监会会按个案评估每项申请。如需了解正式要求，请直接咨询证监会。",
        resources: "资源",
        link_sfc: "证监会《胜任能力的指引》",
        link_hksi: "香港证券及投资学会资格考试",
        powered_by: "技术支持"
    }
};

// Current language
let currentLang = 'en';

// Apply translations
function applyTranslations(lang) {
    currentLang = lang;
    document.body.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' && el.type === 'text') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'OPTION') {
                el.textContent = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'tc' ? 'zh-TW' : lang === 'sc' ? 'zh-CN' : 'en';
}

// Get translation
function t(key) {
    return translations[currentLang] && translations[currentLang][key]
        ? translations[currentLang][key]
        : translations['en'][key] || key;
}

// Initialize language buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyTranslations(btn.getAttribute('data-lang'));
        });
    });
});
