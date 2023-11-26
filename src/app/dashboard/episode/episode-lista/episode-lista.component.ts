import { Component } from '@angular/core';
import { Episode } from '../episode';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episode-lista',
  templateUrl: './episode-lista.component.html',
  styleUrls: ['./episode-lista.component.css']
})
export class EpisodeListaComponent {

  episode: Episode[] =[];
  displayedColumns: string[] = ['id','name','air_date','episode'];
  constructor(
    private episodeService: EpisodeService,
  ){

  }
  ngOnInit(): void {
    this.episodeService.listarEpisodios()
    .subscribe((data) => {
      this.episode = data
    });
  }




}
