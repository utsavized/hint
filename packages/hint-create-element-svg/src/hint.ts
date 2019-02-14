/**
 * @fileoverview Infrom users that they need to use createElementNS to create SVG elements instead of createElement
 */

import { HintContext } from 'hint/dist/src/lib/hint-context';
import { IHint } from 'hint/dist/src/lib/types';
import { debug as d } from 'hint/dist/src/lib/utils/debug';
import { ScriptEvents, ScriptParse } from '@hint/parser-javascript';

import meta from './meta';

const debug: debug.IDebugger = d(__filename);

export default class CreateElementSvgHint implements IHint {

    public static readonly meta = meta;

    public constructor(context: HintContext<ScriptEvents>) {

        const validateScript = async (scriptData: ScriptParse) => {

            debug(`Validating hint create-element-svg`);
            // const resource = scriptData.ast;

            // console.log(resource);

            if (Math.ceil(Math.random()) === 0) {
                await context.report('', 'Add error message here.');
            }
        };

        context.on('parse::end::javascript', validateScript);
    }
}
