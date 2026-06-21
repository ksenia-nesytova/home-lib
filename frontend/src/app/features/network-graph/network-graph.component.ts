import * as d3 from 'd3';
import { AfterViewInit, Component } from '@angular/core';
import { Selection, SimulationNodeDatum, SimulationLinkDatum } from 'd3';

interface Node extends SimulationNodeDatum {
  id: string;
  type: 'media' | 'tag';
}
interface Link extends SimulationLinkDatum<Node> {
  source: Node | string;
  target: Node | string;
}

@Component({
  selector: 'app-network-graph',
  imports: [],
  templateUrl: './network-graph.component.html',
  styleUrl: './network-graph.component.scss',
})
export class NetworkGraphComponent implements AfterViewInit {
  private svg!: Selection<SVGSVGElement, unknown, HTMLElement, unknown>;
  private width = 800;
  private height = 800;

  private data: { nodes: Node[]; links: Link[] } = {
    nodes: [
      { id: "Hugo's Hunchback of Notre Dame", type: 'media' },
      { id: 'Notre Dame de Paris', type: 'media' },
      { id: 'Julius Caesar (Person)', type: 'media' },
      { id: 'Julius Caesar (Play)', type: 'media' },
      { id: 'Paris', type: 'tag' },
    ],
    links: [
      // Links between media and tags
      {
        source: "Hugo's Hunchback of Notre Dame",
        target: 'Notre Dame de Paris',
      },
      { source: "Hugo's Hunchback of Notre Dame", target: 'Paris' },
      { source: 'Julius Caesar (Play)', target: 'Julius Caesar (Person)' },
      { source: 'Julius Caesar (Person)', target: 'Paris' },
      { source: 'Julius Caesar (Play)', target: 'Paris' },
    ],
  };

  ngAfterViewInit(): void {
    this.createSvg();
    this.drawGraph(this.data);
  }

  /* Create container for the graph */
  private createSvg(): void {
    this.svg = d3
      .select<HTMLElement, unknown>('#graph-container') // Type of container
      .append<SVGSVGElement>('svg') // Type of appended element
      .attr('width', this.width)
      .attr('height', this.height);
  }

  private drawGraph(data: { nodes: Array<any>; links: Array<any> }): void {
    const mediaX = this.width * 0.3;
    const tagX = this.width * 0.7;

    const mediaY = this.height * 0.45;
    const tagY = this.height * 0.55;

    const simulation = d3
      .forceSimulation<Node>(data.nodes)
      .force(
        'link',
        d3
          .forceLink<Node, Link>(data.links)
          .id((d) => d.id)
          .distance(120),
      )
      .force('charge', d3.forceManyBody().strength(-180))
      .force('center', d3.forceCenter(this.width / 2, this.height / 2))
      .force(
        'x',
        d3
          .forceX<Node>((d) => {
            return d.type === 'media' ? mediaX : tagX;
          })
          .strength(0.8),
      )

      .force(
        'y',
        d3
          .forceY<Node>((d) => {
            return d.type === 'media' ? mediaY : tagY;
          })
          .strength(0.15),
      );

    // Draw links (representing tags)
    const link = this.svg
      .selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
      .style('stroke', '#aaa');

    // Draw nodes (media items)
    const node = this.svg
      .selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('circle')
      .attr('r', 10)
      .style('fill', (d: any) => (d.type === 'media' ? '#ff7f0e' : '#1f77b4')); // Color for media nodes

    // Add labels for media nodes
    const label = this.svg
      .selectAll('text')
      .data(data.nodes)
      .enter()
      .append('text')
      .text((d: any) => d.id)
      .attr('x', 12)
      .attr('y', 3);

    // Update positions on tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d) => (d.source as Node).x!)
        .attr('y1', (d) => (d.source as Node).y!)
        .attr('x2', (d) => (d.target as Node).x!)
        .attr('y2', (d) => (d.target as Node).y!);

      node.attr('cx', (d) => d.x!).attr('cy', (d) => d.y!);

      label.attr('x', (d) => d.x! + 12).attr('y', (d) => d.y! + 4);

      node.call(
        d3
          .drag<SVGCircleElement, Node>()
          .on('start', (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }),
      );
    });
  }
}
