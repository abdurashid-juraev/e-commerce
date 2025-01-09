import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../component/header/header/header.component';
import { FooterComponent } from '../../component/footer/footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true,
          },
        ],
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true,
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true,
          },
        ],
      },
    ],
  },
];

const otherOptions: NzCascaderOption[] = [
  {
    value: 'fujian',
    label: 'Fujian',
    children: [
      {
        value: 'xiamen',
        label: 'Xiamen',
        children: [
          {
            value: 'Kulangsu',
            label: 'Kulangsu',
            isLeaf: true,
          },
        ],
      },
    ],
  },
  {
    value: 'guangxi',
    label: 'Guangxi',
    children: [
      {
        value: 'guilin',
        label: 'Guilin',
        children: [
          {
            value: 'Lijiang',
            label: 'Li Jiang River',
            isLeaf: true,
          },
        ],
      },
    ],
  },
];
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NzLayoutModule,
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    FormsModule,
    NzCascaderModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  nzOptions: NzCascaderOption[] | null = null;
  values: string[] | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.nzOptions = options;
    }, 100);
  }

  changeNzOptions(): void {
    if (this.nzOptions === options) {
      this.nzOptions = otherOptions;
    } else {
      this.nzOptions = options;
    }
  }

  onChanges(values: string): void {
    console.log(values, this.values);
  }
  log(): void {
    console.log('click dropdown button');
  }
}
