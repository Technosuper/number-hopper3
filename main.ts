namespace SpriteKind {
    export const Flag = SpriteKind.create()
    export const Player2 = SpriteKind.create()
    export const Bat = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.clouds)
    game.reset()
})
function Snake2 () {
    for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
        Snake = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(Snake, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        if (Math.percentChance(50)) {
            Snake.vx = 50
        } else {
            Snake.vx = -50
        }
        Snake.setBounceOnWall(true)
    }
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Birdy_2_robin.vy == 0) {
        Birdy_2_robin.vy = -150
    }
})
function bouncebad () {
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        Eviler_musher1 = sprites.create(assets.image`musher`, SpriteKind.Enemy)
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar.attachToSprite(Eviler_musher1)
        tiles.placeOnTile(Eviler_musher1, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        if (Math.percentChance(50)) {
            Eviler_musher1.vx = 50
        } else {
            Eviler_musher1.vx = -50
        }
        Eviler_musher1.setBounceOnWall(true)
    }
}
scene.onOverlapTile(SpriteKind.Player2, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.clouds)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.setScore(1)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Birdy_1_duck.vy == 0) {
        Birdy_1_duck.vy = -170
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.x > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom))) {
        let pixelsToMeters = 0
        sprites.destroy(otherSprite, effects.ashes, 250)
        otherSprite.vy = -50
        sprite.vy = -2 * pixelsToMeters
        info.setScore(6)
    } else {
        info.changeLifeBy(-1)
    }
})
let statusbar: StatusBarSprite = null
let Snake: Sprite = null
let Birdy_2_robin: Sprite = null
let Birdy_1_duck: Sprite = null
let Eviler_musher1: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level21`)
Snake2()
bouncebad()
tiles.placeOnTile(Eviler_musher1, tiles.getTileLocation(25, 5))
Birdy_1_duck = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
Birdy_2_robin = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))
Birdy_1_duck = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(Birdy_1_duck, assets.tile`myTile10`)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life, 3)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Birdy_1_duck)
Birdy_2_robin = sprites.create(img`
    . . . . . . . . . . b 2 b . . . 
    . . . . . . . . . b 2 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 2 2 2 2 2 b . . . 
    . . . . b b 2 d 1 f 2 d 4 c . . 
    . . . . b 2 2 1 f f d d 4 4 4 b 
    . . . . b 2 2 d f b 4 4 4 4 b . 
    . . . b d 2 2 2 2 4 4 4 4 b . . 
    . b b d d d 2 2 2 2 2 2 2 b . . 
    b d d d b b b 2 2 2 2 2 2 2 b . 
    c d d b 2 2 d c 2 2 2 2 2 2 b . 
    c b b d 2 d c d 2 2 2 2 2 2 b . 
    c b 2 2 b c d d 2 2 2 2 2 2 b . 
    b b c c c d d d 2 2 2 2 2 d b . 
    . . . . c c d d d 2 2 2 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player2)
tiles.placeOnRandomTile(Birdy_2_robin, assets.tile`myTile10`)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life, 3)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Birdy_2_robin)
Birdy_1_duck.ay = 200
Birdy_2_robin.ay = 200
controller.moveSprite(Birdy_1_duck, 100, 0)
controller.player2.moveSprite(Birdy_2_robin, 100, 0)
mp.setPlayerIndicatorsVisible(true)
