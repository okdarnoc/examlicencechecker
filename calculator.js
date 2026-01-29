// SFC Exam Calculator - Main Logic

// Ensure currentLang is defined
if (typeof currentLang === 'undefined') {
    var currentLang = 'en';
}

// Safe translation function
function safeT(key) {
    try {
        if (typeof t === 'function') {
            return t(key);
        }
        if (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang][key]) {
            return translations[currentLang][key];
        }
        return key;
    } catch (e) {
        return key;
    }
}

// Exam requirements mapping
const examRequirements = {
    RIQ: {
        '1': ['7', '8'], '2': ['7', '9'], '3': [], '4': ['7', '8'], '5': ['7', '9'],
        '6': ['7', '11'], '7': [], '8': ['7', '8'], '9': ['7', '12'], '10': ['7', '10'], '13': ['7', '19']
    },
    LRP_LR: {
        '1': ['1'], '2': ['1'], '3': [], '4': ['1'], '5': ['1'],
        '6': ['1'], '7': [], '8': ['1'], '9': ['1'], '10': ['1'], '13': ['1']
    },
    LRP_RO: {
        '1': ['1', '2'], '2': ['1', '3'], '3': [], '4': ['1', '2'], '5': ['1', '3'],
        '6': ['1', '5'], '7': [], '8': ['1', '2'], '9': ['1', '6'], '10': ['1', '4'], '13': ['1', '18']
    }
};

const paperNamesData = {
    en: {
        '1': 'Paper 1 - Fundamentals of Securities and Futures Regulation',
        '2': 'Paper 2 - Regulation of Securities',
        '3': 'Paper 3 - Regulation of Derivatives',
        '4': 'Paper 4 - Regulation of Credit Rating Services',
        '5': 'Paper 5 - Regulation of Corporate Finance',
        '6': 'Paper 6 - Regulation of Asset Management',
        '7': 'Paper 7 - Financial Markets',
        '8': 'Paper 8 - Securities',
        '9': 'Paper 9 - Derivatives',
        '10': 'Paper 10 - Credit Rating Services',
        '11': 'Paper 11 - Corporate Finance',
        '12': 'Paper 12 - Asset Management',
        '15': 'Paper 15 - Sponsors (Principals)',
        '16': 'Paper 16 - Sponsors (Representatives)',
        '17': 'Paper 17 - Takeovers and Share Buy-backs',
        '18': 'Paper 18 - Regulation of Depositary Services',
        '19': 'Paper 19 - Depositary Services for CISs'
    },
    tc: {
        '1': '卷一 - 證券及期貨從業員資格考試基礎',
        '2': '卷二 - 證券規例',
        '3': '卷三 - 衍生工具規例',
        '4': '卷四 - 信貸評級服務規例',
        '5': '卷五 - 機構融資規例',
        '6': '卷六 - 資產管理規例',
        '7': '卷七 - 金融市場',
        '8': '卷八 - 證券',
        '9': '卷九 - 衍生工具',
        '10': '卷十 - 信貸評級服務',
        '11': '卷十一 - 機構融資',
        '12': '卷十二 - 資產管理',
        '15': '卷十五 - 保薦人（主事人）',
        '16': '卷十六 - 保薦人（代表）',
        '17': '卷十七 - 收購合併及股份回購規例',
        '18': '卷十八 - 存管服務規例',
        '19': '卷十九 - 集體投資計劃存管服務'
    },
    sc: {
        '1': '卷一 - 证券及期货从业员资格考试基础',
        '2': '卷二 - 证券规例',
        '3': '卷三 - 衍生工具规例',
        '4': '卷四 - 信贷评级服务规例',
        '5': '卷五 - 机构融资规例',
        '6': '卷六 - 资产管理规例',
        '7': '卷七 - 金融市场',
        '8': '卷八 - 证券',
        '9': '卷九 - 衍生工具',
        '10': '卷十 - 信贷评级服务',
        '11': '卷十一 - 机构融资',
        '12': '卷十二 - 资产管理',
        '15': '卷十五 - 保荐人（主事人）',
        '16': '卷十六 - 保荐人（代表）',
        '17': '卷十七 - 收购合并及股份回购规例',
        '18': '卷十八 - 存管服务规例',
        '19': '卷十九 - 集体投资计划存管服务'
    }
};

