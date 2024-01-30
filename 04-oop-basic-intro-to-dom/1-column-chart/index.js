export default class ColumnChart {
    chartHeight = 50;

    constructor(object = {}) {
        const { data = [], label = '', value = 0, link = '', formatHeading = value => value } = object;

        this.data = data;
        this.label = label;
        this.value = value;
        this.link = link;
        this.formatHeading = formatHeading;

        this.element = this.createElement(this.createTemplate());
    }

    createElement = (template) => {
        const element = document.createElement('div');

        element.innerHTML = template;

        return element.firstElementChild;
    }

    createLink = () => {
        if (this.link) {
            return `<a href="${this.link}" class="column-chart__link">View all</a>`;
        }

        return '';
    }

    getColumnChartProperties = () => {
        const maxValue = Math.max(...this.data);
        const scale = this.chartHeight / maxValue;

        return this.data.map(property => {
            return {
                value: Math.floor(property * scale),
                percent: (property / maxValue * 100).toFixed(0) + '%'
            }
        });
    }

    createChartBody = () => {
        return this.getColumnChartProperties().map(({value, percent}) => {
            return `<div style="--value: ${value}" data-tooltip="${percent}"></div>`;
        }).join('');
    }

    showLoadingData = () => {
        return this.data.length ? 'column-chart' : 'column-chart column-chart_loading';
    }

    createTemplate = () => {
        return `
            <div class="${this.showLoadingData()}" style="--chart-height: ${this.chartHeight}">
                <div class="column-chart__title">
                    ${this.label}
                    ${this.createLink()}
                </div>
                <div class="column-chart__container">
                    <div data-element="header" class="column-chart__header">
                        ${this.formatHeading(this.value)}
                    </div>
                    <div data-element="body" class="column-chart__chart">
                        ${this.createChartBody()}
                    </div>
                </div>
            </div>`;
    }

    update = (data) => {
        this.data = data;
        this.element.querySelector('.column-chart__chart').innerHTML = this.createChartBody();
    }

    remove = () => {
        this.element.remove();
    }

    destroy = () => {
        this.remove();
    }
}
