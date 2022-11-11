module.exports = {
    rules: {
        'specified-comment-with-task-id': require('./lib/rules/specified-comment-with-task-id'),
        'too-many-brand-check-call': require('./lib/rules/too-many-brand-check-call')
    },
    configs: {
        all: {
            rules: {
                'iungo/specified-comment-with-task-id': 2,
            },
        },
        'all-warn': {
            rules: {
                'iungo/specified-comment-with-task-id': 1,
            },
        },
        recommended: {
            rules: {
                'iungo/specified-comment-with-task-id': 1,
            },
        },
    }
};