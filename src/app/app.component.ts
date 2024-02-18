import { Component } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode } from "tsparticles-engine";
import { InteractivityDetect, RecursivePartial, IOptions,Main  } from 'tsparticles-engine';
import { loadSlim } from "tsparticles-slim"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cupweb';
  id = "tsparticles";

  particlesOptions:RecursivePartial<IOptions> = {
    background: {
        color: {
            value: "red",
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: ClickMode.push,
            },
            onHover: {
                enable: true,
                mode: HoverMode.repulse,
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#c3c2c229",
        },
        links: {
            color: "#c3c2c229",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
                default: OutMode.bounce,
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};

  async  particlesInit(main: Main): Promise<void> {
    // 此处可以访问完整的粒子库实例 (main)
    console.log(main);
    await loadSlim(main);
    
    // 你可以添加自定义形状或者插件
    // 例如：main.addShape(...) 或者 main.addPreset(...)
  }

  // 此方法将在粒子加载完成时调用
  particlesLoaded(container: any): void {
    // 此处可以访问粒子容器实例 (container)
    console.log(container);
  }


  ngOnInit(){

  }
}
