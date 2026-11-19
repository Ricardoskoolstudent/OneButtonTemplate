controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.setVelocity(0, -100)
    }
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`myImage`)
tiles.setCurrentTilemap(tilemap`level1`)
game.showLongText("Make a One Button Game", DialogLayout.Full)
game.showLongText("You are only allowed the A Button", DialogLayout.Full)
game.showLongText("Make it fun, make it creative!", DialogLayout.Full)
scroller.scrollBackgroundWithSpeed(-80, 0)
let Ready = true
mySprite = sprites.create(img`
    ........................
    ........................
    ..ffffffffffffffffffff..
    ..f555555555555555555f..
    ..f555555555555555555f..
    ..f555555555555555555f..
    ..f555fffff55fffff555f..
    ..f555f999f55f999f555f..
    ..f555f999f55f999f555f..
    ..f555f999f55f999f555f..
    ..f555fffff55fffff555f..
    ..f555555555555555555f..
    ..f55ffffffffffffff55f..
    ..f55f999999999999f55f..
    ..f55f999999999999f55f..
    ..f55ffffffffffffff55f..
    ..f555555555555555555f..
    ..f555555555555555555f..
    ..f555555555555555555f..
    ..f555555555555555555f..
    ..f555555555555555555f..
    ..ffffffffffffffffffff..
    ........................
    ........................
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 13))
scene.cameraFollowSprite(mySprite)
mySprite.ay = 200
