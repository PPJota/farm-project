import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { FarmApiService } from 'src/app/service/farm-api.service';

@Component({
  selector: 'app-species-chart',
  templateUrl: './species-chart.component.html',
  styleUrls: ['./species-chart.component.css']
})
export class SpeciesChartComponent implements OnInit {

  title = 'Animals by Species Chart';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels: string[] = [];
  public pieChartDatasets: any = [];
  public pieChartLegend = false;
  public pieChartPlugins = [];

  constructor(private farmApi: FarmApiService) { }

  ngOnInit(): void {
    let data: number[] = [];
    this.farmApi.getFromApi("species").subscribe({
      next: (res) => {
        for (let index = 0; index < res['hydra:member'].length; index++) {
          this.pieChartLabels.push(res['hydra:member'][index].name);
          data.push(res['hydra:member'][index].animalsCount);
        }
        this.pieChartDatasets = [{ data }];
      },
      error: (err) => err
    })
  }

}
