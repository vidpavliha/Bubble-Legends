namespace SpriteKind {
    export const Bubble = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Bubble, assets.tile`spike up`, function (sprite, location) {
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(1, 6))
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Bubble, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy += -100
    pause(500)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = 30
})
function startNextLevel () {
    if (LvL_state == 1) {
        tiles.setCurrentTilemap(tilemap`LvL2`)
    } else if (LvL_state == 2) {
    	
    } else if (LvL_state == 3) {
    	
    } else if (LvL_state == 4) {
    	
    } else if (LvL_state == 5) {
    	
    } else if (LvL_state == 6) {
    	
    } else {
        game.setGameOverEffect(true, effects.starField)
        game.gameOver(true)
    }
}
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
    LvL_state = 0
    LvL_state += 1
    startNextLevel()
    info.startCountdown(60)
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
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy += -100
    pause(500)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = 30
})
let LvL_state = 0
init()
scene.setBackgroundImage(assets.image`background`)
LvL_state = 0
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
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = blockSettings.readNumber("vy")
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = blockSettings.readNumber("vy")
    pause(500)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = blockSettings.readNumber("jumpVy")
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = blockSettings.readNumber("jumpVy")
})