function getPaperName(paper) {
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
    const names = paperNamesData[lang] || paperNamesData['en'];
    return names[paper] || `Paper ${paper}`;
}

function getLang() {
    return (typeof currentLang !== 'undefined') ? currentLang : 'en';
}

// Current step
let currentStep = 1;

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
});

function initializeEventListeners() {
    // Next buttons
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', () => {
            const nextStep = parseInt(btn.getAttribute('data-next'));
            if (validateStep(currentStep)) {
                goToStep(nextStep);
            }
        });
    });

    // Previous buttons
    document.querySelectorAll('.btn-prev').forEach(btn => {
        btn.addEventListener('click', () => {
            const prevStep = parseInt(btn.getAttribute('data-prev'));
            goToStep(prevStep);
        });
    });

    // Form submit
    const form = document.getElementById('calculatorForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            try {
                calculateRequirements();
            } catch (error) {
                console.error('Calculation error:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }

    // Restart button
    const restartBtn = document.querySelector('.btn-restart');
    if (restartBtn) {
        restartBtn.addEventListener('click', resetForm);
    }

    // RA Type change
    document.querySelectorAll('input[name="raType"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const type6Options = document.getElementById('type6Options');
            const ra3Warning = document.getElementById('ra3Warning');
            if (type6Options) type6Options.style.display = this.value === '6' ? 'block' : 'none';
            if (ra3Warning) ra3Warning.style.display = this.value === '3' ? 'block' : 'none';
        });
    });

    // Current license change
    document.querySelectorAll('input[name="currentLicense"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const currentRAGroup = document.getElementById('currentRAGroup');
            const formerLicenseGroup = document.getElementById('formerLicenseGroup');
            const yearsAbsentGroup = document.getElementById('yearsAbsentGroup');
            const formerRAGroup = document.getElementById('formerRAGroup');
            const grandfatherGroup = document.getElementById('grandfatherGroup');

            if (currentRAGroup) currentRAGroup.style.display = this.value === 'yes' ? 'block' : 'none';
            if (formerLicenseGroup) formerLicenseGroup.style.display = this.value === 'no' ? 'block' : 'none';
            if (this.value === 'yes') {
                if (yearsAbsentGroup) yearsAbsentGroup.style.display = 'none';
                if (formerRAGroup) formerRAGroup.style.display = 'none';
                if (grandfatherGroup) grandfatherGroup.style.display = 'none';
            }
        });
    });

    // Former license change
    document.querySelectorAll('input[name="formerLicense"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const show = this.value === 'yes';
            const yearsAbsentGroup = document.getElementById('yearsAbsentGroup');
            const formerRAGroup = document.getElementById('formerRAGroup');
            const grandfatherGroup = document.getElementById('grandfatherGroup');

            if (yearsAbsentGroup) yearsAbsentGroup.style.display = show ? 'block' : 'none';
            if (formerRAGroup) formerRAGroup.style.display = show ? 'block' : 'none';
            if (grandfatherGroup) grandfatherGroup.style.display = show ? 'block' : 'none';
        });
    });

    // Years absent change - CPT preview
    const yearsAbsentInput = document.getElementById('yearsAbsent');
    if (yearsAbsentInput) {
        yearsAbsentInput.addEventListener('input', function() {
            const years = parseFloat(this.value) || 0;
            const cptPreview = document.getElementById('cptPreview');
            const cptValue = document.getElementById('cptPreviewValue');

            if (cptPreview && cptValue) {
                if (years >= 3 && years <= 8) {
                    cptPreview.style.display = 'block';
                    cptValue.textContent = Math.ceil(years) * 5;
                } else {
                    cptPreview.style.display = 'none';
                }
            }
        });
    }
}

function validateStep(step) {
    // For step 4, no required fields - just allow submission
    if (step === 4) return true;

    const section = document.getElementById(`section${step}`);
    if (!section) return true;

    // Check radio buttons for steps 1
    if (step === 1) {
        const roleChecked = document.querySelector('input[name="role"]:checked');
        const raChecked = document.querySelector('input[name="raType"]:checked');
        if (!roleChecked || !raChecked) {
            const lang = getLang();
            alert(lang === 'en' ? 'Please select a role and regulated activity.' :
                  lang === 'tc' ? '請選擇角色及受規管活動。' : '请选择角色及受规管活动。');
            return false;
        }
    }

    return true;
}

