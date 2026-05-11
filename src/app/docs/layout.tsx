import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '../../lib/source';
import 'fumadocs-ui/style.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} nav={{ title: 'VoiceGateway // DOCS' }}>
      {children}
    </DocsLayout>
  );
}
