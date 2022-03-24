const assert = require('assert');
const testUtil = require('./test-util.js');

module.exports = eva => {
    assert.strictEqual(eva.eval(
        ['begin',
            ['var', 'x', 10],
            ['var', 'y', 20],
            ['+', ['*', 'x', 'y'], 30]
        ]
    ), 230);
    
    assert.strictEqual(eva.eval(
        ['begin',
    
            ['var', 'x', 10],
    
            ['begin',
                ['var', 'x', 20],
                'x'
            ],
    
            'x'
        ]
    ), 10);
    
    assert.strictEqual(eva.eval(
        ['begin',
    
            ['var', 'value', 10],
    
            ['var', 'result', ['begin',
                ['var', 'x', ['+', 'value', 10]],
                'x'
            ]],
    
            'result'
        ]
    ), 20);
    
    assert.strictEqual(eva.eval(
        ['begin',
    
            ['var', 'data', 10],
    
            ['begin',
                ['set', 'data', 20],
                'x'
            ],
    
            'data'
        ]
    ), 20);

    testUtil.test(eva, `
        (begin
            (var x 10)
            (var y 20)
            (+ (* x 10) y)
        )
    `, 120);
};
