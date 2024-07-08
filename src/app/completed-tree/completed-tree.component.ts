import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';

interface Node {
  name: string;
  date?: string;
  children?: Node[];
}
interface flatNode {
  expandable: boolean;
  name: string;
  level: number;
}
const TREE_DATA: Node[] = [
  {
    name: 'Completed',
    children: [{ name: 'ipsum' }],
  },
];

@Component({
  selector: 'app-completed-tree',
  standalone: true,
  imports: [MatTreeModule, MatIconModule, MatButtonModule],
  templateUrl: './completed-tree.component.html',
  styleUrl: './completed-tree.component.scss',
})
export class CompletedTreeComponent {
  private _transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<flatNode>(
    (node) => node.level,
    (node) => node.expandable
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: flatNode) => node.expandable;
}
