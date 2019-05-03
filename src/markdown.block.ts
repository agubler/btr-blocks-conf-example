import * as fs from 'fs';
import { join } from 'path';
import { Converter } from 'showdown';
const highlight = require('showdown-highlight');

const mdConverter = new Converter({ extensions: [highlight] });

export default function() {
	const content = fs.readFileSync(join(__dirname, 'content', 'blog.md'), 'utf8');
	const html = mdConverter.makeHtml(content);
	return html;
}
