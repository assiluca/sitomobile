import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import App from '../app/App';
import '../styles/fonts.css';
import '../styles/theme.css';
import '../styles/index.css';

export function mountReactApp(container: HTMLElement) {
  const root = createRoot(container);
  root.render(createElement(App));
  return root;
}
