//highcharts.service.ts
import * as Highcharts from 'highcharts';
import { Injectable } from '@angular/core';

@Injectable()
export class HighchartsService {
  constructor() {
  }

  createChart(el, cfg) {
    Highcharts.chart(el, cfg);
  }
}
