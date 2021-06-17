input.onButtonPressed(Button.A, function () {
    music.changeTempoBy(-1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(music.tempo())
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(1)
})
music.setTempo(400)
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Whole))
})
