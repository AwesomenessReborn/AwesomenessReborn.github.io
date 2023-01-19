const delayedColorChange = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color; 
            resolve(); 
        }, 2000)
    })
}

const rgb_values = [

]; 

async function rainbow() {
    

    await delayedColorChange('#11151c', 1000); 
    await delayedColorChange('#11151c', 1000); 
    await delayedColorChange('#11151c', 1000); 
    await delayedColorChange('#11151c', 1000); 
    await delayedColorChange('#11151c', 1000); 
    await delayedColorChange('#11151c', 1000); 
    rainbow(); 
}

rainbow(); 
