export default {

  temperature: {
        width: '80%',
        height: 8,
        dotSize: 25,
        min: -50,
        max: 50,
        disabled: false,
        show: true,
        tooltip: 'always',
        tooltipDir: ['bottom', 'top'],
        piecewise: false,
        style: {
          marginBottom: '30px',
          // marginTop: '30px'

        },
        bgStyle: {
          backgroundColor: '#fff',
        },
        sliderStyle: [{
          backgroundColor: '#3498db'

        }, {
          backgroundColor: '#f05b72'

        }],
        tooltipStyle: [ {
            backgroundColor: '#3498db',
            borderColor: '#3498db'
          },
          {
            backgroundColor: '#f05b72',
            borderColor: '#f05b72'
        },],
        processStyle: {
          backgroundImage: '-webkit-linear-gradient(right, #f05b72, #3498db)'
        }
      },

      wind: {
        width: '50%',
        height: 8,
        direction: 'horizontal',
        dotSize: 20,
        eventType: 'auto',
        min: 0,
        max: 100,
        interval: 1,
        tooltip: 'always',
        tooltipDir: ['bottom', 'bottom'],
        disabled: false,
        show: true,
        realTime: false,
        tooltip: 'always',
        clickable: true,
        style: {
          marginBottom: '30px',
          // marginTop: '30px'

        },
        bgStyle: {
          backgroundColor: '#fff',
        },
        sliderStyle: [{
          backgroundColor: '#999'

        }, {
          backgroundColor: '#999'

        }],
        tooltipStyle: [ {
            backgroundColor: '#333',
            borderColor: '#333'
          },
          {
            backgroundColor: '#666',
            borderColor: '#666'
        },],
        processStyle: {
          backgroundImage: '-webkit-linear-gradient(right, #333, #666)'
        }
      },

      humidity: {
          width: '80%',
          height: 8,
        direction: 'horizontal',
        dotSize: 20,
        eventType: 'auto',
        min: 0,
        max: 100,
        tooltipDir: ['bottom', 'bottom'],
        interval: 1,
        disabled: false,
        show: true,
        realTime: false,
        tooltip: 'always',
        clickable: true,
        style: {
          marginBottom: '30px',
          // marginTop: '30px'

        },
        bgStyle: {
          backgroundColor: '#fff',
        },
        sliderStyle: [{
          backgroundColor: '#999'

        }, {
          backgroundColor: '#999'

        }],
        tooltipStyle: [ {
            backgroundColor: '#333',
            borderColor: '#333'
          },
          {
            backgroundColor: '#666',
            borderColor: '#666'
        },],
        processStyle: {
          backgroundImage: '-webkit-linear-gradient(right, #333, #666)'
        }
  
      }
}