import generateHTMLPage from 'hint/dist/src/lib/utils/misc/generate-html-page';
import { getHintPath } from 'hint/dist/src/lib/utils/hint-helpers';
import { HintTest } from '@hint/utils-tests-helpers/dist/src/hint-test-type';
import * as hintRunner from '@hint/utils-tests-helpers/dist/src/hint-runner';

const hintPath = getHintPath(__filename);

const invalidSvgCreate = '';

const validSvgCreate = '';

const tests: HintTest[] = [
    {
        name: 'This test should pass',
        serverConfig: generateHTMLPage('', validSvgCreate)
    },
    {
        name: 'This test should fail',
        reports: [{ message: 'This should be your error message' }],
        serverConfig: generateHTMLPage('', invalidSvgCreate)
    }
];

hintRunner.testHint(hintPath, tests);