function goToStep(step) {
    // Hide current section
    document.querySelectorAll('.form-section').forEach(s => s.classList.remove('active'));

    // Show new section
    const newSection = document.getElementById(`section${step}`);
    if (newSection) newSection.classList.add('active');

    // Update progress bar
    document.querySelectorAll('.progress-step').forEach((s, i) => {
        const stepNum = i + 1;
        s.classList.remove('active', 'completed');
        if (stepNum < step) s.classList.add('completed');
        if (stepNum === step) s.classList.add('active');
    });

    document.querySelectorAll('.progress-line').forEach((line, i) => {
        line.classList.toggle('completed', i < step - 1);
    });

    currentStep = step;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function calculateRequirements() {
    const lang = getLang();

    // Gather inputs with safe defaults
    const roleEl = document.querySelector('input[name="role"]:checked');
    const raTypeEl = document.querySelector('input[name="raType"]:checked');

    const role = roleEl ? roleEl.value : 'LR';
    const raType = raTypeEl ? raTypeEl.value : '1';

    const currentLicenseEl = document.querySelector('input[name="currentLicense"]:checked');
    const currentLicense = currentLicenseEl ? currentLicenseEl.value : 'no';

    const formerLicenseEl = document.querySelector('input[name="formerLicense"]:checked');
    const formerLicense = formerLicenseEl ? formerLicenseEl.value : 'no';

    const yearsAbsentEl = document.getElementById('yearsAbsent');
    const yearsAbsent = yearsAbsentEl ? (parseFloat(yearsAbsentEl.value) || 0) : 0;

    const academicQualEl = document.getElementById('academicQual');
    const academicQual = academicQualEl ? academicQualEl.value : 'none';

    const industryExpEl = document.getElementById('industryExp');
    const industryExp = industryExpEl ? (parseFloat(industryExpEl.value) || 0) : 0;

    const industryExp6El = document.getElementById('industryExp6');
    const industryExp6 = industryExp6El ? (parseFloat(industryExp6El.value) || 0) : 0;

    const managementExpEl = document.getElementById('managementExp');
    const managementExp = managementExpEl ? (parseFloat(managementExpEl.value) || 0) : 0;

    const professionalInvestorEl = document.querySelector('input[name="professionalInvestor"]:checked');
    const professionalInvestor = professionalInvestorEl ? professionalInvestorEl.value : 'no';

    const grandfatherEl = document.querySelector('input[name="grandfather"]:checked');
    const grandfather = grandfatherEl ? grandfatherEl.value : 'no';

    const profQuals = Array.from(document.querySelectorAll('input[name="profQual"]:checked')).map(cb => cb.value);
    const currentRAs = Array.from(document.querySelectorAll('input[name="currentRA"]:checked')).map(cb => cb.value);
    const formerRAs = Array.from(document.querySelectorAll('input[name="formerRA"]:checked')).map(cb => cb.value);
    const passedPapers = Array.from(document.querySelectorAll('input[name="passedPapers"]:checked')).map(cb => cb.value);
    const sponsorTypes = Array.from(document.querySelectorAll('input[name="sponsorType"]:checked')).map(cb => cb.value);

    // Calculate results
    let eligibility = { eligible: true, reasons: [], warnings: [] };
    let requiredPapers = [];
    let exemptedPapers = [];
    let cptHours = 0;
    let notes = [];

    // Special case: Type 7
    if (raType === '7') {
        notes.push(lang === 'en' ?
            'Type 7 (Providing Automated Trading Services) has no RIQ or LRP requirements.' :
            lang === 'tc' ?
            '第7類（提供自動化交易服務）沒有RIQ或LRP要求。' :
            '第7类（提供自动化交易服务）没有RIQ或LRP要求。');
    }
    // Special case: Type 3
    else if (raType === '3') {
        eligibility.warnings.push(lang === 'en' ?
            'Type 3 (Leveraged Foreign Exchange Trading) is not covered by HKSI examinations. Please consult SFC directly.' :
            lang === 'tc' ?
            '第3類（槓桿式外匯交易）不包括在香港證券及投資學會考試範圍內。請直接諮詢證監會。' :
            '第3类（杠杆式外汇交易）不包括在香港证券及投资学会考试范围内。请直接咨询证监会。');
    }
    else {
        // Determine required papers
        const lrpPapers = role === 'RO' ? (examRequirements.LRP_RO[raType] || []) : (examRequirements.LRP_LR[raType] || []);
        const riqPapers = examRequirements.RIQ[raType] || [];

        // Check RIQ exemption
        let riqExempt = false;
        let riqExemptReason = '';

        if (['degreeRelevant', 'masters', 'mba'].includes(academicQual)) {
            riqExempt = true;
            riqExemptReason = lang === 'en' ? 'Relevant degree qualification' :
                              lang === 'tc' ? '相關學位資格' : '相关学位资格';
        }

        if (academicQual === 'degreeRelevantCourses' && industryExp6 >= 3 && managementExp >= 2) {
            riqExempt = true;
            riqExemptReason = lang === 'en' ? 'Degree with relevant courses + experience' :
                              lang === 'tc' ? '學位（相關課程）+ 經驗' : '学位（相关课程）+ 经验';
        }

        if (profQuals.some(q => ['CFA', 'CIIA', 'CFP'].includes(q))) {
            riqExempt = true;
            riqExemptReason = lang === 'en' ? 'Professional qualification (CFA/CIIA/CFP)' :
                              lang === 'tc' ? '專業資格 (CFA/CIIA/CFP)' : '专业资格 (CFA/CIIA/CFP)';
        }

        if (industryExp >= 5) {
            riqExempt = true;
            riqExemptReason = lang === 'en' ? '5+ years industry experience in past 8 years' :
                              lang === 'tc' ? '過去8年內5年或以上行業經驗' : '过去8年内5年或以上行业经验';
        }

        if (professionalInvestor === 'yes' && industryExp >= 8 && raType === '9') {
            riqExempt = true;
            riqExemptReason = lang === 'en' ? '8+ years (private fund manager - PI only)' :
                              lang === 'tc' ? '8年或以上經驗（私募基金經理）' : '8年或以上经验（私募基金经理）';
        }

        if (currentLicense === 'yes' && currentRAs.includes(raType)) {
            riqExempt = true;
            riqExemptReason = lang === 'en' ? 'Currently licensed for same RA' :
                              lang === 'tc' ? '目前持有相同牌照' : '目前持有相同牌照';
        }

        // Check LRP exemption
        let lrpExempt = false;
        let lrpExemptReason = '';

        if (currentLicense === 'yes' && currentRAs.includes(raType)) {
            lrpExempt = true;
            lrpExemptReason = lang === 'en' ? 'Currently licensed for same RA' :
                              lang === 'tc' ? '目前持有相同牌照' : '目前持有相同牌照';
        }

        if (formerLicense === 'yes' && yearsAbsent < 3 && formerRAs.includes(raType)) {
            lrpExempt = true;
            riqExempt = true;
            const reason = lang === 'en' ? 'Former licensee within 3 years' :
                          lang === 'tc' ? '3年內曾持牌' : '3年内曾持牌';
            lrpExemptReason = reason;
            riqExemptReason = reason;
        }

        if (formerLicense === 'yes' && yearsAbsent >= 3 && yearsAbsent <= 8 && formerRAs.includes(raType)) {
            cptHours = Math.ceil(yearsAbsent) * 5;
            lrpExempt = true;
            riqExempt = true;
            const reason = lang === 'en' ? `Former licensee - CPT required` :
                          lang === 'tc' ? `曾持牌 - 需完成持續培訓` : `曾持牌 - 需完成持续培训`;
            lrpExemptReason = reason;
            riqExemptReason = reason;
        }

        if (formerLicense === 'yes' && yearsAbsent > 8) {
            notes.push(lang === 'en' ?
                'You have been out of the industry for more than 8 years - no re-entrant exemptions available.' :
                lang === 'tc' ?
                '您已離開行業超過8年，不符合重新入行豁免資格。' :
                '您已离开行业超过8年，不符合重新入行豁免资格。');
        }

        // Build required papers list - RIQ
        riqPapers.forEach(paper => {
            if (passedPapers.includes(paper)) {
                exemptedPapers.push({
                    paper,
                    reason: lang === 'en' ? 'Already passed' : lang === 'tc' ? '已通過' : '已通过'
                });
            } else if (riqExempt) {
                exemptedPapers.push({ paper, reason: riqExemptReason });
            } else {
                requiredPapers.push({ paper, type: 'RIQ' });
            }
        });

        // Build required papers list - LRP
        lrpPapers.forEach(paper => {
            if (paper === '1') {
                if (passedPapers.includes('1')) {
                    exemptedPapers.push({
                        paper: '1',
                        reason: lang === 'en' ? 'Already passed' : lang === 'tc' ? '已通過' : '已通过'
                    });
                } else if (currentLicense === 'yes') {
                    exemptedPapers.push({
                        paper: '1',
                        reason: lang === 'en' ? 'Currently licensed' : lang === 'tc' ? '目前持牌' : '目前持牌'
                    });
                } else if (lrpExempt && yearsAbsent < 3) {
                    exemptedPapers.push({ paper: '1', reason: lrpExemptReason });
                } else {
                    requiredPapers.push({
                        paper: '1',
                        type: 'LRP',
                        note: lang === 'en' ? 'Mandatory' : lang === 'tc' ? '必考' : '必考'
                    });
                }
            } else {
                if (passedPapers.includes(paper)) {
                    exemptedPapers.push({
                        paper,
                        reason: lang === 'en' ? 'Already passed' : lang === 'tc' ? '已通過' : '已通过'
                    });
                } else if (lrpExempt) {
                    exemptedPapers.push({ paper, reason: lrpExemptReason });
                } else {
                    requiredPapers.push({ paper, type: 'LRP' });
                }
            }
        });

        // Type 6 additional papers
        if (raType === '6') {
            if (sponsorTypes.includes('sponsor') && role === 'RO') {
                if (!passedPapers.includes('15')) {
                    requiredPapers.push({ paper: '15', type: 'Additional' });
                }
            }
            if (sponsorTypes.includes('sponsorRep') && role === 'LR') {
                if (!passedPapers.includes('16')) {
                    requiredPapers.push({ paper: '16', type: 'Additional' });
                }
            }
            if (sponsorTypes.includes('takeovers')) {
                if (!passedPapers.includes('17')) {
                    requiredPapers.push({ paper: '17', type: 'Additional' });
                }
            }
        }
    }

    // Check eligibility
    if (academicQual === 'none' && currentLicense !== 'yes' && !(formerLicense === 'yes' && grandfather === 'yes')) {
        eligibility.eligible = false;
        eligibility.reasons.push(lang === 'en' ?
            'Minimum academic qualification required. Grandfathering may apply if licensed before January 2022.' :
            lang === 'tc' ?
            '需要最低學歷要求。如2022年1月之前持牌，可能適用過渡安排。' :
            '需要最低学历要求。如2022年1月之前持牌，可能适用过渡安排。');
    }

    if (role === 'RO') {
        if (industryExp6 < 3) {
            eligibility.warnings.push(lang === 'en' ?
                `ROs typically need 3+ years experience in past 6 years. You indicated ${industryExp6} years.` :
                lang === 'tc' ?
                `負責人員通常需要過去6年內有3年或以上經驗。您輸入了${industryExp6}年。` :
                `负责人员通常需要过去6年内有3年或以上经验。您输入了${industryExp6}年。`);
        }
        if (managementExp < 2) {
            eligibility.warnings.push(lang === 'en' ?
                `ROs need 2+ years management experience. You indicated ${managementExp} years.` :
                lang === 'tc' ?
                `負責人員需要2年或以上管理經驗。您輸入了${managementExp}年。` :
                `负责人员需要2年或以上管理经验。您输入了${managementExp}年。`);
        }
    }

    displayResults(eligibility, requiredPapers, exemptedPapers, cptHours, notes, role, raType);
}

function displayResults(eligibility, requiredPapers, exemptedPapers, cptHours, notes, role, raType) {
    const lang = getLang();

    // Hide form, show results
    const form = document.getElementById('calculatorForm');
    const resultsSection = document.getElementById('resultsSection');

    if (form) form.style.display = 'none';
    if (resultsSection) resultsSection.style.display = 'block';

    // Update progress
    goToStep(5);

    let html = '';

    // Special cases: Type 7 or Type 3
    if (raType === '7' || raType === '3') {
        const isType7 = raType === '7';
        html += `
            <div class="result-card">
                <div class="result-header ${isType7 ? 'eligible' : 'warning'}">
                    <span class="result-icon">${isType7 ? '✓' : '⚠️'}</span>
                    <span class="result-title">${isType7 ?
                        (lang === 'en' ? 'No Examination Required' : lang === 'tc' ? '無須考試' : '无须考试') :
                        (lang === 'en' ? 'Special Case - Type 3' : lang === 'tc' ? '特殊情況 - 第3類' : '特殊情况 - 第3类')}</span>
                </div>
                <div class="result-body">
                    ${notes.length ? `<p>${notes.join('<br>')}</p>` : ''}
                    ${eligibility.warnings.length ? `<p style="margin-top:15px;color:#856404;">${eligibility.warnings.join('<br>')}</p>` : ''}
                </div>
            </div>
        `;
    } else {
        // Eligibility status
        const statusClass = !eligibility.eligible ? 'not-eligible' :
                           eligibility.warnings.length ? 'warning' : 'eligible';
        const statusIcon = !eligibility.eligible ? '✗' : eligibility.warnings.length ? '⚠️' : '✓';

        let statusTitle;
        if (!eligibility.eligible) {
            statusTitle = lang === 'en' ? 'Eligibility Concerns' : lang === 'tc' ? '資格問題' : '资格问题';
        } else if (eligibility.warnings.length) {
            statusTitle = lang === 'en' ? 'Conditional Eligibility' : lang === 'tc' ? '有條件符合資格' : '有条件符合资格';
        } else {
            statusTitle = lang === 'en' ? 'You appear to be eligible' : lang === 'tc' ? '您似乎符合資格' : '您似乎符合资格';
        }

        html += `
            <div class="result-card">
                <div class="result-header ${statusClass}">
                    <span class="result-icon">${statusIcon}</span>
                    <span class="result-title">${statusTitle}</span>
                </div>
                <div class="result-body">
                    ${eligibility.reasons.length ? `<ul>${eligibility.reasons.map(r => `<li>${r}</li>`).join('')}</ul>` : ''}
                    ${eligibility.warnings.length ? `<ul style="color:#856404;">${eligibility.warnings.map(w => `<li>${w}</li>`).join('')}</ul>` : ''}
                    ${!eligibility.reasons.length && !eligibility.warnings.length ?
                        `<p>${lang === 'en' ? `You meet the basic eligibility criteria for ${role} for Type ${raType}.` :
                              lang === 'tc' ? `您符合第${raType}類${role === 'RO' ? '負責人員' : '持牌代表'}的基本資格要求。` :
                              `您符合第${raType}类${role === 'RO' ? '负责人员' : '持牌代表'}的基本资格要求。`}</p>` : ''}
                </div>
            </div>
        `;

        // Required Papers
        if (requiredPapers.length > 0) {
            const papersTitle = lang === 'en' ? 'Papers You Need to Pass' : lang === 'tc' ? '需要通過的試卷' : '需要通过的试卷';
            const requiredText = lang === 'en' ? 'Required' : lang === 'tc' ? '需要' : '需要';

            html += `
                <div class="result-card">
                    <div class="result-header" style="background:linear-gradient(135deg,#ffcdd2 0%,#ffebee 100%);">
                        <span class="result-icon">📝</span>
                        <span class="result-title">${papersTitle}</span>
                    </div>
                    <div class="result-body">
                        <ul class="exam-list">
                            ${requiredPapers.map(p => `
                                <li class="exam-item">
                                    <div>
                                        <div class="exam-name">${getPaperName(p.paper)}</div>
                                        <div class="exam-reason">${p.type}${p.note ? ' - ' + p.note : ''}</div>
                                    </div>
                                    <span class="badge badge-required">${requiredText}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }

        // Exempted Papers
        if (exemptedPapers.length > 0) {
            const exemptTitle = lang === 'en' ? 'Papers You Are Exempt From' : lang === 'tc' ? '獲豁免的試卷' : '获豁免的试卷';
            const exemptText = lang === 'en' ? 'Exempt' : lang === 'tc' ? '豁免' : '豁免';

            html += `
                <div class="result-card">
                    <div class="result-header eligible">
                        <span class="result-icon">✓</span>
                        <span class="result-title">${exemptTitle}</span>
                    </div>
                    <div class="result-body">
                        <ul class="exam-list">
                            ${exemptedPapers.map(p => `
                                <li class="exam-item exempted">
                                    <div>
                                        <div class="exam-name">${getPaperName(p.paper)}</div>
                                        <div class="exam-reason">${p.reason}</div>
                                    </div>
                                    <span class="badge badge-exempted">${exemptText}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }

        // CPT Hours
        if (cptHours > 0) {
            const cptTitle = lang === 'en' ? 'CPT Hours Required' : lang === 'tc' ? '所需持續培訓時數' : '所需持续培训时数';
            const cptNote = lang === 'en' ? 'Must be completed BEFORE submitting application' :
                           lang === 'tc' ? '必須在提交申請前完成' : '必须在提交申请前完成';

            html += `
                <div class="result-card">
                    <div class="result-header warning">
                        <span class="result-icon">⏰</span>
                        <span class="result-title">${cptTitle}</span>
                    </div>
                    <div class="result-body">
                        <div style="text-align:center;padding:20px;">
                            <div style="font-size:3rem;font-weight:700;color:#ED1C24;">${cptHours}</div>
                            <div style="font-size:1.1rem;color:#666;">${lang === 'en' ? 'hours per RA' : lang === 'tc' ? '小時/每項受規管活動' : '小时/每项受规管活动'}</div>
                        </div>
                        <p style="text-align:center;color:#856404;">${cptNote}</p>
                    </div>
                </div>
            `;
        }

        // Summary
        const summaryTitle = lang === 'en' ? 'Summary' : lang === 'tc' ? '摘要' : '摘要';
        const papersToPass = lang === 'en' ? 'Papers to pass:' : lang === 'tc' ? '需通過試卷：' : '需通过试卷：';
        const papersExempt = lang === 'en' ? 'Papers exempt:' : lang === 'tc' ? '豁免試卷：' : '豁免试卷：';

        html += `
            <div class="result-card">
                <div class="result-header info">
                    <span class="result-icon">📊</span>
                    <span class="result-title">${summaryTitle}</span>
                </div>
                <div class="result-body">
                    <div class="summary-box">
                        <div class="summary-row">
                            <span>${papersToPass}</span>
                            <span style="font-weight:700;color:${requiredPapers.length > 0 ? '#ED1C24' : '#28a745'};">${requiredPapers.length}</span>
                        </div>
                        <div class="summary-row">
                            <span>${papersExempt}</span>
                            <span style="font-weight:700;color:#28a745;">${exemptedPapers.length}</span>
                        </div>
                        ${cptHours > 0 ? `
                        <div class="summary-row">
                            <span>CPT Hours:</span>
                            <span style="font-weight:700;color:#ffc107;">${cptHours}</span>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        // Notes
        if (notes.length > 0) {
            const notesTitle = lang === 'en' ? 'Additional Notes' : lang === 'tc' ? '其他注意事項' : '其他注意事项';
            html += `
                <div class="result-card">
                    <div class="result-header info">
                        <span class="result-icon">📌</span>
                        <span class="result-title">${notesTitle}</span>
                    </div>
                    <div class="result-body">
                        <ul>${notes.map(n => `<li>${n}</li>`).join('')}</ul>
                    </div>
                </div>
            `;
        }
    }

    const resultsContent = document.getElementById('resultsContent');
    if (resultsContent) {
        resultsContent.innerHTML = html;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetForm() {
    const form = document.getElementById('calculatorForm');
    const resultsSection = document.getElementById('resultsSection');
    const resultsContent = document.getElementById('resultsContent');

    if (form) {
        form.reset();
        form.style.display = 'block';
    }
    if (resultsSection) resultsSection.style.display = 'none';
    if (resultsContent) resultsContent.innerHTML = '';

    // Reset visibility
    const elements = {
        'currentRAGroup': 'none',
        'formerLicenseGroup': 'block',
        'yearsAbsentGroup': 'none',
        'formerRAGroup': 'none',
        'grandfatherGroup': 'none',
        'type6Options': 'none',
        'ra3Warning': 'none',
        'cptPreview': 'none'
    };

    for (const [id, display] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.style.display = display;
    }

    goToStep(1);
}
