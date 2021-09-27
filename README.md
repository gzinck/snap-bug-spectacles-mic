# Mic bug on Spectacles (2021)

This repository is for a bug report with Snap's Spectacles (2021) as of
Monday, Sept 27, 2021. The problem is as follows:

-   After boot, the Spectacles have no issues. Starting a lens that uses the
    microphone works: on every update, it is possible to get the audio frame
    in a float array.
-   If I close the lens and reopen it, the microphone does not work. On every
    update, the audio frame is empty. This is despite closing the microphone
    on lens close.
-   Everything works fine on mobile and in the simulator (as long as the mic
    is enabled, of course).

This repository makes it possible to reproduce this bug in a simple manner.
In `Public/LogMicInput.js`, every update results in a log to the screen of
either:

- "Audio frame has length X"
- "Audio frame is empty"

Desired behaviour is for at least some of the frames to be non-empty.

## Running

1. Open `bug-proof-lens.lsproj` in Lens Studio.
2. Send to your Spectacles (2021) to run.
3. Note that "Audio frame has length X" is flashing on the screen,
    indicating that every update is getting an audio frame.
4. Close the lens with two swipes down.
5. Reopen the lens and note that it always logs "Audio frame is empty."
6. Reboot the Spectacles (2021) and retry to make the mic work again.

## Logs

You will note there is custom logic for logging on the spectacles.
[This is maintained in a separate repository](https://github.com/gzinck/spectacles-logger)
and Snap should probably improve compatibility for their recommended logger
which does not work out-of-the-box on the Spectacles (2021).
