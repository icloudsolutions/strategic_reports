/** @odoo-module **/

function showReport(language) {
    const arabicReport = document.getElementById('arabic-report');
    const englishReport = document.getElementById('english-report');
    
    if (language === 'arabic') {
        arabicReport.style.display = 'block';
        englishReport.style.display = 'none';
    } else {
        englishReport.style.display = 'block';
        arabicReport.style.display = 'none';
    }
}

// Show Arabic version by default when page loads
document.addEventListener('DOMContentLoaded', function() {
    showReport('arabic');
});

// Make function available globally
window.showReport = showReport;