const delayedColorChange = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color; 
            resolve(); 
        }, 1000)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000); 
    await delayedColorChange('orange', 1000); 
    await delayedColorChange('yellow', 1000); 
    await delayedColorChange('green', 1000); 
    await delayedColorChange('blue', 1000); 
    await delayedColorChange('violet', 1000); 
    rainbow(); 
}

rainbow(); 
