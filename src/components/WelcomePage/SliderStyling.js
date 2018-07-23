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
          backgroundColor: '#0045D8'

        }, {
          backgroundColor: '#ff0000'

        }],
        tooltipStyle: [ {
            backgroundColor: '#0045D8',
            borderColor: '#0045D8'
          },
          {
            backgroundColor: '#ff0000',
            borderColor: '#ff0000'
        },],
        processStyle: {
          backgroundImage: '-webkit-linear-gradient(right, #ff0000, #0045D8)'
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
          backgroundColor: '#00cc66'

        }, {
          backgroundColor: '#ff0000'

        }],
        tooltipStyle: [ 
          {
            backgroundColor: '#00cc66',
            borderColor: '#00cc66'
          },
          {
            backgroundColor: '#ff0000',
            borderColor: '#ff0000'
          },
        ],
        processStyle: {
          backgroundImage: '-webkit-linear-gradient(left, #00cc66,  #fef65b, #ff6600, #ff0000)'
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
          backgroundColor: '#58C5FF'

        }, {
          backgroundColor: '#0045D8'

        }],
        tooltipStyle: [ {
            backgroundColor: '#58C5FF',
            borderColor: '#58C5FF'
          },
          {
            backgroundColor: '#0045D8',
            borderColor: '#0045D8'
        },],
        processStyle: {
          backgroundImage: '-webkit-linear-gradient(left, #58C5FF, #0045D8)'
        }
  
      }
}