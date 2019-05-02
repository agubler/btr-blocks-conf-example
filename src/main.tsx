import renderer from '@dojo/framework/widget-core/vdom';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';
import Block from '@dojo/framework/widget-core/meta/Block';

import markdown from './markdown.block';

class App extends WidgetBase {
	protected render() {
		const content = this.meta(Block).run(markdown)();

		return (
			<div>
				<div innerHTML={content} />
			</div>
		);
	}
}

const r = renderer(() => <App />);
r.mount({ domNode: document.getElementById('app')! });
