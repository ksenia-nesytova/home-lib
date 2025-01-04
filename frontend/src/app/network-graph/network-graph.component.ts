/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Selection, SimulationNodeDatum, SimulationLinkDatum } from 'd3';

interface Node extends SimulationNodeDatum {
  id: string;
  group: number;
}
interface Link extends SimulationLinkDatum<Node> {
  source: string | Node;
  target: string | Node;
}

@Component({
  selector: 'app-network-graph',
  imports: [],
  templateUrl: './network-graph.component.html',
  styleUrl: './network-graph.component.scss'
})
export class NetworkGraphComponent implements OnInit {

  private svg!: Selection<SVGSVGElement, unknown, HTMLElement, unknown>;
  private width = 800;
  private height = 800;


  private data = {
    nodes: [
      { id: 'Hugo\'s Hunchback of Notre Dame', type: 'media' },
      { id: 'Notre Dame de Paris', type: 'media' },
      { id: 'Julius Caesar (Person)', type: 'media' },
      { id: 'Julius Caesar (Play)', type: 'media' },
      { id: 'Paris', type: 'tag' },
    ],
    links: [
      // Links between media and tags
      { source: 'Hugo\'s Hunchback of Notre Dame', target: 'Notre Dame de Paris' },
      { source: 'Hugo\'s Hunchback of Notre Dame', target: 'Paris' },
      { source: 'Julius Caesar (Play)', target: 'Julius Caesar (Person)' },
      { source: 'Julius Caesar (Person)', target: 'Paris' },
      { source: 'Julius Caesar (Play)', target: 'Paris' },
    ],
  };


  ngOnInit(): void {
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
    const simulation = d3
      .forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id((d: any) => d.id))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(this.width / 2, this.height / 2));

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
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);

      label
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y);
    });
  }
}

