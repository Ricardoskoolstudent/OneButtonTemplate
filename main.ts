namespace SpriteKind {
    export const Obstacle = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Cube)
    if (Cube.ay == 0) {
        Cube.setImage(img`
            ........................
            .5555555555555555555555.
            .5555555555555555555555.
            .55ffffffff55ffffffff55.
            .55f999999f55f999999f55.
            .55f999999f55f999999f55.
            .55f999999f55f999999f55.
            .55f999999f55f999999f55.
            .55f999999f55f999999f55.
            .55f999999f55f999999f55.
            .55ffffffff55ffffffff55.
            .5555555555555555555555.
            .5ffffffffffffffffffff5.
            .5f999999999999999999f5.
            .5f999999999999999999f5.
            .5f999999999999999999f5.
            .5ffffffffffffffffffff5.
            .5555555555555555555555.
            .5555555555555555555555.
            .5555555555555555555555.
            .5555555555555555555555.
            .5555555555555555555555.
            .5555555555555555555555.
            ........................
            `)
        Cube.vy = -160
        Cube.ay = gravity
    }
})
let projectile: Sprite = null
let Floor = 0
let Cube: Sprite = null
let gravity = 0
let list = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
gravity = 500
scene.setBackgroundColor(9)
Cube = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Cube.ay = gravity
Cube.x = 50
let Cloud = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Cloud.setPosition(160, 50)
Cloud.setVelocity(-120, 0)
game.onUpdate(function () {
    if (Cloud.x < 0) {
        Cloud.setPosition(randint(160, 240), randint(20, 60))
    }
})
game.onUpdate(function () {
    if (true) {
        let FloorImages: Image[] = []
        Floor = 0
        Floor = sprites.createProjectileFromSide(FloorImages[randint(0, FloorImages.length)], -50, 0)
    }
})
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectileFromSide(list._pickRandom(), 50, 50)
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -100, 0)
    projectile.bottom = 105
    projectile.setKind(SpriteKind.Obstacle)
})
