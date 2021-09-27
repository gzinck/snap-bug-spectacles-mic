// -----JS CODE-----
// @input Asset.AudioTrackAsset audioTrack
// @input int sampleRate = 44100

var control = script.audioTrack.control;
if (control.isOfType("Provider.MicrophoneAudioProvider")) {
    control.start();
}

control.sampleååRate = script.sampleRate;
var audioFrame = new Float32Array(control.maxFrameSize);

var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(function (eventData) {
    var audioFrameShape = control.getAudioFrame(audioFrame);    
    if (audioFrameShape.x == 0) {
        global.logToScreen("Audio frame is empty")
        return;
    }
    global.logToScreen("Audio frame has length " + audioFrameShape.x);
});

// Clean up the lens and stop using the microphone
var closeEvent = script.createEvent("TurnOffEvent");
closeEvent.bind(function (eventData) {
    control.stop();
    script.removeEvent(updateEvent);
    script.removeEvent(closeEvent);
});