
import { isValidBrackets } from './bracketValidator';
import { customSort } from './customSort';
import { autocomplete } from './autocomplete';
import { intToRoman, romanToInt } from './romanNumerals';
import { descendingOrder } from './descendingOrder';
import { tribonacci } from './tribonacci';

// Helper function for testing
function test(
    name: string,
    actual: unknown,
    expected: unknown
): void {
    const passed = JSON.stringify(actual) === JSON.stringify(expected);

    console.log(
        `${passed ? '✅ PASS' : '❌ FAIL'} | ${name}`
    );
    console.log('Function Output:  ', actual);
    console.log('Expected:', expected);

}

// 1. Bracket Validator
test('Bracket Validator', isValidBrackets('([{}])'), true);
test('Invalid Brackets', isValidBrackets('([)]'), false);

// 2. Custom Sort
test(
    'Custom Sort',
    customSort(['TH19', 'SG20', 'TH2']),
    ['SG20', 'TH2', 'TH19']
);

// 3. Autocomplete
test(
    'Autocomplete',
    autocomplete(
        'th',
        ['Mother', 'Think', 'Worthy', 'Apple', 'Android'],
        2
    ),
    ['Think', 'Mother']
);

// 4. Roman Numerals
test('Integer to Roman', intToRoman(1989), 'MCMLXXXIX');
test('Roman to Integer', romanToInt('MCMLXXXIX'), 1989);

// 5. Descending Order
test('Descending Order', descendingOrder(1989), 9981);

// 6. Tribonacci
test(
    'Tribonacci',
    tribonacci([1, 1, 1], 6),
    [1, 1, 1, 3, 5, 9]
);
