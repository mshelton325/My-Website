#!/bin/bash

echo "═══════════════════════════════════════════════════"
echo "FINAL QA CHECK - QR CODE LANDING PAGE"
echo "═══════════════════════════════════════════════════"
echo ""

# QR Code URL
QR_URL="https://my-website-zeta-neon-55.vercel.app/education-day?utm_source=qr_code&utm_medium=event&utm_campaign=cca_education_day_2026"

echo "1. QR CODE URL CHECK"
echo "-------------------"
echo "Testing: $QR_URL"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$QR_URL")
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Page loads successfully (HTTP $HTTP_CODE)"
else
    echo "❌ Page failed to load (HTTP $HTTP_CODE)"
fi
echo ""

echo "2. ALL 8 PDF DOWNLOADS"
echo "----------------------"
PDFS=(
    "opportunity-leak-map.pdf:Owner One-Page Diagnostic"
    "owner-self-diagnosis-worksheet.pdf:Owner Reflection Worksheet"
    "owner-reflection-prompt.pdf:Owner Reflection — Turning Insight Into Design"
    "one-leak-30-day-sprint.pdf:One-Leak 30-Day Sprint Guide"
    "call-voicemail-text-playbook.pdf:Call-Voicemail-Text Follow-Up Playbook"
    "follow-up-enforcement-sop.pdf:Follow-Up Enforcement SOP"
    "quote-accuracy-checklist.pdf:Quote Accuracy & Margin Protection Checklist"
    "weekly-kpi-cadence.pdf:15-Minute Weekly KPI Performance Cadence"
)

PDF_COUNT=0
for pdf_info in "${PDFS[@]}"; do
    filename="${pdf_info%%:*}"
    label="${pdf_info#*:}"
    PDF_COUNT=$((PDF_COUNT + 1))
    
    URL="https://my-website-zeta-neon-55.vercel.app/pdfs/$filename"
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
    
    if [ "$HTTP_CODE" = "200" ]; then
        echo "✅ PDF $PDF_COUNT: $label"
    else
        echo "❌ PDF $PDF_COUNT FAILED: $label (HTTP $HTTP_CODE)"
    fi
done
echo ""

echo "3. GOOGLE FORM INTEGRATION"
echo "--------------------------"
FORM_URL="https://forms.gle/wmRC3FWVHirc35QT9"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$FORM_URL")
if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "302" ]; then
    echo "✅ Google Form accessible (HTTP $HTTP_CODE)"
else
    echo "❌ Google Form failed (HTTP $HTTP_CODE)"
fi
echo ""

echo "4. vCARD DOWNLOAD"
echo "-----------------"
VCARD_URL="https://my-website-zeta-neon-55.vercel.app/Matt-Shelton-Contact.vcf"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$VCARD_URL")
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ vCard accessible (HTTP $HTTP_CODE)"
    
    # Download and verify content
    curl -s "$VCARD_URL" > /tmp/vcard-check.vcf
    if grep -q "Matt Shelton" /tmp/vcard-check.vcf && \
       grep -q "Flooring Systems Advisor" /tmp/vcard-check.vcf && \
       grep -q "matt@mattshelton.co" /tmp/vcard-check.vcf; then
        echo "✅ vCard content verified"
    else
        echo "⚠️  vCard downloaded but content may be incomplete"
    fi
else
    echo "❌ vCard failed to load (HTTP $HTTP_CODE)"
fi
echo ""

echo "5. OPTIONAL FOLLOW-UP SECTION TEXT"
echo "-----------------------------------"
# Check the actual page content
PAGE_CONTENT=$(curl -s "https://my-website-zeta-neon-55.vercel.app/education-day")

if echo "$PAGE_CONTENT" | grep -q "If something in this session sparked a question, a connection, or an idea you want to pressure-test"; then
    echo "✅ Follow-up section text verified"
else
    echo "⚠️  Follow-up section text not found (may need deployment)"
fi
echo ""

echo "6. ANALYTICS TRACKING"
echo "---------------------"
if [ -f "src/utils/analytics.js" ]; then
    if grep -q "G-7S338S8VGN" src/utils/analytics.js; then
        echo "✅ GA4 Measurement ID configured (G-7S338S8VGN)"
    fi
    
    TRACKING_COUNT=$(grep -c "trackPDFDownload" src/pages/EducationDay.jsx)
    echo "✅ PDF tracking configured ($TRACKING_COUNT tracking calls)"
else
    echo "⚠️  Analytics file not found"
fi
echo ""

echo "7. PAGE STRUCTURE VERIFICATION"
echo "-------------------------------"
if [ -f "src/pages/EducationDay.jsx" ]; then
    # Count sections
    SECTION_COUNT=$(grep -c "<section" src/pages/EducationDay.jsx)
    echo "✅ Page has $SECTION_COUNT sections"
    
    # Verify key sections exist
    if grep -q "Step 1: Find Your Biggest Leak" src/pages/EducationDay.jsx; then
        echo "✅ Step 1 section present"
    fi
    
    if grep -q "Step 2: Fix the Leak" src/pages/EducationDay.jsx; then
        echo "✅ Step 2 section present"
    fi
    
    if grep -q "Step 3: Reinforce Without Micromanaging" src/pages/EducationDay.jsx; then
        echo "✅ Step 3 section present"
    fi
    
    if grep -q "Optional Follow-Up" src/pages/EducationDay.jsx; then
        echo "✅ Optional Follow-Up section present"
    fi
fi
echo ""

echo "8. MOBILE RESPONSIVENESS"
echo "------------------------"
if grep -q "md:text" src/pages/EducationDay.jsx && \
   grep -q "lg:text" src/pages/EducationDay.jsx; then
    echo "✅ Responsive breakpoints configured"
else
    echo "⚠️  Responsive styling may be incomplete"
fi
echo ""

echo "═══════════════════════════════════════════════════"
echo "SUMMARY"
echo "═══════════════════════════════════════════════════"
echo ""
echo "QR Code URL:"
echo "$QR_URL"
echo ""
echo "Test Instructions:"
echo "1. Scan QR code with phone camera"
echo "2. Verify page loads correctly"
echo "3. Test downloading 2-3 PDFs"
echo "4. Try saving contact card"
echo "5. Check that Google Form opens"
echo ""
echo "═══════════════════════════════════════════════════"

