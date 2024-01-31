import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'jhd-svg',
  standalone: true,
  template: `
    <svg
      #svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      [attr.class]="class"></svg>
  `,
})
export class SvgComponent implements AfterViewInit {
  @ViewChild('svg') svg!: ElementRef<SVGElement>;
  @Input()
  set path(value: string) {
    this._path = value;
  }
  @Input() class = '';
  _path = '';
  constructor(
    private el: ElementRef<SVGElement>,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.updateSvgPath(this._path);
  }

  private updateSvgPath(p: string): void {
    // Ensure that this.svg is initialized before attempting to access its nativeElement
    if (this.svg && this.svg.nativeElement) {
      const svgElement = this.svg.nativeElement;

      // Directly set innerHTML with the provided path data
      svgElement.innerHTML = `<path d="${p}"></path>`;
    }
  }
}
