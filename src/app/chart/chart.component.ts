// Задание 1:
// Используя предоставленную конфигурацию(вложение file1.ts) отобразите график на весь экран при открытии главной страницы приложения(localhost:4200)

import {Component, OnInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-chart',
  template: `
    <div id="chartdiv" class="box"></div>
  `,
  styles: [
    `
      .box {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `
  ]
})

export class ChartComponent implements OnInit {
  config = {
    data: [
      {'2018': 9, '2019': 9, category: 'Красный'},
      {'2018': 3, '2019': 3, category: 'Зеленый'},
      {'2018': 5, '2019': 5, category: 'Синий'},
      {'2018': 6, '2019': 6, category: 'Желтый'},
      {'2018': 7, '2019': 7, category: 'Коричневый'},
      {'2018': 11, '2019': 11, category: 'Розовый'},
      {'2018': 8, '2019': 8, category: 'Фиолетовый'},
      {'2018': 2, '2019': 2, category: 'Голубой'},
      {'2018': 5, '2019': 5, category: 'Белый'}
    ],
    series: [
      {
        stacked: true,
        type: 'ColumnSeries',
        name: '2018',
        dataFields: {
          valueY: '2018',
          categoryX: 'category'
        }
      },
      {
        stacked: true,
        type: 'ColumnSeries',
        name: '2019',
        dataFields: {
          valueY: '2019',
          categoryX: 'category'
        }
      }
    ],
    xAxes: [
      {
        type: 'CategoryAxis',
        dataFields: {
          category: 'category'
        }
      }
    ],
    yAxes: [
      {
        type: 'ValueAxis'
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
    am4core.createFromConfig(this.config, 'chartdiv', am4charts.XYChart);
  }
}
