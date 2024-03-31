const userVideo = document.getElementById('user-video')
const startButton = document.getElementById('start-btn')

const state = { media: null }
// This line initializes an object named state with a property media, which is initially set to null. This object will be used to store the media stream obtained from the user's webcam and microphone.


startButton.addEventListener('click', () => {
// This line adds an event listener to the startButton element, listening for a 'click' event. When the button is clicked, the function inside the arrow function will be executed.


    const mediaRecorder = new MediaRecorder(state.media, {
// This line creates a new MediaRecorder object, which allows recording media streams (audio and video). It takes two parameters: the media stream to record (state.media) and an options object specifying settings like audio and video bitrates and frame rate.        

        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        framerate: 25
    })

    mediaRecorder.ondataavailable = ev => {
        console.log('Binary Stream Available', ev.data)
// This line sets up an event handler for the ondataavailable event of the mediaRecorder. When data becomes available, this function will be called. In this case, it logs a message to the console with the available binary stream data.
    }

    mediaRecorder.start(25);
    // This line starts the media recording process with the specified frame rate (in this case, 25 frames per second).    

})

window.addEventListener('load', async e => {
    // This line adds an event listener for the 'load' event on the window object. When the page finishes loading, the function inside the arrow function will be executed.
    const media = await navigator

    // This line uses the getUserMedia method of the navigator.mediaDevices object to request access to the user's webcam and microphone. It returns a promise that resolves to a MediaStream object containing the user's audio and video streams.    
        .mediaDevices
        .getUserMedia({ audio: true, video: true })
    state.media = media
    // This line assigns the obtained media stream to the media property of the state object for later use.
    userVideo.srcObject = media
    // This line sets the srcObject property of the userVideo element to the obtained media stream. This allows the user's video to be displayed in the <video> element.
})