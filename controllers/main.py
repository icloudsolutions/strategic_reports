from odoo import http
from odoo.http import request


class StrategicReportController(http.Controller):
    
    @http.route('/strategic-report', type='http', auth='public', website=True)
    def strategic_report(self, **kwargs):
        """
        Display the strategic report page
        """
        return request.render('strategic_reports.strategic_report_template')