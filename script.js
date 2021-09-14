navigator.getUserMedia(
  { video: true, audio: false },
  function (stream) {
    const video = document.getElementById("video");
    video.srcObject = stream;
    video.play();
  },
  function (err) {
    alert("there was an error" + err);
  }
);
