namespace SpriteKind {
    export const Helicopter = SpriteKind.create()
    export const cloud = SpriteKind.create()
    export const LandingPad = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += -1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.LandingPad, function (sprite, otherSprite) {
    sprite.y += -2
    sprite.setVelocity(0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vx += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vx += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += 1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.setVelocity(0, 0)
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
let copter: Sprite = null
game.splash("Cloud bump", "control pad flying")
scene.setBackgroundColor(9)
copter = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . 2 2 2 . . . . . . 2 2 2 2 . . 
    . 2 . . . . . . . . . . . 2 2 . 
    . 2 . . . . . . . . . . . . 2 . 
    2 . . . . . . . . . . . . 2 2 . 
    2 2 . . . . . . . . . 2 2 2 . . 
    . 2 2 . . . . . 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 . . . . . . . 
    `, SpriteKind.Helicopter)
copter.setStayInScreen(true)
let cloud_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 9 9 . . . . . 
    . . . . 2 2 . . . 2 2 9 . . . . 
    . . . . 9 . 2 . . . . 2 2 . . . 
    . . . . 9 . 2 2 . . . . 2 2 . . 
    . . . . 9 . . 2 . . . . . 2 . . 
    . . . . 9 9 . 2 2 . . . . 2 . . 
    . . . . . 9 9 . . 2 2 . 2 2 . . 
    . . . . . . 9 9 . . 2 . 2 9 . . 
    . . . . . . . . 9 9 9 2 9 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
let cloud2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 9 9 . . . . . 
    . . . . 2 2 . . . 2 2 9 . . . . 
    . . . . 9 . 2 . . . . 2 2 . . . 
    . . . . 9 . 2 2 . . . . 2 2 . . 
    . . . . 9 . . 2 . . . . . 2 . . 
    . . . . 9 9 . 2 2 . . . . 2 . . 
    . . . . . 9 9 . . 2 2 . 2 2 . . 
    . . . . . . 9 9 . . 2 . 2 9 . . 
    . . . . . . . . 9 9 9 2 9 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
let cloud3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 9 9 . . . . . 
    . . . . 2 2 . . . 2 2 9 . . . . 
    . . . . 9 . 2 . . . . 2 2 . . . 
    . . . . 9 . 2 2 . . . . 2 2 . . 
    . . . . 9 . . 2 . . . . . 2 . . 
    . . . . 9 9 . 2 2 . . . . 2 . . 
    . . . . . 9 9 . . 2 2 . 2 2 . . 
    . . . . . . 9 9 . . 2 . 2 9 . . 
    . . . . . . . . 9 9 9 2 9 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
cloud_1.setPosition(20, 30)
cloud2.setPosition(50, 65)
cloud3.setPosition(100, 40)
let landing = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . . . . . 3 3 3 3 3 3 3 3 . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.LandingPad)
landing.y = 110
