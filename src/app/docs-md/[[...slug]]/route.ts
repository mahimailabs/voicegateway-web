import { getDocsPageMarkdown } from '../../../lib/docs-ai';
import { source } from '../../../lib/source';

export const dynamic = 'force-static';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(await getDocsPageMarkdown(page), {
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
    },
  });
}

export function generateStaticParams() {
  return source.generateParams();
}
