{
    'name': 'Strategic Reports',
    'version': '19.0.1.0.0',
    'category': 'Website',
    'summary': 'Strategic Report for Odoo ERP Review',
    'description': """
        Strategic Report Module
        ========================
        This module adds a strategic report page to the website
        displaying the Odoo ERP review and recommendations.
    """,
    'author': 'Al-Tahtheeb Schools',
    'website': 'https://altahtheeb.cloud',
    'depends': ['website'],
    'data': [
        'views/strategic_report_template.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'strategic_reports/static/src/css/report_style.css',
            'strategic_reports/static/src/js/report_script.js',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}