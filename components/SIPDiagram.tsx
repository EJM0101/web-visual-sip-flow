import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type Message = string;

type SIPDiagramProps = {
  messages: Message[];
};

export default function SIPDiagram({ messages }: SIPDiagramProps) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const entities = ['UAC', 'Proxy', 'UAS'];
    const spacing = 800 / (entities.length + 1);

    entities.forEach((e, i) => {
      svg.append('text')
        .attr('x', spacing * (i + 1))
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .text(e);
    });

    const fullFlow = [
      ...messages.map((label, i) => ({
        from: 'UAC',
        to: 'Proxy',
        label,
        index: i * 2
      })),
      ...messages.map((label, i) => ({
        from: 'Proxy',
        to: 'UAS',
        label,
        index: i * 2 + 1
      }))
    ];

    fullFlow.forEach((m, i) => {
      const fromX = spacing * (entities.indexOf(m.from) + 1);
      const toX = spacing * (entities.indexOf(m.to) + 1);
      const y = 50 + i * 25;

      svg.append('line')
        .attr('x1', fromX)
        .attr('y1', y)
        .attr('x2', toX)
        .attr('y2', y)
        .attr('stroke', '#0070f3')
        .attr('marker-end', 'url(#arrow)')
        .attr('stroke-width', 2);

      svg.append('text')
        .attr('x', (fromX + toX) / 2)
        .attr('y', y - 5)
        .attr('text-anchor', 'middle')
        .text(m.label);
    });

    svg.append('defs').append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 10)
      .attr('refY', 0)
      .attr('markerWidth', 4)
      .attr('markerHeight', 4)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#0070f3');
  }, [messages]);

  return <svg ref={ref} width={800} height={300} className="mx-auto bg-white shadow rounded p-2" />;
}