const totalImages = 48;
let currentImage = 20; 
let isMoving = false;
let startX = 0;
let lastX = 0;
let direction = 0;
let clickCount = 0;

const image360 = document.getElementById('image360');
const viewer = document.getElementById('viewer_space1');

function updateImage(delta) {
    currentImage = (currentImage + delta + totalImages - 1) % totalImages + 1; 
    image360.src = `Diavel_resources/diavel_spin/diavelspin_${currentImage}.png`; 
}

function toggleMovement() {
    if (clickCount % 2 === 0) {
        isMoving = true;
        viewer.style.cursor = 'grabbing'; 
        startX = lastX = null;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', stopMovement);
    } else {
        isMoving = false;
        viewer.style.cursor = 'grab';
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', stopMovement);
        }
        clickCount++;
    }

function handleMouseMove(e) {
    if (isMoving) {
        if (startX === null) {
            startX = e.pageX;
        }
    const deltaX = e.pageX - lastX;
        if (Math.abs(deltaX) > 5) { 
            direction = deltaX > 0 ? 1 : -1;
            updateImage(direction);
        }
            lastX = e.pageX; 
        }
    }

function stopMovement() {
    if (isMoving) {
        isMoving = false;
        viewer.style.cursor = 'grab'; 
    }
}

    viewer.addEventListener('click', toggleMovement);