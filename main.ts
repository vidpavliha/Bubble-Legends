namespace SpriteKind {
    export const Bubble = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Bubble, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    p1.vy += -100
    pause(500)
    p1.setVelocity(0, 30)
})
scene.onOverlapTile(SpriteKind.Bubble, assets.tile`spike`, function (sprite, location) {
    tiles.placeOnTile(p1, tiles.getTileLocation(1, 6))
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Bubble, assets.tile`finish`, function (sprite, location) {
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.setGameOverEffect(true, effects.starField)
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
})
let p1: Sprite = null
scene.setBackgroundImage(assets.image`background`)
info.startCountdown(60)
p1 = sprites.create(assets.image`bubble legend p1`, SpriteKind.Bubble)
p1.vy = 30
controller.moveSprite(p1, 100, 0)
scene.cameraFollowSprite(p1)
tiles.setCurrentTilemap(tilemap`LvL1`)
tiles.placeOnTile(p1, tiles.getTileLocation(1, 6))
info.setLife(5)
info.setScore(0)
