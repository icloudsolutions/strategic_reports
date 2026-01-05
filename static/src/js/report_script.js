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

// Show Arabic version by default when page loads
document.addEventListener('DOMContentLoaded', function() {
    showReport('arabic');
});

// Make function available globally
window.showReport = showReport;