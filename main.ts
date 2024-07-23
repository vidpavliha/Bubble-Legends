namespace SpriteKind {
    export const Bubble = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Bubble, assets.tile`spike up`, function (sprite, location) {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y
    pause(200)
    info.setLife(blockSettings.readNumber("life"))
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Bubble, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
function level (lvl: number) {
    if (lvl == 0) {
        tiles.setCurrentTilemap(tilemap`LvL3`)
    } else if (lvl == 1) {
        tiles.setCurrentTilemap(tilemap`LvL2`)
    } else if (lvl == 2) {
        tiles.setCurrentTilemap(tilemap`LvL4`)
    } else {
        game.gameOver(true)
    }
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy += 100
})
info.onCountdownEnd(function () {
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
})
function init () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`bubble legend p1`, SpriteKind.Bubble))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`bubble legend p2`, SpriteKind.Bubble))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 0)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 0)
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
}
scene.onOverlapTile(SpriteKind.Bubble, assets.tile`finish`, function (sprite, location) {
    info.startCountdown(60)
    animation.runMovementAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    animation.runMovementAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
})
scene.onOverlapTile(SpriteKind.Bubble, assets.tile`heart`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(1)
})
info.onLifeZero(function () {
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy += 100
})
init()
scene.setBackgroundImage(assets.image`background`)
let LvL_state = 0
info.startCountdown(60)
tiles.setCurrentTilemap(tilemap`LvL1`)
info.setLife(5)
info.setScore(0)
blockSettings.writeNumber("vy", 30)
blockSettings.writeString("jumpVy", "-50")
if (info.score() == info.highScore()) {
    blockSettings.clear()
}
forever(function () {
    mp.setPlayerIndicatorsVisible(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = blockSettings.readNumber("vy")
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = blockSettings.readNumber("vy")
    blockSettings.writeNumber("life", info.life())
    blockSettings.writeNumberArray("last pos", [mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y])
    blockSettings.writeNumberArray("last pos p2", [0, 1])
})
