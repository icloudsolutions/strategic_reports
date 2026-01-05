/** @odoo-module **/

function showReport(language) {
    const arabicReport = document.getElementById('arabic-report');
    const englishReport = document.getElementById('english-report');

    if (language === 'arabic') {
        arabicReport.classList.add('active');
        englishReport.classList.remove('active');
    } else {
        englishReport.classList.add('active');
        arabicReport.classList.remove('active');
    }
}

// Add page numbers dynamically for print
function addPageNumbers() {
    const activeReport = document.querySelector('.report-content.active');
    if (!activeReport) return;

    // Remove existing page numbers
    const existingNumbers = activeReport.querySelectorAll('.page-number-print');
    existingNumbers.forEach(el => el.remove());

    // Add page number element
    const pageNumber = document.createElement('div');
    pageNumber.className = 'page-number-print';

    const isArabic = activeReport.classList.contains('arabic');
    pageNumber.style.cssText = `
        position: fixed;
        bottom: 10mm;
        ${isArabic ? 'left' : 'right'}: 15mm;
        font-size: 10pt;
        color: #4a5568;
        z-index: 9999;
    `;

    activeReport.appendChild(pageNumber);
}

function removePageNumbers() {
    const existingNumbers = document.querySelectorAll('.page-number-print');
    existingNumbers.forEach(el => el.remove());
}

// Show Arabic version by default when page loads
document.addEventListener('DOMContentLoaded', function() {
    showReport('arabic');

    // Add page numbers before print
    window.addEventListener('beforeprint', addPageNumbers);
    window.addEventListener('afterprint', removePageNumbers);
});

// Make function available globally
window.showReport = showReport;