const intel = require('intel');

intel.config({
    formatters: {
        'simple': {
            'format': '[%(date)s] [%(levelname)s] %(message)s',
            'colorize': true
        },
        'details': {
            'format': '[%(date)s] %(name)s.%(levelname)s: %(message)s',
            'strip': true
        }
    },
    handlers: {
        'terminal': {
            'class': intel.handlers.Console,
            'formatter': 'simple',
            'level': intel.VERBOSE
        },
        'logfileInfo': {
            'class': intel.handlers.File,
            'level': intel.INFO,
            'file': '../logger/logs/ReportInfo.log',
            'formatter': 'simple'
        },

        'logfileError': {
            'class': intel.handlers.File,
            'level': intel.ERROR,
            'file': '../logger/logs/ReportErrors.log',
            'formatter': 'details'

        }
    },
    loggers: {
        'info': {
            'handlers': ['logfileInfo'],
            'level': 'INFO',
            'handleExceptions': true,
            'exitOnError': false,
            'propagate': false
        },
        'errors': {
            'handlers': ['logfileError'],
            'level': intel.ERROR
        },
        'console': {
            'handlers': ['terminal'],
            'level': 'VERBOSE'
        }
    }
});

exports.intel = intel;
