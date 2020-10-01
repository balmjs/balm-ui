var { reactive, toRefs } = Vue;
var $bus = $event.useBus();

var state = reactive({
  message: ''
});

function setMsg() {
  state.message = 'Hello BalmUI';
  $bus.emit('custom-event', 'gg');
}

function useDemo() {
  return {
    ...toRefs(state),
    setMsg
  };
}
