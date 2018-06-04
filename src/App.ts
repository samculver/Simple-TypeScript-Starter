import './Styles.scss';
import { IAppProps } from './IModels';

class App {

    heading: string;
    description: string;

    constructor ( private props : IAppProps ){
        this.heading = props.heading;
        this.description = props.description;
        this.init();
    }

    private init() : void {
        // render when the DOM is ready
        document.addEventListener("DOMContentLoaded", () => this.render() );
    }

    private render() : void {
        //build html and render into page
        let pageContentArea = document.getElementById('App')
        .innerHTML = 
            `<div class="app-container">
                <div class="app-content">
                    <h2>${this.heading}</h2>
                    <p>${this.description}</p>
                </div>
            </div>`;
    }
}

const options : IAppProps = {
    heading: 'Hello App Developer!',
    description: 'Edit your App.ts file to change this text.'
}
let myApp = new App(options);