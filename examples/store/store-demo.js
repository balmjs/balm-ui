var $bus = $event.useBus();

var demo = {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    setMsg() {
      this.message = 'Hello BalmUI';
      $bus.emit('custom-event', 'gg');
    }
  }
};
