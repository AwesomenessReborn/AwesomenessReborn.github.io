const delayedColorChange = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color; 
            resolve(); 
        }, 2000)
    })
}

async function rainbow() {
    await delayedColorChange('rgb(36, 0, 0)', 1000); 
    await delayedColorChange('rgb(31, 20, 0)', 1000); 
    await delayedColorChange('rgb(35, 35, 0)', 1000); 
    await delayedColorChange('rgb(0, 35, 0)', 1000); 
    await delayedColorChange('rgb(0, 0, 26)', 1000); 
    await delayedColorChange('rgb(31, 0, 31)', 1000); 
    rainbow(); 
}

rainbow(); 
